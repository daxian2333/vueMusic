<template>
<div class="bg">
    <div class="bg">
        <div class="header">
            <img width="100%" height="100%" :src="songlist.songListPic">
            <span> 退出 </span>
            <strong>歌单</strong>
        </div>
            <div class="header-text">
                <span>{{songlist.songListName}}</span>
                <p>{{songlist.songListPlayCount}}</p>
            </div>
        </div>
    <div class="songlists-List">
        <div class="songlists-all">
            <i>11</i>
            <span>播放全部</span>
            <span>（共{{songlists.length}}首）</span>
        </div>
        <div class="songlists-itme">
            <ul>
                <li v-for="(itme,index) in songlists" :key="index">
                  <div class="content">
                      <span>{{index + 1}}</span>
                      <h2>{{itme.name}}</h2>
                      <p>{{itme.singer}}</p>
                  </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    const url="/api/music/netease/songList?key=579621905&id=2483853001&limit=10&offset=0"
    export default {
        name: "rank",
        data(){
          return{
              songlist:[],
              songlists:[]
          }
        },

        created(){
            this.axios(url).then(response =>{
                let res = response.data.data
                this.songlist = res
                this.songlists = res.songs

                console.log(this.songlist)
                console.log(this.songlists)
            },err =>{
                alert(err)
            })
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .bg{
    width: 100%;
    height:300px;
    position: relative;
    .header{
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        background-size: cover;
        span{
            position: absolute;
            top: 0;
            left: 0;
        }
        strong{
            position: absolute;
            top: 0;
            left: 45px;
        }
    }
    .header-text{
        position: absolute;
        top: 230px;
        left: 20px;;
        color: #fff;
        font-weight: 700;

        p{
            margin-top: 4px;
        }
    }

}
    .songlists-List{
        position: absolute;
        top: 285px;
        left: 0;
        width: 100%;
        background-color: #f2f3f4;
        li{
            height: 60px;
            border-bottom: 1px solid #e4e4e4;
        }
        .songlists-all{
            width: 100%;
            height: 40px;
            padding-left: 16px ;
            line-height: 40px;
            border-radius: 10%;

            i{
                margin-right: 10px;
            }
        }
        .songlists-itme{
            box-sizing: border-box;
        }
        .content{
            width: 100%;
            line-height: 20px;
            padding-left: 45px;
            padding-top: 20px;
            box-sizing: border-box;

            h2{
                color: #2e3030;
                font-size: 100%;
                font-weight: 700;
                }
            p{
                font-size: 12px;
                color: #757575;
            }
        }
    }

</style>
