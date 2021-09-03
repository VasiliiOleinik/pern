const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        // const query = req.query; // Получить параметры get строки
        const { id } = req.query; // Получить только id из get строки
        if(!id) {
            return next(ApiError.badRequest('Не задан ID'));
        }
        res.json(id);
    }
}

module.exports = new UserController();