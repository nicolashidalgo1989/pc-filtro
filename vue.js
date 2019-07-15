const app = new Vue({

    el: "#app",

    data: {

        titulo1: "Filtro procesador placa y ram",
        titulo2: "Administrador",

        id: "",
        name: "",
        compatibility: [],
        suppliers: [{
            name: "",
            price: ""
        }],
        type: "",
        colors: [ "aqua", "cyan", "purple", "green", "yellow", "sky", "orange", "pink" ],
        color: '',

        items: [],
        productSelect: "", 
        result: false,
        comp: [],
        total: 0 

    },

    methods: {

        agregarSupplier() {
            this.suppliers.push({
                name: "",
                price: ""
            });
        },

        agregar() {

            if (this.id !== "" && this.name !== "" && this.compatibility !== "" && this.suppliers !== "" && this.type !== "") {

                this.items.push({
                    id: this.id,
                    name: this.name,
                    compatibility: this.compatibility.split(","),
                    suppliers: this.suppliers,
                    type: this.type,
                    color: this.color
                });

                this.id = "";
                this.name = "";
                this.compatibility = [];
                this.suppliers = [{
                    name: "",
                    price: ""
                }];
                this.type = "";
                this.color= ""

                this.localStorage();

            }

        }, 

        add(){

            console.log("agregado");

        },

        verCompatibilidad(e) { 
             
            //retornamos json desde localstorage
            myProducts = JSON.parse(localStorage.getItem("db"));
 
            //retornamos valor de atributo data-id del boton clickeado 
            let prodId = e.currentTarget.getAttribute("data-id");

            //filtramos productos por su id compatible
            myProducts = myProducts.filter(({ 
                compatibility
            }) => {

                return compatibility.includes(prodId);

            });
 
            //mostramos nombre del producto clickeado
            myName = e.currentTarget.parentElement.children[1].innerText; 

            //mostramos cuadro de compatibilidades
            this.result = true; 

            //mostramos cuadro de compatibilidades
            this.productSelect = myName;
   
            if(myProducts.length != 0){

                this.comp.push( {
                    id: myProducts[0].id,
                    name: myProducts[0].name
                });

            } 

            localStorage.setItem("comp", this.comp);

            console.log(JSON.stringify(this.comp));
             
        },

        editar(e) {
             
            console.log(e.currentTarget); 
        },

        eliminar(index) {

            let dlt = confirm("sure?");

            if (dlt) {

                this.items.splice(index, 1);
                this.localStorage();
            }

        },

        eliminarTodo(index) {

            let dlt = confirm("sure?");

            if (dlt) {  
                localStorage.clear("db");
                this.localStorage();
            }

        },
 
        localStorage() {
            localStorage.setItem("db", JSON.stringify(this.items));
        },

        download() {

            let myWindow = window.open("");
            myWindow.document.write("<code>" +  localStorage.getItem("db") + "</code>");

        }

    },  

    created: function () {

        let db = JSON.parse(localStorage.getItem("db"));

        if (db === null) {

            this.items = [];

        } else {
            
            this.items = db;

        }

    }

});