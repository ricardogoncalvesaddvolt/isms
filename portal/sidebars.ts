import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/index'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Policies',
      link: {type: 'generated-index'},
      items: [],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Standards',
      items: [
        'standards/annex-a-mapping',
        'standards/scope-and-statement-of-applicability',
        'standards/iso-24089-2023',
        'standards/iso-24089-2023-amd1-2024',
        'standards/iso-iec-27001-2022',
        'standards/iso-sae-21434-2021',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Procedures (SOPs)',
      link: {type: 'generated-index'},
      items: [],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Evidence',
      items: ['evidence/evidence-register'],
      collapsed: true,
    },
  ],
};

export default sidebars;