import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/LGlogo.jpg";
import profilePic2 from "../../img/geekyants.png";
import profilePic3 from "../../img/ineuron.png";
import profilePic4 from "../../img/ATT.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Great work. Always eager to learn new tech with full of energy",
    },
    {
      img: profilePic2,
      review:
        "Great knowledge to merge different technolgy.",
    },
    {
      img: profilePic3,
      review:
        "Awesome work with team.",
    },
    {
      img: profilePic4,
      review:
        "Always complete project before deadline.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Awesome Work </span>
        <span>from me...</span>
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
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
