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
      text: 'Sign up for Free',
      to: '/signup',
    },
    features: [null, '50 MB', '500 MB', null, 50, null, '250 MB', '500 MB'],
  },
  {
    name: 'Hobby',
    price: { USD: 5, IDR: '75k' },
    info: 'Shared Container',
    button: {
      text: 'Sign up for Hobby',
      to: '/signup',
    },
    features: [null, '250 MB', '5 GB', null, 500, null, '500 MB', '5 GB'],
  },
  {
    name: 'Pro',
    price: { USD: 25, IDR: '360k' },
    info: 'Dedicated Container',
    button: {
      text: 'Sign up for Pro',
      to: '/signup',
    },
    features: [null, '8 GB', '50 GB', null, '50,000', null, '100 GB', '50 GB'],
  },
  {
    name: 'Pay as you go',
    price: { USD: 99, IDR: '1.499k' },
    info: 'Self Hosted / On Premise',
    button: {
      text: 'Coming Soon',
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
