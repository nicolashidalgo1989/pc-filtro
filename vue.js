const app = new Vue({

    el: "#app",

    data: { 

        colors: [ "aqua", "cyan", "purple", "green", "yellow", "sky", "orange", "pink" ],
        color: "",
        comp: [],
        compatibility: [],
        id: "",
        terms: false,
        items: [], 
        name: "",
        result: false,
        suppliers: [{ name: "", price: "" }],
        total: 0,
        type: ""

    },

    methods: {

        agregarSupplier() {
            this.suppliers.push({
                name: "",
                price: ""
            });
        },

        addDB() {
  
            this.items.push({
                id: this.id,
                name: this.name,
                compatibility: this.compatibility,
                suppliers: this.suppliers,
                type: this.type,
                color: this.color,
                terms: this.terms
            });

            this.id = "";
            this.name = "";
            this.compatibility = [];
            this.suppliers = [{ name: "",  price: "" }];
            this.type = "";
            this.color= "";

            this.localStorage(); 

        },

        add(){

            console.log("agregado");

        },

        verCompatibilidad(e) { 

            this.comp = [];

            //retornamos json desde localstorage
            let myProducts = JSON.parse(localStorage.getItem("db"));
             
            //retornamos valor de atributo data-id del boton clickeado 
            let prodId = e.currentTarget.getAttribute("data-id");

            //filtramos productos por su id compatible
            myProducts = myProducts.filter(({compatibility}) => { 
                return compatibility.includes(prodId);
            });

            //mostramos cuadro de compatibilidades
            this.result = true;

            //mostramos nombre del producto clickeado
            myName = e.currentTarget.parentElement.children[1].innerText;
            this.name = myName;

            for( var x= 0; myProducts.length > x; x++){ 
                this.comp.push(myProducts[x]); 
            };

            console.log(myProducts);

        },

        editar(index) {

            if(!this.items[index].terms){

                this.items[index].terms = true;

            } else {

                this.changeDB(index);
                this.items[index].terms = false;

            }

        },

        changeDB(index) {
            
            let _this =  this.items[index];

            _this.id = _this.id;  
            _this.name = _this.name;
            _this.compatibility = _this.compatibility;
            _this.suppliers = _this.suppliers;
            _this.type = _this.type;
            _this.color = _this.color;
            _this.terms = false;
            
            this.localStorage();

        },

        eliminar(index) {

            let dlt = confirm("sure?");

            if (dlt) {

                this.items.splice(index, 1);
                this.localStorage();

            }

        },

        eliminarTodo() {

            let dlt = confirm("sure?");

            if (dlt) {  

                let rly = confirm("really?");

                if(rly){
                    this.items = '';
                    this.localStorage();
                }

            }

        },

        localStorage() {
            localStorage.setItem("db", JSON.stringify(this.items));
        },

        download() {

            let myWindow = window.open("");
            myWindow.document.body.innerHTML = `
                <code> ${ localStorage.getItem("db") }  </code>
            `;

        } 

    },

    computed:  {

        isDisabled: function(){
            return !this.terms;
        },

        searchItems : function(){  
            return this.items.filter( (prod)  => prod.name.includes( this.name ));
        }

    },

    created: function () {

        let db = JSON.parse(localStorage.getItem("db"));

        if (db === null) {

            this.items = [];

        } else {

            this.items = db;
            //const () = this.items;
            console.log(  this.name );

        }

    }

});