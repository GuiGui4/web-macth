<template>
  <div class="footCopyright">
    <div class="copyright">河源职业技术学院 信息中心 ©信息服务协会</div>
    <div class="tips">本站仅供 <span>科技创新网页设计大赛</span> 作品展示,交流学习</div>
  </div>
</template>

<script>
  export default {
    name: 'footCopyright'
  }
</script>

<style lang='scss' scoped>
  .footCopyright{
    margin: 15px 0;
    padding: 15px 0;
    font-size: 1.2rem;
    border-top: 1px solid #e5e5e5;
    .copyright{
      margin-bottom: 5px;
    }
    .tips{
      font-size: 1rem;
    }
    span{
      color: red;
    }
  }
</style>