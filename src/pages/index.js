import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Head from '@docusaurus/Head';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

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
      description={`${siteConfig.tagline}. ${siteConfig.customFields.description}`}>
      <HomepageHeader />
      <main>
        <div className="container" style={{paddingTop: '40px'}}>
          <div className="row">
            <div className="col col--2"></div>
            <div className="col col--2">
              <p><img src="/img/icon-feature.png" className="feature-image"/></p>
            </div>
            <div className="col col--6">
              <h2>Declare features</h2>
              <p>Write feature specs to describe how scenarios should behave.</p>
              <p>
              <i>File: gwen/features/todo.feature</i>
                <CodeBlock language="gherkin">
{`Feature: Add todo items

  Scenario: Create todo list
    Given a new todo list
    When the following items are added
          | Item          |
          | Get the milk  |
          | Walk the dog  |
    Then the list will contain 2 items
`}
                </CodeBlock>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col--2"></div>
            <div className="col col--2">
              <p><img src="/img/icon-meta.png" className="feature-image"/></p>
            </div>
            <div className="col col--6">
            <h2>Compose meta</h2>
              <p>Write meta specs to describe how steps will execute.</p>
              <p>
              <i>File: gwen/features/todo.meta</i>
              <CodeBlock language="gherkin">
{`Feature: Todo Meta
  
  @Context
  @StepDef
  Scenario: a new todo list
    Given my todo list can be located by css ".todo-list"
     When I navigate to "https://todomvc.com/examples/react"
     Then the page title should contain "TodoMVC"
      And my todo list should not be displayed
  
  @Action
  @DataTable @ForEach
  @StepDef
  Scenario: the following items are added
    Given the todo field can be located by class "new-todo"
     When I enter Item in the todo field
     Then my todo list should contain Item
  
  @Assertion
  @StepDef
  Scenario: the list will contain <expected-count> items
    Given the item count can be located by css ".todo-count strong"
     Then the item count should be "$<expected-count>"
      And my todo list should be displayed
`}
              </CodeBlock>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col--2"></div>
            <div className="col col--2">
              <ThemedImage
                alt="Gwen logo"
                sources={{
                  light: useBaseUrl('/img/icon-gwen-attractor-c.png'),
                  dark: useBaseUrl('/img/icon-gwen-attractor-w.png'),
                }}
                className="feature-image"
              />
            </div>
            <div className="col col--6">
            <h2>Launch Gwen</h2>
              <p>Launch Gwen to automate execution.</p>
              <p>
                  <Tabs
                    groupId="jstool"
                    defaultValue="yarn"
                    values={[
                      {label: 'Yarn', value: 'yarn'},
                      {label: 'npm', value: 'npm'},
                      {label: 'pnpm', value: 'pnpm'}
                    ]}>
                    <TabItem value="yarn">
                      Execute one feature spec
                      <CodeBlock language="shell">
                        {`yarn gwen -b gwen/features/todo.feature`}
                      </CodeBlock>
                      Execute all feature specs in a directory
                      <CodeBlock language="shell">
                        {`yarn gwen -b gwen/features`}
                      </CodeBlock>
                          </TabItem>
                          <TabItem value="npm">
                          Execute one feature spec
                      <CodeBlock language="shell">
                        {`npm run gwen -- -b gwen/features/todo.feature`}
                      </CodeBlock>
                      Execute all feature specs in a directory
                      <CodeBlock language="shell">
                        {`npm run gwen -- -b gwen/features`}
                      </CodeBlock>
                    </TabItem>
                    <TabItem value="pnpm">
                      Execute one feature spec
                      <CodeBlock language="shell">
                        {`pnpm gwen -b gwen/features/todo.feature`}
                      </CodeBlock>
                      Execute all feature specs in a directory
                      <CodeBlock language="shell">
                        {`pnpm gwen -b gwen/features`}
                      </CodeBlock>
                    </TabItem>
                  </Tabs>
              </p>
            </div>
          </div>
          <div className="row" style={{paddingTop: '30px', paddingBottom: '35px'}}>
            <div className="col col--2"></div>
            <div className="col col--2"></div>
            <div className="col col--6">
              <p>
                <Link
                  className="button banner-button button--lg"
                  to="/docs/get-started">
                  Get Started
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
