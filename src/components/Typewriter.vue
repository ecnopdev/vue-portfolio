<template>
    <span class="type-text reverse-typewrite">{{message}}</span>
</template>

<script>
export default {
  data() {
    return {
      message: 'ecnoP'
    };
  },
  mounted: function(){
      setTimeout(()=>{
          this.message = 'Ponce';
      },2200)
  }
};
</script>

<style scoped>  
.type-text{
    width:0em;
    display:inline-block;
    position:relative;
    overflow:hidden;
    white-space:nowrap;
    border-right: 2px solid rgba(0,0,0,.75);
    top:7px
}
  
 .reverse-typewrite{
    animation: typewriter 3s steps(5) normal forwards,
               cursorBlink 600ms steps(60) infinite normal;
  }
  
  @keyframes typewriter {    
    0%{
        width:0em;
    }
    10%{
        width:2.9em;
    }
    60%{
        width:2.9em;
    }
    70%{
        width:0em;
    }
    85%{
        width:2.9em;
    }
    90%{
        width:2.9em; 
    }
    100%{
        width:2.9em;
    }
    
  }
  
  @keyframes cursorBlink{
    from {border-right-color:rgba(0,0,0,.75)}
    to {border-right-color:transparent}
  }
  
</style>