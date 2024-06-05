"use client";

import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About The Project</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
      
          {/* End personal info */}

         {/* <div className="tokyo_tm_button" data-position="left">
            <a href="/img/cv.pdf" download>
              <span>Download CV</span>
            </a>
          </div>*/}
        </div>
      </div>
      {/* End .container */}

      <div className="tokyo_tm_progressbox">
        <div className="container">
          <div className="in">
            
          </div>
          {/* End in */}
        </div>
        {/* End .container */}
      </div>
      {/* End tokyo_tm_progressbox */}

     
      {/* End .tokyo_tm_skillbox */}

     
      {/* End tokyo_tm_resumebox */}

     
      {/* End tokyo_tm_testimonials */}

      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
