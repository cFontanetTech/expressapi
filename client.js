const baseUrl = 'http://localhost:8080'

export async function postPizza(){
    const pizza = {
        name:'carbonara'
    }
    const response = await fetch(`${baseUrl}/pizzas`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(pizza)
    })
    const data = await response.json();
    console.log(data)
}