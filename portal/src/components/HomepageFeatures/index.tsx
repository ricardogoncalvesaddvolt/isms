import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ISO/IEC 27001:2022',
    Svg: () => (
      <img
        src={require('@site/static/img/ISO27001.png').default}
        alt="ISO27001"
        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
      />
    ),
    description: (
      <>
        International standard for Information Security Management Systems (ISMS),
        providing a framework for managing sensitive information securely.
      </>
    ),
    to: '/docs/standards/iso-iec-27001-2022',
  },
  {
    title: 'ISO/SAE 21434:2021',
    Svg: () => (
      <img
        src={require('@site/static/img/ISO21434.jpeg').default}
        alt="ISO21434"
        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
      />
    ),
    description: (
      <>
        Road vehicle cybersecurity standard ensuring risk management
        processes throughout the lifecycle of automotive systems.
      </>
    ),
    to: '/docs/standards/iso-sae-21434-2021',
  },
  {
    title: 'ISO 24089:2023',
    Svg: () => (
      <img
        src={require('@site/static/img/ISO24089.jpg').default}
        alt="ISO24089"
        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
      />
    ),
    description: (
      <>
        Standard for software update engineering in road vehicles,
        covering planning, implementation, and verification of secure updates.
      </>
    ),
    to: '/docs/standards/iso-24089-2023',
  },
];

function Feature({title, Svg, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={to}>
          {title}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
