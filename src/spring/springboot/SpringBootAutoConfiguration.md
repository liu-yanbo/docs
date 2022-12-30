---
title: SpringBoot自动配置
author: 橘涂拾捌
date: 2022-12-02
category: 
 - SpringBoot
copyright: false
---



## 前言

> SpringBoot 的一大精髓就是自动配置，为开发省去了大量的配置时间，可以更快的融入业务逻辑的开发。



## 1. `@SpringBootApplication`

跟着 SpringBoot 的启动类的注解 `@SpringBootApplication` 进行源码跟踪，寻找自动配置的原理。

```java 
import org.springframework.boot.SpringBootDemoApplication;
/**
 * 从导入的包名，可以看出，SpringBootApplication是关于自动配置的
 * 当然，其实它就是自动配置的入口
 */
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class SpringBootDemoApplication {
    public static void main(String[] args) {
      SpringApplication.run(SpringdemoApplication.class, args);
    }
}
```

 从导入的包路径，可以看出，SpringBootApplication是关于自动配置的，其实它就是自动配置的入口。



那我们沿着这个入口，一步一步来探究Sping Boot 是如何实现自动配置的。



跟随脚步，我们点开`@SpringBootApplication`注解

```java 
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
// SpringBoot配置类
@SpringBootConfiguration
// 开启自动配置
@EnableAutoConfiguration
// 开启注解扫描
@ComponentScan(
    excludeFilters = {@Filter(
    type = FilterType.CUSTOM,
    classes = {TypeExcludeFilter.class}
), @Filter(
    type = FilterType.CUSTOM,
    classes = {AutoConfigurationExcludeFilter.class}
)}
)
public @interface SpringBootApplication {
```

- `@EnableAutoConfiguration`  开启自动配置

- `@ComponentScan`  开启注解扫描



从`SpringBootApplication`我们可以看出这是一个复合注解，它包含了配置类、自动配置、组件扫描的一系列功能。



从名字看`@SpringBootConfiguration`和`@EnableAutoConfiguration`是和配置相关，其中`@EnableAutoConfiguration`更是开启自动配置的，显而易见`@EnableAutoConfiguration`是在这里的核心，那我们分别进入两个注解里一探究竟



##  2. `@SpringBootConfiguration`

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Configuration
@Indexed
public @interface SpringBootConfiguration {
    @AliasFor(
        annotation = Configuration.class
    )
    boolean proxyBeanMethods() default true;
}
```

进入注解里，里面很简单，可以看到`@Configutation`，说明这是个配置类。

## 3. `@EnableAutoConfiguration`

我们随着脚步进入`@EnableAutoConfiguration`

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
@Import({AutoConfigurationImportSelector.class})
public @interface EnableAutoConfiguration {
    String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";

    Class<?>[] exclude() default {};

    String[] excludeName() default {};
}
```

- `@AutoConfigurationPackage`
- `@Import`

这个里面比较重要的是 `@Import` ，导入了一个翻译名为自动配置的选择器的类。这个类其实就是==自动配置的加载选择器==。



进入`AutoConfigurationImportSelector`，顺着代码往下看有个`selectImports`的方法

```java
public String[] selectImports(AnnotationMetadata annotationMetadata) {
        if (!this.isEnabled(annotationMetadata)) {
            return NO_IMPORTS;
        } else {
            // AutoConfigurationEntry 自动配置类入口类
            AutoConfigurationEntry autoConfigurationEntry = this.getAutoConfigurationEntry(annotationMetadata);
            return StringUtils.toStringArray(autoConfigurationEntry.getConfigurations());
        }
    }
```

方法内有个方法`getAutoConfigurationEntry`的方法，翻译过来的意思就是==获取自动配置类入口==，进入方法内部，顺着代码往下看

```java
protected AutoConfigurationEntry getAutoConfigurationEntry(AnnotationMetadata annotationMetadata) {
        if (!this.isEnabled(annotationMetadata)) {
            return EMPTY_ENTRY;
        } else {
            AnnotationAttributes attributes = this.getAttributes(annotationMetadata);
            // getCandidateConfigurations 获取符合条件的配置类
            List<String> configurations = this.getCandidateConfigurations(annotationMetadata, attributes);
            configurations = this.removeDuplicates(configurations);
            Set<String> exclusions = this.getExclusions(annotationMetadata, attributes);
            this.checkExcludedClasses(configurations, exclusions);
            configurations.removeAll(exclusions);
            configurations = this.getConfigurationClassFilter().filter(configurations);
            this.fireAutoConfigurationImportEvents(configurations, exclusions);
            return new AutoConfigurationEntry(configurations, exclusions);
        }
    }
```

有个方法映入眼前`getCandidateConfigurations`，翻译过来就是==获取符合条件的配置类==，其实到这里已经大概知道了，这个方法就是获取符合条件的配置类了，那么我们随着方法进去看看

