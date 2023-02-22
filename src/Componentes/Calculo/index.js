import './index.css'
import React, {useState} from 'react'



const Calculo = () => {
    const [etanol, setetanol] = useState();
    const [gasolina, setgosolina] = useState();
    

const calculopreco = () => {

    const preco = etanol / gasolina
    preco.toFixed(2)
    if (preco < 0.72){
        alert("O calculo será igual a 0.72.Portanto, Abasteça com álcool")
    }else{
        alert("O calculo será igual a 0.72.Portanto, Abasteça com gasolina")
    }

}

    return(
        <section className='armazenar'>
            <h4>Preço - litro etanol(R$)</h4>
            <input type="number" onChange={(e) => setetanol(+e.target.value)} value = {etanol}/>
            <h4>Preço - litro gasolina(R$)</h4>
            <input type="number" onChange={(e) => setgosolina(+e.target.value)} value = {gasolina}/>
            <button onClick = {calculopreco}>Calcular</button>
        </section>
    )
}

export default Calculo