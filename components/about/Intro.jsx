import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/news/flight_landing_hero.png",
    name: "Jetset Jive",
    designation: "Mobile Application",
    text: (
      <>
        <p>
          We built this app as part of our User Experience and Design graduate level course work at Seattle University for the Spring Quarter in 2024.  
          Our team formed because we all wanted to build an app that helped people travel. 
          When we presented our original ideas to the class, all our ideas were based on travel. 
          We got together and decided to build an application based on our own ideas. 
          This allowed us to all work on something we were passionate about within the group project.  
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
