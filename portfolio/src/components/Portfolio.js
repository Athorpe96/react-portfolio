import React from "react"
import "./../index.css"
import { motion } from "framer-motion"

const boxVariants = {
    hover: {
        scale: 1.06,
        transition: {
            type: "spring",
        },
    },
}

const Portfolio = () => {
    return (
        <section
            data-aos="fade-up"
            className="portfolio-container"
            name="portfolio"
            id="portfolio"
        >
            <h1 className="heading">Projects I have Built</h1>
            <div className="projects-container">
                {/* Project 1 - Corona Tracker */}
                <motion.div
                    className="projects"
                    variants={boxVariants}
                    whileHover="hover"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/94Cooper94/foodiesUnite"
                    >
                        <div className="project-images" id="coronaTracker"></div>
                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>project 1</h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/94Cooper94/foodiesUnite"
                            >
                                <i className="fab fa-github" title="github repo" id="github">
                                    {" "}
                                </i>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href=" https://94cooper94.github.io/foodiesUnite/"
                                target="_blank"
                            >
                                {" "}
                                <i
                                    className="fas fa-external-link-alt"
                                    title="live preview"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 2 - Shoe Store */}
                <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Athorpe96/codegenerator"
                    >
                        <div className="project-images" id="shoeStore"></div>
                    </a>

                    <div className="project-links">
                        <div className="text">
                            <h3>Project 2</h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/Athorpe96/codegenerator"
                            >
                                <i className="fab fa-github" title="github repo" id="github">
                                    {" "}
                                </i>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://athorpe96.github.io/codegenerator/."
                                target="_blank"
                            >
                                {" "}
                                <i
                                    className="fas fa-external-link-alt"
                                    title="live preview"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 3 - Quiz App */}
                <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://our-quiz.web.app/"
                    >
                        <div className="project-images" id="quizApp"></div>
                    </a>
                    <div className="project-links">
                        <div className="text">
                            <h3>3</h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/developer-junaid/Quiz-Application"
                            >
                                <i className="fab fa-github" title="github repo" id="github">
                                    {" "}
                                </i>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://our-quiz.web.app/"
                                target="_blank"
                            >
                                {" "}
                                <i
                                    className="fas fa-external-link-alt"
                                    title="live preview"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 4 - Explore matiari */}
                <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="http://explore-matiari.surge.sh/"
                    >
                        <div className="project-images" id="matiari"></div>
                    </a>
                    <div className="project-links">
                        <div className="text">
                            <h3>4</h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/developer-junaid/matiariWebsite"
                            >
                                <i className="fab fa-github" title="github repo" id="github">
                                    {" "}
                                </i>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="http://explore-matiari.surge.sh/"
                                target="_blank"
                            >
                                {" "}
                                <i
                                    className="fas fa-external-link-alt"
                                    title="live preview"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 5 - Expense Tracker */}
                <motion.div
                    variants={boxVariants}
                    whileHover="hover"
                    className="projects"
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://your-expense-tracker.web.app/"
                    >
                        <div className="project-images" id="expenseTracker"></div>
                    </a>
                    <div className="project-links">
                        <div className="text">
                            <h3>5</h3>
                        </div>
                        <div className="icons">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/developer-junaid/Expense-Tracker"
                            >
                                <i className="fab fa-github" title="github repo" id="github">
                                    {" "}
                                </i>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="https://your-expense-tracker.web.app/"
                                target="_blank"
                            >
                                {" "}
                                <i
                                    className="fas fa-external-link-alt"
                                    title="live preview"
                                    id="live"
                                ></i>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/"
                className="button-link"
            >
                <button className="button">More Projects</button>
            </a>
        </section>
    )
}

export default Portfolio
