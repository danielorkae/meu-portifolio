<template>
    <section id="about" class="section">
        <div class="section-intro container">
   			<h5>Sobre mim</h5>
   			<h1>Deixe me falar um o pouco de mim</h1>
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
                                <strong>HTML5</strong>
                                <progress class="progress is-small" value="90" max="100">15%</progress>
                            </li>
                            <li>
                                <strong>css3</strong>
                                <progress class="progress is-small" value="68" max="100">15%</progress>

                            </li>
                            <li>
                                <strong>Javascript</strong>
                                <progress class="progress is-small" value="67" max="100">15%</progress>
                            </li>
                             <li>
                                <strong>VueJS</strong>
                                <progress class="progress is-small" value="80" max="100">15%</progress>
                            </li>
                            <li>
                                <strong>PHP</strong>
                                <progress class="progress is-small" value="85" max="100">15%</progress>
                            </li>
                            <li>
                                <strong>Laravel</strong>
                                <progress class="progress is-small" value="65" max="100">15%</progress>
                            </li>
                            <li>
                                <strong>Codeigniter</strong>
                                <progress class="progress is-small" value="90" max="100">15%</progress>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>
<style scoped>
#about{
    background-color: white;
}
.section-intro>h1{
    color: #000000 !important;
}
.lead{
    text-align:left;
    padding: 0 8rem 0 4rem;
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
#full-profile .info-list li a{
    font-family: "poppins-bold", sans-serif;
    text-transform: uppercase;
    font-size: 1.0rem;
    font-weight: 600;
    padding: 1.5rem;
}
#full-profile .info-list li strong {
	font-family: "poppins-bold", sans-serif;
	color: #313131;
	text-transform: uppercase;
	letter-spacing: .05rem;
	font-size: 1.0rem;
	line-height: 3rem;
}
#full-profile .info-list li span {
	display: block;
	font-family: "poppins-regular", sans-serif;
	color: #888888;
	font-size: 1rem;
	line-height: 1;
}

.button{
    border-radius: 0;
}
    
</style>