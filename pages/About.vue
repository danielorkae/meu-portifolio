<template>
    <section id="about" class="section">
        <div class="section-intro container">
   			<h5>Sobre mim</h5>
   			<h1>Deixe me falar um pouco sobre mim</h1>
            <div class="columns">
                <div class="column"></div>
                <div class="column is-10">
                    <p class="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
                </div>
            </div>
   		</div> 
        <div id="full-profile" class="container">
            <div class="columns">
                <div class="column">
                    <div id="profile">
                        <h3>Perfil</h3>
                        <p></p>
                        <ul class="info-list">
                            <li>
                                <strong>Nome Completo:</strong>
                                <span>Mateus de Medeiros Cordeiro</span>
                            </li>
                            <li>
                                <strong>Data de Nascimento:</strong>
                                <span>11/10/1997</span>
                            </li>
                            <li>
                                <strong>Trabalho:</strong>
                                <span>Freelancer, Full Stack Developer</span>
                            </li>
                            <li>
                                <strong>Website:</strong>
                                <span>http://cordeirodev.com/</span>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <span>contato@cordeirodev.com</span>
                            </li>
                            <li>
                                <a href="#contact" class="button is-outlined is-large is-fullwidth">Entre em contato</a>
                            </li>
                            <li>
                                <a class="button is-dark is-large is-fullwidth">Baixar Currículo</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div id="skills">
                        <h3>Habilidades</h3> 
                        <p></p>
                        <ul class="info-list">
                            <li>
                                <strong>HTML5 + css3</strong>
                                <i class="fa fa-info-circle" data-target="htemlcss-modal" @click="openModal($event)"></i>
                                <progress class="progress is-small" value="75" max="100">75%</progress>
                            </li>
                            <li>
                                <strong>SEO</strong>
                                <i class="fa fa-info-circle" data-target="seo-modal" @click="openModal($event)"></i>
                                <progress class="progress is-small" value="70" max="100">70%</progress>
                            </li>
                            <li>
                                <strong>Javascript</strong>
                                <i class="fa fa-info-circle" data-target="js-modal" @click="openModal($event)"></i>
                                <progress class="progress is-small" value="67" max="100">67%</progress>
                            </li>
                             <li>
                                <strong>VueJS/NuxtJS</strong>
                                <i class="fa fa-info-circle" data-target="vuenuxt-modal" @click="openModal($event)"></i>
                                <progress class="progress is-small" value="80" max="100">80%</progress>
                            </li>
                            <li>
                                <strong>PHP</strong>
                                <i class="fa fa-info-circle" data-target="php-modal" @click="openModal($event)"></i>
                                <progress class="progress is-small" value="85" max="100">85%</progress>
                            </li>
                            <li>
                                <strong>Laravel</strong>
                                <i class="fa fa-info-circle" data-target="laravel-modal" @click="openModal($event)"></i>
                                <progress class="progress is-small" value="50" max="100">50%</progress>
                            </li>
                            <li>
                                <strong>Codeigniter</strong>
                                <i class="fa fa-info-circle modal-button" data-target="ci-modal" @click="openModal($event)" aria-haspopup="true" ></i>
                                <progress class="progress is-small" value="90" max="100">90%</progress>
                            </li>
                            <li class="arrow-down" v-show="!showExtras">
                                <div @click="LoadOrUnloadAbilities()">
                                    <strong>Ver Mais</strong>
                                    <i :class="['fa', showExtrasClicked?'fa-spinner':'fa-arrow-down']" aria-hidden="true"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <transition name="fade">
            <div id="extra-abilities" class="info-list" v-show="showExtras">
                <div class="columns">
                    
                    <div class="column">
                        <strong>Bootstrap</strong>
                        <i class="fa fa-info-circle" data-target="bootstrap-modal" @click="openModal($event)"></i>
                        <progress class="progress is-small" value="90" max="100">90%</progress>
                    </div>   
                    <div class="column">
                        <strong>MySQL</strong>
                        <i class="fa fa-info-circle" data-target="mysql-modal" @click="openModal($event)"></i>
                        <progress class="progress is-small" value="90" max="100">90%</progress>
                    </div> 
                </div>
                <div class="columns">
                    <div class="column">
                        <strong>Bulma</strong>
                        <i class="fa fa-info-circle" data-target="bulma-modal" @click="openModal($event)"></i>
                        <progress class="progress is-small" value="65" max="100">65%</progress>
                    </div>
                    <div class="column">
                        <strong>Web Services</strong>
                        <i class="fa fa-info-circle" data-target="ws-modal" @click="openModal($event)"></i>
                        <progress class="progress is-small" value="70" max="100">70%</progress>
                    </div>    
                    
                </div>
                <div class="columns">
                    <div class="column arrow-down" style="margin-top:1.5rem;" v-show="showExtras">
                        <div @click="LoadOrUnloadAbilities()">
                            <i :class="['fa', showExtrasClicked?'fa-spinner':'fa-arrow-up']" aria-hidden="true"></i>
                            <strong style="margin-top:-0.8rem;">Ver Menos</strong>
                            
                        </div>
                    </div>
                </div>
            </div>
            </transition>
        </div>
        <cd-modal :id="'htemlcss-modal'" :background="''" :title="'HTML e CSS3'" :body="'teste'"/>
        <cd-modal :id="'seo-modal'" :background="''" :title="'SEO'" :body="'teste'"/>
        <cd-modal :id="'js-modal'" :background="''" :title="'Javascript'" :body="'teste'"/>
        <cd-modal :id="'vuenuxt-modal'" :background="''" :title="'VueJS e NuxtJS'" :body="'teste'"/>
        <cd-modal :id="'php-modal'" :background="''" :title="'PHP'" :body="'teste'"/>
        <cd-modal :id="'laravel-modal'" :background="''" :title="'Laravel'" :body="'teste'"/>
        <cd-modal :id="'ci-modal'" :background="''" :title="'Codeigniter'" :body="'teste'"/>
        <cd-modal :id="'bootstrap-modal'" :background="''" :title="'Bootstrap'" :body="'teste'"/>
        <cd-modal :id="'mysql-modal'" :background="''" :title="'MySQL'" :body="'teste'"/>
        <cd-modal :id="'bulma-modal'" :background="''" :title="'Bulma'" :body="'teste'"/>
        <cd-modal :id="'ws-modal'" :background="''" :title="'Web Services'" :body="'teste'"/>
    </section>
