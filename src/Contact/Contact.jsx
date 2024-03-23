import React from "react";
import "../App.css";

function Contact() {
  return (
    <div className="contact container">
      <form className="form w-100">
        <h1 className="text-center">Contact Me</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          repellendus?
        </p>
        <p className="m-0">Name :</p>
        <input type="text" placeholder="Enter your full name"></input>
        <br />
        <p className="m-0">Email :</p>
        <input type="email" placeholder="Enter your unique email"></input>
        <br />
        <p className="m-0">Message :</p>
        <textarea type="text" placeholder="Enter message here..."></textarea>
        <br />
        <div className="text-center my-2">
          <button className="btn btn-warning">Submit</button>
        </div>
      </form>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d241167.2609717956!2d74.0887461!3d19.184784699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710918421030!5m2!1sen!2sin"
          width="500"
          height="400"
          loading="lazy"
          title="My-Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
