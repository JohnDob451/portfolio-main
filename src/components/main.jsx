import React from "react";
import { useState } from "react";
import NavBar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { default as me } from "../images/john-main.png";
import { default as me2 } from "../images/me3.jpg";

import { default as portfolio_image } from "../images/portfolio_image.jpg";
import { default as portfolio_image_2 } from "../images/portfolio_image_2.jpeg";

import { default as mechanic_icon } from "../images/icons8-gear-96.png";
import { default as troubleshoot_icon } from "../images/icons8-magnifying-glass-128.png";
import { default as integration_icon } from "../images/icons8-spacecraft-96.png";

import { default as quality_icon } from "../images/icons8-graph-96.png";
import { default as emergency_icon } from "../images/icons8-fire-96.png";
import { default as fabrication_icon } from "../images/icons8-tool-96.png";

import { default as python_icon } from "../images/python-icon.png";
import { default as aircraft_icon } from "../images/icons8-aircraft-96.png";
import { default as tool_icon } from "../images/icons8-toolbox-128.png";
import { default as parachute_icon } from "../images/icons8-parachute-64.png";

import { default as fantum_gif } from "../images/7f74ab81505303.5d02aa15a7ab5.gif";
import { default as unitedhomes_gif } from "../images/674d4480582987.5de30de3b1ced.gif";
import { default as rcheban_gif } from "../images/Gen-2 891643170, Default_Technician_o, M 5 (1).gif";
import { default as skycity_gif } from "../images/Gen-2 3724928020, Default_Modern_minim, M 5 (1).gif";
import { default as optimal_exterior_gif } from "../images/d9e42d104376667.5f85fe4897bae.gif";
import { default as tetris_gif } from "../images/tetris.gif";
import { default as asteroids_gif } from "../images/asteroids.gif";
import { default as visualizer_gif } from "../images/visualizer.gif";

import { default as phone_icon } from "../images/phone.svg";
import { default as email_icon } from "../images/email.svg";
import { default as facebook_icon } from "../images/facebook.svg";
import { default as instagram_icon } from "../images/instagram-icon.png";
import { default as linkedin_icon } from "../images/linkedin.svg";
import { default as scroll_up_icon } from "../images/scroll-up.png";

import ProjectView from "./projectview";

import classes from "../styles/main.module.css";

