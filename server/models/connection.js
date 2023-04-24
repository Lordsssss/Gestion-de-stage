const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    email:{type: String, required: true},
    userName:{type: String, required: true},
    
    prof: { type: mongoose.Types.ObjectId, ref: 'Prof', required: true },
    listeEtudiants: [{ type: mongoose.Types.ObjectId, ref: 'Etudiant' , default: [] }]
});

module.exports = mongoose.model("Cours", coursSchema);