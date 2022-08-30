import express from "express";
const router = express();

router.get("/test", function (req, res, next) {
  try {
    res.json({ message: "test thui" });
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});
export default router;
