const router = require("express").Router();
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  console.log("📩 Incoming data:", req.body);

  try {
    const savedMessage = await Message.create(req.body);
    console.log("✅ Saved to DB:", savedMessage);
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("❌ DB Save Error:", error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
