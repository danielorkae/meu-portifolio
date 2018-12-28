<template>
    <section id="contact" class="section">
        <div class="section-intro container">
   			<h5>Contato</h5>
   			<h1>Sempre aberto para propostas</h1>
   			<p class="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
   		</div> 
        <div class="contact-form container">
            <div class="">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="text" placeholder="Nome" aria-label="Nome" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="email" placeholder="Email" aria-label="Email">
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="text" placeholder="Assunto" aria-label="Assunto">
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea" placeholder="Mensagem" aria-label="Mensagem"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="column is-full">
                    <div class="control">
                        <button class="button is-light is-large is-fullwidth">Enviar</button>
                    </div>
                </div>
            </div> 
        </div>
        <div class="contact-types">
            <div class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <div class="icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <h5 class="heading">Onde me achar?</h5>
                        <p>
                            Natal/RN
                        </p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <div class="icon">
                            <i class="fa fa-envelope-o"></i>
                        </div>
                        <h5 class="heading">envie-me um email</h5>
                        <p>contato@cordeirodev.com</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <div class="icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <h5 class="heading">ligue-me</h5>
                        <p>(84) 99868-8427</p>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
</template>

<style scoped>
    .button{
        border-radius: 0;
        font-family: "poppins-bold", sans-serif;
        text-transform: uppercase;
        font-size: 0.9rem;
        padding: 1.4rem 2rem 2.3rem 2rem;
        border-radius: 0;
        border-color: rgba(255, 255, 255, 0.3);
        border-width: 2px;
    }
    
    #contact .section-intro p {
        color: rgba(255, 255, 255, 0.7);
    }
    @media (min-width: 430px) 
    {
   
        #contact .section-intro{
            padding: 0 2rem 0 2rem;
        }
            
        #contact .contact-form{
            padding: 0 2rem 0 2rem;
        }
    }
    @media (min-width: 935px) 
    {
   
        #contact .section-intro{
            padding: 0 8rem 0 8rem;
        }
            
        #contact .contact-form{
            padding: 0 8rem 0 8rem;
        }
    }

   
    .contact-types{
        margin-top:6rem;
        color: #6e6e6e;
    }
    
    .input ,.textarea{
        border-style: none none solid none;
        border-radius: 0;
        background-color: transparent;
        color: white;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

    }
    .input:focus, .input.is-focused, .input:active, .input.is-active, .textarea:focus, .textarea.is-focused, .textarea:active, .textarea.is-active {
        border-color: #3273dc;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
    .input::placeholder,.textarea::placeholder { 
    color: #8A8787;
    font-size:1rem;
    opacity: 1;
    }
    .input:-ms-input-placeholder ,.textarea:-ms-input-placeholder{ /* Internet Explorer 10-11 */
    color: #8A8787;
    font-size:1rem;
    }

    .input::-ms-input-placeholder,.textarea::-ms-input-placeholder { /* Microsoft Edge */
    color: #8A8787;
    font-size:1rem;
    }
    #contact{
        padding: 4rem 0 3rem 0;
    }
    .level > .level-item{
        padding: 2rem 0 2rem 0;
    }
    .icon{
        margin-bottom: 2.1rem;
    }
    .icon i{
        font-size: 4.2rem;
        color:white;
    }
    .heading{
        display: block;
        font-size: 14px;
        letter-spacing: 1px;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-weight: 900;
        color: rgb(29,130,219);
    }
    .contact-form{
        margin-top: 4rem;
        margin-bottom:6rem;
    }
    
</style>
