const produtos = () => {


    // Objeto de Lista de pizzas
    const pizzas = [
        'pizza muçarela',
        'pizza calabresa',
        'pizza portuguesa', 'pizza baiana', 'pizza frita'
    ]
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