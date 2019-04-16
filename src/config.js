const isProdBuild = process.env.NODE_ENV === "production";

const config = {
  services: {
    intoitBackend: process.env.intoitBackend || "insert local backend url"
  },
  debug: true
};

// Force values in production build
if (isProdBuild) {
  config.debug = false;
}

export default config;
