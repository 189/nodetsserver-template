module.exports = {
  blockchain: [
    {
      name: "blockChainService",
      script: "./dist/index.js",
      watch: ["dist"],
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      autorestart: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      // PM2 will auto detect the number of available CPUs and run as many processes as possible
      //   instances: "max",
      // default to true, [enable/disable source map file]
      source_map_support: true,
      // Make a difference instance between process
      // See https://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables
      instance_var: "INSTANCE_ID",
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      log_file: "logs/combined.log",
      time: true,
      merge_logs: true,
      max_memory_restart: "300M",
    },
  ],
  deploy: {
    production: {},
  },
};
