<template>
    <div  class="musicplays" v-if="btnmusic">
        <img class="bgimg" :src="pigimg" width="400px" height="400px">
        <div class="bgcolor"></div>
        <div class="del">
            <i  @click="delmusic">返回</i>
        </div>
        <div class="musicname">
            <p class="title"></p>
            <p class="singername"></p>
        </div>
        <div class="contant">
            <div class="imgbox">
                <img :src="pigimg" width="300px" height="300px">

            </div>

        </div>
        <div class="mu">
            <div class="lastmusic">
            </div>
            <audio class="play"  autoplay controls>
                <source :src="musiclls">
            </audio>
            <div class="nextmusic" >
            </div>

        </div>


    </div>
</template>

<script>
    export default {
        name: "musicplay",
        props:['musiclls','btnmusic','pigimg','count','titleitem'],

        methods:{
            delmusic(){
                this.$emit('delmusics',this.btnmusic)
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    $rotates:rotate(0deg);

    .musicplays{
        position:absolute;
        top:-90px;
        z-index:20;
        width:100%;
        height:100%;
        overflow:hidden;
        background-color: rgb(7,17,27);

        .bgimg{
            position:absolute;
            z-index:20;
            display:inline-block;
            width:400px;
            height:400px;
            top:50%;
            left:50%;
            margin-left:-200px;
            margin-top:-200px;
            transform:scale(1.7);
            filter:blur(10px);
        }

        .bgcolor{
            position:absolute;
            z-index: 30;
            top:0px;
            width:100%;
            height:100%;

        }
        .del{
            margin: 0 0 0 20px;
            width:100%;
            position:relative;
            z-index:50;
            height:50px;
            font-size: 25px;
            background-color:rgba(7,17,27,0.6);
            color: #fff;

            .icon-keyboard_arrow_right{
                display:inline-block;
                z-index:50;
                width:50px;
                height:50px;
                line-height:50px;
                text-align: center;
                transform:rotate(180deg);
                right:0px;
                font-size:30px;
                color:#fff;
            }
        }

        .musicname{
            position:relative;
            z-index: 60;
            width:100%;
            background-color:rgba(7,17,27,0.6);

            .title{
                width:100%;
                height:50px;
                line-height:50px;
                text-align:center;
                font-family: '楷体';
                font-size:35px;
                color:#fff;
                font-weight:bold;
                overflow:hidden;
            }
            .singername{
                width:100%;
                height:50px;
                line-height:50px;
                text-align:center;
                color:#fff;
            }
        }

        .contant{
            position:relative;
            z-index:100;
            width:100%;
            overflow:hidden;

            .imgbox{
                width:100%;
                transition:all 2s linear;
                transform:$rotates;
                animation: run 30s linear infinite;
                img{
                    position:relative;
                    left:50%;
                    border:20px solid #000;
                    margin-left:-170px;
                    margin-top:30px;
                    margin-bottom:30px;
                    border-radius:50%;
                }

            }
            @keyframes run{
                0%{
                    transform:rotate(0deg);
                }
                100%{
                    transform:rotate(360deg);
                }
            }



        }

        .mu{
            position:relative;
            display:flex;
            z-index: 50;
            width:100%;
            height:54px;
            margin:30px 0;

            .nextmusic{
                position:relative;
                width:100px;
                height:54px;
                z-index: 50;

                .icon-last{
                    position:absolute;
                    display:inline-block;
                    width:100%;
                    height:54px;
                    line-height: 54px;
                    font-size:30px;
                    text-align:center;
                    color:#fff;
                }

            }

            .lastmusic{
                position:relative;
                width:100px;
                height:54px;
                z-index: 50;

                .icon-first{
                    position:absolute;
                    display:inline-block;
                    width:100%;
                    height:54px;
                    line-height: 54px;
                    font-size:30px;
                    text-align:center;
                    color:#fff;
                }
            }
            .play{
                width:100%;
                height:54px;
            }
        }


    }
</style>
