import swal from 'sweetalert';

function ContactUs() {
    const onSubmit =(e) =>{
        e.preventDefault();
        swal("Your message was sent!", "Thank you!", "success");
    }

    return(
        <div className="container contacts">
            <h1>Contact us</h1>
            <form onSubmit={onSubmit}>
                <input className="input-text email" type="email" placeholder="Your email" required />
                <textarea className="input-text message" type="text" placeholder="Your message" required/>
                <button className="btn-form">Submit</button>
            </form>
            <div className="contact-info">
                <p>Call us: +1(123)456-78-90</p>
                <p>E-mail us: sweetisland@gmail.com</p>
                <p>Find us: Toronto, M2M 4J4, Ontario</p>
            </div>
        </div>
    )
}

export default ContactUs;