```Java
protected List<String> getCandidateConfigurations(AnnotationMetadata metadata, AnnotationAttributes attributes) {
        List<String> configurations = SpringFactoriesLoader.loadFactoryNames(this.getSpringFactoriesLoaderFactoryClass(), this.getBeanClassLoader());
        Assert.notEmpty(configurations, "No auto configuration classes found in META-INF/spring.factories. If you are using a custom packaging, make sure that file is correct.");
        return configurations;
    }
```

方法内只有一个方法，方法返回配置类集合，方法集合类型是`String`，我们先不管这个方法是怎么获取到这些配置类，往下看，有个断言，断言是对集合为空校验的，假如集合为空，抛出 `No auto configuration classes found in META-INF/spring.factories. If you are using a custom packaging, make sure that file is correct.`翻译过的意思就是==在META-INF下的spring.factories没有找到自动配置的类==



那么我们回到上一步，进入Debug模式看一下，导入的是哪些配置，由于这个项目只配置了web的starter，所以配置都是和web相关的


从Debug的里，我们看到了成功加载的自动配置，但是只有配置类，没有配置的值，随便进入一个`AutoConfiguration`看看。

这里选择了`ServletWebServerFactoryAutoConfiguration`

```java
@AutoConfiguration
@AutoConfigureOrder(Integer.MIN_VALUE)
/**
* ConditionalOnClass 判断当前项目又没这个类
*/
@ConditionalOnClass({ServletRequest.class})
/**
* Spring底层@Conditional注解（Spring注解版），根据不同的条件，如果
* 满足指定的条件，整个配置类里面的配置就会生效； 判断当前应用是否是web应用，如果是，当前配置类生效
*/
@ConditionalOnWebApplication(
    type = Type.SERVLET
)
@EnableConfigurationProperties({ServerProperties.class})
@Import({BeanPostProcessorsRegistrar.class, ServletWebServerFactoryConfiguration.EmbeddedTomcat.class, ServletWebServerFactoryConfiguration.EmbeddedJetty.class, ServletWebServerFactoryConfiguration.EmbeddedUndertow.class})
public class ServletWebServerFactoryAutoConfiguration {
```

上边所有包含`Conditional`的都是来限制自动配置生效的条件，而`@EnableConfiguration`则是开启配置属性值的核心。



 `@EnableConfigurationProperties(ServerProperties.class)`. 他的意思是启动指定类的 `ConfigurationProperties` 功能；将配置文件中对应的值和 `ServerProperties` 绑定起来；并把 `ServerProperties` 加入到 IOC 容器中。



进入`ServletRequest`看看

```java
@ConfigurationProperties(
    prefix = "server",
    ignoreUnknownFields = true
)
public class ServerProperties {
    /**
	 * Server HTTP port.
	 */
    private Integer port;
```

显而易见了，这里使用 ConfigurationProperties 绑定属性映射文件中的 server 开头的属性。结合默认配置

**路径**

> `spring-boot-autoconfigure-2.1.1.RELEASE.jar`

> `/META-INF/spring-configuration-metadata.json`

```json
{
    "name": "server.port",
    "type": "java.lang.Integer",
    "description": "Server HTTP port.",
    "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
    "defaultValue": 8080
}
```

达到了自动配置的目的。

## 4. 自动配置总结

1. **SpringBoot 启动的时候加载主配置类，开启了自动配置功能 @EnableAutoConfiguration 。**

2. **@EnableAutoConfiguration 给容器导入 META-INF/spring.factories 里定义的自动配置类。**

3. **筛选有效的自动配置类。**

4. **每一个自动配置类结合对应的 xxxProperties.java 读取配置文件进行自动配置功能 。**


## 附录

| @Conditional 扩展注解           | 作用（判断是否满足当前指定条件）                     |
| ------------------------------- | ---------------------------------------------------- |
| @ConditionalOnJava              | 系统的 java 版本是否符合要求                         |
| @ConditionalOnBean              | 容器中存在指定 Bean；                                |
| @ConditionalOnMissingBean       | 容器中不存在指定 Bean；                              |
| @ConditionalOnExpression        | 满足 SpEL 表达式指定                                 |
| @ConditionalOnClass             | 系统中有指定的类                                     |
| @ConditionalOnMissingClass      | 系统中没有指定的类                                   |
| @ConditionalOnSingleCandidate   | 容器中只有一个指定的 Bean，或者这个 Bean 是首选 Bean |
| @ConditionalOnProperty          | 系统中指定的属性是否有指定的值                       |
| @ConditionalOnResource          | 类路径下是否存在指定资源文件                         |
| @ConditionalOnWebApplication    | 当前是 web 环境                                      |
| @ConditionalOnNotWebApplication | 当前不是 web 环境                                    |
| @ConditionalOnJndi              | JNDI 存在指定项                                      |



