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
      collapsed: false,
      items: [
            'policies/information-security-policy',
            'policies/access-control-policy',
            'policies/vehicle-cybersecurity-policy',
            'policies/software-update-security-policy',
          ],
    },
    {
      type: 'category',
      label: 'Standards',
      items: [
        'standards/iso-24089-2023',
        'standards/iso-iec-27001-2022',
        'standards/iso-sae-21434-2021',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Procedures (SOPs)',
      link: {type: 'generated-index'},
      collapsed: true,
      items: [
        'procedures/user-access-provisioning',
        'procedures/data-backup-and-recovery',
      ],
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