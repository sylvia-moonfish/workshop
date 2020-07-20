import { Avatar, Card, Col, Result, Row, Space, Tag } from "antd";
import {
  ScheduleOutlined,
  SkinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import Router from "next/router";

import React from "react";

import SiteInfo from "../data/site-info.json";
import PageComponent from "../src/components/page-component";
import TwitchOutlined from "../src/icons/twitch-outlined";

class Index extends PageComponent {
  constructor(props: {}) {
    super(props, SiteInfo.siteTitle, SiteInfo.siteDescription);
  }

  renderBody(): JSX.Element {
    return (
      <React.Fragment>
        <Result
          icon={
            <img
              src="/profile.jpg"
              style={{ borderRadius: "50%", width: 200 }}
            />
          }
          subTitle={
            <Space direction="vertical" style={{ marginTop: 10 }}>
              <a
                href={SiteInfo.fflogsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Tag color="magenta" style={{ cursor: "pointer" }}>
                  Sylvia Moonfish@Midgardsormr/Aether
                </Tag>
              </a>
              <a
                href={SiteInfo.twitterUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Tag
                  color="blue"
                  icon={<TwitterOutlined />}
                  style={{ cursor: "pointer" }}
                >
                  @sylvia_moonfish
                </Tag>
              </a>
              <a
                href={SiteInfo.twitchUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Tag
                  color="purple"
                  icon={<TwitchOutlined />}
                  style={{ cursor: "pointer" }}
                >
                  sylvia_moonfish
                </Tag>
              </a>
            </Space>
          }
          title={SiteInfo.siteTitle}
        />
        <Row justify="center">
          <Col span={8}>
            <Card
              hoverable
              onClick={() => {
                Router.push("/gears");
              }}
            >
              <Card.Meta
                avatar={<Avatar icon={<SkinOutlined />} />}
                description="Track and manage your gear sets!"
                title="Gear Set Manager"
              />
            </Card>
          </Col>
          <Col span={1} />
          <Col span={8}>
            <Card
              hoverable
              onClick={() => {
                Router.push("/rotations");
              }}
            >
              <Card.Meta
                avatar={<Avatar icon={<ScheduleOutlined />} />}
                description="Plan and simulate your skill rotations!"
                title="Battle Rotation Planner"
              />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Index;
