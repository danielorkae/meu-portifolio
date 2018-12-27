<template>
    <transition name="bounce"> 
        <div v-show="active" :id="id" :class="['modal','is-active']">
            <div class="modal-background">{{background}}</div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{title}}</p>
                    <button class="delete" aria-label="close" @click="OpenClose()"></button>
                </header>
                <section class="modal-card-body">
                    {{body}}
                </section>
                
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props:['id','background','title','body'],
    created(){
        this.$root.$on(this.id+'-open',()=>{
            this.OpenClose();
        });
        this.$root.$on(this.id+'-close',()=>{
             this.OpenClose();
        });
    
    },
    data(){
        return{
            active:false
        }
    },
    methods:{
        OpenClose(){
            this.active = !this.active;
        }
    }
}
</script>