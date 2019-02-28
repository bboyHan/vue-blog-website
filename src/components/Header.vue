<template>
  <div>
    <div class="block">
      <el-carousel :interval="3000" type="card" height="300px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <el-row>
            <el-col :span="24">
              <img ref="imgHeight" :src="item.idView" class="banner_img"/>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList: [
          {id: 0, idView: require('../assets/img/1.jpg')},
          {id: 1, name: '详情', idView: require('../assets/img/2.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/img/3.jpeg')},
          {id: 3, name: '33', idView: require('../assets/img/4.jpg')}
        ]
      }
    }
  }
</script>

