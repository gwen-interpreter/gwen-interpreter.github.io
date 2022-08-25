import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Head from '@docusaurus/Head';
import Introduction from '@site/docs/01-introduction.mdx';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Head>
        <title>{siteConfig.title} | {siteConfig.tagline}</title>
        <meta property="og:title" content={`${siteConfig.title} | ${siteConfig.tagline}`} data-react-helmet="true" />
      </Head>
      <div className="container">
        <h1 className="hero__title">
          <span className="highlight">Automate</span> web testing and robotic processing
        </h1>
        <p className="hero__subtitle">with behavioral specifications</p>
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
        <div className={clsx('col col--offset-1 col--10')}>
          <Introduction />
        </div>
        <div className={styles.buttons} style={{'padding-top': '20px', 'padding-bottom': '37px'}}>
          <Link
            className="button banner-button button--lg"
            to="/docs/get-started">
            Get Started
          </Link>
        </div>
      </main>
    </Layout>
  );
}
