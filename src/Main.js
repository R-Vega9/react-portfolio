import React, {useState} from "react";
import './Main.css'


function Main(){
    const [toggle, setToggle] = useState(false);

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo"></div>
                    <div>
                        <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo"></div>
                    <div className="hamburger-menu">
                        <div  className={`${toggle ? "hamburger-icon open" : "hamburger-icon"}`} onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`${toggle ? "menu-links open" : "menu-links"}`}>
                        <li><a href="#about" onClick={handleToggle}>About</a></li>
                        <li><a href="#experience" onClick={handleToggle}>Experience</a></li>
                        <li><a href="#projects" onClick={handleToggle}>Projects</a></li>
                        <li><a href="#contact" onClick={handleToggle}>Contact</a></li>
                    </div>
                </div>
            </nav>
            <section id="profile">
                <div className="section__pic-container">
                    <img style={{borderRadius:"50%"}} src="./images/Profile-pic.jpg" alt="Ramon Vega Profile Picture" />
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Ramon Vega</h1>
                    <p className="section__text__p2">Full Stack Software Engineer</p>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onclick="window.open('./assets/resume-example.pdf')"
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={()=>window.location.href="#contact"}>
                        Contact Info
                    </button>
                    </div>
                    <div id="socials-container">
                    <img
                        src="./images/linkedin.png"
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={()=>window.location.href="https://www.linkedin.com/in/ramon-c-vega/"}
                    />
                    <img
                        src="./images/github.png"
                        alt="My Github profile"
                        className="icon"
                        onClick={()=>window.location.href="https://github.com/R-Vega9"}
                    />
                    </div>
                </div>
                </section>
                <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="section__pic-container">
                    <img
                        src="./images/profilepic2.jpeg"
                        alt="Profile picture"
                        className="about-pic"
                    />
                    </div>
                    <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                        <img
                            src="./images/experience.png"
                            alt="Experience icon"
                            className="icon"
                        />
                        <h3>Experience</h3>
                        <p>Frontend Developement <br />Backend Development</p>
                        </div>
                        <div className="details-container">
                        <img
                            src="./images/education.png"
                            alt="Education icon"
                            className="icon"
                        />
                        <h3>Education</h3>
                        <p>Thinkful Engineering Flex Program</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                        I am a dedicated individual with a profound passion for developing applications that have a positive impact on people's lives. 
                        My journey into the world of web development began through self-learning, where I built a foundation. 
                        Eager to deepen my understanding of writing clean and efficient code, I enrolled in a software engineering bootcamp, enriching my expertise.
                        With over two+ years of self-learning and bootcamp experience, I've seamlessly integrated my knowledge into my own business, enhancing the customer experience through innovative solutions. 
                        My ultimate goal is to continually expand my skills in software development, aspiring to contribute to the broader developer community. 
                        I believe that by sharing knowledge and collaborating, we can collectively create meaningful and transformative applications. 
                        Let's code a better future together!
                        </p>
                    </div>
                    </div>
                </div>
                <img
                    src="./images/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={()=>window.location.href="#experience"}
                />
                </section>
                <section id="experience">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>HTML</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>CSS</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>React</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>JavaScript</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>Bootstrap</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>jQuery</h3>
                            </div>
                        </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Backend Development</h2>
                        <div className="article-container">
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>PostgreSQL</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>Node JS</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>Express JS</h3>
                            </div>
                        </article>
                        <article>
                            <img
                            src="./images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>RESTful APIs</h3>
                            </div>
                        </article>
                        </div>
                    </div>
                    </div>
                </div>
                <img
                    src="./images/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={()=>window.location.href="#projects"}
                />
                </section>
                <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                        <img
                            src="./images/todoApp.png"
                            alt="To Do App"
                            className="project-img"
                        />
                        </div>
                        <h2 className="experience-sub-title project-title">To Do Application</h2>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={()=>window.location.href="https://github.com/R-Vega9/todo-app"}
                        >
                            Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={()=>window.location.href="https://todo-app-frontend-ehdq.onrender.com/"}
                        >
                            Live Demo
                        </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                        <img
                            src="./images/reservation.png"
                            alt="Reservation Reservation"
                            className="project-img"
                        />
                        </div>
                        <h2 className="experience-sub-title project-title">Restaurant Reservation</h2>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={()=>window.location.href = "https://github.com/R-Vega9/starter-restaurant-reservation"}
                        >
                            Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={()=>window.location.href = "https://restaurant-reservation-frontend-yk45.onrender.com"}
                        >
                            Live Demo
                        </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                        <img
                            src="./images/welovemovies.png"
                            alt="We Love Movies"
                            className="project-img"
                        />
                        </div>
                        <h2 className="experience-sub-title project-title">We Love Movies</h2>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={()=>window.location.href = "https://github.com/R-Vega9/weLoveMoviesBackend"}
                        >
                            Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={()=>window.location.href = "https://welovemoviesfrontend-0qgn.onrender.com/"}
                        >
                            Live Demo
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <img
                    src="./images/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={()=>window.location.href="#contact"}
                />
                </section>
                <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                    <img
                        src="./images/email.png"
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                    />
                    <p><a href="mailto:vegaramon9@gmail.com">vegaramon9@gmail.com</a></p>
                    </div>
                    <div className="contact-info-container">
                    <img
                        src="./images/linkedin.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p><a href="https://www.linkedin.com">LinkedIn</a></p>
                    </div>
                </div>
                </section>
                <footer>
                    <nav>
                        <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        </div>
                    </nav>
                </footer>
        </>
    )
}
export default Main;