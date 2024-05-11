const { Router } = require("express")
const router = Router()

const { getAllPlayers, createPlayerByName, updatePlayerByName } = require("../controllers/player.controller")

router.get("/players", getAllPlayers)

router.post("/players/:name", createPlayerByName)

router.patch("/players/:name", updatePlayerByName)

module.exports = router