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
        Write <Link to="/docs#declare-features">feature</Link> specs to describe how scenarios should behave.
      </>
    ),
  },
  {
    title: 'Compose Meta',
    Svg: require('../../static/img/gwen-compose-meta.svg').default,
    description: (
      <>
        Write <Link to="/docs#compose-meta">meta</Link> specs to describe how steps will execute to automate scenarios.
      </>
    ),
  },
  {
    title: 'Execute Features',
    Svg: require('../../static/img/gwen-execute-features.svg').default,
    description: (
      <>
        Launch Gwen to load the meta and <Link to="/docs#execute-features">execute</Link> your features to automate.
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