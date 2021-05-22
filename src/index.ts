import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import responseTime from "response-time";

import "./initEnv";
import log4js, { logger } from "./utils/logger";
import users from "./routes/users";

const SERVER_PORT = process.env.SERVER_PORT || 9000;
const DOMAIN = "127.0.0.1";
const app = express();
const router = express.Router();
const { shutdown } = log4js;

app.use(
  cors({
    origin: (_, callback) => {
      callback(null, true);
    },
    credentials: true,
  })
);

/*
 * app.use(log4js.connectLogger(logger, {
 *   level: 'auto',
 *   format: (req, _, format) => format(`:remote-addr :method :url ${JSON.stringify(req.body)}`)
 * }));
 */

app.use(responseTime());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", [users]);
app.use("/", router);

app.on("error", (err) => {
  logger.error(err);
});

router.get("/", (_, res) => {
  res.send("Server Has Wake Up, Happy Working");
});

app.listen(SERVER_PORT, () => {
  logger.info("open:", `http://${DOMAIN}:${SERVER_PORT}`);
});

function readyToExit(err: string) {
  logger.fatal(err);
  shutdown(() => {
    process.exit(1);
  });
}

process.on("uncaughtException", (err) => {
  readyToExit("Got UncaughtException: " + err);
});

process.on("unhandledRejection", (err) => {
  readyToExit("Got UnhandledRejection " + err);
});
