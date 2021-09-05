const uuid = require('uuid');
const path = require('path'); // Функция node.js для получения путей
const { Device, DeviceInfo } = require('../models/models');
const { nextTick } = require('process');
const ApiError = require('../error/ApiError');
class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files; // ПОлучение файла
            let fileName = uuid.v4() + ".jpg"; // Создание уникального имени
            img.mv(path.resolve(__dirname, '..', 'static', fileName)); // Перемещение файла в папку static
            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        descriprion: i.descriprion,
                        deviceId: device.id
                    }));
            }
            return res.json(device);
        } catch (e) {
            nextTick(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        // Если нет бренда и типа - то вернуть все девайсы
        // findAndCoutAll = нужна для пагинации, присылает еще количество страниц
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset });
        }
        // Если нет бренда, но есть тип - фильтрация по типу
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
        }
        // Если нет типа, но есть бренд - фильтрация по бренду
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, brandId }, limit, offset })
        }
        return res.json(devices);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const device = await Device.findOne(
            { 
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            }
        )
        return res.json(device);
    }
}

module.exports = new DeviceController();