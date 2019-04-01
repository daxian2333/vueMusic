<template>
    <div v-if="isranking" class="rankList">
        <div class="bg">
            <div class="header">
                <img width="100%" height="100%" :src="mybliborads.songListPic">
                <span @click="delmusic"> 退出 </span>
                <strong>歌单</strong>
            </div>
            <div class="header-text">
                <span>{{mybliborads.songListName}}</span>
                <p>{{mybliborads.songListPlayCount}}</p>
            </div>
        </div>

        <div class="songlists-List">
            <div class="songlists-all">
                <i >11</i>
                <span>播放全部</span>
                <span>（共{{mybliborads.songs.length}}首）</span>
            </div>
            <div class="songlists-itme">
                <ul>
                    <li v-for="(itme,index) in mybliborads.songs" :key="index"  @click="musicplays(itme,index)"  >
                        <div class="content">
                            <span>{{index + 1}}</span>
                            <h2>{{itme.name}}</h2>
                            <p>{{itme.singer}}</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <musicplay :musiclls="musiclrc" :pigimg="pigimg"  @delmusics="delmusicss"
                   :btnmusic="btnmusic" ></musicplay>
    </div>
</template>

<script>

    import musicplay from '../Palymusic/musicplay'

    // https://api.bzqll.com/music/netease/pic?key=579621905&id=526307800
    // const url="/api/music/netease/songList?key=579621905&id=2483853001&limit=10&offset=0"
    export default {
        name: "rankList",
        props:['isranking','billboards','mybliborads'],
        data(){
            return{
                count :0,
                btnmusic:false,
                musiclrc:null,
                pigimg:null,
                mymusic:null,
                titleitem:{}
            }
        },
        components:{
            musicplay
        },
        methods:{
            delmusic(){
                this.$emit('btnmusics',this.isranking)
            },
            delmusicss(){
                this.btnmusic = false
            },

            musicplays(itme,index){
                console.log(index)
                this.count = index
                this.btnmusic = true
                // this.titleitem = this.item[index]
                this.pigormusic(itme.id)
            },
            pigormusic(id){
                // console.log(id)
                this.pigimg = `https://api.bzqll.com/music/netease/pic?key=579621905&id=${id}`
                this.mymusic = `https://api.bzqll.com/music/netease/song?key=579621905&id=${id}`
                // console.log(this.mymusic)
                this.musiclrc = `https://api.bzqll.com/music/netease/url?key=579621905&id=${id}&br=999000`
            }
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
            top: -88px;
            width: 100%;
            height: 100%;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            background-size: cover;
            span{
                position: absolute;
                top: 0;
                left: 15px;
            }
            strong{
                position: absolute;
                top: 0;
                left: 60px;
            }
        }
        .header-text{
            position: absolute;
            top: 150px;
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
        top: 280px;
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
            text-align: left;
            span{
                float: left;
                margin-right: 5px;
            }
            h2{
                color: #2e3030;
                font-size: 100%;
                font-weight: 700;
            }
            p{
                font-size: 12px;
                color: #757575;
                margin-left: 15px;
            }
        }
    }

</style>
