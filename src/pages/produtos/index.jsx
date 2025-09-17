import {useState, useEffect} from 'react'
import axios from 'axios'

const produtos = () => {
  const [pizzas, setPizzas] = useState([])
 // comsumir rotas com lista de produtos
   axios.get("http://viacep.com.br/ws/01010000/json")
   .then(response=>{
        console.log(response.data)
   })
   .catch(error=>{console.log(error)})
   
    // interaçao da lista de pizzas - pizza a pizza
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
            <h3>listagem de produtos</h3>
            <ul>
              {listaPizzas}
            </ul>
        </div>
    )
}

export default produtos