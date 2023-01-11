import { useState } from "react";
import { HomeBoxProducts } from "../styles/styles";

function BoxProducts({ name, linkImage, value, categ }) {

    const [quantity, setQuantity] = useState(0);

    function muda() {
        console.log(quantity);
    }
    

    return (
        <HomeBoxProducts className="box">
            <img src={linkImage} alt={name} />
            <h2>{categ}</h2>
            <h3 className="name-perf">{name}</h3>
            <div className="content">
                <div>
                    <button onClick={() => setQuantity(quantity === 0 ? 10 : quantity - 1)} className="effectplus">-</button>
                    <input type="number" value={quantity} onChange={muda} />
                    <button onClick={() => setQuantity(quantity === 10 ? 0 : quantity + 1)} className="effect">+</button>
                </div>
                <span>${value}</span>
                <a id="addButton" href="#">Adicionar</a>
            </div>
        </HomeBoxProducts>
    )
}

/*  function addNumber(index) {
        const input = document.getElementsByClassName("select")[index];
 
        if(input.value < 10) {
            input.value++
        } else {
            input.value = 10;
        }
    }
 
    function removeNumber(index) {
        const input = document.getElementsByClassName("select")[index];
 
        if(input.value > 0 && input.value <= 10) {
            input.value--
        } else if(input.value = 0) {
            input.value === 0;
        }
    } 
*/

export default BoxProducts;