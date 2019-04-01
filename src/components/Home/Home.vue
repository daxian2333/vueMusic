<template>
  <div class="home" >
      <div v-if="isloading">
      <div class="bg">
          <div class="content-wrapper">
          <ul>
              <transition-group name="slider">
              <li class="supports-item" v-for="(itme,index) in imgArr" :key="index"
                  v-show="index ===supportsIndex">
                  <img width="100%" height="100%" :src="publicPath+itme.img">
              </li>
              </transition-group>
          </ul>
      </div>
      </div>
      <div class="recommend">
          <h1>推荐歌单</h1>
          <span @click="huayu">华语</span>
          <span @click="yaogun">摇滚</span>
          <span @click="minyao">民谣</span>
          <span @click="dianzi">电子</span>
          <span > 更多歌单> </span>
      </div>
      <ul >
          <li class="song-list" @click="rankingitem(p)" v-for="p in playlists" :key="p.id" >
              <div class="songList-img"><img width="100%" height="100%" :src="p.coverImgUrl" ></div>
              <div class="songList-heat">{{p.playCount}}</div>
              <div class="songList-name">{{p.title}}</div>
          </li>
      </ul>
      </div>
      <RankList :isranking="isranking" @btnmusics="btnmusic" :songsList="songsList" ></RankList>
  </div>
</template>

<script>
// @ is an alias to /src
//const url="/api/music/netease/hotSongList?key=579621905&cat=全部&limit=15&offset=0&order=new&uid=115119971"
import RankList from '../Home/RankList'

export default {
    name: 'home',
    data() {
        return {
            imgArr: [
                {
                    type: 0,
                    img: "./image/1.jpg",
                },
                {
                    img: "./image/2.jpg",
                    type: 1
                },
                {
                    img: "./image/3.jpg",
                    type: 2
                },
                {
                    img: "./image/4.jpg",
                    type: 3
                },
                {
                    img: "./image/5.jpg",
                    type: 4
                }

            ],
            publicPath: process.env.BASE_URL,
            supportsIndex: 0,
            isloading: true,
            isranking: false,
            playlists: [],
            myranklist:{},
            songsList:{}
        }

    },
    components: {
        RankList
    },
    methods: {
        huayu() {
            this.music = "华语"
            this.axios("/api/music/netease/hotSongList?key=579621905&cat=" + this.music + "&limit=15&offset=0&order=new&uid=115119971").then(response => {
                let res = response.data.data
                this.playlists = res
            }, err => {
                alert(err)
            })
        },
        yaogun() {
            this.music = "摇滚"
            this.axios("/api/music/netease/hotSongList?key=579621905&cat=" + this.music + "&limit=15&offset=0&order=new&uid=115119971").then(response => {
                let res = response.data.data
                this.playlists = res
            }, err => {
                alert(err)
            })
        },
        minyao() {
            this.music = "民谣"
            this.axios("/api/music/netease/hotSongList?key=579621905&cat=" + this.music + "&limit=15&offset=0&order=new&uid=115119971").then(response => {
                let res = response.data.data
                this.playlists = res
            }, err => {
                alert(err)
            })
        },
        dianzi() {
            this.music = "电子"
            this.axios("/api/music/netease/hotSongList?key=579621905&cat=" + this.music + "&limit=15&offset=0&order=new&uid=115119971").then(response => {
                let res = response.data.data
                this.playlists = res
            }, err => {
                alert(err)
            })
        },
        rankingitem(p) {
            // console.log(p)
            // this.musicfirst = p.songlist[0].data
            this.p = p
            this.isranking = true
            this.isloading = false
            this.pigorranklist(p.id)
        },
        pigorranklist(id){
            console.log(id)
            this.myranklist = `https://api.bzqll.com/music/netease/songList?key=579621905&id=${id}`
           this.axios(this.myranklist).then((data) =>{
               console.log(data.data.data)
               let a = data.data.data
               this.songsList = a
           })
        },
        btnmusic() {
            this.isranking = false
            this.isloading = true
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                if (this.supportsIndex >= this.imgArr.length - 1) {
                    this.supportsIndex = 0
                } else {
                    this.supportsIndex++
                }
            }, 2000)
        })
    },

        created(){
        this.axios("/api/music/netease/hotSongList?key=579621905&cat=全部&limit=15").then(response =>{
            let res = response.data.data
            this.playlists = res
          //  console.log(this.playlists)
        },err =>{
            alert(err)
        })
    }

}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
 .home{
     width: 100%;
     height: 100%;
     .bg{
     background: #d44439;
     width: 100%;
     height:180px;
   }
     .content-wrapper{
         position: relative;
         top: 0;
         left: 0px;
         width: 360px;
         height: 165px;
         margin:auto;
         overflow: hidden;

         .slider-enter {
             transform: translateX(100%);
         }

         .slider-enter-to, .slider-leave {
             transform: translateX(0);
         }

         .slider-leave-to {
             transform: translateX(-100%);
         }

         .slider-enter-active, .slider-leave-active{
             transition: all .5s linear;
         }

         .supports-item{
             position: absolute;
             left: 0;
             top: 0;
             width: 100%;
             height: 100%;
             overflow: hidden;
         }
     }
     .recommend{
         display: inline-block;
         width: 100%;
         height: 65px;
         float: left;
         line-height: 65px;
         font-size: 18px;
         margin-left: 10px;
         font-weight: 700;
         margin-top: 10px;
            h1{
                float: left;
                color: #333;
            }
         span{
             color: #666;
             margin-left: 8px;
         }
     }

     .song-list{
         display: inline-block;
         position: relative;
         box-sizing:border-box;
         width: 31%;
         margin: 4px 4px;
         vertical-align: top;


         .songList-img{
             width: 100%;
             height: 100%;
             border-radius:10%;
             overflow: hidden;
         }
         .songList-heat{
            position: absolute;
             left: 55%;
             top: 0;
             display: inline-block;
             color: #f1f1f1;
             font-size: 12px;
         }
         .songList-name{
             font-size: 14px;
             line-height: 18px;
             text-align: left;
         }
     }
 }
</style>
