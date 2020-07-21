import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Collapse,
  Row,
  Space,
  Typography,
} from "antd";

import React from "react";

import SiteInfo from "../data/site-info.json";
import PageComponent from "../src/components/page-component";

class Gears extends PageComponent {
  constructor(props: {}) {
    super(
      props,
      "Gear Set Manager | " + SiteInfo.siteTitle,
      SiteInfo.siteDescription
    );
  }

  renderBody(): JSX.Element {
    const items = {
      "edenchoir-bastard-sword": {},
    };

    const testData = {
      weapon: {
        gearId: "edenchoir-bastard-sword",
      },
      shield: {},
      head: {},
      body: {},
      hands: {},
      waist: {},
      legs: {},
      feet: {},
      earrings: {},
      necklace: {},
      bracelets: {},
      ring1: {},
      ring2: {},
    };
    return (
      <React.Fragment>
        <Row gutter={[16, 16]} justify="center">
          <Col span={8}>
            <Card
              actions={[
                <Row
                  gutter={24}
                  justify="center"
                  style={{
                    paddingTop: 5,
                  }}
                >
                  <Col>
                    <Badge
                      count={"CH+60"}
                      style={{
                        backgroundColor: "rgb(166, 29, 36)",
                      }}
                    >
                      <Avatar src="/savage-aim-materia-viii.png" />
                    </Badge>
                  </Col>
                  <Col>
                    <Badge
                      count={"DH+60"}
                      style={{
                        backgroundColor: "rgb(186, 49, 36)",
                      }}
                    >
                      <Avatar src="/savage-aim-materia-viii.png" />
                    </Badge>
                  </Col>
                  <Col>
                    <Badge
                      count={"Det+60"}
                      style={{
                        backgroundColor: "rgb(186, 29, 56)",
                      }}
                    >
                      <Avatar src="/savage-aim-materia-viii.png" />
                    </Badge>
                  </Col>
                </Row>,
              ]}
              size="small"
              title="TEST"
            >
              <Card.Meta
                avatar={
                  <div
                    style={{
                      height: 55,
                      position: "relative",
                      width: 55,
                    }}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .75))",
                        borderRadius: 5,
                        height: "20%",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%",
                      }}
                    />
                    <img
                      src="/edenchoir-bastard-sword.png"
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                }
                description="Item Level 505"
                title="Edenchoir Bastard Sword"
              />
            </Card>
          </Col>
          <Col span={8} />
        </Row>
      </React.Fragment>
    );
  }
}

export default Gears;
