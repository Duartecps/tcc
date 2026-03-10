const userModel = require('.../models/userModel');

const createUser = (req, res) => {
    // Aqui, dados de usuário seriam processados e salvos
    const newUser = req.body; // Simula salvar os dados
    res.send(`Usuário ${newUser.name} criado com sucesso!`);
};

module.exports = {  createUser };