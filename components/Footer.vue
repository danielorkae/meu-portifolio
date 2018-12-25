<template>
    <footer class="footer">
		<div class="container">
			<div class="content columns">
				<div class="column">
					<div class="footer-social">
						<ul>      
							<li><a target="_blank" href="https://github.com/Nargarath"><i class="fa fa-github"></i></a></li>  
							<li><a target="_blank" href="https://www.linkedin.com/in/mateus-cordeiro-736b83169/"><i class="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="column">
					<div class="copyright">
						<span>© Copyright CordeiroDev 2018.</span> 
						<span><a href="http://cordeirodev.com/"><img class="logo invert" src="~/assets/img/logo.png" ></a></span>	   	      
					</div>   
				</div>
			</div>
		</div>
		
   </footer>
</template>

<style>


body{
	background-color: #151515;
}

footer{
	color:#6e6e6e;
	background-color: #151515 !important;
}
footer .copyright span {
	display: inline-flex;

}
footer .copyright{
	display: flex;
	align-items: center;
	justify-content: center;
}
.invert {
	filter: brightness(0) invert(1);
}
footer .copyright span::after {
	content: "|";
	display: inline-flex;
	
	padding: 0 1rem 0 1.2rem;
	color: #6e6e6e;
}
footer .copyright span:last-child::after {
	display: none;
}
.fa:hover{
	color: #3273dc;

}

.text-center{
	text-align:center;
}

.logo{
	width:100px;
	height:50px;

}
.footer-social{
	display: flex;
	align-items: center;
	justify-content: center;
}
.footer-social ul{
    font-size: 2.1rem;
    margin: 0;
    padding: 0;
	list-style: none;
    padding: 0;
    position: relative;
    top: -.3rem;
}
.footer-social ul > li {
    display: inline-flex;
}
.fa-github{
	color:white;
}
.fa-linkedin{
	color: white;
}
</style>
