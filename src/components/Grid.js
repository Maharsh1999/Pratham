import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from '../logo/logoDark.png';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import '../styles/clock.css';
import '../styles/grid.css';
import '../styles/responsive.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faArrowRight, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

 
  export default function VerticalDividers() {

    return (
      
    <div class="container">
      <div class="header">
        <div class="overlay"></div>
      </div>
      <div class="clock"><FontAwesomeIcon icon={faClock} size="2x" /></div>
    <Grid container alignItems="center" styles={{justifyContent: "center", alignContent: "center"}}>
        <div class="left">
        <Tilt style={{transformStyle: "preserve-3d"}}>
        <img class="logo" src={logo} style={{transform: "translateZ(20px)"}} />
        </Tilt>
        <div class="social">
          <a class="icon" href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          <a class="icon" href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
          <a class="icon" href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
          <a class="icon" href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /> </a>
        </div>
        <p class="stalk">Stalk Us Here
        <FontAwesomeIcon icon={faLevelUpAlt} /></p>
        </div>
        <Divider orientation="vertical" flexItem  style={{ margin: "0", padding: "0", border: "2px solid #E17A2A", background: "#E17A2A"}} />
        <div class="content">
          <h2 class="subheading">Brace Yourselves</h2>
          <h1 class="mainheading">INCOMING!!!</h1>
          <div class="paragraph">
            <p class="tagline">The platform that India's youth has been waiting for is almost here.</p>
            <div class="email" style={{display: "flex"}} >
            <input type="email"
            /><button><a href="mailto:name@email.com">Contact Us <FontAwesomeIcon icon={faArrowRight} /></a></button>
            </div>
          </div>
        </div>
    </Grid>
    </div>
    );
  }
