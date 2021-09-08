const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Backet } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}
class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        const candidate = await User.findOne({ where: { email } });
        if (!email, !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        const backet = await Backet.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async check(req, res, next) {
        // const query = req.query; // Получить параметры get строки
        // const { id } = req.query; // Получить только id из get строки
        // if(!id) {
        //     return next(ApiError.badRequest('Не задан ID'));
        // }
        // res.json(id);\

        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
}

module.exports = new UserController();