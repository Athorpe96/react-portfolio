import React from "react";
import "./../index.css";

const Skills = () => {
    return (
        <section
            data-aos="fade-right"
            className="skills-container"
            name="skills"
            id="skills"
        >
            <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>

            <div className="techs">
                <li>
                    <i className="fab html fa-html5"></i> <p>HTML5</p>
                </li>
                <li>
                    <i className="fab css fa-css3"></i>
                    <p>CSS3</p>
                </li>
                <li>
                    <i className="fab sass fa-sass"></i>
                    <p>Bootstrap</p>
                </li>
                <li>
                    <i className="fab bootstrap fa-bootstrap"></i>
                    <p>Jquery</p>
                </li>
                <li>
                    <i className="fab javascript fa-js"></i>
                    <p>Javascript</p>
                </li>
                <li>
                    <i className="fab react fa-react"></i>
                    <p>React</p>
                </li>
                <li>
                    <i className="fab typescript fa-react"></i>
                    <p>Node.js</p>
                </li>
                <li>
                    <i className="fab python fa-python"></i>
                    <p>MySQL</p>
                </li>
            </div>
        </section>
    );
};

export default Skills;
