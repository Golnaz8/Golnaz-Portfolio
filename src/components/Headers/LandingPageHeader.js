import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/golnaz-portfolio.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div style={{ marginTop: "60vh" }}>
          <Container>
            <h1 className="title">Golnaz Berenjian</h1>
            <h3>Software Engineer</h3>

            <div className="text-center">
              {/* <Button
                className="btn-icon btn-round mr-1"
                color="info"
                href="https://www.facebook.com/golnaz.berenjian"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button> */}
              <Button
                className="btn-icon btn-round mr-1"
                color="info"
                href="https://www.linkedin.com/in/golnaz-brj"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="https://github.com/golnaz8"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
