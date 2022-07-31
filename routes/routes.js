const { Router, json } = require("express");

const authMidd = require("../middlewares/auth.js");

const presenteController = require("../controllers/presenteController");
const convidadoController = require("../controllers/convidadoController");
const escolhaController = require("../controllers/escolhaController");
const ContatoController = require("../controllers/contatoController.js");

const routes = new Router();

// Presentes
routes.get("/item", presenteController.list);
routes.get("/item/:id", presenteController.listOne);
routes.post("/item", presenteController.create);
routes.put("/item/:id", presenteController.update);
routes.delete("/item/:id", presenteController.delete);

// Convidados
routes.get("/convidado", convidadoController.list);
routes.get("/convidado/:id", convidadoController.listOne);
routes.post("/convidado", convidadoController.create);
routes.put("/convidado/:id", convidadoController.update);
routes.delete("/convidado/:id", convidadoController.delete);

// Escolha
routes.get("/escolha", escolhaController.list);
routes.get("/escolha/:id", escolhaController.listOne);
routes.post("/escolha", escolhaController.create);
routes.put("/escolha/:id", escolhaController.update);
routes.delete("/escolha/:id", escolhaController.delete);

// Contato
routes.get("/contato", ContatoController.list);
routes.get("/contato/:pid", ContatoController.listOne);
routes.delete("/contato/:pid", ContatoController.delete);
routes.post("/contato", ContatoController.create);

routes.get("/", (req, res, next) => {
  res.status(200).json({
    status: "Sucess",
    msg: "Api Casamento rodando!",
  });
});

routes.use((req, res, next) => {
  res.status(404).json({
    error: true,
    msg: "Not Found",
  });
});

routes.use((error, req, res, next) => {
  console.log(error);
  return res.status(500).json({
    errror: true,
    message: "Internal Server Error",
  });
});

module.exports = routes;
