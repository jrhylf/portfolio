import React, {useEffect} from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import 'boxicons/css/boxicons.min.css';
import TypingEffect from 'react-typing-effect';

// Images
import logo from './images/JF_Logo/JF_logo.png';
import myImage from './images/me/me.JPG';
import networkFoundationsCert from './personal/certificates/cert_image/Network Foundations.png';
import databaseFoundationsCert from './personal/certificates/cert_image/Database Foundations.png';
import sapBasicsCert from './personal/certificates/cert_image/SAP Basics.png';
import responsiveWebDesignCert from './personal/certificates/cert_image/freeCodeCamp Responsive Web Design Certification.png';
import webDevelopmentCert from './personal/certificates/cert_image/Udemy_CSS_JS_Bootstrap_Course_Completion_Certificate.jpg';

// Projects Images
import sticaDEP from './images/projects/sticaDigitalExamPermit.jpeg';
import sticaCSS from './images/projects/sticaClearance.jpeg';
import cblicASB from './images/projects/cblicASB.jpeg';

// Mini Projects Images
// import expenseTracker from './images/mini_projects/expenseTracker.jpeg';
// import todoList from './images/mini_projects/todoList.jpeg';

// CSS
import './css/preloader.css';
import './css/animated_bg.css';
import './css/back_to_top.css';
import './css/custom_swal.css';
import './css/custom_scroll.css';
import './css/custom_boxicons.css';
import './css/home_animation.css';
import './css/main.css';

// JS
// import preloader from './js/preloader';
import activeNav from './js/mainScript';
import previewResume from './js/preview_resume';
import clearForm from './js/clear_form';
import privacyPolicy from './js/privacy_policy';
import { databaseFoundations, sapBasics, webDevelopment, webDesign, networkFoundations } from './js/view_certificate';

