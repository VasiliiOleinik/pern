const sequalise = require('../db');
const { DataTypes } = require('sequelize');

// https://clck.ru/T3MHn - DB diagram

const User = sequalise.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

const Backet = sequalise.define('backet', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BacketDevice = sequalise.define('backet_device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


const Device = sequalise.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false }
});

const Type = sequalise.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const Brand = sequalise.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Rating = sequalise.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false }
});

const DeviceInfo = sequalise.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
});

const TypeBrand = sequalise('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

// Описание связей между моделями
// Если связь 1 к 1 то вызывать функцию hasOne, если 1 к множеству - то hasMany
// belongsToMany - связь много ко многим. Эта связь нуждается в промежуточной таблице
// belongsTo - сообщаем, что эта модель принадлежит другой

User.hasOne(Backet);
Backet.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Backet.hasMany(BacketDevice);
BacketDevice.belongsTo(Backet);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Devive.hasMany(BacketDevice);
BacketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });


module.exports = {
    User,
    Backet,
    BacketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
};