import Aluno from '../models/Aluno';
import Foto from '../models/Fotos';

class HomeController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        order: [['id', 'ASC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url'],
        },
      });
      res.json(alunos);
    } catch (e) {
      res.status(400).json(null);
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['Id inválido'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        order: [['id', 'ASC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Não existe este aluno'],
        });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['Id inválido'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Não existe este aluno'],
        });
      }

      const newAluno = await aluno.update(req.body);
      return res.status(200).json(newAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['Id inválido'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Não existe este aluno'],
        });
      }

      await aluno.destroy();
      return res.status(200).json('Apagado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new HomeController();
