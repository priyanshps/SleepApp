const express = require("express")
const router = express.Router()

const { createOnboarding, all } = require("../controllers/onboarding")
router.post("/create", createOnboarding);
router.get("/fetch", all);

module.exports = router