import { Card, Col, Row } from "antd";

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
    return (
      <React.Fragment>
        <Row gutter={[16, 16]} justify="center">
          <Col span={4}>
            <Card title="TEST">
              <Card.Meta description="TEST" title="TEST" />
            </Card>
          </Col>
          <Col span={4} />
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={4}>
            <Card>
              <Card.Meta description="TEST" title="TEST" />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Card.Meta description="TEST" title="TEST" />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Gears;
