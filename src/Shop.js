import { data } from './data';
import { useState } from 'react';
import Buttons from './Buttons';
import Desserts from './Desserts';
import './App.css';


function Shop() {

    const [desserts, setDesserts] = useState(data);

    const chosenDessert = (searchTag) =>{
        const newDessert = data.filter(element => element.searchTag === searchTag);
        setDesserts(newDessert);
    }

    return(
        <div>
        <div classname="container">
            <h1>All Products</h1>
        </div>
        <Buttons filteredDessert = {chosenDessert} alldesserts = {setDesserts}/>
        <Desserts products = {desserts} />   
        </div>
    )
}

export default Shop;