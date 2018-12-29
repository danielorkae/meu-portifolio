
<template>
    <header>
        <div class="top-bar">
            <a :class="['menu-toggle',navClicked?'is-clicked':'']" @click="navClick()"><span>Menu</span></a>

            <div class="flags" @click="setLanguage()" :style="{backgroundImage: `url(${languageFlag})`,backgroundRepeat: `no-repeat`}" >
				<a :style="{backgroundImage: `url(${translateFlag})`,backgroundRepeat: `no-repeat`}"></a>
            </div>		      
            <transition 
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:leave="leave"
            >
            <nav id="main-nav-wrap" v-show="navClicked">
                <ul :class="['main-navigation']">
                    <li :class="[CurrentPage=='init'?'current':'']"><a class="smoothscroll"  href="#init" title="">{{$t('nav.hero')}}</a></li>
                    <li :class="[CurrentPage=='about'?'current':'']"><a class="smoothscroll"  href="#about" title="">{{$t('nav.about')}}</a></li>
                    <li :class="[CurrentPage=='xp'?'current':'']"><a class="smoothscroll"  href="#xp" title="">{{$t('nav.experiences')}}</a></li>
                    <li :class="[CurrentPage=='portifolio'?'current':'']"><a class="smoothscroll"  href="#portfolio" title="">{{$t('nav.portifolio')}}</a></li>
                    <li :class="[CurrentPage=='services'?'current':'']"><a class="smoothscroll"  href="#services" title="">{{$t('nav.services')}}</a></li>					
                    <li :class="[CurrentPage=='contact'?'current':'']"><a class="smoothscroll"  href="#contact" title="">{{$t('nav.contact')}}</a></li>	
                </ul>
            </nav>    
            </transition>		
        </div>
    </header>
</template>


<script>
import brFlag from '~/assets/svg/br.svg'
import usFlag from '~/assets/svg/us.svg'
import translateFlag from '~/assets/svg/translate.svg'
export default {
    data(){
        return{
            navClicked: false,
			CurrentPage:'',
			translateFlag,
			brFlag,
			usFlag,
			languageFlag: null
        }
	},
	created(){
		this.startLanguage();
	},
    methods:{
		startLanguage(){
			if(this.$router.currentRoute.name == 'index___br'){
				this.languageFlag = this.brFlag;
			}else{
				this.languageFlag = this.usFlag;
			}
		},
		setLanguage(){
			if(this.languageFlag == brFlag){
				this.$router.push(this.switchLocalePath('us'));
				this.languageFlag = this.usFlag;
			}else{
				this.$router.push(this.switchLocalePath('br'));
				this.languageFlag = this.brFlag;
			}
		},
        navClick(){
            this.navClicked = !this.navClicked;
        },
        enter(element) {
            const width = getComputedStyle(element).width;

            element.style.width = width;
            element.style.position = 'absolute';
            element.style.visibility = 'hidden';
            element.style.height = 'auto';

            const height = getComputedStyle(element).height;

            element.style.width = null;
            element.style.position = null;
            element.style.visibility = null;
            element.style.height = 0;

            // Trigger the animation.
            // We use `setTimeout` because we need
            // to make sure the browser has finished
            // painting after setting the `height`
            // to `0` in the line above.
            setTimeout(() => {
                element.style.height = height;
            });
        },
        afterEnter(element) {
            element.style.height = 'auto';
        },
        leave(element) {
            const height = getComputedStyle(element).height;
        
            element.style.height = height;

        setTimeout(() => {
            element.style.height = 0;
        });
        },
        
    }
}
</script>

<style scoped>
header .flags {
	float: left;
	margin-left: 20px;
	margin-right: 30px;
	margin-top: 25px;
	position: relative;
}
header .flags a {
	display: block;
	margin: 0;
	padding: 0;
	border: none;
	font: 0/0 a;
	text-shadow: none;
	color: transparent;
	width: 115px;
	height: 20px;
	background: url('~/assets/svg/translate.svg') ;
	background-size: 122px 25px;
}
header {
	position: fixed;
	width: 100%;
	min-height: 66px;
	z-index: 600;
}
@media only screen and (max-width:1024px) {
	header .top-bar {
		left: 60px;
	}
}
@media only screen and (max-width:768px) {
	header .top-bar {
		left: 50px;
	}
}
@media only screen and (max-width:600px) {
	header .top-bar {
		left: 35px;
	}
}
@media only screen and (max-width:400px) {
	header .top-bar {
		left: 25px;
	}
}
header .top-bar {
	display: block;
	background: #2656A5;
	min-width: 220px;
	min-height: 66px;
	position: absolute;
	left: 90px;
	top: 0;
}
header .languages {
	float: left;
	margin-left: 20px;
	margin-right: 50px;
	margin-top: 25px;
	position: relative;
}
header .languages a {
	display: block;
	margin: 0;
	padding: 0;
	border: none;
	font: 0/0 a;
	text-shadow: none;
	color: transparent;
	width: 92px;
	height: 15px;
	background-size: 92px 15px;
}