function Main() {
    useEffect(() => {
        // preloader();

        const cleanup = activeNav();

        // Cleanup function
        return () => {
            cleanup();
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        Swal.fire({
            title: 'Are you sure you want to send your message?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, send it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                const serviceID = 'service_bh80amj';
                const templateID = 'template_5khpau2';
                const userID = '7RpCOcm3XUomdgvyI';

                emailjs.sendForm(serviceID, templateID, event.target, userID)
                    .then((response) => {
                        Swal.fire(
                            'Message Sent!',
                            'Your message has been sent successfully. We will get back to you shortly.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        Swal.fire(
                            'Failed to Send',
                            'There was an error sending your message. Please try again later.',
                            'error'
                        );
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your message has not been sent. You can continue editing or try sending it later.',
                    'error'
                );
            }
        });
    };

    function comingSoon() {
        Swal.fire({
            title: 'Coming Soon!',
            text: 'This page is under development. Stay tuned!',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }

    return (
        <div>
            {/* <div id="preloader">
                <img src={logo} alt="Logo" className="preloader-logo" width="150" height="auto"></img>
            </div> */}

            <header id="header" className="header">
                <div className='header-content'>
                    {/* <div className="img_container">
                        <a href="#home">
                            <img src={logo} alt="John Rhyl Fernandez Logo" className="logo" title="John Rhyl Fernandez" loading='lazy'></img>
                        </a>
                    </div> */}

                    <nav aria-label="Main Navigation">
                        <a href="#home">
                            <img src={logo} alt="John Rhyl Fernandez Logo" className="logo" title="John Rhyl Fernandez" loading='lazy'></img>
                        </a>

                        <ul>
                            <li><a href="#home" aria-label="Go to Home section">Home</a></li>
                            <li><a href="#about" aria-label="Go to About section">About</a></li>
                            <li><a href="#projects" aria-label="Go to Projects section">Projects</a></li>
                            <li><a href="#contact" aria-label="Go to Contact section">Contact</a></li>
                        </ul>
                    </nav>
                    
                    {/*
                        <div className="menuIcon_container" title="Open Menu" aria-label="Open Navigation Menu">
                            <i className="material-icons" title="Open Menu" aria-hidden="true">menu_icon</i>
                        </div>
                    */}
                </div>
            </header>

            <section id="home">
                <div id="bg">
                    <div className='air air1'></div>
                    <div className='air air2'></div>
                    <div className='air air3'></div>
                    <div className='air air4'></div>
                </div>

                <div className="page">
                    <h1 className="slide-up">Hi, I am Rhyl</h1>
                    <div className='aspiring_container'>
                        <p className="home_subText slide-up">Aspiring</p>
                        <div className='typing-text slide-up'>
                            <TypingEffect
                                text={['Web Developer', 'Software Developer']}
                                speed={100}
                                eraseSpeed={50}
                                eraseDelay={2000}
                                typingDelay={50}
                                cursorRenderer={cursor => <span className="custom-cursor">{cursor}</span>}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="about_description">
                    <div className="page">
                        <h2>About me</h2>
                        <img src={myImage} alt="myImage" id="myImage" className='self_image' loading='lazy'></img>
                    </div>
                    
                    <div className="desc">
                        <div className="profile-container">
                            <h2>Fernandez, John Rhyl R.</h2>
                            <a href="https://www.linkedin.com/in/johnrhylfernandez/" target="_blank" rel="noreferrer" className="profile">LinkedIn Profile</a>
                        </div>
                        
                        <br />
                        
                        <div className="center_mobile">
                            <span>
                                A recent graduate from STI College Alabang specializing in 
                                Web Development. Developed several software projects, 
                                showcasing technical skills and achieving successful results.
                            </span>
                        </div>

                        <br />

                        <h3>Achievements</h3>
                        <div className="achievements">
                            <div className="credentials_container">
                                {/* <span className="achievement"><i className="material-icons">verified</i></span> */}
                                <span className="description">Dean's Lister</span>
                                <p className='subText'>3 consecutive semesters</p>
                            </div>
                            <div className="credentials_container">
                                {/* <span className="achievement"><i className="material-icons">verified</i></span> */}
                                <span className="description">President's Lister</span>
                                <p className='subText'>2 consecutive semesters</p>
                            </div>
                            <div className="credentials_container">
                                {/* <span className="achievement"><i className="material-icons">verified</i></span> */}
                                <span className="description">Programmer of the Year</span>
                                <p className='subText'>A.Y. 2023-2024</p>
                            </div>
                            <div className="credentials_container">
                                {/* <span className="achievement"><i className="material-icons">verified</i></span> */}
                                <span className="description">Graduated Cum Laude</span>
                                <p className='subText'>A.Y. 2023-2024</p>
                            </div>
                        </div>

                        <br />

                        <h3>Technical Skills</h3>
                        <div className="skills">
                            <div className="credentials_container">
                                {/* <span className="skill"><i className="material-icons">arrow_right</i></span> */}
                                <span className="description">Database Management</span>
                                <p className='subText'>SQL, MS SQL Server, Entity Relationship Diagrams (ERDs)</p>
                            </div>
                            <div className="credentials_container">
                                {/* <span className="skill"><i className="material-icons">arrow_right</i></span> */}
                                <span className="description">Web Development</span>
                                <p className='subText'>React, Tailwind CSS, Bootstrap, AJAX, PHP, MySQL, XAMPP</p>
                            </div>
                            <div className="credentials_container">
                                {/* <span className="skill"><i className="material-icons">arrow_right</i></span> */}
                                <span className="description">Software Development</span>
                                <p className='subText'>C#, Visual Studio, VS Code</p>
                            </div>
                        </div>

                        <br />

                        <h3>Certificates</h3>
                        <div className="certificates">
                            <button className='view_cert_btn' id='dbf_btn' onClick={databaseFoundations}>
                                <img src={databaseFoundationsCert} alt="Database Foundations" id="certImage" className='cert_image' loading='lazy'></img>
                                <span className='view_btn'>View Certificate</span>
                            </button>

                            <button className='view_cert_btn' id='sap_btn' onClick={sapBasics}>
                                <img src={sapBasicsCert} alt="SAP Basics" id="certImage" className='cert_image' loading='lazy'></img>
                                <span className='view_btn'>View Certificate</span>
                            </button>

                            <button className='view_cert_btn' id='webDev_btn' onClick={webDevelopment}>
                                <img src={webDevelopmentCert} alt="Web Development" id="certImage" className='cert_image' loading='lazy'></img>
                                <span className='view_btn'>View Certificate</span>
                            </button>

                            <button className='view_cert_btn' id='webDesign_btn' onClick={webDesign}>
                                <img src={responsiveWebDesignCert} alt="Responsive Web Design" id="certImage" className='cert_image' loading='lazy'></img>
                                <span className='view_btn'>View Certificate</span>
                            </button>

                            <button className='view_cert_btn' id='nwf_btn' onClick={networkFoundations}>
                                <img src={networkFoundationsCert} alt="Network Foundations" id="certImage" className='cert_image' loading='lazy'></img>
                                <span className='view_btn'>View Certificate</span>
                            </button>
                        </div>
                        
                        <br />
                        
                        <div className="btn_container">
                            <button type="button" className="download_resume_btn" title="View Resume" onClick={previewResume}>
                                View Resume<i className='bx bx-link-external'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects">
                {/* TODO: Apply CSS animated background for better looking section. */}
                <div className="container">
                    <div className="page">
                        <h2>Projects</h2>
                    </div>

                    <br />

                    <div className="proj_container">
                        <div className="project_card">
                            <div className="flex_div">
                                <img src={sticaDEP} alt="STICA Digital" className='proj_image' loading='lazy'></img>
                                <h3>STICA Digital Exam Permit</h3>
                            </div>
                            <div className="proj_desc_container">
                                <h3 className="head_desc">Description</h3>
                                <span className="proj_desc">
                                    Developed a web application using QR codes, PHP, and MySQL to streamline the 
                                    issuance of exam permits, reducing the time required for processing each student’s permit.
                                </span>

                                <br />

                                <h3 className="head_tech">Technologies Used:</h3>
                                <div className='technologies'>
                                    <span className='tech_used'>HTML</span>
                                    <span className='tech_used'>CSS</span>
                                    <span className='tech_used'>Bootstrap</span>
                                    <span className='tech_used'>PHP</span>
                                    <span className='tech_used'>MySQL</span>
                                    <span className='tech_used'>QR Code</span>
                                </div>
                                <br />
                                <button className='github-repo-btn' onClick={() => window.open('https://github.com/jrhylf/digital-exam-permit-checker', '_blank')}>
                                    View on Github<i className='bx bx-link-external'></i>
                                </button>
                            </div>
                        </div>

                        <div className="project_card">
                            <div className="flex_div">
                                <img src={sticaCSS} alt="STICA Clearance" className='proj_image' loading='lazy'></img>
                                <h3>STICA Clearance Signing System</h3>
                            </div>
                            <div className="proj_desc_container">
                                <h3 className="head_desc">Description</h3>
                                <span className="proj_desc">
                                    Developed a QR code-based clearance signing system using AJAX, PHP, and MySQL, 
                                    reducing the students’ time spent clearing requirements each semester.
                                </span>

                                <br />

                                <h3 className="head_tech">Technologies Used:</h3>
                                <div className='technologies'>
                                    <span className='tech_used'>HTML</span>
                                    <span className='tech_used'>CSS</span>
                                    <span className='tech_used'>JavaScript</span>
                                    <span className='tech_used'>jQuery</span>
                                    <span className='tech_used'>AJAX</span>
                                    <span className='tech_used'>PHP</span>
                                    <span className='tech_used'>MySQL</span>
                                    <span className='tech_used'>Microsoft Office API</span>
                                    <span className='tech_used'>Microsoft Azure</span>
                                    <span className='tech_used'>QR Code</span>
                                </div>
                                <br />
                                <button className='github-repo-btn' onClick={() => window.open('https://github.com/jrhylf/clearance-signing-system', '_blank')}>
                                    View on Github<i className='bx bx-link-external'></i>
                                </button>
                            </div>
                        </div>
                        
                        <div className="project_card">
                            <div className="flex_div">
                                <img src={cblicASB} alt="CBLIC ASB" className='proj_image' loading='lazy'></img>
                                <h3>CBLIC Alalay sa Buhay Online Application Form</h3>
                            </div>
                            <div className="proj_desc_container">
                                <h3 className="head_desc">Description</h3>
                                <span className="proj_desc">
                                    Developed a web application form for a business line product using ReactJS 
                                    and Tailwind CSS, ensuring a responsive design and dynamic functionality.
                                </span>

                                <br />

                                <h3 className="head_tech">Technologies Used:</h3>
                                <div className='technologies'>
                                    <span className='tech_used'>HTML</span>
                                    <span className='tech_used'>CSS</span>
                                    <span className='tech_used'>JavaScript</span>
                                    <span className='tech_used'>React</span>
                                    <span className='tech_used'>Tailwind CSS</span>
                                    <span className='tech_used'>NodeJs</span>
                                    <span className='tech_used'>C#</span>
                                    <span className='tech_used'>REST API</span>
                                    <span className='tech_used'>Microsoft SQL</span>
                                    <span className='tech_used'>Microsoft SQL Server</span>
                                </div>
                                <br />
                                <button className='github-repo-btn' onClick={comingSoon}>
                                    Coming soon!
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <br /><br /> */}

                    {/* MINI PROJECTS */}
                    {/* <div className="proj_container">
                        <div className="page">
                            <h2>Mini Projects</h2>
                        </div>

                        <div className='mini_proj_container'>
                            MP1: Simple Expense Tracker
                            <div className="mini_project_card">
                                <div className="mini_flex_div">
                                    <img src={expenseTracker} alt="Expense Tracker" className='mini_proj_image' loading='lazy'></img>
                                    <h3 className="mini_title">Expense Tracker</h3>
                                </div>
                                <div className="mini_proj_desc_container">
                                    <div className='mini-between-container'>
                                        <h3 className="mini_head_tech">Technologies Used:</h3>
                                        <div className='technologies'>
                                            <span className='mini_tech_used'>React</span>
                                            <span className='mini_tech_used'>Tailwind CSS</span>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='mini-between-container'>
                                        <button className='mini-visit-site-btn' onClick={() => window.open('https://expensetracker-jr.netlify.app/', '_blank')}>
                                            Visit Site
                                        </button>
                                        <button className='mini-github-repo-btn' onClick={() => window.open('https://github.com/jrhylf/expense-tracker-app', '_blank')}>
                                            View on Github
                                        </button>
                                    </div>
                                </div>
                            </div>

                            MP2: Simple To-do List App
                            <div className="mini_project_card">
                                <div className="mini_flex_div">
                                    <img src={todoList} alt="To-do List App" className='mini_proj_image' loading='lazy'></img>
                                    <h3 className="mini_title">To-do List App</h3>
                                </div>
                                <div className="mini_proj_desc_container">
                                    <div className='mini-between-container'>
                                        <h3 className="mini_head_tech">Technologies Used:</h3>
                                        <div className='technologies'>
                                            <span className='mini_tech_used'>HTML</span>
                                            <span className='mini_tech_used'>CSS</span>
                                            <span className='mini_tech_used'>JavaScript</span>
                                            <span className='mini_tech_used'>React</span>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='mini-between-container'>
                                        <button className='mini-visit-site-btn' onClick={() => window.open('https://todolist-jr.netlify.app/', '_blank')}>
                                            Visit Site
                                        </button>
                                        <button className='mini-github-repo-btn' onClick={() => window.open('https://github.com/jrhylf/todo-list-app.git', '_blank')}>
                                            View on Github
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            <section id="contact">
                <div className="page">
                    <h2>Contact</h2>
                </div>

                <br />

                <div className="contact_info">
                    <div className="side_text">
                        <h2 className="side_title">Let's talk about <p>something <span className="blue_text">great</span></p> today.</h2>
                        
                        {/* // TODO: Fix this on tablet screen size */}
                        <div className="contact_info_container">
                            <br /><br />
                            <div className="side_text_container">
                                <i className='bx bx-current-location' ></i>
                                <a href="https://www.google.com/maps/search/?api=1&query=Muntinlupa,+Metro+Manila,+Philippines" target="_blank" rel='noreferrer' className="place infos">Muntinlupa, Metro Manila, Philippines</a>
                            </div>

                            <br />

                            <div className="side_text_container">
                                <i className='bx bxs-envelope' ></i>
                                <a href="mailto:johnrhylfernandez7@gmail.com" className="email infos">johnrhylfernandez7@gmail.com</a>
                            </div>
                            
                            <br />

                            <div className="side_text_container">
                                <i className='bx bxs-phone' ></i>
                                <span className='infos'>0929 779 8116</span>
                            </div>
                            
                            <br />

                            <div className="side_text_container">
                                <i className='bx bxl-linkedin-square'></i>
                                <a href="https://www.linkedin.com/in/johnrhylfernandez/" target="_blank" rel='noreferrer' className="link infos">https://www.linkedin.com/in/johnrhylfernandez/</a>
                            </div>
                        </div>
                    </div>

                    <br />

                    <form id="contact_form" className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor='name'>Your Name: </label>
                        <input type="text" name="sender_name" id="name" className="sender_input" placeholder="Enter your full name" required />
                        
                        <br />

                        <label htmlFor='email'>Email: </label>
                        <input type="email" name="sender_email" id="email" className="sender_input" placeholder="yourname@example.com" required />
                        
                        <br />

                        <label htmlFor='subject'>Subject: </label>
                        <input type="text" name="sender_subject" id="subject" className="sender_input" placeholder="Briefly describe your inquiry" required />
                        
                        <br />

                        <label htmlFor='message'>Message: </label>
                        <textarea name="sender_message" id="message" className="sender_input" placeholder="Feel free to share your thoughts..." required></textarea>
                        
                        <br />

                        <label htmlFor='privacy_policy' className="label">
                            <input type="checkbox" className="checkbox" name="privacy_policy" id="privacy_policy" onClick={privacyPolicy} required /> <span className="privacy_desc">I agree to the privacy policy</span>
                        </label>
                        
                        <br />

                        <div className="buttons">
                            <button type="button" className="clear_btn" title="Clear Form" onClick={clearForm}>Clear Form<i className='bx bx-reset'></i></button>
                            <button type="submit" className="submit_btn" title="Submit">Submit<i className='bx bx-right-arrow-alt' ></i></button>
                        </div>
                    </form>
                </div>
            </section>
            
            {/* <button type="button" id="backToTopBtn" title="Back to top">
                <span className="backToTopText">Back to top</span><i className="material-icons arrow_upward">keyboard_double_arrow_up</i>
            </button> */}

            <hr />

            <footer>
                <div className="copyrights">
                    {/* <p className="text">&copy; <span id="current-year">2024</span><strong> John Rhyl Fernandez.</strong></p> */}
                    <p className="text">Developed by John Rhyl Fernandez</p>
                </div>
            </footer>
        </div>
    );
}

export default Main;