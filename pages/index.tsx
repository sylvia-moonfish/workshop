import { Button } from "antd";

import React from "react";

import PageComponent from "../src/components/page-component";

class Index extends PageComponent {
  constructor(props: {}) {
    super(props, "TEST", "TEST");
  }

  renderBody(): JSX.Element {
    return <Button type="primary">Hello, World!</Button>;
  }
}

export default Index;