.menu-toggle {
	float: left;
	width: 40px;
	height: 40px;
	margin-left: 20px;
	margin-top: 13px;
	display: block;
	position: relative;
}
.menu-toggle span {
	display: block;
	background-color: rgba(255,255,255,0.9);;
	width: 24px;
	height: 3px;
	margin-top: -1.5px;
	font: 0/0 a;
	text-shadow: none;
	color: transparent;
	position: absolute;
	right: 8px;
	top: 50%;
	bottom: auto;
	left: auto;
	-moz-transition: background 0.2s ease-in-out;
	-o-transition: background 0.2s ease-in-out;
	-webkit-transition: background 0.2s ease-in-out;
	-ms-transition: background 0.2s ease-in-out;
	transition: background 0.2s ease-in-out;
}
.menu-toggle span::before, .menu-toggle span::after {
	content: '';
	width: 100%;
	height: 100%;
	background-color: inherit;
	position: absolute;
	left: 0;
	-moz-transition-duration: 0.2s, 0.2s;
	-o-transition-duration: 0.2s, 0.2s;
	-webkit-transition-duration: 0.2s, 0.2s;
	-ms-transition-duration: 0.2s, 0.2s;
	transition-duration: 0.2s, 0.2s;
	-moz-transition-delay: 0.2s, 0s;
	-o-transition-delay: 0.2s, 0s;
	-webkit-transition-delay: 0.2s, 0s;
	-ms-transition-delay: 0.2s, 0s;
	transition-delay: 0.2s, 0s;
}
.menu-toggle span::before {
	top: -8px;
	-moz-transition-property: top, transform;
	-o-transition-property: top, transform;
	-webkit-transition-property: top, transform;
	-ms-transition-property: top, transform;
	transition-property: top, transform;
}
.menu-toggle span::after {
	bottom: -8px;
	-moz-transition-property: bottom, transform;
	-o-transition-property: bottom, transform;
	-webkit-transition-property: bottom, transform;
	-ms-transition-property: bottom, transform;
	transition-property: bottom, transform;
}

.menu-toggle.is-clicked span {
	background-color: rgba(255, 0, 119, 0);
}
.menu-toggle.is-clicked span::before, .menu-toggle.is-clicked span::after {
	background-color: rgba(255,255,255,0.9);
	-moz-transition-delay: 0s, 0.2s;
	-o-transition-delay: 0s, 0.2s;
	-webkit-transition-delay: 0s, 0.2s;
	-ms-transition-delay: 0s, 0.2s;
	transition-delay: 0s, 0.2s;
}
.menu-toggle.is-clicked span::before {
	top: 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
.menu-toggle.is-clicked span::after {
	bottom: 0;
	-webkit-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

#main-nav-wrap {
	display: block;
	width: 100%;
	font-family: "poppins-medium", sans-serif;
	font-size: 1.5rem;
	position: absolute;
	top: 100%;
	left: 0;
}

.main-navigation {
	background: #ffffff;
	padding: 24px 30px 42px;
	margin: 0;
	width: 100%;
	height: auto;
	clear: both;
	display: block;
}
.main-navigation > li {
	display: block;
	height: auto;
	text-align: left;
	padding: 0;
}
.main-navigation li a {
	display: block;
	color: #000000;
	width: auto;
	padding: 15px 0;
	line-height: 16px;
	border: none;
}
.main-navigation li a:hover {
	color: #3273dc;
	padding-left: 1rem;
}
.main-navigation li.current > a {
	background: none;
	color: #3273dc;
}
.expand-enter-active,
.expand-leave-active {
  transition: height 1s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
