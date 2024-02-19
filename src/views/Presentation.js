import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import Footer from "components/Footers/Footer.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("All fields required!");
      return;
    }

    const formData = { name, email, message };

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        alert("Thank you for your message. I'll get back to you soon!");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <>
      <DropdownFixedNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us" id="projects">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                {/* <h2 className="title">My Projects:</h2> */}
                <h5 style={{fontWeight:"bold"}}>
                  As a co-founder of a forward-thinking startup, I spearheaded a
                  collaborative venture with a talented team to innovate in the
                  realm of AI, culminating in the creation of a cutting-edge AI
                  content generator.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-info"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="7">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/project-ai-back.png") +
                        ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "AI is one of the most important things humanity is
                      working on. It is more profound than, I dunno, electricity
                      or fire." <br></br>
                      <br></br>
                      <small>-Sundar Pichai</small>
                    </p>
                  </div>
                  <div
                    className="image-container image-left-bottom"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project-ai1.png") + ")",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open("https://www.writeguide.ai", "_blank")
                    }
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/write-guide-ai-signup-page-subscriptions-background-black-white-blue-windows.webp") +
                        ")",
                    }}
                  ></div>
                  <h3>So why AI content generator?</h3>
                  <p>
                    An AI-content generator app serves as a pivotal tool in the
                    rapidly evolving digital landscape for several compelling
                    reasons. Primarily, it enhances productivity and efficiency
                    across various sectors, including marketing, journalism,
                    education, and creative writing. By automating the
                    generation of written content, these applications can
                    significantly reduce the time and effort required for
                    content creation, enabling writers and businesses to produce
                    high-quality, relevant content at scale.
                  </p>
                  <h3>Our App: <a href="https://www.writeguide.ai">writeguide.ai</a></h3>
                  <p>
                    At Write Guide AI , we're redefining content creation.
                    Imagine inputting a few simple parameters – keywords,
                    desired word count, tone, and title – and watching as our AI
                    swiftly crafts high-quality articles up to 4000 words in
                    under 5 minutes. Our platform extends its prowess to social
                    media, creating posts that engage and resonate. Every piece
                    of content is SEO-optimized, ensuring your message reaches
                    its intended audience effectively.
                  </p>
                  <p>
                    Our journey is not just about creating content but shaping
                    the future of how digital content interacts with audiences
                    and search engines alike.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Some of my Projects</h2>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="7">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/project-immigration.png") +
                        ")",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open("https://www.lbimmigration.ca", "_blank")
                    }
                  >
                    <CardBody>
                      <CardTitle tag="h2">lbimmigration.ca</CardTitle>
                      <p className="card-description">
                        This immigration website, crafted by a dedicated
                        immigration lawyer, serves as a comprehensive resource
                        for those seeking to navigate the various pathways to
                        immigrate to Canada.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Description:</h4>
                      <p className="description">
                        lbimmigration.ca is offering valuable insights and
                        information in two languages. It includes detailed
                        assessment forms to guide individuals through the
                        initial steps of the immigration process, ensuring
                        personalized assistance and support at every stage.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons tech_laptop"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Code Details:</h4>
                      <p className="description">
                        This website is built using Next.js for server-side
                        rendering and seamless page transitions, alongside
                        Material-UI for a sleek, responsive design that enhances
                        user interaction and accessibility.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr style={{fontWeight:"bold"}}></hr>
              <Row>
                <Col className="ml-auto mt-5" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Description:</h4>
                      <p className="description">
                        This project provides features such as the ability to
                        add, delete and view financial history. With Wealth
                        Tracker, users can stay organized and informed about how
                        much they're spending, saving and if they're heading in
                        the right direction to a better financial future.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons tech_laptop"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Code Details:</h4>
                      <p className="description">
                        This project leverages JavaScript for dynamic
                        client-side scripting, Bootstrap for responsive design,
                        Handlebars.js for efficient template rendering, and
                        MySQL for robust database management.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" md="7">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/project-wealth-tracker.png") +
                        ")",
                      marginTop: "7vh",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://boiling-gorge-22354-0c68df1ecb5a.herokuapp.com",
                        "_blank"
                      )
                    }
                  >
                    <CardBody>
                      <CardTitle tag="h2">Wealth Tracker</CardTitle>
                      <p className="card-description">
                        Wealth Tracker is a web application that allows users to
                        create and manage their finances and personal spending.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="projects-2">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <a
                      href="https://golnaz8.github.io/Recipe-Planner/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img-raised rounded"
                          src="https://github.com/Golnaz8/challenge6-weather-dashboard/assets/133593128/a729df0f-ff93-4813-94be-7268ab3c342e"
                        ></img>
                      </div>
                    </a>
                    <CardBody>
                      <a
                        href="https://golnaz8.github.io/Recipe-Planner/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <CardTitle tag="h4">Recipe Planner</CardTitle>
                      </a>
                      <p className="card-description">
                        Many people today find it difficult to consistantly eat
                        healthier on a daily basis. Therfore, this application
                        is designed to help users explore and discover healthier
                        meals from across the globe.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-plain">
                    <a
                      href="https://golnaz8.github.io/challenge6-weather-dashboard/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img-raised rounded"
                          src="https://github.com/Golnaz8/challenge6-weather-dashboard/assets/133593128/f9db4c7e-081d-428d-ad7c-5f47e2b91871"
                        ></img>
                      </div>
                    </a>
                    <CardBody>
                      <a
                        href="https://golnaz8.github.io/challenge6-weather-dashboard/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <CardTitle tag="h4">Weather Forecast</CardTitle>
                      </a>
                      <p className="card-description">
                        Developers are often tasked with retrieving data from
                        another application's API and using it in the context of
                        their own. In this mini-project I am trying to build a
                        weather dashboard that the users can see the weather
                        outlook for multiple cities so that thay will be able to
                        plan a trip accordingly.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg19.jpg") + ")",
          }}
          id="about-me"
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Who Am I?</h2>
                <h4 className="description text-white">
                  FullStack JavaScript Web Designer
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/golnaz-brj-team-photo.webp")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description" style={{ color: "black" }}>
                      Hello! I'm Golnaz, an accomplished computer engineer with
                      a master's degree in the field, illuminating the path of
                      innovation and technology with my expertise. My journey in
                      the tech landscape is driven by a boundless passion for
                      coding and a steadfast commitment to crafting solutions
                      that leave a lasting impact.
                      <br /> As a master in computer engineering, I possess a
                      comprehensive command over both front-end and back-end
                      technologies, including but not limited to JavaScript,
                      React, MySQL, MongoDB, and Next.js. My proficiency extends
                      to AWS, enabling me to architect and deploy scalable
                      applications seamlessly.
                      <br />
                      Beyond the realm of coding, I am a voracious reader,
                      constantly seeking knowledge and inspiration within the
                      pages of books. My zest for travel opens new avenues of
                      creativity, allowing me to draw inspiration from diverse
                      cultures and landscapes, enriching my work in profound
                      ways.
                      <br />
                      Maintaining a balance between mind and body, I engage in
                      swimming and tennis, activities that keep me vibrant and
                      agile. These pursuits not only invigorate me physically
                      but also sharpen my focus and enhance my creativity,
                      empowering me to tackle challenges with vigor and vision.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Golnaz Berenjian</CardTitle>
                    <p className="category"></p>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-contact-us text-center" id="contact-us">
          <Container>
            <h2 className="title">Want to contact me?</h2>
            <p className="description">
              Your opinions is very important to me.
            </p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <form onSubmit={submitHandler}>
                  <InputGroup
                    className={
                      firstFocus ? "input-lg input-group-focus" : "input-lg"
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      emailFocus ? "input-lg input-group-focus" : "input-lg"
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email Here..."
                      type="email"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <div className="textarea-container">
                    <Input
                      cols="80"
                      name="name"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></Input>
                  </div>
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    size="lg"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
