import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Declare features',
    imageLight: '/img/icon-feature.png',
    imageDark: '/img/icon-feature.png',
    linkRef: '/docs#declare-features',
    description: 'to describe scenarios',
  },
  {
    title: 'Compose meta',
    imageLight: '/img/icon-meta.png',
    imageDark: '/img/icon-meta.png',
    linkRef: '/docs#compose-meta',
    description: 'to describe execution',
  },
  {
    title: 'Launch Gwen',
    imageLight: '/img/icon-attractor-c.png',
    imageDark: '/img/icon-attractor-w.png',
    linkRef: '/docs#launch-gwen',
    description: 'to execute and automate',
  },
];

function Feature({title, imageLight, imageDark, linkRef, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ThemedImage
            alt={title}
            sources={{
              light: useBaseUrl(imageLight),
              dark: useBaseUrl(imageDark),
            }}
            width="185px" 
            height="185px"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <p style={{fontSize: '17px'}}><Link to={linkRef}><strong>{title}</strong></Link> {description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{paddingBottom: '15px'}}>
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