<template>
    <div id="head">
        <el-menu
            :default-active="$route.path"
            router
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-submenu 
            index="2" 
            popper-class="game">
                <template slot="title" width="100">游戏</template>
                <el-menu-item index="/home/game/evolution">进化世界</el-menu-item>
                <el-menu-item index="/home/game/engorge">贪吃</el-menu-item>
            </el-submenu>
            <el-submenu 
            index="3" 
            popper-class="recreation">
                <template slot="title">娱乐</template>
                <el-menu-item index="/home/recreation/video">视频播放</el-menu-item>
                <el-menu-item index="/home/recreation/music">音乐播放</el-menu-item>
                <el-menu-item index="/home/recreation/order">点餐</el-menu-item>
            </el-submenu>
            <el-submenu 
            index="4" 
            popper-class="creativity">
                <template slot="title">创意</template>
                <el-menu-item index="/home/creativity/card">卡片</el-menu-item>
            </el-submenu>
            <el-menu-item index="/home/log">日志</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Header extends Vue {
    
}
</script>

<style lang="scss" scoped>

</style>