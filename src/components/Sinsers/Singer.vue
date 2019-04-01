<template>
    <div class="singer" v-if="singers">
        <div class="searchbox">
            <input  :val="songname" @input="songnames"/>
            <button @click="runclick">搜索</button>
        </div>
        <div class="searchlist">
            <ul>
                <li v-for="(item,index) in search" :key="index" @click="msearchsicplays(item,index)" >
                    <p>{{item.name}}</p>
                    <p class="singers">{{item.singer}}</p>
                </li>
            </ul>
        </div>

        <SearchPlay :search="search" @delmusics="delmusicss"
                    :btnmusic="btnmusic" :musiclls="musiclrc" :pigimg="pigimg"></SearchPlay>
    </div>
</template>


<script>
    import SearchPlay from  '../Sinsers/SearchPlay'
    export default {
        name: "Singer",
        data(){
          return{
              search:{},
              counts:0,
              singers:true,
              btnmusic:false,
              musiclrc:null,
              pigimg:null,
              mymusic:null,
              num:true,
              songname:"",
              titleitem:{}
          }
        },
        components:{
            SearchPlay
        },
        methods:{
            delmusic(){
                this.$emit('btnmusics',this.singers)
            },
            delmusicss(){
                this.btnmusic = false
            },
            msearchsicplays(itme,index){
                console.log(index)
                this.counts = index
                this.btnmusic = true
                // this.titleitem = this.item[index]
                this.searchpigormusic(itme.id)
            },
            searchpigormusic(id){
                // console.log(id)
                this.pigimg = `https://api.bzqll.com/music/netease/pic?key=579621905&id=${id}`
                this.mymusic = `https://api.bzqll.com/music/netease/song?key=579621905&id=${id}`
                // console.log(this.mymusic)
                this.musiclrc = `https://api.bzqll.com/music/netease/url?key=579621905&id=${id}&br=999000`
            },
            songnames(el){
                if(el.target.value==""){
                    this.num = true
                }
                this.songname = el.target.value
            },
            runclick(){
                if(this.songname != ""){
                    console.log(this.songname)
                    this.axios
                    (`/api/music/netease/search?key=579621905&s=${this.songname}`).then(res=>{
                            console.log(res)
                            this.search = JSON.parse(JSON.stringify(res.data.data))
                            // console.log(JSON.parse(res.data.text))
                            console.log(this.search)
                        })
                }
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .singer{
        height: 1000px;
        position: relative;
        background: #f2f3f4;
        .searchbox{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50px;
            left: 50px;
            input{
                width: 70%;
                height: 40px;
            }
            button{
                border: none;
                height: 44px;
            }

        }
        .searchlist{
            position: absolute;
            top: 95px;
            left: 0;
            background: #f2f3f4;
            li{
                width: 500px;
                height: 40px;
                line-height: 20px;
                margin-top: 15px;
                padding-left: 50px;
                border-bottom: 1px solid #ddd;
                .singers{
                    font-size: 13px;
                    color: darkgray;
                }
            }
        }
    }

</style>
