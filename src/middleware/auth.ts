import * as express from "express";

export default function () {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Always Be true For Now
    if (true) {
      next();
      return;
    }
    return res.json({
      code: 1,
      message: "Fail To Authentication",
    });
  };
}
