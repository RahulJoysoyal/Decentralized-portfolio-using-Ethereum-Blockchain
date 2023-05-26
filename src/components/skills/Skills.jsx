import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";



const Skills = () => {
  return (
    <section className="skills-section">

        <img src={react} alt="react-icon" />
        <img src={btc} alt="btc-icon" />
        <img src={eth} alt="eth-icon" />
        <img src={truffle} alt="truffle-icon" />
        <img src={gns} alt="gns-icon" />
        <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino"/>
        <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab"/>


    </section>
  )
}

export default Skills
