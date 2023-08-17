let env = "production"; // Defaults to production
if (process.env.NODE_ENV === "development") env = "development";

const appConfig = {
  // App Details
  appName: "Melody",

  // Build Configuration - eg. Debug or Release?
  isDevEnv: env === "development",
  ENV: env,

  // API
  apiBaseUrl: "http://137.74.230.245:81",
};

export { appConfig };
