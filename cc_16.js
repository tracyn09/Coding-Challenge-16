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
//Task 4 (Selecting parent container + loop through first 5 products)
        const container = document.querySelector(`#product-container`)
        for (let i=0; i < Math.min(5, products.length); i++){
            const product = products[i]

        const productDiv = document.createElement('div')

    //Creating elements for product name, price, and image
        const productName = document.createElement('h3')
        productName.textContent = product.fields.name

        const productPrice = document.createElement('p')
        productPrice.textContent = `$${product.fields.price}`

        const productImage = document.createElement('img')
        productImage.src = product.fields.image[0].url
        productImage.alt = product.fields.name
    
    //Appending elements and productDiv to container
        productDiv.appendChild(productName)
        productDiv.appendChild(productPrice)
        productDiv.appendChild(productImage)
        container.appendChild(productDiv)
    }
    }
    //Handle error
        function handleError(error) {
            console.error(`Error`)
    }
    

