import React from "react";
//import "./Aboutme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
//import LGlogo from "./files/LGlogo.jpg";

const Aboutme = () => {
  const clients = [
    {
      // img: LGlogo,
      button: 
        <button className="button n-button">Solifi</button>,
      about:
        "Currently, I am working as a Software Engineer @Solifi. I am having a total 3+ years of experience in software development. Moreover, I have knowledge in Java frameworks and Blockchain Technolgy.",
    
      },
    {
      button: 
        <button className="button n-button">LG Soft India</button>,
      about:
      <text>
          Project   : ATT FOTA DM <br />
          Technolgy : Java & Android <br />
          Year      : Jan 2020 – Sep 2022 <br />
          Address   : Banglore - Karnataka (India)<br />
          </text>
    },
    {
      button: 
        <button className="button n-button">Internship</button>,
      about:
      <text>
          Project   : Banking Services <br />
          Technolgy : J2EE <br />
          Year      : Jul 2019 – Dec 2019 <br />
          Company   : ABC Technologies <br />
          Address   : Banglore - Karnataka (India)<br />
          </text>
    },
    {
      button: 
        <button className="button n-button">Graduation</button>,
      about:
      <text>
          Degree     : B.E in Computer Science<br />
          Year       : August 2015 – May 2019 <br />
          University : RGPV<br />
          College    : RITS, Bhopal-M.P (India)<br />
          </text>
    },
    {
      button: 
        <button className="button n-button">Intermediate or 12th</button>,
      about:
      <text>
          Course      : Science (PCM)<br />
          Certificate : HSLC <br />
          Year        : Apr 2013 – May 2015 <br />
          Board       : BSEB<br />
          School      : Ram Avatar H/S cum Inter college - Chapra(Bihar)<br />
          
          </text>
    },
    {
      button: 
        <button className="button n-button">Metriculation or 10th</button>,
      about:
      <text>
          Course      : Science<br />
          Certificate : SSLC <br />
          Year        : Apr 2011 – May 2012 <br />
          Board       : CBSE<br />
          School      : Central Public School - Chapra(Bihar)<br />
          </text>
    },
  ];

  return (
    <div className="t-wrapper" id="aboutme">
      <div className="t-heading">
        <span>Know  </span>
        <span>About me... </span>
        
        {/* <span>from me...</span> */}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                {/* <img src={client.img} alt="" /> */}
                <span>{client.button}</span>
                <span>{client.about}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Aboutme;
