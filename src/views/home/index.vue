<template>
  <div class="home">
    <!-- 图片轮播 -->
    <div class="imgCard">
      <template>
        <el-carousel :interval="4000" type="card" :style="{height: imgCardHeight *0.4 + 'px'}" :autoplay='false'>
          <el-carousel-item v-for="item,index in imgList" :key="index">
            <!-- <h3 class="medium">{{ item.title }}</h3> -->
            <img :src="item.img" alt="" @click="toWork(item.title)">
          </el-carousel-item>
        </el-carousel>
      </template>
      <div class="tips">点击中间的预览图可查看作品</div>
    </div>
    <!-- 作品列表 -->
    <div class="worksTable" :style="{width: imgCardHeight>800 ? 600+'px' : imgCardHeight *0.9 + 'px'}">
       <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            @row-click='data => toWork(data)'>
            <el-table-column
              prop="prize"
              label="奖项"
              width="80"
              >
            </el-table-column>
            <el-table-column
              prop="name"
              label="作者"
              width="100">
            </el-table-column>
            <el-table-column
              prop="address"
              label="作品">
            </el-table-column>
          </el-table>
        </template>
      <div class="tips">点击列表项可查看作品</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        imgList: {
          1:{
            title: '雪糕',
            img: require('@/assets/image/01.jpg')
          },
          2:{
            title: '生气',
            img: require('@/assets/image/02.jpg')
          },
          3:{
            title: '得意',
            img: require('@/assets/image/03.jpg')
          },
          4:{
            title: '疑惑',
            img: require('@/assets/image/04.jpg')
          },
          5:{
            title: '华子',
            img: require('@/assets/image/05.jpg')
          },
          6:{
            title: '躺平',
            img: require('@/assets/image/06.jpg')
          },
          
        },
        imgCardHeight: window.innerWidth,
        tableData: [{
            date: '2016-05-02',
            prize: '一等奖',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            prize: '一等奖',
            name: '黑小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            prize: '二等奖',
            name: '白小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            prize: '二等奖',
            name: '红小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
    mounted() {
      console.log(this.imgCardHeight)
    },
    methods: {
      toWork(title){
        console.log(title)
      },
    }
  }
</script>

<style lang='scss' scoped>
  .home{
    width: 100%;
    padding-bottom: 15px;
    background-color: skyblue;
    .imgCard{
      padding: 10px 0;
      img{
        height: 120%;
      }
    }
    .tips{
      font-size: 1rem;
      font-weight: 1000;
    }
    .worksTable{
      margin: 0 auto;
      .tips{
        padding-top: 10px;
      }
    }
  }
</style>