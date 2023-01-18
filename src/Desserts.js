import { useState } from "react";

function Desserts({products}) {

    const [showText, setShowText] = useState(false);

    const showTextClick =(element) =>{
        element.readMore = !element.readMore;
        setShowText(!showText)
    }
    return(
        <div className="desserts">
            {products.map((element =>{
                const {id, name, image, price, description, readMore} = element;
                return(
                    <div className="container">                    
                    <div key={id} className="card">
                        <img src={image} alt="dessert" width="300px" height="425px"/>
                        <div ey={id} className="card-info">
                            <h4>{name}</h4>
                            <h4>${price}</h4>
                            <p>{readMore ? description : description.substring(0,170) +"..."}<button onClick={() => showTextClick(element)} className="btn-readmore">{readMore ? "Read less" : "Read more"}</button></p>
                        </div>
                    </div>
                    </div>
                )
            }))}

        </div>
    )
}

export default Desserts;