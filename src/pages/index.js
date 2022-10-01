import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Head from '@docusaurus/Head';
import Admonition from '@theme/Admonition';
import Introduction from '@site/docs/01-introduction.mdx';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Head>
        <title>{siteConfig.title} | {siteConfig.tagline}</title>
        <meta property="og:title" content={`${siteConfig.title} | ${siteConfig.tagline}`} data-react-helmet="true" />
      </Head>
      <div className="container container_title">
        <div className="row">
          <div className="col col--12">
            <h1 className="hero__title">
              <span className="highlight">Gwen</span> web automation and robotics
            </h1>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button banner-button button--lg"
            to="/docs/get-started">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--12">
                <h3>Behaviour Driven</h3>
                Gwen helps you automate acceptance testing and robotic processing with behaviour described in feature specifications.
                An embedded web engine executes each step in every scenario according to your meta to perform operations in browsers for you. Your features execute unchanged and unconcerned with automation details.
                <div className={styles.buttons} style={{'padding-top': '20px', 'padding-bottom': '37px'}}>
                  <Link
                    className="button banner-button button--lg"
                    to="/docs/introduction">
                    Learn More
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
