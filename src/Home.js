import image from './homeimg.jpg';

function Home(){
    return(
            <div className="home">
        <div className="home-header">
            <h1 className="home-title">Welcome to Sweet Island!</h1>
            <h2 className="home-subtitle">We Provide Beautiful And Delicious Cakes And Desserts</h2>
            <h2 className="home-subtitle">In Toronto And Surrounding Areas</h2>
        </div>
        <div className="home-block">
            <h3 className="home-text">We offer a wide selection of Gluten Free,Dairy Free, Nut Free and Vegan options.</h3>
            <img src={image} alt="cake" width="300px"/>
        </div>
        </div>
    )
}

export default Home;