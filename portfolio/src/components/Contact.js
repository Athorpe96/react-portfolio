import React from "react";
import "./../index.css";

const Contact = () => {
    return (
        <section
            data-aos="zoom-in"
            className="contact-container"
            name="contact"
            id="contact"
        >
            <div className="profile-image">

            </div>
            <h1 className="heading">Contact</h1>

            <div className="cards-container">
                {/* Card 1 - Email */}
                <div className="cards">
                    <div className="contact-icons">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                        <span>Email</span>
                    </div>
                    <div className="contact-links">
                        <span>Austin96.at@gmail.com</span>
                    </div>
                </div>

                {/* Card 2 - Social Media */}
                <div className="cards">
                    <div className="contact-icons">
                        <i className="fas fa-globe"></i>
                    </div>
                    <div className="contact-text">
                        <span>Social Media</span>
                    </div>
                    <div className="contact-links">

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/Athorpe96?tab=repositories"
                        >
                            <i className="fab fa-github" title="github" id="github"></i>
                        </a>





                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/austin-thorpe-8322b6170/"
                        >
                            <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
                        </a>





                    </div>
                </div>

                {/* Card 3 - Phone */}
                <div className="cards">
                    <div className="contact-icons">
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-text">
                        <span>Phone</span>
                    </div>
                    <div className="contact-links">
                        <span>512-801-4185 </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
