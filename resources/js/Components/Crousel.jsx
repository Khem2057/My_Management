import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
//   const play = () => {
//     sliderRef.slickPlay();
//   };
//   const pause = () => {
//     sliderRef.slickPause();
//   };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container">
      {/* <h2>Auto Play {"&"} Pause with buttons</h2> */}
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div className="px-1">
            <img src="/time_imp.png" alt="img" className="object-cover h-[50vh]" />
            <span className="flex justify-center text-white text-lg p-2">Time Management</span>
        </div>
        <div className="px-1">
            <img src="/reminders.png" alt="img" className="object-cover h-[50vh]" />
            <span className="flex justify-center text-white text-lg p-2">Reminding Tasks</span>
        </div>
        <div className="px-1">
            <img src="/plans.png" alt="img" className="object-cover h-[50vh]" />
            <span className="flex justify-center text-white text-lg p-2">Making Plans</span>
        </div>
        <div className="px-1">
            <img src="/planning.png" alt="img" className="object-cover h-[50vh]" />
            <span className="flex justify-center text-white text-lg p-2">Time Management</span>
        </div>
        <div className="px-1">
            <img src="/task_mgmt.png" alt="img" className="object-cover h-[50vh]" />
            <span className="flex justify-center text-white text-lg p-2">Task Management</span>
        </div>
        <div className="px-1">
            <img src="/scheduling.png" alt="img" className="object-cover h-[50vh]" />
            <span className="flex justify-center text-white text-lg p-2">Money Management</span>
        </div>
        
      </Slider>
      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </div>
  );
}
export default AutoPlayMethods;
