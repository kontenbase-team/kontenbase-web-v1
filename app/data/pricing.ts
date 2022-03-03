export const pricingFeaturesData = [
  { icon: 'database', name: 'Database' },
  { name: 'Database Space' },
  { name: 'Database Transfer' },
  { icon: 'auth', name: 'Auth' },
  { name: 'Users' },
  { icon: 'storage', name: 'Storage' },
  { name: 'Storage Space' },
  { name: 'Storage Transfer' },
]

export const pricingData = [
  {
    name: 'Free',
    price: { USD: 0, IDR: 0 },
    info: 'Shared Container',
    button: {
      text: 'Sign up for free',
      to: '/signup',
    },
    features: [null, '50 MB', '500 MB', null, 50, null, '250 MB', '500 MB'],
  },
  {
    name: 'Hobby',
    price: { USD: 5, IDR: 75_000 },
    info: 'Shared Container',
    button: {
      text: 'Sign up Hobby',
      to: '/signup',
    },
    features: [null, '250 MB', '5 GB', null, 500, null, '500 MB', '5 GB'],
  },
  {
    name: 'Pro',
    price: { USD: 25, IDR: 360_000 },
    info: 'Dedicated Container',
    button: {
      text: 'Sign up Pro',
      to: '/signup',
    },
    features: [null, '8 GB', '50 GB', null, 50_000, null, '100 GB', '50 GB'],
  },
  {
    name: 'Pay as you go',
    price: { USD: 99, IDR: 1_499_000 },
    info: 'Self Hosted / On Premise',
    button: {
      text: 'Contact us',
      to: '/contact',
    },
    features: [
      null,
      '$0.5 per GB',
      '$0.09 per GB',
      null,
      'Unlimited',
      null,
      '$0.05 per GB',
      '$0.09 per GB',
    ],
  },
]

export const pricingDataLegacy = {
  head: [
    null,
    {
      name: 'Free',
      price: { USD: 0, IDR: 0 },
      info: 'Shared Container',
      buttonText: 'Sign up for free',
      buttonTo: '/signup',
    },
    {
      name: 'Hobby',
      price: { USD: 5, IDR: 75_000 },
      info: 'Shared Container',
      buttonText: 'Sign up now',
      buttonTo: '/signup',
    },
    {
      name: 'Pro',
      price: { USD: 25, IDR: 360_000 },
      info: 'Dedicated Container',
      buttonText: 'Sign up now',
      buttonTo: '/signup',
    },
    {
      name: 'Pay as you go',
      price: { USD: 99, IDR: 1_499_000 },
      info: 'Self Hosted / On Premise',
      buttonText: 'Contact us',
      buttonTo: '/contact',
    },
  ],
  body: [
    {
      name: 'Database',
      icon: 'database',
      rows: [
        {
          name: 'Database Space',
          features: ['50 MB', '250 MB', '8 GB', '$0.5 per GB'],
        },
        {
          name: 'Transfer Limit',
          features: ['500 MB', '5 GB', '50 GB', '$0.09 per GB'],
        },
      ],
    },
  ],
  foot: [
    {
      buttonText: 'Sign up for free',
      buttonTo: '/signup',
    },
    {
      buttonText: 'Sign up now',
      buttonTo: '/signup',
    },
    {
      buttonText: 'Sign up now',
      buttonTo: '/signup',
    },
    {
      buttonText: 'Contact us',
      buttonTo: '/contact',
    },
  ],
}
