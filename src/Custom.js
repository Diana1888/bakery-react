import { useState } from "react";
import { gallery } from "./gallery";
import next from "./next.png";
import back from "./back.png"

function Custom() {
    const [customCake, setCustomCake] = useState(0);
    const {slide} = gallery[customCake];

    const nextSlide =() =>{
        setCustomCake(customCake =>{
            customCake++;
            if(customCake > gallery.length-1){
                customCake =0;
            }
            return customCake
        })
    }

    const previousSlide =() =>{
        setCustomCake(customCake => {
            customCake--;
            if(customCake < 0){
                return gallery.length -1;
            }
            return customCake;
        })
    }
    
    return(
        <div className="container custom">
            <h1>Custom Cakes Gallery</h1>
            <h2 className="custom-text">If you can imagine it… We can create it!</h2>
            <div className="custom-cake">
            <button onClick={previousSlide} className="btn-click"><img src={back} alt="btn-back" width="100px"/></button>
            <img src={slide} alt="slideshow" height="400px" width="300px"/>
            <button onClick={nextSlide} className="btn-click"><img src={next} alt="btn-next" width="100px"/></button>
            </div>
        </div>
    )
}

export default Custom;