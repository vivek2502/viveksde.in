import React, { useContext } from "react";
import "./Works.css";
import ATT from "../../img/ATT.png";
import Neo from "../../img/neo.png";
import ineuron from "../../img/ineuron.png";
import LG from "../../img/LG.png";
import GeekyAnts from "../../img/geekyants.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Industries level experience with LG
            <br />
            Made some awesome project with collaboration of Ineuron, GeekyAnts, Telusko & LCO
            <br />
            Blockchain based Dapps services with collaboration with NEO Blockchain
            <br />
            Provided services to ATT for there users.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <a href="https://geekyants.com/">
              <img src={GeekyAnts} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://ineuron.ai/">
              <img src={ineuron} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.lg.com/in">
              <img src={LG} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.att.com/">
              <img src={ATT} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://neo.org/">
              <img src={Neo} alt="" />
            </a>
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
