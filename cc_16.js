//Task 2
function fetchProductsThen() {
    //Using fetch and then to get product data from website
    fetch(`https://www.course-api.com/javascript-store-products`)  
    .then(output => {
        return output.json()
    })

    //Logging each product name
    .then(data => {
        data.forEach(product => {console.log(product.fields.name)})
    })

    //Using catch to log any errors
    .catch(error => {
        console.error(`Error`, error)
    })
}

//Task 3
    //Fetching products with async/await
async function fetchProductsAsync() {
    try {
        const output = await fetch(`https://www.course-api.com/javascript-store-products`)
        const data = await output.json()
        displayProducts(data)
    }
    catch(error) {
        handleError(error)
    }
}
    //Helper function to render products on page
    function displayProducts(products) {
        products.forEach(product => {console.log(product.fields.name)})
    }

    //Handle error
    function handleError(error) {
        console.error(`Error`)
    }