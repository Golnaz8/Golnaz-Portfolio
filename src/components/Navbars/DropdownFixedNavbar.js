import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IconFixedNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              GB FullStack
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Coded by Golnaz
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* Icon links to sections */}
              <NavItem>
                <a
                  className="nav-link"
                  href="#projects"
                  onClick={() => scrollToSection("projects")}
                >
                  <i className="now-ui-icons tech_laptop"></i> My Projects
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link"
                  href="#about-me" 
                  onClick={() => scrollToSection("about-me")} 
                >
                  <i className="now-ui-icons users_single-02"></i> About Me
                  
                </a>
              </NavItem>

              <NavItem>
                <a
                  className="nav-link"
                  href="#contact-us"
                  onClick={() => scrollToSection("contact-us")}
                >
                  <i className="now-ui-icons tech_mobile"></i> Contact
                </a>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-default"
                  color="neutral"
                  href="https://docs.google.com/document/d/1vM2DqdbGt_vgWES2FEe3WXpgcphhYB-7/edit?usp=drive_link&ouid=114168789201802893623&rtpof=true&sd=true"
                  target="_blank"
                >
                  <p>My Resume</p>
                </Button>
              </NavItem>
              {/* Add more nav items as needed */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IconFixedNavbar;