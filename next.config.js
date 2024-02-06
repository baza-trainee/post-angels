/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
    });

    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    domains: ['res.cloudinary.com'],
  },
};
