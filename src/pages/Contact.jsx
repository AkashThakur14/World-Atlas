export const Contact = () => {

    const handelFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // Get form data
        const formInputData = Object.fromEntries(formData.entries()); // Convert form data to an object
        console.log(formInputData); // Log the data
        e.target.reset();
    }
    return (
        <section className="contact-section container">
            <div className="form-section">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handelFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" name="message" placeholder="Enter your message" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}