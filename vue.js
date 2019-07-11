const app = new Vue({
    
    el : '#app',
    
	data : { 
        titulo1: 'Filtro procesador placa y ram',
		titulo2: 'Administrador',
        id: '', 
        name: '', 
        type: '',
        compatibility: [],
        supplier: [],
        items: [],
        productSelect: '',
        total: 0,
		colors: [],
		selectedColor: '',
        color: false,
        result: false
    },
    
	methods : {

		agregar () {

			if ( this.id !== '' && this.name !== '' && this.compatibility !== '' && this.supplier !== '' && this.type !== '' ){

				this.items.push( 
                    { 
                        id: this.id, 
                        name : this.name, 
                        compatibility : this.compatibility.split(','), 
                        supplier: this.supplier, 
                        type: this.type 
                    } 
                );     

				this.id = '';  
				this.name = ''; 
				this.compatibility = []; 
				this.supplier = [];  
                this.type = ''; 
                
                this.localStorage();
                
            }
            
        },

        ver(e) { 

            let myProducts = JSON.parse(localStorage.getItem('db'));

            let prodId = e.currentTarget.getAttribute('data-id');
             
            myProducts = myProducts.filter( ({compatibility}) => {

                return compatibility.includes(prodId); 

            });
 
            this.result = true;

            this.productSelect = myProducts.name;

            myProducts = '';

            console.log(this.productSelect);

        },
        
		editar (index) {   
			this.localStorage();	
        }, 
        
		eliminar (index) {

            var dlt = confirm('sure?');
            
            if( dlt ){
                this.items.splice( index, 1 );
                this.localStorage();
            }

        },
        
		localStorage () {
            localStorage.setItem('db', JSON.stringify(this.items) );  
        },

        download () {

            let myWindow = window.open(""); 
            myWindow.document.write("<code>" + localStorage.getItem('db') + "</code>");   
        }

    },  

	mounted: function(){

		let colors = ['pink','yellow','purple'];
    	
    	this.colors = Object.assign({}, this.colors, colors);
    	this.selectedColor = this.colors[0];
	
	},

	created : function() {

        let db = JSON.parse(localStorage.getItem('db'));
        
		if(db === null){
			this.items = [];
		}else{
			this.items = db;
        }
        
    }
    
});