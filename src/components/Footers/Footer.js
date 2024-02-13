/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <hr />
          <div className="copyright" id="copyright" style={{textAlign:"center", margin:"2vh"}}>
            © {new Date().getFullYear()}, Coded by Golnaz.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
