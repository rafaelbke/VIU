new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		perigo:true,
		classe3:'',
		classe4:'',
		classe5:'true',
		cor5:'',
		width:'0',
		estilo5:{
			width:'100px',
			height:'100px',
		}
		
		

	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe1 =this.classe1 =='destaque'
				? 'encolher' : 'destaque'
			},10000)

		},
		iniciarProgresso() {
			let valor=0
			const temporizador =setInterval(() =>{
				valor += 1
				this.width=`${valor}%`
				if(valor == 100) clearInterval(temporizador)
			},100)
		},
		
		setPerigo(event){
			if(event.perigo.value =="true"){
				this.perigo = true
			} else if(event.target.value =="false")
				this.perigo = false
		}
		
		
	
	},
	


})

