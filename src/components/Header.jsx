import React from "react";
import Particles from "react-particles-js";
const Header = (props) => {
  return (
    <>
      <header
        className={
          props.show ? "header-fixed header bg-light" : "header bg-light"
        }
      >
        <div className="row header-mid justify-content-evenly align-items-center  mx-auto">
          <div className="header-image  col-xl-7 col-lg-7  col-md-10 col-12 ">
            <img
              className="img-fluid"
              src="/images/gfx-a1.png"
              alt="header-images"
            />
          </div>
          <div className="header-text  col-xl-5 col-lg-5 col-md-10  col-12 ">
            <h1 className="">
              <i>
                Smart Loans & Overdrafts <br />
                for Smart You!
              </i>
            </h1>
            <h4 className="mt-4">
              Loans, Cards, Bank Accounts & ERP <br /> - Apply & Manage All at
              MudraCircle!
            </h4>
            <div className="applyBtn">
              <button type="button" className="btnApply">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* .........................header Background.....................    */}

        <div className="particles-bg">
          <Particles
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                size: {
                  value: 6,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.08,
                    sync: false,
                  },
                },
                color: {
                  value: "#00c0fa",
                },
                shape: {
                  type: "circle",
                  opacity: 0.2,
                  stroke: {
                    width: 0,
                    color: "#00c0fa",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                },
                opacity: {
                  value: 0.3,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.12,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#2b56f5",
                  opacity: 0.5,
                  width: 1.3,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: false,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>

        <div className="header-icons ">
          <ul className="row justify-content-center mx-auto">
            <li className="icons-img col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 ">
              <img
                src="/images/applyonline.png"
                className="img-fluid"
                alt="applyonline"
              ></img>
            </li>
            <li className="icons-img col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
              <img
                src="/images/uploaddocuments.png"
                className="img-fluid"
                alt="uploaddocuments"
              ></img>
            </li>
            <li className="icons-img col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
              <img
                src="/images/getloanoffer.png"
                className="img-fluid"
                alt="getloanoffer"
              ></img>
            </li>
            <li className="icons-img col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
              <img
                src="/images/decisionin24hr.png"
                className="img-fluid"
                alt="decisionin24hr"
              ></img>
            </li>
            <li className="icons-img col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
              <img
                src="/images/fundsarrives1.png"
                className="img-fluid"
                alt="fundsarrives1"
              ></img>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
