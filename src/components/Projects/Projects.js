import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import beFinalProject from "../../Assets/Projects/beFinalProject.png";
import goTravel from "../../Assets/Projects/goTravel.png";
import binarRentalCar from "../../Assets/Projects/binarRentalCar.png";
import suratinAja from "../../Assets/Projects/suratinAja.png";
import tokoMajuAjaDulu from "../../Assets/Projects/tokoMajuAjaDulu.png";
import dashboardIncomming from "../../Assets/Projects/dashboardIncomming.png";
import wms from "../../Assets/Projects/wms.png";
import ewip from "../../Assets/Projects/ewip.png";
import reqComponents from "../../Assets/Projects/reqComponents.png";
import leadReceive from "../../Assets/Projects/leadReceive.png";
import cellCheckingLithiumPositioning from "../../Assets/Projects/cellCheckingLithiumPositioning.png";
import apiDocs from "../../Assets/Projects/apiDocs.png";
import carZone from "../../Assets/Projects/carZone.png";

const projects = [
  {
    imgPath: carZone,
    title: "Car Zone",
    description: "E-Commerce buy new or second car build with Next JS and Tool Shadcn UI. Have features to see available cars, Buy Car, Master data for admin like car, type car, user etc, create invoice and download invoice.",
    repoLink: "https://github.com/RayhanPJ/fe-car-zone.git",
    demoLink: "https://fe-car-zone.vercel.app/",
    isGithub: true,
  },
  {
    imgPath: apiDocs,
    title: "API Documentation Car Zone",
    description: "API Documentation for Car Zone build with Golang using Gin and Gorm for framework. Have features to CRUD 8 table (Car, Type Car, Brand Car, Invoice, Transacition, Order, User, Role), using JWT auth, and protect route with role.",
    repoLink: "https://github.com/RayhanPJ/be-car-zone.git",
    demoLink: "https://api-car-zone.vercel.app/swagger/index.html",
    isGithub: true,
  },
  {
    imgPath: dashboardIncomming,
    title: "Dashboard Incommiing",
    description: "Monitoring incomming suppliers at PT Century Batteries Indonesia build with Codeigniter 4, Boostrap, and SQL Server. Have features to see traffic truck in area, realtime time record supplier, auto backup data to server using cronjob, and download resume.",
    repoLink: "https://gitlab.com/rayhanputra100/dashboard-incomming",
    isGithub: false,
  },
  {
    imgPath: wms,
    title: "Warehouse Management System",
    description: "Manage batteries item from warehouse finish good at PT Century Batteries Indonesia build with Codeigniter 4, Boostrap, and SQL Server. Have features to count all rack on or off location, count all quantity batteries item in rack, scaning QR Code, Auto choose rack location in warehouse finish good and download resume",
    repoLink: "https://gitlab.com/rayhanputra100/wms",
    isGithub: false,
  },
  {
    imgPath: ewip,
    title: "E-WIP",
    description: "E-WIP is dashboard for input item we called dross and to input recycle material and waste at PT Century Batteries Indonesia build with Codeigniter 4, Boostrap, and SQL Server. Have features to input dross, input recycle material, print dross and lead weight, report MLR, Dross, Waste",
    repoLink: "https://github.com/RayhanPJ/ewip",
    isGithub: true,
  },
  {
    imgPath: reqComponents,
    title: "Form Request Components Division",
    description: "Form for request some components to head of division at PT Century Batteries Indonesia build with Codeigniter 4, Boostrap, and SQL Server. Have features to request components from users, head of division can accepted the request or not, and list all request",
    repoLink: "https://gitlab.com/rayhanputra100/form-req-components",
    isGithub: false,
  },
  {
    imgPath: cellCheckingLithiumPositioning,
    title: "Cell Checking and Lithium Positioning",
    description: "Dahsboard input detail item lithium Batteries to cell for positioning batteries at PT Century Batteries Indonesia build with Codeigniter 4, Boostrap, and SQL Server. Have features to calculation cell, detail input data lithium batteries, checking cell, total data input cell",
    repoLink: "https://gitlab.com/rayhanputra100/cell-checking-and-positioning-lithium-battery",
    isGithub: false,
  },
  {
    imgPath: leadReceive,
    title: "Dashboard Lead Receiving",
    description: "Dashboard charts monitoring receiving supplier at PT Century Batteries Indonesia build with Codeigniter 4, Boostrap, and SQL Server. Have features to see chart for lead receiving, total variance items, varian item by supplier and total truck",
    repoLink: "https://gitlab.com/rayhanputra100/dashboard-lead-receiving",
    isGithub: false,
  },
  {
    imgPath: binarRentalCar,
    title: "Front End Final Project",
    description: "My Front End Final project in Kampus Merdeka Study Independent at Binar Academy course Fullstack Developer. Go Travell it's some Booking Airline website using React.js, Material UI. (Just Frontend)",
    repoLink: "https://github.com/RayhanPJ/Binar-Rental-Car.git",
    isGithub: true,
  },
  {
    imgPath: goTravel,
    title: "Front End Final Project",
    description: "My Front End Final project in Kampus Merdeka Study Independent at Binar Academy course Fullstack Developer. Go Travell it's some Booking Airline website using React.js, Material UI. (Just Frontend)",
    repoLink: "https://github.com/RayhanPJ/Final-Porject-FSW",
    isGithub: true,
  },
  {
    imgPath: beFinalProject,
    title: "Back End Final Project",
    description: "My Back End Final project in Kampus Merdeka Study Independent at Binar Academy course Fullstack Developer. Go Travell API it's some Booking Airline website using node.js, Postgres SQL, Postman.  (Just Backend API)",
    repoLink: "https://github.com/RayhanPJ/Final-Project-BE",
    isGithub: true,
  },
  {
    imgPath: suratinAja,
    title: "Front End Capstone Project",
    description: "My Front End Capstone project in Campus. Collaboration project with campus group. Suratin Aja it's some campus letter service provider website using Template Vuexy. (Just Frontend)",
    repoLink: "https://github.com/RayhanPJ/Final-Porject-FSW",
    isGithub: true,
  },
  {
    imgPath: suratinAja,
    title: "FullStack Capstone Project",
    description: "My Full Stack Capstone project in Campus. Collaboration project with campus group. Suratin Aja it's some campus letter service provider website using Laravel 10, Boostrap, Mysql. (Finish Project)",
    repoLink: "https://github.com/RayhanPJ/Final-Project-BE",
    isGithub: true,
  },
  {
    imgPath: tokoMajuAjaDulu,
    title: "Final Exam Project",
    description: "My Final Exam in Kampus Merdeka Student Exchange at Mulawarman University. Collaboration project with campus group. Toko Maju Ada Dulu it's some E-Commerce website using Codeigniter 3, Boostrap, Mysql. (Finish Project)",
    repoLink: "https://github.com/RayhanPJ/Toko-Maju-Aja-Dulu",
    isGithub: true,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isGithub={project.isGithub}
                title={project.title}
                description={project.description}
                repoLink={project.repoLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
