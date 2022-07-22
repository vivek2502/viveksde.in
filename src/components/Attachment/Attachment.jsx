import React from "react";
import "./Attachment.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import vivek from "./files/vivek.jpg";
import humble from "./files/humble.png";
import Resume from './files/Vivek_CV.pdf';

const Attachment = () => {
  const clients = [
    {
      img: vivek,
      review:
        "Here, You will find the updated resume",
        attachment: <a href={Resume} download>
        <button className="button n-button">Download</button>
      </a>,
    },
    {
      img: humble,
      review:
        "Many more to come :)",
    },
  ];

  return (
    <div className="t-wrapper" id="attachment">
      <div className="t-heading">
        <span>Root of </span>
        <span>Attachments </span>
        
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
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <span>{client.attachment}</span>
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Attachment;
