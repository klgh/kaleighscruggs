import React from "react"
import PageLayout from "../components/page-layout"


const ContactPage = () => (
    <PageLayout>
        <div className="home-intro">
            <form name="contact" method="POST" data-netlify="true" action="/success">
                <p>
                    <label>Your Name: <input type="text" name="name" required/></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" required/></label>
                </p>
                
                <p>
                    <label>Message: <textarea name="message" required></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    </PageLayout>
)

export default ContactPage

