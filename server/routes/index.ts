import express from "express";
const router = express.Router();

router.get("/test", (req: express.Request, res: express.Response) => {
  res.send("<div>Test</div>");
});

export default router;
