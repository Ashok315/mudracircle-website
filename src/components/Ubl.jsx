import React from "react";

const Ubl = () => {
  return (
    <>
      <section className="ubl-main">
        <div className="container">
          <div className="row justify-content-evenly align-items-center ">
            <div className=" ubl-image col-lg-6 col-md-5 col-sm-10 col-10">
              <img
                className="img-fluid "
                src="/images/gfx-z-e.png"
                alt="ubl-images"
              />
            </div>
            <div className=" ubl-text col-lg-6 col-md-5 col-sm-10 col-10">
              <h1>Unsecured Business Loan</h1>
              <p>
                Unsecured loan is a loan that is issued and supported only by
                the borrower's creditworthiness, rather than by any type of
                collateral. An unsecured loan is one that is obtained without
                the use of property as collateral for the loan. These are highly
                flexible loans that can be used for a wide range of purposes,
                including working capital, expansion capital, asset purchase and
                more. Typical tenure of such loans is 6-36 months
              </p>
            </div>
          </div>
          <div className="applyBtn text-center">
            <button type="button" className="btnApply text-center">
              APPLY NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ubl;
