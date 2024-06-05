import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} Jetset Jive <br /> Created by: <br/> Blaine Anderson, Ninn Sieng, Sean Li, and Chloe Chen
      </p>
    </div>
  );
};

export default CopyRight;
