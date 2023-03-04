module.exports = {
  // Specify the files that you want to analyze for used CSS
  content: ["./pages/**/*.js", "./components/**/*.js"],

  // Specify the CSS files that you want to analyze
  css: ["./styles/**/*.css"],

  // Specify any additional options that you want to use
  // For example, to whitelist certain selectors or ignore certain files
  // See the PurgeCSS documentation for a full list of options
  options: {
    whitelist: [],
    whitelistPatterns: [],
    whitelistPatternsChildren: [],
  },
};
