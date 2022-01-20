<template>
  <div id="header">
    <header>
      <a-row>
        <a-col :span="8">
          <img alt="Vue logo" src="./../assets/tongxin.png" style="height: 30px">
          统信软件技术有限公司
        </a-col>
        <a-col :span="16">
          <a-space size="large">
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link to="/" style="color:white">
              首页
            </router-link>
            <router-link to="/" style="color:white">
              外设查询
            </router-link>
            <router-link to="/" style="color:white">
              问题处理
            </router-link>
            <router-link to="/" style="color:white">
              使用教程
            </router-link>
            <!-- <a-button type="primary">
              镜像下载
            </a-button> -->
            <router-link to="/" style="color:white">
              镜像下载
            </router-link>
            <router-link to="/" style="color:white">
              留言板
            </router-link>
            <router-link to="/about" style="color:white">
              联系我们
            </router-link>
          </a-space>
        </a-col>
      </a-row>
    </header>
  </div>
</template>
 
<script>
export default {
  name: "AppHeader"
}
</script>
 
<style lang="scss" scoped>
#header {
  height: 60px;
  color: #fff;
  background-color: #1890FF;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: 0 1px 10px rgba(130, 130, 134, 0.1);
}
</style>