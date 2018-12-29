<template>
    <section class="section">
        <div class="container level">
            <div class="level-item has-text-centered info-box">
                <div >
                    <div class="icon">
                        <i class="fa fa-code"></i>
                    </div>
                    <h3 class="count">1500</h3>
                    <h5 class="title">
                        {{$t('extraInfos.projects')}}
                    </h5>
                </div>
            </div>
            <div class="level-item has-text-centered info-box">
                <div >
                    <div class="icon">
                        <i class="fa fa-coffee"></i>
                    </div>
                    <h3 class="count">1500</h3>
                    <h5 class="title">
                       {{$t('extraInfos.coffee')}}
                    </h5>
                </div>
            </div>
            <div class="level-item has-text-centered info-box" >
                <div >
                    <div class="icon">
                        <i class="fa fa-clock-o"></i>
                    </div>
                    <h3 class="count">1500</h3>
                    <h5 class="title">
                        {{$t('extraInfos.hours')}}
                    </h5>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section{
        background-color:#2656A5;
    }
    .level > .level-item{
        padding: 2rem 0 2rem 0;
    }
    .icon{
    }
    .icon i{
        font-size: 3.0rem;
        color:black;
    }
    .title{
        display: block;
        font-size: 1.0rem;
        letter-spacing: 1px;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.5);
    }
    .info-box .count{
        color: #FFFFFF;
        font-size: 3.6rem;
        margin-bottom: 0;
        font-family: "poppins-medium", sans-serif;
    }
    @media (min-width:769px){
        .info-box:first-child{
            border-left:none;
        }
        
        .info-box{
            border-left: 1px solid rgba(255, 255, 255, 0.12);
        }
    }
</style>