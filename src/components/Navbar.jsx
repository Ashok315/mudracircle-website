import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = (props) => {
  const [scrol, setScrol] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrol(true);
    } else {
      setScrol(false);
    }
  };

  return (
    <>
      <nav
        className={
          props.show
            ? "responsive-nav navbarBg navbar navbar-expand-md fixed-top"
            : scrol
            ? "navbarBg navbar navbar-expand-md fixed-top"
            : "navbar navbar-expand-md fixed-top"
        }
      >
        <div className={scrol ? "nav-container container" : "container "}>
          <NavLink className="navbar-brand ms-1 " to="/">
            <img
              className={scrol ? "Mclogo1-responsive Mclogo1" : "Mclogo1"}
              src={props.show ? "" : scrol ? "/images/MC.png" : ""}
              alt={props.show ? "" : scrol ? "Mclogo1" : ""}
            />
          </NavLink>
          {/* .............navbarToggler-start............ */}
          <div
            className={props.show ? "openbar-hidden" : "openbar"}
            type="button"
            onClick={() => props.setShow(true)}
          >
            <span>
              <CgMenuLeftAlt />
            </span>
          </div>
          <div
            className={props.show ? "closebar-visible" : "closebar"}
            type="button"
            onClick={() => props.setShow(false)}
          >
            <span>
              <IoIosCloseCircleOutline />
            </span>
          </div>
          {/* .............navbarToggler-end............ */}
          <div className={props.show ? "show" : "collapse navbar-collapse "}>
            <ul
              className={
                props.show
                  ? "navbar-nav-responsive navbar-nav mb-2 mb-lg-0 "
                  : scrol
                  ? "navbar-navBg navbar-nav ms-auto mb-2 mb-lg-0 text-center align-items-center"
                  : "navbar-nav ms-auto mb-2 mb-lg-0 text-center align-items-center "
              }
            >
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="">
                  <img
                    className="bizkit-logo"
                    src="/images/bizkit_logo.png"
                    alt="bizkit"
                  />
                </Link>
              </li>
              <li className={props.show ? "nav-item " : "nav-item dropdown"}>
                <Link
                  className="nav-link "
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Borrow
                  <img
                    className="dropIcon"
                    src="/images/icons8-rectangle-48.png"
                    alt="list-rectangle"
                  />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/unsecure-business-loan"
                    >
                      Unsecured Business <br></br> Loan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Unsecured Instant<br></br> Business Overdrafts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      GST Based Loan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Suppy Chain Finanacing/<br></br> Invoice Financing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={props.show ? "nav-item " : "nav-item dropdown"}>
                <Link
                  className="nav-link "
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lend
                  <img
                    className="dropIcon"
                    src="/images/icons8-rectangle-48.png"
                    alt="list-rectangle"
                  />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="">
                      Bank
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      NBFC
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={props.show ? "nav-item " : "nav-item dropdown"}>
                <Link
                  className="nav-link partner"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Partner
                  <img
                    className="dropIcon"
                    src="/images/icons8-rectangle-48.png"
                    alt="list-rectangle"
                  />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="">
                      Digital
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Broker/Freelancer
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="">
                  <img
                    className="ftek-logo"
                    src="/images/anshu1.png"
                    alt="ftek"
                  />
                </Link>
              </li>
              <li className="nav-item ms-1 login">
                <button type="button" class="btnLogin">
                  LOGIN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
