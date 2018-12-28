<template>
    <section id="init" :style="{backgroundImage: `url(${backgroundUrl})`}" class="hero is-large is-dark is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <img class="logo" src="~/assets/img/fulllogo-colored-white.png" alt="Mateus Cordeiro Full Stack Developer" />
                </h1>
                <h2 class="subtitle">
                    Bem-vindo ao meu portifólio.
                </h2>
                <a href="#about" class="button is-large is-outlined hero-button">Mais sobre mim</a>

            </div>
        </div>
        <div class="hero-foot">
            <div class="container">
                <div class="footer-social">
                    <ul>      
                        <li><a target="_blank" rel="noreferrer" href="https://github.com/Nargarath" ><i class="fa fa-github" alt="github link"></i></a></li>  
                        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mateus-cordeiro-736b83169/" ><i class="fa fa-linkedin" alt="linkedin link"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import backgroundUrl from '~/assets/img/bg.png'
export default {
  data() {
    return { backgroundUrl }
  }
}
</script>
<style scoped>
    
    .hero-button:hover{
        border-color:#3273dc;
    }
    .hero-foot{
        margin-bottom:2rem;
    }
    .footer-social ul{
        justify-content: center;
    }
    .footer-social ul li{
        padding: 1rem;
    }
    .button{
        font-family: "poppins-bold", sans-serif;
        text-transform: uppercase;
        font-size: 0.9rem;
        padding: 1.5rem 2rem 1.5rem 2rem;
        background-color:transparent;
        color:white;
        border-radius: 0;
        border-color: rgb(255, 255, 255);
        border-width: 2px;
    }
    .hero{
        text-align: center;
        background-position-x: center;
        background-position-y: bottom;
        background-size: cover;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;
        background-attachment: fixed;
        background-origin: initial;
        background-clip: initial;
        background-color: rgb(21, 21, 21);
    }
    .hero h1{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hero .logo{
        width: 450px !important;
        height:auto;
    }
</style>