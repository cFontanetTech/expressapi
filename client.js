const baseUrl = 'http://localhost:8080'

export async function postPizza() {
    const pizza = {
        name: 'carbonara'
    }
    const response = await fetch(`${baseUrl}/pizzas`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(pizza)
    })
    const data = await response.json();
    const {status} = response;
    const type = "POST"
    console.log({
        type,
        status,
        data
    })
}

export async function getPizzas(){
    const response = await fetch(`${baseUrl}/pizzas`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
    const data = await response.json();
    const {status} = response;
    const type = "GET"
    console.log({
        type,
        status,
        data
    })
}

export async function getPizza(id){
    const response = await fetch(`${baseUrl}/pizzas/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
    const data = await response.json();
    const {status} = response;
    const type = "GET by ID"
    console.log({
        type,
        status,
        data
    })
}

export async function putPizza(id){
    const pizza = {
        name: 'hawaiana'
    }
    const response = await fetch(`${baseUrl}/pizzas/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(pizza)
    })
    const {status} = await response;
    const type = "PUT"
    console.log({
        type,
        status
    })
}

export async function deletePizza(id){
    const response = await fetch(`${baseUrl}/pizzas/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const {status} = await response;
    const type = "DELETE"
    console.log({
        type,
        status
    })
}