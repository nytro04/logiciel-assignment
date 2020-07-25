import React from "react";

const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
