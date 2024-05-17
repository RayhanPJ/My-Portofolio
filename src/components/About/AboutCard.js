import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rayhan Putra J </span>
            from <span className="purple"> Bekasi, Indonesia.</span>
            <br />I am a junior fullstack website developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Finished What You Started"{" "}
          </p>
          <footer className="blockquote-footer">Rayhan Putra J</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
