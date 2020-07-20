import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ScheduleOutlined,
  SkinOutlined,
} from "@ant-design/icons";

import App, { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";

import React from "react";

import SiteInfo from "../data/site-info.json";
import "../styles.less";

class WorkshopApp extends App<
  AppProps,
  {},
  {
    currentRoute: string[];
  }
> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentRoute: [],
    };
  }

  componentDidMount(): void {
    this.determineCurrentRoute();
    Router.events.on("routeChangeComplete", (url: string): void => {
      this.determineCurrentRoute();

      (window as any).gtag("config", SiteInfo.gtmId, {
        page_location: url,
      });
    });
  }

  determineCurrentRoute(): void {
    if (Router.pathname === "/") {
      this.setState({
        ...this.state,
        currentRoute: [],
      });
    } else {
      this.setState({
        ...this.state,
        currentRoute: [Router.pathname],
      });
    }
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
          <Layout.Header
            style={{
              position: "fixed",
              width: "100%",
              zIndex: 1,
            }}
          >
            <Menu
              mode="horizontal"
              selectedKeys={this.state.currentRoute}
              theme="dark"
            >
              <Menu.Item
                icon={<HomeOutlined />}
                key="/"
                onClick={() => {
                  Router.push("/");
                }}
                style={{
                  color: "white",
                }}
              >
                Platy's Workshop
              </Menu.Item>
              <Menu.Item
                icon={<SkinOutlined />}
                key="/gears"
                onClick={() => {
                  Router.push("/gears");
                }}
              >
                Gear Set Manager
              </Menu.Item>
              <Menu.Item
                icon={<ScheduleOutlined />}
                key="/rotations"
                onClick={() => {
                  Router.push("/rotations");
                }}
              >
                Battle Rotation Planner
              </Menu.Item>
            </Menu>
          </Layout.Header>
          <Layout.Content
            style={{
              marginTop: 64,
              padding: 50,
            }}
          >
            <this.props.Component {...this.props.pageProps} />
          </Layout.Content>
          <Layout.Footer
            style={{
              fontSize: "0.8em",
              textAlign: "center",
            }}
          >
            {SiteInfo.siteTitle} © {SiteInfo.copyrightYear} Created by{" "}
            {SiteInfo.author}
          </Layout.Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default WorkshopApp;
