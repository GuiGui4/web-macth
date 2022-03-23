<template>
  <div class="headerBar">
    <div class="association">信息服务协会</div>
    <div class="title">第一届 <span>科技创新网页设计大赛</span></div>
    <div class="webName">作品展示测试站点</div>
  </div>
</template>

<script>
  export default {
    name: 'headerBar'
  }
</script>

<style lang='scss' scoped>
  .headerBar{
    width: 100%;
    padding: 10px 0;
    font-weight: 1000;
    margin-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
    .association{
      font-size: 2.3rem;
    }
    .title{
      font-size: 1.3rem;
      span{
        color: red;
      }
    }
    .webName{
      font-size: 1.1rem;
    }
  }
</style>