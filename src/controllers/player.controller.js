const Player = require("../models/Player")

const getAllPlayers = async (req, res) => {
    try{
        const playerList = await Player.find().sort({wins:-1, points:1})
        res.status(200).send(playerList)
    }catch(err){
        return res.status(400).json({
            message: err
        })
    }
}

const createPlayerByName = async (req, res) => {
    try{
        const name = req.params.name
        const player = new Player({name, wins:0, points:0})
        await player.save()
        res.status(200).send(`Player ${name} created`)
    }catch(err){
        return res.status(400).json({
            message: err
        })
    }
}

const updatePlayerByName = async (req, res) => {
    try{
        const name = req.params.name
        const { wins, points } = req.body
        await Player.findOneAndUpdate({name}, {wins, points})
        res.status(200).send(`Player ${name} updated`)
    }catch(err){
        return res.status(400).json({
            message: err
        })
    }
}

module.exports = {
    getAllPlayers,
    createPlayerByName,
    updatePlayerByName
}