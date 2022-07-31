const Convidado = require('../models/convidadoModel');

class PresenteController {

	async listOne(req, res) {
		try {
			Convidado.findById(req.params.id)
			.then((user) => {
			  res.json({
				error: false,
				user,
			  });
			})
			.catch((err) => {
			  res.status(400).json({
				error: true,
				message: "Erro, convidado não encontrado!",
			  });
			});
		} catch (error) {
		  return next(error);
		}
	}

	async list(req, res) {

		try {
			const limit = req.query.limit || 3;
			const page = req.query.page || 1;
	
			Convidado.find({}).select('-updatedAt -__v -createdAt').then((users) => {
				return res.json({
					error: false,
					users
				});
			}).catch(() => {
				return res.status(100).json({
					error: true,
					code: 100,
					message: "Erro: Não foi possível executar a solicitação!"
				});
			});
		} catch (error) {
			return res.status(500).json({
				status: 'error',
				msg: error
			});
		}

	}

	async create(req, res) {
		
		try {
            
            const event = req.body.novoConvidado;
            console.log(event)

			Convidado.create(event).then((event) => {
				return res.json( event );				
			}).catch((err) => {
				return res.status(121).json({
					error: true,
					code: 121,
					message: "Error: Convidado não foi cadastrado com sucesso"
				});
			});
			
		} catch (error) {
			return res.status(500).json({
				status: 'error',
				msg: error
			});
		}

	}

	async update(req, res) {

		try {
			const teste = req.params.id
			const ConvidadoExiste = await Convidado.findOne({_id: req.params.id});
			console.log(ConvidadoExiste)
			if(!ConvidadoExiste){
				return res.status(400).json({
					error: true,
					code: 131,
					message: "Erro: Convidado não encontrado!"
				});
			};
	
			Convidado.updateOne({_id: req.params.id}, req.body).then(() => {
				return res.json({
					error: false,
					message: "Convidado editado com sucesso!"
				});
			}).catch((err) => {
				return res.status(400).json({
					error: true,
					code: 133,
					message: "Erro: Convidado não atualizado!"
				});
			});

		} catch (error) {
			return res.status(500).json({
				status: 'error',
				msg: error
			});
		}
	}
	
	async delete(req, res) {

		try {
			const teste = req.params.id

			Convidado.deleteOne({ _id: req.params.id }).then(() => {
				return res.json({
					error: false,
					message: "Convidado apagado com sucesso!"
				});
			}).catch((err) => {
				return res.status(400).json({
					error: true,
					code: 140,
					message: "Error: Convidado não foi apagado!"
				});
			});

		} catch (error) {
			return res.status(500).json({
				status: 'error',
				msg: error
			});
		}
	}
}

module.exports = new PresenteController();
