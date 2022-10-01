import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Feature Specs',
    Svg: require('../../static/img/gwen-declare-features.svg').default,
    description: (
      <>
        <Link to="/docs#declare-features">Declare features</Link> to describe scenarios.
      </>
    ),
  },
  {
    title: 'Meta Specs',
    Svg: require('../../static/img/gwen-compose-meta.svg').default,
    description: (
      <>
        <Link to="/docs#compose-meta">Compose meta</Link> to formulate execution.
      </>
    ),
  },
  {
    title: 'Gwen Interpreter',
    Svg: require('../../static/img/gwen-execute-features.svg').default,
    description: (
      <>
        <Link to="/docs#launch-gwen">Launch Gwen</Link> to execute and automate.
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
    <section className={styles.features} style={{paddingTop: '20px', paddingBottom: '5px'}}>
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