export default function Main() {
  const [showQuote, setShowQuote] = useState(false);
  const [project, setProject] = useState(0);

  const handleProjecteOpen = (num) => {
    console.log("quote open");
    setProject(num);
    setShowQuote(true);
  };
  const handleProjectExit = () => {
    console.log("quote close");
    setShowQuote(false);
  };

  const handleProjectHover = ({ target }) => {
    target.classList.add(classes["project-hover"]);
  };

  return (
    <div className={classes.mainWrapper}>
      <ProjectView
        showProject={showQuote}
        project={project}
        handler={handleProjectExit}
      />
      {/* <Test /> */}
      <NavBar />

      <div className={`${classes.header}`}>
        <div className={classes["header-content"]}>
          <span className={classes.name}>
            JOHN <br />
            DOBROVOLS
          </span>
          <span className={classes["name-sub"]}>KIY</span>

          <div className={classes.descWrapper}>
            <div className={classes.desc}>
              <h4>Technician</h4>
              <h4>Integration - SpaceX</h4>
            </div>

            <div className={classes.links}>
              <a
                href="http://johndob451.github.io/portfolio/resume.pdf"
                download
              >
                Download Resume
              </a>
              <a href="/portfolio/#contact">Contact Me</a>
            </div>
          </div>
          <div className={classes.space}></div>
        </div>

        <img src={me} alt="" className={classes["header-image"]} />
      </div>

      <div className={classes.grid}>
        <div className={classes["grid-inner"]}>
          <div className={classes.title}>
            <span>Skills</span>
          </div>
          <div className={classes.skill}>
            <img src={mechanic_icon} alt="" />
            <span>Mechanical Expertise</span>
            <span>
              Proficient in diagnosing and repairing mechanical issues in various types of aircraft and vehicles.
            </span>
          </div>
          <div className={classes.skill}>
            <img src={integration_icon} alt="" />
            <span>Spacecraft Integration</span>
            <span>Specialized in the detailed installation and integration of sensitive spacecraft hardware and components.</span>
          </div>
          <div className={classes.skill}>
            <img src={troubleshoot_icon} alt="" />
            <span>Technical Troubleshooting</span>
            <span>
              Experienced in identifying, documenting, and resolving complex technical problems in high-stakes environments.
            </span>
          </div>
          <div className={classes.skill}>
            <img src={quality_icon} alt="" />
            <span>Quality Assurance</span>
            <span>
              Skilled in conducting thorough inspections and ensuring adherence to quality standards and protocols.
            </span>
          </div>
          <div className={classes.skill}>
            <img src={emergency_icon} alt="" />
            <span>Emergency Response</span>
            <span>
              Proven ability to lead and manage emergency response teams, ensuring safety and efficiency during critical operations.
            </span>
          </div>
          <div className={classes.skill}>
            <img src={fabrication_icon} alt="" />
            <span>Fabrication and Modification</span>
            <span>
              Expertise in fabricating and modifying structures, including roll cages and aircraft components, to meet specific needs and standards.
            </span>
          </div>
          <div className={`${classes.title} ${classes["programs-title"]}`}>
            <span>Qualifications</span>
          </div>
          <div className={classes.program}>
            <img src={aircraft_icon} alt="" />
            <span>Airframe & Powerplant</span>
          </div>
          <div className={classes.program}>
            <img src={tool_icon} alt="" />
            <span>Torque Buyoff</span>
          </div>
          <div className={classes.program}>
            <img src={parachute_icon} alt="" />
            <span>Parachute Installation</span>
          </div>
        </div>
      </div>
      <div id="projects" className={classes.projects}>
        <div className={classes.title}>
          <span>Experience</span>
        </div>
        <div className={classes["projects-inner"]}>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={fantum_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(0);
              }}
              className={classes["project-content"]}
            >
              <h2>Integration Technician</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={unitedhomes_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(1);
              }}
              className={classes["project-content"]}
            >
              <h2>Aircraft Technician</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={rcheban_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(2);
              }}
              className={classes["project-content"]}
            >
              <h2>UTV Technician</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={skycity_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(3);
              }}
              className={classes["project-content"]}
            >
              <h2>Squad Boss</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={optimal_exterior_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(4);
              }}
              className={classes["project-content"]}
            >
              <h2>Auto Mechanic</h2>
            </a>
          </div>          
        </div>
      </div>
      <div id="about" className={classes.about}>
        <div className={classes.title}>
          <span>About</span>
        </div>
        <div className={classes["about-inner"]}>
          <img src={me2} alt="" />
          <div>
            <h1>About Me </h1>
            <p>
            I'm John V. Dobrovolskiy, a dedicated and passionate professional with a strong background in aerospace and mechanical engineering. Known for my diligence and exceptional work ethic, I have extensive experience in integrating spacecraft, performing detailed aircraft maintenance, and leading emergency response teams. I take pride in my commitment to quality and precision, and my technical troubleshooting skills are backed by several key certifications. Whether I'm working on intricate spacecraft components or managing complex mechanical systems, I approach each task with unwavering dedication and a drive for excellence. My goal is to bring my expertise, passion, and hard work to every project, ensuring the highest standards of performance and reliability.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className={classes.contact}>
        <div className={classes.title}>
          <span>Contact me</span>
        </div>
        <span>
          I'm always open for new challenges!
        </span>
        <div className={classes["contact-methods"]}>
          <FontAwesomeIcon icon={faPhone} />
          <span>(907) 687-6619</span>
        </div>
        <div className={classes["contact-methods"]}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>John.Dobrovolskiy@spacex.com</span>
        </div>
        <span>Follow me</span>
        <ul className={classes.socials}>          
          <a href="https://www.instagram.com/johndobrovolskiy/">
            <FontAwesomeIcon size={"2x"} icon={faInstagram} />
          </a>          
        </ul>
      </div>
      <div className={classes.footer}>
        <a href="/portfolio/#home">
          <img src={scroll_up_icon} alt="" />
        </a>
        <span>Copyright @ 2024. All Rights Reserved.</span>
      </div>
    </div>
  );
}
