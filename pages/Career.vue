<template>
    <section id="career" class="section grey-section">
        <div class="section-intro container">
   			<h5>Resumo</h5>
   			<h1>Resumo das minhas experiências e formação acadêmica</h1>
   		</div> 
        <div class="career-subsec">
            <span>Experiências</span>
        </div>
        <div class="career-subsec">
            <span>Formação Acadêmica</span>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.career-subsec{
    margin-top:4rem;
    display:flex;
    justify-content: center;
}
.career-subsec span{
    text-align: center;
    color: #3273dc;
    font-family: "poppins-semibold", sans-serif;
    font-style: normal;
    text-rendering: optimizeLegibility;
    margin-bottom: 2.1rem;
    font-size: 1.5rem;
    line-height: 1.25;
}
.section-intro{
    max-width: 850px;
}
.section-intro>h1 {
    color: #000000 !important;
}
</style>