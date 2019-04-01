<template>
  <div id="app">
    <div class="header">
      <div class="mine">1</div>
      <h1>VMUSICJIN</h1>
      <div class="search">1</div>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/" exact>推荐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/billboards">排行</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sinsers">搜索</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
 //  const url="/api/music/netease/songList?key=579621905&id=3779629"
 // const  url="/api/music/netease/hotSongList?key=579621905&cat=全部=10&offset=0&order=new"
 // const url="/api/music/netease/songList?key=579621905&id=2689851760&limit=10&offset=0"

  export default {
    mame:'app',
    data() {
      return {
        playlists:[],
      }

    },
    // created(){
    //   this.axios(url).then(response =>{
    //     // eslint-disable-next-line
    //     console.log(response.data.data)
    //
    //     let res = response.data.data
    //     this.playlists = res
    //     // eslint-disable-next-line
    //     console.log(this.playlists)
    //
    //   },err =>{
    //     alert(err)
    //   })
    // },
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

  .header {
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #d44439;

    h1 {
      flex: 0 1 auto;
      letter-spacing: 3px;
      font-weight: 700;
      color: #fff;
    }

    .mine {
      flex: 1;
    }

    .search {
      flex: 1;
      text-align: right;
    }
  }

  .tab {
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #d44439;
    font-size: 14px;

    .tab-item {
      flex: 1;
      text-align: center;
    }
    a{
      text-decoration: none;
      color: #fff;
      font-size: 16px;
    }
  }
</style>
