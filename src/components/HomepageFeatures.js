import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Declare Features',
    Svg: require('../../static/img/gwen-declare-features.svg').default,
    description: (
      <>
        Declare <Link to="/docs#declare-features">feature</Link> specs to describe how scenarios should behave in the language of your domain.
      </>
    ),
  },
  {
    title: 'Declare Meta',
    Svg: require('../../static/img/gwen-declare-meta.svg').default,
    description: (
      <>
        Declare <Link to="/docs#declare-meta">meta</Link> specs to describe how scenarios will execute using the <Link to="/docs/dsl">Gwen DSL</Link>.
      </>
    ),
  },
  {
    title: 'Launch Gwen',
    Svg: require('../../static/img/gwen-execute-features.svg').default,
    description: (
      <>
        Launch Gwen to load your meta and <Link to="/docs#launch-gwen">execute</Link> your features to automate scenarios.
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