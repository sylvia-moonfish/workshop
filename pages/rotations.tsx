import { Result } from "antd";

import React from "react";

import SiteInfo from "../data/site-info.json";
import PageComponent from "../src/components/page-component";

class Rotations extends PageComponent {
  constructor(props: {}) {
    super(
      props,
      "Battle Rotation Planner | " + SiteInfo.siteTitle,
      SiteInfo.siteDescription
    );
  }

  renderBody(): JSX.Element {
    return (
      <React.Fragment>
        <Result status="warning" title="Not implemented yet!" />
      </React.Fragment>
    );
  }
}

export default Rotations;
