import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="row mx-auto align-items-end">
          <div className=" about-p col-xl-5 col-md-10 col-sm-11 col-12 offset-xl-1 offset-md-1 offset-sm-1">
            <h2>About MudraCircle</h2>
            <p>
              MudraCircle is an Intelligent NeoBanking Platform which has
              eliminated all the pain in Applying &amp; Managing a Unsecured
              Business loan or Unsecured Instant Business Overdraft and has
              automated the whole process with to a few minutes.
            </p>
            <p>
              Getting a loan was never been easier than this.You just need to
              come to MudraCircle.com- just register yourself and upload a few
              documents. While you do that our technology will gather all the
              information about you and your business by itself.
            </p>
            <p>
              When you submit the application it goes to our credit team, which
              would analyse &amp; approve your loan application alongwith a
              personal telephone call. Once we approve, funds will be instantly
              transferred to your registered bank account.
            </p>
            <p>
              <strong>
                Thinking of Unsecured Business Loans or Overdrafts- Think Of
                MudraCircle!!
              </strong>
            </p>
          </div>
          <div className="col-xl-6 col-md-10 col-sm-12 col-12">
            <iframe
              title="MC-youtube"
              src="https://www.youtube.com/embed/M1w4R4odU-Y"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
