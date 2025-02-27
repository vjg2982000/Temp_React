/*!

* Copyright 2019 Symto Inc.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <>
        <div className="section section-nucleo-icons">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" md="12">
                <h2 className="title">Nucleo Icons</h2>
                <h4 className="description">
                  BLK• Design System PRO React comes with 100 custom icons made
                  by our friends from NucleoApp. The official package contains
                  over 2.100 thin icons which are looking great in combination
                  with BLK• Design System PRO React Make sure you check all of
                  them and use those that you like the most.
                </h4>
                <div className="btn-wrapper">
                  <Button
                    className="btn-round"
                    color="primary"
                    href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons?ref=blkdspr-index"
                    target="_blank"
                  >
                    View Demo Icons
                  </Button>
                  <Button
                    className="btn-simple btn-round"
                    color="primary"
                    href="https://nucleoapp.com/?ref=1712"
                    size="lg"
                    target="_blank"
                  >
                    View All Icons
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur-hover">
              <a href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/alert?ref=blkdspr-index">
                <div className="icons-container blur-item on-screen mt-5">
                  {/* Center */}
                  <i className="icon tim-icons icon-coins" />
                  {/* Right 1 */}
                  <i className="icon icon-sm tim-icons icon-spaceship" />
                  <i className="icon icon-sm tim-icons icon-money-coins" />
                  <i className="icon icon-sm tim-icons icon-link-72" />
                  {/* Right 2 */}
                  <i className="icon tim-icons icon-send" />
                  <i className="icon tim-icons icon-mobile" />
                  <i className="icon tim-icons icon-wifi" />
                  {/* Left 1 */}
                  <i className="icon icon-sm tim-icons icon-key-25" />
                  <i className="icon icon-sm tim-icons icon-atom" />
                  <i className="icon icon-sm tim-icons icon-satisfied" />
                  {/* Left 2 */}
                  <i className="icon tim-icons icon-gift-2" />
                  <i className="icon tim-icons icon-tap-02" />
                  <i className="icon tim-icons icon-wallet-43" />
                </div>
                <span className="blur-hidden h5 text-primary">
                  Explore all the 21.000+ Nucleo Icons
                </span>
              </a>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default NucleoIcons;
