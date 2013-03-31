new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 5,
  interval: 6000,
  width: 'auto',
  height: 300,
  theme: {
    shell: {
      background: '#aaaaaa',
      color: '#ffffff'
    },
    tweets: {
      background: '#ffffff',
      color: '#444444',
      links: '#4682b4'
    }
  },
  features: {
    scrollbar: false,
    loop: false,
    live: false,
    hashtags: true,
    timestamp: true,
    avatars: true,
    behavior: 'all'
  }
}).render().setUser('renatius').start();

