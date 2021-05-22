import fs from "fs";
import path from "path";
import dotEnvExpand from "dotenv-expand";
import dotEnv from "dotenv";
import chalk from "chalk";

const ships = ["SERVER_PORT"];

function initEnv() {
  const { NODE_ENV = "development" } = process.env;
  const dotenv = path.join(process.cwd(), ".env");
  const dotenvFiles = [
    // .env.development.local or .env.production.local
    `${dotenv}.${NODE_ENV}.local`,

    /*
     * Don't include `.env.local` for `test` environment
     * since normally you expect tests to produce the same
     * results for everyone
     */
    NODE_ENV !== "test" && `${dotenv}.local`,
    // .env.development
    `${dotenv}.${NODE_ENV}`,
    // .env
    dotenv,
  ].filter(Boolean);

  dotenvFiles.forEach((dotenvFile) => {
    if (typeof dotenvFile === "string" && fs.existsSync(dotenvFile)) {
      dotEnvExpand(
        dotEnv.config({
          path: dotenvFile,
          debug: Boolean(process.env.DEBUG) || NODE_ENV === "development",
        })
      );
    }
  });
}

function checkEnv() {
  let missing: string[] = [];

  console.log("\n");
  ships.forEach((env) => {
    if (typeof process.env[env] === "undefined" || process.env[env] === "") {
      console.log(chalk.red(`检查环境变量：${env} = ${process.env[env]}`));
      missing.push(env);
    } else {
      console.log(chalk.green(`检查环境变量：${env} = ${process.env[env]}`));
    }
  });
  console.log("\n");

  if (missing.length > 0) {
    console.log(
      chalk.redBright(`环境变量 ${missing.join(",")} 缺失，程序退出`)
    );
    process.exit(0);
  }
}

// 初始化 环境变量
initEnv();

// 校验环境变量
checkEnv();
