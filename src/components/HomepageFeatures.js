import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Declare Features',
    Svg: require('../../static/img/gwen-feature.svg').default,
    description: (
      <>
        Write <Link to="https://cucumber.io/docs/gherkin/reference">feature specs</Link> to describe intended behavior in the language of your domain.
      </>
    ),
  },
  {
    title: 'Compose Meta',
    Svg: require('../../static/img/gwen-meta.svg').default,
    description: (
      <>
        Write <Link to="/docs/meta">meta specs</Link> to describe how steps will execute to automate scenarios.
      </>
    ),
  },
  {
    title: 'Launch Gwen',
    Svg: require('../../static/img/gwen-portrait.svg').default,
    description: (
      <>
        Invoke Gwen to bind the meta and execute your features to drive automation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}