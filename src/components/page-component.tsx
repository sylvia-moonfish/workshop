import Head from "next/head";
import Router from "next/router";

import React from "react";

import SiteInfo from "../../data/site-info.json";

abstract class PageComponent extends React.Component {
  pageData: {
    title: string;
    description: string;
  };

  constructor(props: any, title: string, description: string) {
    super(props);

    this.pageData = {
      title: title,
      description: description,
    };
  }

  componentDidMount(): void {
    Router.events.on("routeChangeComplete", function (url: string): void {
      (window as any).gtag("config", SiteInfo.gtmId, {
        page_location: url,
      });
    });
  }

  abstract renderBody(): JSX.Element;

  render(): JSX.Element {
    if (!this.pageData.title) throw new Error("title is missing.");
    if (!this.pageData.description) throw new Error("description is missing");

    return (
      <React.Fragment>
        <Head>
          <title key="title">{this.pageData.title}</title>
          <meta
            content={this.pageData.description}
            key="description"
            name="description"
          />
          <meta
            content={this.pageData.title}
            key="og-title"
            property="og:title"
          />
          <meta
            content={this.pageData.description}
            key="og-description"
            property="og:description"
          />
          <meta
            content={this.pageData.title}
            key="twitter-title"
            name="twitter:title"
          />
          <meta
            content={this.pageData.description}
            key="twitter-description"
            name="twitter:description"
          />
        </Head>
        {this.renderBody()}
      </React.Fragment>
    );
  }
}

export default PageComponent;
