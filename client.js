export  async function postPizza(){
    const pizza = {
        name:'carbonrar'
    }
    const response = await fetch('http://localhost:8080/pizzas',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(pizza)
    })
    const data = await response.json();
    console.log(data)
}