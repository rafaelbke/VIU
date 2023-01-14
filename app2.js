new Vue({
    el:'#app',
    data: {
        contador:0,
        contador2:0,
    },
    computed: {
        resultado(){
        console.log('metodo')
        return this.contador ==7 ?
         'igual a 7':'Menor que 7'
        }
    },
    watch:{

    contador(novo, antigo){

        console.log(novo, antigo)
        const instanciaVue=this
        setTimeout(function(){instanciaVue.contador=0},200000)
        
        //pode ser usado o watch no exemplo de cidade quando o cliente
        //digita a cidade e o what ja fica monitarano faz uma requisição ajax
        // para pegar as cidades daquele estado escolhido 

    }
                 
         

    },


    

     methods:{
        aumentar(){
        this.contador++

    },
    aumentar2(){
        this.contador2++

    },
    

    diminuir(){
    this.contador--

    },

    // aqui poderiamos ter usad afunção cumputed que não intendi muito bema diferença//
  /*   resultado(){
        console.log('metodo')
        return this.contador >=5 ?
         'Maior ou igual a 5':'Menor que 5' 

    }*/



 }



})
