import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import CRMsh from "../../img/CRMsh.png";
import Svasth from "../../img/SVASTH.png";
import BankingApp from "../../img/BankingApp.png";
import VotingDapp from "../../img/VotingDapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/vivek2502/Crud-Spring-Hibernate">
            <img src={CRMsh} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/vivek2502/Svasth-Dapp">
            <img src={Svasth} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/vivek2502/Decentralized-Voting-App">
            <img src={VotingDapp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/vivek2502/Banking-System-Servlet-JDBC">
            <img src={BankingApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
