const mongoose = require("mongoose");


const convidadoSchema = new mongoose.Schema(
    {
        nome: {
          type: String,
          required: [true, "Campo item deve ser preenchido"],
        },
        email: {
          type: String,
          required: [true, "Campo descricao deve ser preenchido"],
        },
        telefone: {
            type: String,
            required: [true, "Campo telefone deve ser preenchido"],
        },
        resposta: {
          type: String,
          required: [true, "Campo resposta deve ser preenchido"],
      }
    },
    {
        timestamps: true,
    }
)


module.exports = mongoose.model("convidado", convidadoSchema);