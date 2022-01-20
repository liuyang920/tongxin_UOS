
<template>
  <div id="footer">
    <footer>
      <a-row>
        <a-col :span="8">
          <p style="font-size: 16px">更多产品</p>
          <p>低代码开发 - lowcode</p>
          <p>工作流引擎 - lowcode</p>
          <p>表单引擎 - lowcode</p>
          <p>移动端APP - lowcode</p>
        </a-col>
        <a-col :span="8">
          <p style="font-size: 16px">关于我们</p>
          <p>北京国炬官网 - guojusoft</p>
          <p>积木报表官网 - JimuReport</p>
          <p>JEECG官方论坛 - BBS</p>
          <p>官方公众号 - JEECG</p>
        </a-col>
        <a-col :span="8">
          <p style="font-size: 16px">联系我们</p>
          <p>商务QQ - 2019066212、3102411850</p>
          <p>商务热线(5*8小时) - 010-64808099</p>
          <p>备案号 - 京ICP备12013567号-3</p>
          <p>QQ交流群 - 816531124</p>
        </a-col>
      </a-row>
      <a-divider/>
      <a-row>
        <a-col :span="24">
          Copyright &copy; 2021 北京国炬 All Rights Reserved
        </a-col>
      </a-row>
    </footer>
  </div>
</template>
 
<script>
export default {
  name: "AppFooter"
}
</script>
 
<style scoped>
#footer {
  height: 300px;
  background-color: #f0f2f5;
  padding-top: 1.5rem;
  padding-bottom: .5rem;
  box-shadow: 0 1px 10px rgba(130, 130, 134, 0.1);
}
</style>