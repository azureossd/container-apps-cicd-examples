const express = require("express");
const router = express.Router();

router.get("/", (_req, res, _next) => {
  res.json({ message: "azure-webapps-linux-node-express-basic" });
});

module.exports = router;