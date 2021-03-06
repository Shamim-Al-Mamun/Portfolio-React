import React, { useState } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

import calculator from "./Images/calculator.png";
import stopwatch from "./Images/stopwatch.png";
import todolist from "./Images/todolist.png";
import breminder from "./Images/breminder.png";
import wtoday from "./Images/wtoday.png";
import ressidebar from "./Images/ressidebar.png";
import eshop from "./Images/eshop.png";
import resnav from "./Images/resnav.png";
import cform from "./Images/cform.png";
import fform from "./Images/fform.png";
import resumemaker from "./Images/resumemaker.png";
import todo from "./Images/todo.png";
import capp from "./Images/capp.png";
import eplan from "./Images/eplan.png";
import pgallery from "./Images/pgallery.png";
import area from "./Images/area.png";
import hobby from "./Images/hobby.png";
import restapi from "./Images/restapi.png";
import tmern from "./Images/tmern.png";

function Portfolio() {
  const [showMERN, setShowMERN] = useState(true);
  const [showVanilla, setShowVanilla] = useState(true);
  const [showReact, setShowReact] = useState(true);
  const [showNode, setShowNode] = useState(true);
  const [reactCat, setReactCat] = useState(false);

  const [clickAll, setClickAll] = useState(true);
  const [clickMERN, setClickMERN] = useState(false);
  const [clickVanilla, setClickVanilla] = useState(false);
  const [clickReact, setClickReact] = useState(false);
  const [clickNode, setClickNode] = useState(false);

  //React Catagory
  const [showReactAll, setShowrecatAll] = useState(true);
  const [showReactBoots, setShowrecatBoots] = useState(true);
  const [showReactRedux, setShowrecatRedux] = useState(true);
  const [showReactFire, setShowrecatFire] = useState(true);
  const [showReactStyled, setShowrecatStyled] = useState(true);

  const [clickReactAll, setClickReactAll] = useState(true);
  const [clickReactBoots, setClickReactBoots] = useState(false);
  const [clickReactRedux, setClickReactRedux] = useState(false);
  const [clickReactFire, setClickReactFire] = useState(false);
  const [clickReactStyled, setClickReactStyled] = useState(false);

  const handleAll = () => {
    setShowMERN(true);
    setShowVanilla(true);
    setShowReact(true);
    setShowNode(true);
    setShowrecatBoots(true);
    setShowrecatRedux(true);
    setShowrecatFire(true);
    setShowrecatStyled(true);
    setShowrecatAll(true);
    //click
    setClickAll(true);
    setClickMERN(false);
    setClickVanilla(false);
    setClickReact(false);
    setClickNode(false);
    setReactCat(false);
  };
  const handleMERN = () => {
    setShowMERN(true);
    setShowVanilla(false);
    setShowReact(false);
    setShowNode(false);
    //click
    setClickAll(false);
    setClickMERN(true);
    setClickVanilla(false);
    setClickReact(false);
    setClickNode(false);
    setReactCat(false);
  };
  const handleVanila = () => {
    setShowMERN(false);
    setShowVanilla(true);
    setShowReact(false);
    setShowNode(false);
    //click
    setClickAll(false);
    setClickMERN(false);
    setClickVanilla(true);
    setClickReact(false);
    setClickNode(false);
    setReactCat(false);
  };
  const handleReact = () => {
    setShowMERN(false);
    setShowVanilla(false);
    setShowReact(true);
    setShowNode(false);
    //click
    setClickAll(false);
    setClickMERN(false);
    setClickVanilla(false);
    setClickReact(true);
    setClickNode(false);
    setReactCat(true);
  };
  const handleNode = () => {
    setShowMERN(false);
    setShowVanilla(false);
    setShowReact(false);
    setShowNode(true);
    //click
    setClickAll(false);
    setClickMERN(false);
    setClickVanilla(false);
    setClickReact(false);
    setClickNode(true);
    setReactCat(false);
  };

  //React Catagory
  const handleReactAll = () => {
    setShowrecatAll(true);
    setShowrecatBoots(true);
    setShowrecatRedux(true);
    setShowrecatFire(true);
    setShowrecatStyled(true);

    //click
    setClickReactAll(true);
    setClickReactBoots(false);
    setClickReactRedux(false);
    setClickReactFire(false);
    setClickReactStyled(false);
  };
  const handleReactBoots = () => {
    setShowrecatAll(false);
    setShowrecatBoots(true);
    setShowrecatRedux(false);
    setShowrecatFire(false);
    setShowrecatStyled(false);
    //click
    setClickReactAll(false);
    setClickReactBoots(true);
    setClickReactRedux(false);
    setClickReactFire(false);
    setClickReactStyled(false);
  };
  const handleReactRedux = () => {
    setShowrecatAll(false);
    setShowrecatBoots(false);
    setShowrecatRedux(true);
    setShowrecatFire(false);
    setShowrecatStyled(false);
    //click
    setClickReactAll(false);
    setClickReactBoots(false);
    setClickReactRedux(true);
    setClickReactFire(false);
    setClickReactStyled(false);
  };
  const handleReactFire = () => {
    setShowrecatAll(false);
    setShowrecatBoots(false);
    setShowrecatRedux(false);
    setShowrecatFire(true);
    setShowrecatStyled(false);
    //click
    setClickReactAll(false);
    setClickReactBoots(false);
    setClickReactRedux(false);
    setClickReactFire(true);
    setClickReactStyled(false);
  };
  const handleReactStyled = () => {
    setShowrecatAll(false);
    setShowrecatBoots(false);
    setShowrecatRedux(false);
    setShowrecatFire(false);
    setShowrecatStyled(true);
    //click
    setClickReactAll(false);
    setClickReactBoots(false);
    setClickReactRedux(false);
    setClickReactFire(false);
    setClickReactStyled(true);
  };

  return (
    <>
      <Container className="mb-2">
        <h2 className="portfolioHeader">PORTFOLIO</h2>
        <div className="portfolioBorder mb-4"></div>
        <div className="d-flex justify-content-center mb-3 nav">
          <Button
            className={clickAll ? "navButtons active" : " navButtons"}
            onClick={handleAll}
          >
            All
          </Button>
          <Button
            className={clickMERN ? "navButtons active" : " navButtons"}
            onClick={handleMERN}
          >
            MERN
          </Button>
          <Button
            className={clickVanilla ? "navButtons active" : " navButtons"}
            onClick={handleVanila}
          >
            Vanilla Js
          </Button>
          <Button
            className={clickReact ? "navButtons active" : " navButtons"}
            onClick={handleReact}
          >
            React
          </Button>
          <Button
            className={clickNode ? "navButtons active" : " navButtons"}
            onClick={handleNode}
          >
            Node
          </Button>
        </div>
        {reactCat ? (
          <div className="d-flex justify-content-flex-start mb-2 reactCat">
            <div
              className={
                clickReactAll
                  ? "reactCatBtn  btn border-bottom  "
                  : "reactCatBtn btn text-muted "
              }
              onClick={handleReactAll}
            >
              All
            </div>
            <div
              className={
                clickReactBoots
                  ? "reactCatBtn btn border-bottom"
                  : "reactCatBtn btn text-muted "
              }
              onClick={handleReactBoots}
            >
              React Bootstrap
            </div>
            <div
              className={
                clickReactRedux
                  ? "reactCatBtn btn border-bottom"
                  : "reactCatBtn btn text-muted "
              }
              onClick={handleReactRedux}
            >
              React Redux
            </div>
            <div
              className={
                clickReactFire
                  ? "reactCatBtn btn border-bottom"
                  : "reactCatBtn btn text-muted "
              }
              onClick={handleReactFire}
            >
              React Firebase
            </div>
            <div
              className={
                clickReactStyled
                  ? "reactCatBtn btn border-bottom"
                  : "reactCatBtn btn text-muted "
              }
              onClick={handleReactStyled}
            >
              React styled components
            </div>
          </div>
        ) : (
          <>
            <br />
          </>
        )}
        <Row xs={2} sm={2} md={4} lg={5}>
          {showMERN && (
            <>
              <Col className="pb-4">
                <Card className="cards">
                  <Card.Img className="cardImage" variant="top" src={tmern} />
                  <Card.Title className="w-100 py-2 text-center">
                    <a
                      href="https://todo-app-mern-stack-22.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="stretched-link text-dark text-decoration-none cardTitle"
                    >
                      To-do App
                    </a>
                  </Card.Title>
                </Card>

                <div className="d-flex justify-content-around footers">
                  <a
                    className="text-decoration-none"
                    href="https://todo-app-mern-stack-22.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/Shamim-Al-Mamun/Todo-App-MERN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i> Source Code
                  </a>
                </div>
              </Col>
            </>
          )}
          {showReact && (
            <>
              {showReactRedux && (
                <Col className="pb-4">
                  <Card className="cards">
                    <Card.Img className="cardImage" variant="top" src={capp} />
                    <Card.Title className="w-100 py-2 text-center">
                      <a
                        href="https://country-app-react-redux-bootstrap.netlify.app/"
                        className="stretched-link text-dark text-decoration-none cardTitle"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Country App
                      </a>
                    </Card.Title>
                  </Card>
                  <div className="d-flex justify-content-around footers">
                    <a
                      className="text-decoration-none"
                      href="https://country-app-react-redux-bootstrap.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://github.com/Shamim-Al-Mamun/Country-App-React-Redux"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github text-dark"></i> Source Code
                    </a>
                  </div>
                </Col>
              )}
              {showReactStyled && (
                <Col className="pb-4">
                  <Card className="cards">
                    <Card.Img className="cardImage" variant="top" src={eplan} />
                    <Card.Title className="w-100 py-2 text-center">
                      <a
                        href="https://escape-plan-styled.netlify.app/"
                        className="stretched-link text-dark text-decoration-none cardTitle"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Escape Plan
                      </a>
                    </Card.Title>
                  </Card>
                  <div className="d-flex justify-content-around footers">
                    <a
                      className="text-decoration-none"
                      href="https://escape-plan-styled.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://github.com/Shamim-Al-Mamun/Escape-Plan-React-Styled-Components"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github text-dark"></i> Source Code
                    </a>
                  </div>
                </Col>
              )}
              {showReactFire && (
                <>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={pgallery}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://photo-gallery-reactjs-firebase.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                        >
                          Photo Gallery
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://photo-gallery-reactjs-firebase.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/Photo-Gallery-React-Firebase"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                </>
              )}
              {showReactBoots && (
                <Col className="pb-4">
                  <Card className="cards">
                    <Card.Img
                      className="cardImage"
                      variant="top"
                      src={resumemaker}
                    />
                    <Card.Title className="w-100 py-2 text-center">
                      <a
                        href="https://resume-maker-react.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="stretched-link text-dark text-decoration-none cardTitle"
                      >
                        Resume Maker
                      </a>
                    </Card.Title>
                  </Card>
                  <div className="d-flex justify-content-around footers">
                    <a
                      className="text-decoration-none"
                      href="https://resume-maker-react.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://github.com/Shamim-Al-Mamun/ResumeMaker-React"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github text-dark"></i> Source Code
                    </a>
                  </div>
                </Col>
              )}
              {showReactFire && (
                <>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={fform}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://react-fire-auth.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                        >
                          Authentication
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://react-fire-auth.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/React-Firebase-Auth"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                </>
              )}
              {showReactRedux && (
                <Col className="pb-4">
                  <Card className="cards">
                    <Card.Img className="cardImage" variant="top" src={eshop} />
                    <Card.Title className="w-100 py-2 text-center">
                      <a
                        href="https://react-redux-thunk-async-api.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="stretched-link text-dark text-decoration-none cardTitle"
                      >
                        E-shop
                      </a>
                    </Card.Title>
                  </Card>
                  <div className="d-flex justify-content-around footers">
                    <a
                      className="text-decoration-none"
                      href="https://react-redux-thunk-async-api.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="text-decoration-none"
                      href="https://github.com/Shamim-Al-Mamun/React-Redux-Thunk-Async-API"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github text-dark"></i> Source Code
                    </a>
                  </div>
                </Col>
              )}
              {showReactAll && (
                <>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={todo}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://res-todo-app-react.netlify.app/"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Todo List
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://res-todo-app-react.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/Todo-App-React"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={breminder}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://birthday-reminds.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                        >
                          Birthday-Reminder
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://birthday-reminds.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/Birthday-Reminder"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={wtoday}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://weathertodayapi.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                        >
                          Weather-Today
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://weathertodayapi.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/Weather-Today"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={ressidebar}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://navbar-sidebar-responsive.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                        >
                          Responsive Sidebar
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://navbar-sidebar-responsive.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/Navbar-responsive-"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={resnav}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://navbar-responsive-react.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                        >
                          Responsive Navbar
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://navbar-responsive-react.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/Responsive-Navbar"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                  <Col className="pb-4">
                    <Card className="cards">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={cform}
                      />
                      <Card.Title className="w-100 py-2 text-center">
                        <a
                          href="https://contact-form-send-email.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="stretched-link text-dark text-decoration-none cardTitle"
                        >
                          Contact Us form
                        </a>
                      </Card.Title>
                    </Card>
                    <div className="d-flex justify-content-around footers">
                      <a
                        className="text-decoration-none"
                        href="https://contact-form-send-email.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        className="text-decoration-none"
                        href="https://github.com/Shamim-Al-Mamun/Contact-form-send-email"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github text-dark"></i> Source Code
                      </a>
                    </div>
                  </Col>
                </>
              )}
            </>
          )}
          {showVanilla && (
            <>
              <Col className="pb-4">
                <Card className="cards">
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={calculator}
                  />
                  <Card.Title className="w-100 py-2 text-center">
                    <a
                      href="https://calculatorvanilla-js.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="stretched-link text-dark text-decoration-none cardTitle"
                    >
                      Calculator
                    </a>
                  </Card.Title>
                </Card>
                <div className="d-flex justify-content-around footers">
                  <a
                    className="text-decoration-none"
                    href="https://calculatorvanilla-js.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/Shamim-Al-Mamun/Calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i> Source Code
                  </a>
                </div>
              </Col>
              <Col className="pb-4">
                <Card className="cards">
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={stopwatch}
                  />
                  <Card.Title className="w-100 py-2 text-center">
                    <a
                      href="https://stopwatchvanilla-js.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="stretched-link text-dark text-decoration-none cardTitle"
                    >
                      Stopwatch
                    </a>
                  </Card.Title>
                </Card>
                <div className="d-flex justify-content-around footers">
                  <a
                    className="text-decoration-none"
                    href="https://stopwatchvanilla-js.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/Shamim-Al-Mamun/Stopwatch/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i> Source Code
                  </a>
                </div>
              </Col>
              <Col className="pb-4">
                <Card className="cards">
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={todolist}
                  />
                  <Card.Title className="w-100 py-2 text-center">
                    <a
                      href="https://todolistvanilla-js.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="stretched-link text-dark text-decoration-none cardTitle"
                    >
                      TodoList
                    </a>
                  </Card.Title>
                </Card>

                <div className="d-flex justify-content-around footers">
                  <a
                    className="text-decoration-none"
                    href="https://todolistvanilla-js.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/Shamim-Al-Mamun/TodoList"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i> Source Code
                  </a>
                </div>
              </Col>
            </>
          )}
          {showNode && (
            <>
              <Col className="pb-4">
                <Card className="cards">
                  <Card.Img className="cardImage" variant="top" src={area} />
                  <Card.Title className="w-100 py-2 text-center">
                    <a
                      href="https://area-calculator-node.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="stretched-link text-dark text-decoration-none cardTitle"
                    >
                      Area Calculator
                    </a>
                  </Card.Title>
                </Card>

                <div className="d-flex justify-content-around footers">
                  <a
                    className="text-decoration-none"
                    href="https://area-calculator-node.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/Shamim-Al-Mamun/Area-Calculator-Node"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i> Source Code
                  </a>
                </div>
              </Col>
              <Col className="pb-4">
                <Card className="cards">
                  <Card.Img className="cardImage" variant="top" src={hobby} />
                  <Card.Title className="w-100 py-2 text-center">
                    <a
                      href="https://hobbylister.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="stretched-link text-dark text-decoration-none cardTitle"
                    >
                      Hobby Lister
                    </a>
                  </Card.Title>
                </Card>

                <div className="d-flex justify-content-around footers">
                  <a
                    className="text-decoration-none"
                    href="https://hobbylister.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/Shamim-Al-Mamun/Hobby-Lister-Node-EJS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i> Source Code
                  </a>
                </div>
              </Col>
              <Col className="pb-4">
                <Card className="cards">
                  <Card.Img className="cardImage" variant="top" src={restapi} />
                  <Card.Title className="w-100 py-2 text-center">
                    <a
                      href="https://rest-api-crud-node.herokuapp.com/users"
                      target="_blank"
                      rel="noreferrer"
                      className="stretched-link text-dark text-decoration-none cardTitle"
                    >
                      REST API
                    </a>
                  </Card.Title>
                </Card>

                <div className="d-flex justify-content-around footers">
                  <a
                    className="text-decoration-none"
                    href="https://rest-api-crud-node.herokuapp.com/users"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/Shamim-Al-Mamun/REST-API-CRUD-operations-Node"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-dark"></i> Source Code
                  </a>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
