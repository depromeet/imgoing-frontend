/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['design-token']);
module.exports = withTM({
  reactStrictMode: true,
});
