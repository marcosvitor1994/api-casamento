const Presente = require('../models/presenteModel');

class PresenteController {

	async listOne(req, res) {
		try {
			Presente.findById(req.params.id)
			.then((item) => {
			  res.json({
				error: false,
				item,
			  });
			})
			.catch((err) => {
			  res.status(400).json({
				error: true,
				message: "Erro, item não encontrado!",
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
	
			Presente.find({}).select('-updatedAt -__v -createdAt').then((item) => {
				return res.json({
					error: false,
					item
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
            
            const event = req.body.envioItem;
            console.log(event)

			Presente.create(event).then((event) => {
				return res.json( event );				
			}).catch((err) => {
				return res.status(121).json({
					error: true,
					code: 121,
					message: "Error: Item não foi cadastrado com sucesso"
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
			const PresenteExiste = await Presente.findOne({_id: req.params.id});
			console.log(PresenteExiste)
			if(!PresenteExiste){
				return res.status(400).json({
					error: true,
					code: 131,
					message: "Erro: Item não encontrado!"
				});
			};
	
			Presente.updateOne({_id: req.params.id}, req.body).then(() => {
				return res.json({
					error: false,
					message: "Item editado com sucesso!"
				});
			}).catch((err) => {
				return res.status(400).json({
					error: true,
					code: 133,
					message: "Erro: Item não foi editado!"
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

			Presente.deleteOne({ _id: req.params.id }).then(() => {
				return res.json({
					error: false,
					message: "Item apagado com sucesso!"
				});
			}).catch((err) => {
				return res.status(400).json({
					error: true,
					code: 140,
					message: "Error: Item não foi apagado!"
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
