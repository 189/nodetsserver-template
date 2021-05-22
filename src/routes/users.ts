import * as express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get(
  "/",
  async (
    _: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.json([{ name: "Tom" }, { name: "Lily" }]);
  }
);

export default router;
