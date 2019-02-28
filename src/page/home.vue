<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">

          </div>
        </el-col>
      </el-row>


    </div>


    <div id="container">
      <div class="leftMenu">
        <div class="box-card" shadow="always">
          <div class="l1">
            <!--<div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>-->
            <div class="left-10">
              <div><img class="avatar" src="../assets/img/avatar.png"/></div>
              <div>昵称：bboyHan</div>
              <div>职业：全栈工程师</div>
              <div>邮箱：bboyHan@yeah.net</div>
            </div>
          </div>
          <div class="l2">
            <div>

            </div>

            <div>
              <div class="menu-value">
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item title="关于我们" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                  <el-collapse-item title="主营业务" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                  </el-collapse-item>
                  <el-collapse-item title="典当指引" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                  </el-collapse-item>
                  <el-collapse-item title="奢品售卖" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>
          <div class="l3">

          </div>
          <div class="l4">
            <div class="left-10">
              <div></div>
            </div>
          </div>
          <!--<div class="down">
            <img class="image" src="../assets/img/wechat_logo2.png"/><br/>
            <span>个人微信号：bboyHan</span><br/>
            <img class="image" src="../assets/img/wechat_logo.jpg"/><br/>
            <span>公众号：23号杂货铺</span><br/>
          </div>-->
        </div>
      </div>
      <div id="content">

        <!--轮播图片 -->
        <div class="content-tab">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <el-row>
                <el-col :span="24">
                  <img :src="item.idView"/>
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="content-main">
          <div class="line"></div>
          <el-menu
            :default-active="activeIndex2"
            mode="horizontal"
            @select="handleSelect"
            background-color="#AEAEAE"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">主营业务</template>
              <el-menu-item index="2-1">业务1</el-menu-item>
              <el-menu-item index="2-2">业务2</el-menu-item>
              <el-menu-item index="2-3">业务3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">
                  <router-link :to="{path:'/edit'}">写文章</router-link>
                </template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>联系我们</el-menu-item>
            <el-menu-item index="4" >
              <router-link :to="{path:'/t'}">河北尊德典当行</router-link>
            </el-menu-item>
            <el-menu-item index="5" class="input-search">
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="inputSearch">
              </el-input>
            </el-menu-item>
          </el-menu>
        </div>

        <div class="article">
          <ul>
            <li>
              <a href="#">文章标题</a>
              <p>这里是这篇文章的摘要区域,站长地带原创教程站长地带原创教程站长地带原创教程站长地带原创教程</p>
              <el-badge :value="12" class="msg">
                <el-button size="small">评论</el-button>
              </el-badge>
              <el-badge :value="3" class="msg">
                <el-button size="small">回复</el-button>
              </el-badge>
            </li>
            <li>
              <a href="#">文章标题</a>
              <p>这里是这篇文章的摘要区域,站长地带原创教程站长地带原创教程站长地带原创教程站长地带原创教程</p>
              <el-badge :value="22" class="msg">
                <el-button size="small">评论</el-button>
              </el-badge>
              <el-badge :value="1" class="msg">
                <el-button size="small">回复</el-button>
              </el-badge>
            </li>
            <li>
              <a href="#">文章标题</a>
              <p>这里是这篇文章的摘要区域,站长地带原创教程站长地带原创教程站长地带原创教程站长地带原创教程</p>
              <el-badge :value="11" class="msg">
                <el-button size="small">评论</el-button>
              </el-badge>
              <el-badge :value="32" class="msg">
                <el-button size="small">回复</el-button>
              </el-badge>
            </li>
            <li>
              <a href="#">文章标题</a>
              <p>这里是这篇文章的摘要区域,站长地带原创教程站长地带原创教程站长地带原创教程站长地带原创教程</p>
              <el-badge :value="6" class="msg">
                <el-button size="small">评论</el-button>
              </el-badge>
              <el-badge :value="5" class="msg">
                <el-button size="small">回复</el-button>
              </el-badge>
            </li>

          </ul>
        </div>


      </div>
    </div>
    <div id="footer">
      <br/>
      <div>
        Copyright © 2019 bboyHan
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        imgList: [
          {id: 0, idView: require('../assets/img/1.jpg')},
          {id: 1, name: '详情', idView: require('../assets/img/2.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/img/3.jpeg')},
          {id: 3, name: '33', idView: require('../assets/img/4.jpg')}
        ],
        activeName: '1',
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

  a {
    text-decoration: none;
  }
  body {
    background: lightgrey;
    font-size: 15px;
    font-family: "微软雅黑";
    text-align: left;
  }

  .bg-purple-dark {
    background: #fff;
  }

  .header {
    position: fixed;
    top: 0px;
    height: 50px;
    width: 100%;
  }

  #container {
    position: fixed;
    top: 50px;
    bottom: 30px;
    width: 100%;
  }

  .leftMenu {
    float: left;
    width: 300px;
    height: 100%;
  }

  .leftMenu .box-card .l1 {
    background-color: #DCDFE6;
    float: top;
    height: 25%;
  }

  .leftMenu .box-card .l2 {
    background-color: #E4E7ED;
    height: 25%;
  }

  .leftMenu .box-card .l3 {
    background-color: #EBEEF5;
    height: 25%;
  }

  .leftMenu .box-card .l4 {
    float: bottom;
    background-color: #F2F6FC;
    height: 25%;
  }

  .leftMenu .box-card {
    height: 100%;
    text-align: left;
    font-family: "Microsoft YaHei";
  }

  .leftMenu .down {
    float: bottom;
    width: 300px;
    text-align: center;
    bottom: 10px;
    position: absolute
  }

  .left-10 {
    top: 20px;
    left: 30px;
    position: relative;
  }

  .leftMenu .menu-value {
    width: 90%;
    left: 10px;
    position: relative;
  }

  .left-10 .avatar {
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: inline-block;
  }

  #content {
    position: relative;
    margin-left: 310px;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  #content .content-tab {
    position: relative;
    height: 230px;
    overflow: auto;
  }

  #content .content-main {
    top: 250px;
  }

  #content .article {
    width: 100%;
    border: 1px solid #1426cc;
    margin: 30px auto;
  }

  #content .article ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #content .article li {
    text-align: left;
    padding: 18px 24px;
    border-bottom: 1px solid red;
    position: relative;
  }

  #content .article .msg {
    margin-top: 10px;
    margin-right: 20px;
  }

  #content .input-search {
    right: 10px;
    float: right;
    position: relative;
  }

  #footer {
    text-align: center;
    font-size: small;
    position: fixed;
    height: 30px;
    bottom: 0;
    width: 100%;
  }
</style>
