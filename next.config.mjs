module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/partners',
        destination: 'https://saidtex.ma/api/partners',
      },
    ];
  },
};
