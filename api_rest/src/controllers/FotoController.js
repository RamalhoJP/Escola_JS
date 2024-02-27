import multer from 'multer';
import mutlterConfig from '../config/mutlter';
import Foto from '../models/Fotos';

const upload = multer(mutlterConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        // eslint-disable-next-line camelcase
        const { aluno_id } = req.body;
        // eslint-disable-next-line camelcase
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }
    });
  }
}

export default new FotoController();
