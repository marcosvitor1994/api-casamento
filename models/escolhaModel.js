const mongoose = require("mongoose");


const escolhaSchema = new mongoose.Schema(
    {
        item: {
          type: String,
          required: [true, "Campo item deve ser preenchido"],
        },
        descricao: {
          type: String,
          required: [true, "Campo descricao deve ser preenchido"],
        },
        nome: {
            type: String,
            required: [true, "Campo nome deve ser preenchido"],
        },
        email: {
            type: String,
            required: [true, "Campo email deve ser preenchido"],
        },
        telefone: {
            type: String,
            required: [true, "Campo telefone deve ser preenchido"],
        }
    },
    {
        timestamps: true,
    }
)


module.exports = mongoose.model("escolha", escolhaSchema);