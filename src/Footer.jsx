import React from "react";

function Footer() {
  return (
    <footer className="conatiner-fluid py-1">
      <div className="row align-items-center text-center">
        <div className="col-md-4">
          <h5>ErpMechSoft</h5>
          <span> Pune | Alephata | Narayangaon</span>
        </div>
        <hr className="v-hr col-md-1 mt-3" />
        <div className="col-md-3">Erp Solution</div>
        <hr className="v-hr col-md-1 mt-3" />
        <div className="col-md-3">Oracle Cloud</div>
      </div>
      <hr className="container my-1" />
      <p className="text-center my-2">
        © 2024 erpMechSoft Technologies All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
