import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} Jetset Jive <br /> Created by
          Jetset Jive
      </p>
    </div>
  );
};

export default CopyRight;
