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
