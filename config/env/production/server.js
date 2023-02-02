module.exports = ({ env }) => ({
  proxy: true,
  url: env("URL", ""),
  host: env("HOST", ""),
  port: env.int("PORT", 1337),
});
