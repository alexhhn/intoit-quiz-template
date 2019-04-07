module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/env", "@babel/react"];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "react-hot-loader/babel"
  ];

  return {
    presets,
    plugins
  };
};
