exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    experiments: {
      asyncWebAssembly: true,
    },
    resolve: {
      fallback: {
        stream: false,
      },
    },
  });
};
