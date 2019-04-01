<template>
    <div class="billboard" >
        <div class="billboard-list" v-if="billboards">
            <ul class="billboard-ul" v-show="false">
                <li>
                    <div class="billboard-img">
                        <img  width="100px" height="100px"  :src="playlists.songListPic" >
                    </div>
                    <ul >
                        <li class="billboard-list-songs"  v-for="(p,i) in song" :key="i" v-if="i<3">
                            <span>{{i+1}}</span>
                            <span>{{p.name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="billboard-ul" @click="billrankingitem(a)" v-for="(a,d) in musicstr" :key="d">
                <li>
                    <div class="billboard-img">
                        <img  width="100px" height="100px"  :src="a.songListPic" >
                    </div>
                    <ul>
                        <li class="billboard-list-songs" >
                            <span>{{a.songs[0].name}}-{{a.songs[0].singer}}</span>
                            <span>{{a.songs[1].name}}-{{a.songs[1].singer}}</span>
                            <span>{{a.songs[2].name}}-{{a.songs[2].singer}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <billboardList :isranking="isranking" :mybliborads="mybliborads" @btnmusics="btnmusic"></billboardList>
    </div>
</template>

<script>
    import billboardList from '../Billboards/billboardList'
    //const url=`/api/music/netease/songList?key=579621905&id=${this.billboardid}`
   const url="/api/music/netease/songList?key=579621905&id=3779629"

    export default {
        name: "billboard",
        data() {
            return {
                billboards: true,
                isranking: false,
                mybliborads:{},
                musicstr:{},
                musicstrlist:{},
                playlists:{},
                song:{},
                billboardid:[3779629,3778678,2884035,19723756,10520166,180106,60198,21845217,11641012,120001,
                    60131,3733003,60255,46772709,112504]
            }
        },
        methods:{
            billrankingitem(a) {
                // console.log(p)
                // this.musicfirst = p.songlist[0].data
                this.a = a
                this.isranking = true
                this.billboards = false
                this.pigorranklist(a.songListId)
            },
            pigorranklist(id){
               // console.log(id)
                this.mybliranklist = `https://api.bzqll.com/music/netease/songList?key=579621905&id=${id}`
                this.axios(this.mybliranklist).then((data) =>{
                   // console.log(data.data.data)
                    let mybill = data.data.data
                    this.mybliborads =mybill
                })
            },
            btnmusic() {
                this.isranking = false
                this.billboards = true
            },
        },
        components:{
            billboardList
        },
        mounted() {
            for (let i = 0; i < 14; i++) {
             this.axios(`/api/music/netease/songList?key=579621905&id=${this.billboardid[i]}`).then(res => {
                // console.log(res.data.data)
                 this.musicstr[i] = JSON.parse(JSON.stringify(res.data.data))
                 this.musicstrlist =JSON.parse(JSON.stringify(res.data.data)).songs
                })
            }
              this.axios(url).then(response =>{
                // eslint-disable-next-line
               // console.log(response.data.data)

                let res = response.data.data
                this.playlists = res
                this.song = res.songs
              })

          console.log('111',this.musicstr)
            console.log('222',this.musicstrlist)
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.billboard{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 1px solid #ddd;
    .billboard-ul{
        width: 90%;
        height: 100px;
        margin: 20px auto;
        overflow: hidden;

        li{
            overflow: hidden;

        }
    }
    .billboard-img{
        float: left;
    }
    .billboard-list-songs{
        display: grid;
        line-height: 33px;
        padding-left:20px;
        font-size: 14px;
        color: #2e3030;
    }
}
</style>
