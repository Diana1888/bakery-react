import { data } from "./data";

function Buttons({filteredDessert, alldesserts}){
    return(
        <div className="container">
            <div className="buttons">
            <button className="btn-filter" onClick={() => alldesserts(data)}>All Products</button>
            <button className="btn-filter" onClick={() => filteredDessert("cake")}>Cakes</button>
            <button className="btn-filter" onClick={() => filteredDessert("cupcake")}>Cupcakes</button>
            <button className="btn-filter" onClick={() => filteredDessert("macaron")}>Macarons</button>
            <button className="btn-filter" onClick={() => filteredDessert("tart")}>Tarts</button>
            </div>
        </div>
    )
}

export default Buttons;