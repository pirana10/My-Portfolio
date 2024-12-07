import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sakthivel Piranavan</span>
            from <span className="purple">Jaffna, Sri Lanka.</span>
            <br />
            I am currently pursuing my Bachelor's degree in Information Technology at SLIIT and gaining experience as a QA Intern at Sri Lankan Telecom.
            <br />
            <br />
            Apart from my professional aspirations, here are some of the things I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Supporting Community Projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always aim to make a meaningful impact in everything you do!"
          </p>
          <footer className="blockquote-footer">Piranavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
