import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Declare Features',
    imageLight: '/img/gwen-declare-features.svg',
    imageDark: '/img/gwen-declare-features.svg',
    linkRef: '/docs#declare-features',
  },
  {
    title: 'Compose Meta',
    imageLight: '/img/gwen-compose-meta.svg',
    imageDark: '/img/gwen-compose-meta.svg',
    linkRef: '/docs#compose-meta',
  },
  {
    title: 'Launch Gwen',
    imageLight: '/img/gwen-launch-gwen-color.svg',
    imageDark: '/img/gwen-launch-gwen-white.svg',
    linkRef: '/docs#launch-gwen',
  },
];

function Feature({title, imageLight, imageDark, linkRef}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ThemedImage
            alt={title}
            sources={{
              light: useBaseUrl(imageLight),
              dark: useBaseUrl(imageDark),
            }}
            width="200px" 
            height="200px"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><Link to={linkRef} className="feature-link">{title}</Link></h3>
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