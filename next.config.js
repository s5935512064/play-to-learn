/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "th"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
  },
}

module.exports = nextConfig