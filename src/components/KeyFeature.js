import React from "react";

const KeyFeature = ({ featureData }) => {
  return (
    <>
      <section className="key-features ">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <div className="row  justify-content-center">
              <h2 className="text-start ms-4">Key Features of MudraCircle</h2>
              {featureData.map((curElem) => {
                const { image, alt, title, description } = curElem;
                return (
                  <>
                    <div className="card-features col-xl-3 col-md-5 col-sm-10 col-12">
                      <img className="img-fluid" alt={alt} src={image}></img>
                      <h5 class="title ">{title}</h5>
                      <p>{description}</p>
                    </div>
                  </>
                );
              })}

              {/* <div className="card-features col-xl-3 col-md-5 col-sm-10 col-12 border border-danger">
                <img src="/images/quick.png"></img>
                <h5 class="title">Quick &amp; Simple</h5>
                <p>
                  We have make the loan process so simple wich makes its so
                  quick that its will save your lot of time.
                </p>
              </div>
              <div className="card-features col-xl-3 col-md-5 col-sm-10 col-12">
                <img src="/images/quick.png"></img>
                <h5 class="title">Quick &amp; Simple</h5>
                <p>
                  We have make the loan process so simple wich makes its so
                  quick that its will save your lot of time.
                </p>
              </div>
              <div className="card-features col-xl-3 col-md-5 col-sm-10 col-12">
                <img src="/images/quick.png"></img>
                <h5 class="">Quick &amp; Simple</h5>
                <p>
                  We have make the loan process so simple wich makes its so
                  quick that its will save your lot of time.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeature;
