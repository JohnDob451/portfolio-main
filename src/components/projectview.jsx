import React from "react";

import { default as check_icon } from "../images/check-icon.svg";

import { default as fantum_gif } from "../images/7f74ab81505303.5d02aa15a7ab5.gif";
import { default as unitedhomes_gif } from "../images/674d4480582987.5de30de3b1ced.gif";
import { default as rcheban_gif } from "../images/Gen-2 891643170, Default_Technician_o, M 5 (1).gif";
import { default as skycity_gif } from "../images/Gen-2 3724928020, Default_Modern_minim, M 5 (1).gif";
import { default as optimal_exterior_gif } from "../images/d9e42d104376667.5f85fe4897bae.gif";
import { default as tetris_gif } from "../images/tetris.gif";
import { default as asteroids_gif } from "../images/asteroids.gif";
import { default as visualizer_gif } from "../images/visualizer.gif";
import json from "../projects.json";
import classes from "../styles/main.module.css";

export default function ProjectView({ showProject, handler, project }) {
  let images = [fantum_gif, unitedhomes_gif, rcheban_gif, skycity_gif, optimal_exterior_gif];
  let data = json[project];
  return (
    <div
      className={`project-view ${
        showProject ? "project-view-visible" : "project-view-hidden"
      }`}
    >
       <div className="project-view-inner">
        <button className="exit-btn" onClick={() => handler()}>
          X
        </button>
        <div className="content">                               
          <div className='company'>
            <h1>{data.title}</h1>   
            <h5>{data.sub}</h5>   
            <p>
            {data.description}
            </p>
          </div>  
          <div className='development' style={{ marginTop: '30px' }}>    
            <ul>
              <div>
                <img src={check_icon} alt="" />
                <span>{data.perks[0]}</span>
              </div>
              <div>
                <img src={check_icon} alt="" />
                <span>{data.perks[1]}</span>
              </div>
              <div>
                <img src={check_icon} alt="" />
                <span>{data.perks[2]}</span>
              </div>        
            </ul>                    
            <div style={{ marginTop: '30px' }}>
              <img src={images[project]} alt="" />              
              {data.url && <a href={data.url}>Visit Company</a>}              
            </div>
          </div>
            
        </div>        
      </div>
    </div>
  );
}
