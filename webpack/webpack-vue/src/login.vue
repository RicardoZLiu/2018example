<template>
    <div>
        <mt-button type="default">default</mt-button>
        <mybtn type="primary">ahahaha</mybtn>
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>
        <h1>这是一个vuelogin组件------{{ msg }}</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/goodlist">goodlist</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
//在ES6中使用  import 模块名称 from '模块标识符'   来导入模块   import表示路径
//使用export default  和  export向外暴露成员

//在node中 使用  var '名称' = require('模块标识符')   来导入模块
//使用 module.exports  和  exports 向外暴露成员

import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                msg: "123",
                toastInstanse: null
            };
        },
        created(){
            this.getList();
        },
        methods: {
        //在获取数据之前，，提示用户正在加载数据
            getList(){
                this.show();
                setTimeout(()=>{
                    this.toastInstanse.close();
                },3000)
            },

            show(){
                this.toastInstanse=Toast({
                    message: "提示信息",
                    duration: 3000,
                    position: 'top',
                    iconClass: 'glyphicon glyphicon-heart',
                    className: 'mytoast'
                });
            }
        }
    }
</script>

<style></style>