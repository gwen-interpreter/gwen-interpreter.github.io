import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{paddingTop: '40px', paddingBottom: '55px'}}>
      <Head>
        <title>{siteConfig.title} Automation</title>
        <meta property="og:title" content={`${siteConfig.title} | ${siteConfig.tagline}`} data-react-helmet="true" />
      </Head>
      <div className="container container_title">
        <div className="row">
          <div className={clsx('col col--12')}>
            <h1 className="hero__title">
              <span className="highlight">Gwen</span> {siteConfig.tagline}
            </h1>
              <p className="hero__subtitle">{siteConfig.customFields.subtitle}</p>
          </div>
        </div>
        <div className={styles.buttons}>
        <Link
            className="button banner-button button--lg"
            to="/docs/introduction">
            Learn More
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
      description={`${siteConfig.tagline}. ${siteConfig.customFields.subtitle}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className={styles.buttons} style={{paddingTop: '0', paddingBottom: '45px'}}>
              <Link
                className="button banner-button button--lg"
                to="/docs/get-started">
                Get Started
              </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
