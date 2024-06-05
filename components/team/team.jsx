"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Team = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Ninn</h3>
            <h4 className="typer">
              <p>Find </p>
              <ReactTyped
                strings={[
                  "Flights.",
                  "Restaurants.",
                  "Outfits.",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Jetset Jive - Your all-in-one travel app for flights, hotels, food, and fashion.
            </p>
            {/* END JOB */}
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}

       <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Sean</h3>
            <h4 className="typer">
              <p>Find </p>
              <ReactTyped
                strings={[
                  "Flights.",
                  "Restaurants.",
                  "Outfits.",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Jetset Jive - Your all-in-one travel app for flights, hotels, food, and fashion.
            </p>
            {/* END JOB */}
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}

       <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Blaine</h3>
            <h4 className="typer">
              <p>Find </p>
              <ReactTyped
                strings={[
                  "Flights.",
                  "Restaurants.",
                  "Outfits.",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Blaine - Software engineer and cat afficienado. 
            </p>
            {/* END JOB */}
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}

       <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Chloe</h3>
            <h4 className="typer">
              <p>Find </p>
              <ReactTyped
                strings={[
                  "Flights.",
                  "Restaurants.",
                  "Outfits.",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Jetset Jive - Your all-in-one travel app for flights, hotels, food, and fashion.
            </p>
            {/* END JOB */}
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Team;
