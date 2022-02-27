export const pricingData = {
  head: [
    null,
    {
      name: 'Free',
      price: '0',
      info: 'Shared Container',
    },
    {
      name: 'Hobby',
      price: '5',
      info: 'Shared Container',
    },
    {
      name: 'Pro',
      price: '25',
      info: 'Dedicated Container',
    },
    {
      name: 'Pay as you go',
      price: '99',
      info: 'Self Hosted / On Premise',
    },
  ],
  body: [
    {
      name: 'Database',
      icon: 'database',
      rows: [
        {
          name: 'Database Space',
          features: ['50 MB', '250 MB', '8 GB', '$0.5 Per GB'],
        },
        {
          name: 'Transfer Limit',
          features: ['500 MB', '5 GB', '50 GB', '$0.09 Per GB'],
        },
      ],
    },
  ],
  foot: [
    {
      text: 'Sign up for free',
      to: '/signup',
    },
    {
      text: 'Sign up now',
      to: '/signup',
    },
    {
      text: 'Sign up now',
      to: '/signup',
    },
    {
      text: 'Contact us',
      to: '/contact',
    },
  ],
}
