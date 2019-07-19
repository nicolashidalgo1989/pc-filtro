document.addEventListener( 'DOMContentLoaded', function(){

    let products = document.getElementById('products');
    products.innerHTML = '';

    for(let i = 0; db.length > i; i++){ 

        products.innerHTML += `

            <div class="col-sm-6">
                <div class="${db[i].color} rounded p-4 mb-4">
                    <small class="d-block text-uppercase mb-3 small">
                        ${db[i].type}
                    </small>   
                    <h4 class="text-dark font-weight-light h5 mb-4">
                    ${db[i].name} <small class="d-block font-weight-bold text-dark mt-1">${db[i].id}</small>
                    </h4>  
                    <button class="btn btn-dark productItem" data-id="${db[i].id}">Ver compatibilidad</button>
                </div>
            </div>

        `

    }

    let insertProducts = (db) => {

        let showResults = document.getElementById('show-results');

        showResults.innerHTML = `

            <div class="bg-dark p-3 rounded text-light position-fixed">
                        
                <h2 class="mb-5 font-weight-normal "> 
                <span id="prodSelect"></span> es compatible con:</h2>

                <div id="results" class="row"></div>
                    
                <h3 class="font-weight-normal h4 d-none">
                    Total: <span id="total"></span>
                </h3>

            </div>

        `;

        let results = document.getElementById('results');
        results.innerHTML = ''; 

        for(let i = 0; db.length > i; i++){

            results.innerHTML += `

                <div class="col-12">
                    <div class="${db[i].color} rounded p-2 mb-4">
                        <h4 class="text-dark font-weight-light h6 m-0">
                        ${db[i].name}
                        </h4>   
                    </div> 
                </div>   

            `

        }

    };

    document.querySelectorAll('.productItem').forEach((item) => {

        let myProducts = db;  

        item.addEventListener('click', (e) => {

            e.preventDefault();

            let prodId = e.currentTarget.getAttribute('data-id');

            myProducts = myProducts.filter( ({id, compatibility, type}) => {

                return compatibility.includes(prodId); 

            });   

            if( myProducts.length !== 0 ) {

                insertProducts(myProducts); 

            } else {

                results.innerHTML = `

                    <div class="col-12">
                        <h3 class="h5 text-danger mb-5">
                        Producto no compatible
                        </h3>
                    </div>

                `; 

            }

        });

    });

});