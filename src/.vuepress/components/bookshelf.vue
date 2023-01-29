<template>
    <div class="runoob-home-main">
        <div class="container" style="max-width: 1600px">
            <div class="row">
                <!-- 侧边栏开始 -->
                <!-- <div class="col-md-1 sidebar">
                    <div class="content-sidebar" v-for="menu in menus">
                        <dl id="goto">
                            <dt style="top: 15px;"><span class="show-list"></span></dt>
                            <dd class="current"><a :href="menu.name" class="auto-scroll" data-offset="98"
                                    data-speed="500">{{ menu.name }}</a></dd>
                        </dl>
                    </div>
                </div> -->
                <!-- 侧边栏结束 -->
                <div class="col-md-11">
                    <div class="row runoob-custom runoob-item-index" data-text="热门工具" id="runoob-goto-hot-item">
                        <div class="col-md-12">
                            <strong class="runoob-item-name">
                                <span class="badge badge-secondary " id="bookmarks">自定义网址</span>
                            </strong>
                        </div>
                        <div class="col-md-12">
                            <ul class="runoob-custom-item list-inline" id="runoob-customer-user"
                                style="padding: 0;display:none">
                                <li><a data-toggle="modal" data-target="#bookmarkModal" href="javascript:void(0);"
                                        class="runoob-custom-link"><i class="fa fa-plus-square" aria-hidden="false"></i>
                                        添加网址</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- map for循环 -->
                <div class="col-md-11" v-for="(bks, key) in books">
                    <div class="row runoob-item runoob-item-index" data-text="{{key}}" id="{{key}}">
                        <!--分类的标题-->
                        <div class="col-md-12">
                            <div class="anchor-link"></div>
                            <!-- 分类名称 -->
                            <strong class="runoob-item-name"><i class="fa fa-list"></i> {{ key }}</strong>
                        </div>
                        <!--分类的内容-->
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-4 col-6 runoob-padding" v-for="bk in bks">
                                    <a :href="bk.link" class="runoob-card" data-toggle="tooltip" data-placement="bottom"
                                        target="_blank" :title="bk.title">
                                        <div class="runoob-card-tit">
                                            <img width="128" height="128" :src="bk.icon"
                                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt="" decoding="async" loading="lazy" />
                                            {{ bk.name }}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 模态框 -->
                <div class="modal fade" id="bookmarkModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <!-- 模态框头部 -->
                            <div class="modal-header">
                                <h4 class="modal-title">添加自定义网址</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- 模态框主体 -->
                            <div class="modal-body">
                                <form id="bookmark-form" onSubmit="search();return false;">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">网站名称：</span>
                                        </div>
                                        <input type="text" class="form-control" id="sitename" placeholder="网站名称"
                                            aria-label="sitename">
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">网站 URL：</span>
                                        </div>
                                        <input type="text" class="form-control" id="siteurl" placeholder="网站 URL"
                                            aria-label="siteurl" aria-describedby="basic-addon1">
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">描述信息</span>
                                        </div>
                                        <textarea class="form-control" id="sitedescription"
                                            aria-label="With textarea"></textarea>
                                    </div>
                                    <button type="button" id="savaURL" class="btn btn-primary">提交</button> <button
                                        type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                                    <br>
                                    <hr>
                                    <div id="errMsg"> </div>
                                </form>
                            </div>
                            <!-- 模态框底部 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
import { bookList, menuList } from '../api/books_manage'

export default {
    data() {
        return {
            books: [],
            menus: [],
            whereis: '',
        }
    },
    // 钩子函数，项目启动加载数据
    created() {
        this.getBooks(),
            this.getMenus()
    },
    // 获取请求数据接口
    methods: {
        getBooks() {
            this.loading
            bookList().then((res) => {
                this.loading = false
                if (res.code != 1) {
                    this.$message({
                        type: 'info',
                        message: res.msg,
                    })
                } else {
                    this.books = res.data
                }
            }).catch((err) => {
                this.loading = false
                this.$message.error('列表加载失败，请稍后再试！')
            })
        },

        // 菜单导航的位置
        getMenus() {
            this.loading
            menuList().then((res) => {
                this.loading = false
                if (res.code != 1) {
                    this.$message({
                        type: 'info',
                        message: res.msg,
                    })
                } else {
                    this.menus = res.data
                }
            }).catch((err) => {
                this.loading = false
                this.$message.error('菜单加载失败，请稍后再试！')
            })
        },
        // 展示添加弹框
        openTable(){
            $("#bookmarks").click(function () {
            $("#runoob-customer-user").show();
            $("#runoob-customer-user").siblings().hide();
            $(this).addClass("badge-warning").removeClass("badge-secondary");
            $(this).siblings().addClass("badge-secondary").removeClass("badge-warning");
        });
        }
    },
}

</script>
