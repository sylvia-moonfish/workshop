import { Button, Layout, Menu } from "antd";
import {
  HomeOutlined,
  ScheduleOutlined,
  SkinOutlined,
} from "@ant-design/icons";

import React from "react";

import App, { AppProps } from "next/app";
import Head from "next/head";

import SiteInfo from "../data/site-info.json";
import "../styles.less";

class WorkshopApp extends App<
  AppProps,
  {},
  {
    sliderCollapsed: boolean;
  }
> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      sliderCollapsed: false,
    };
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <Head>
          <meta
            content="initial-scale=1.0, width=device-width"
            name="viewport"
          />
          <meta content="website" property="og:type" />
          <meta content="summary" name="twitter:card" />
          <meta content="{SiteInfo.author}" name="twitter:creator" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
            rel="stylesheet"
          />
          <link href="/profile.jpg" rel="icon" type="image/jpg" />
          <script
            async
            src={
              "https://www.googletagmanager.com/gtag/js?id=" + SiteInfo.gtmId
            }
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', '" +
                SiteInfo.gtmId +
                "');",
            }}
          />
        </Head>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Layout.Header>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item icon={<HomeOutlined />} key="1">
                Platy's Workshop
              </Menu.Item>
              <Menu.Item icon={<SkinOutlined />} key="2">
                Gear Set Manager
              </Menu.Item>
              <Menu.Item icon={<ScheduleOutlined />} key="3">
                Battle Rotation Planner
              </Menu.Item>
            </Menu>
          </Layout.Header>
          <Layout.Content
            style={{
              minHeight: 280,
            }}
          >
            <this.props.Component {...this.props.pageProps} />
          </Layout.Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default WorkshopApp;
