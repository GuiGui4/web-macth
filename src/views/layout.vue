<template>
  <div class="layout">
    <headerBar/>
    <router-view></router-view>
    <footCopyright/>
  </div>
</template>

<script>
  import headerBar from '@/components/headerBar'
  import footCopyright from '@/components/footCopyright'
  export default {
    name: 'layout',
    components: { headerBar, footCopyright }
  }
</script>

<style lang='scss'>
.el-carousel__mask{
  // width: 0 !important;
}
.el-carousel{
  // display: flex;
}
.el-carousel__item{
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.el-carousel__container{
  height: 90% !important;
}
.el-carousel--horizontal{
  overflow: hidden !important;
}
.has-gutter{
  font-size: 18px !important;
  color: skyblue !important;
}
.cell{
  text-align: center !important;
}
.footCopyright{
  width: 100%;
}
</style>