</template>
<script>
import Modal from '~/components/Modal.vue';
export default {
    components:{
        'cd-modal': Modal
    },
    data(){
        return{
            showExtras: false,
            showExtrasClicked:false
        }
    },
    methods:{
        LoadOrUnloadAbilities(){
            this.showExtrasClicked = true;
            setTimeout(() => { this.showExtras = !this.showExtras;this.showExtrasClicked = false; }, 1000);
        },
        openModal(event){
           this.$root.$emit(event.target.dataset.target+'-open'); 
        }
    }
}
</script>
<style scoped>

.arrow-down{
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
}
.arrow-down div:hover{
	color: #3273dc !important;

}

.arrow-down strong{
    display:block;
}
.arrow-down i{
    display:block;
    margin-top:-15px;
}
#about{
    background-color: white;
}
.section-intro>h1{
    color: #000000 !important;
}
@media (min-width: 1000px) {
   .lead{
        text-align:left;
        padding: 0 8rem 0 4rem;
    } 
}



#full-profile .info-list {
    list-style: none;
    margin-left: 0;
}
#full-profile {
	position: relative;
	text-align: left;
	max-width: 850px;
	margin-bottom: 3.6rem;
}
#full-profile h3 {
	font-family: "poppins-bold", sans-serif;
	font-size: 1.3rem;
	text-transform: uppercase;
	letter-spacing: .25rem;
}
#full-profile .info-list li {
	padding: 0 0 1.5rem 0;
	margin-bottom: .6rem;
}
#full-profile .info-list a{
    font-family: "poppins-bold", sans-serif;
    text-transform: uppercase;
    font-size: 1.0rem;
    font-weight: 600;
    padding: 1.5rem;
}
#full-profile .info-list strong {
	font-family: "poppins-bold", sans-serif;
	color: #313131;
	text-transform: uppercase;
	letter-spacing: .05rem;
	font-size: 1.0rem;
	line-height: 3rem;
}
#full-profile .info-list span {
	display: block;
	font-family: "poppins-regular", sans-serif;
	color: #888888;
	font-size: 1rem;
	line-height: 1;
}

.button{
    border-radius: 0;
}
    
@-webkit-keyframes rotation {
    from {
            -webkit-transform: rotate(0deg);
    }
    to {
            -webkit-transform: rotate(359deg);
    }
}
.fa-spinner{
    -webkit-animation: rotation 1s infinite linear;
}

</style>