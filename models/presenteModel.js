const mongoose = require("mongoose");

const presenteSchema = new mongoose.Schema(
    {
        item: {
          type: String,
          required: [true, "Campo item deve ser preenchido"],
        },
        descricao: {
          type: String,
          required: [true, "Campo descricao deve ser preenchido"],
        },
        src: {
            type: String,
            required: [true, "Campo src deve ser preenchido"],
        }
      
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("presente", presenteSchema);