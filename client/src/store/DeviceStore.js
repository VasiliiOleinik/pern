import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "TV" },
            { id: 2, name: "Phone" }
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: 'Apple' }
        ];
        this._devices = [
            { id: 1, name: "Iphone 12", price: 25000, rating: 5, img: '123' },
            { id: 2, name: "Iphone 12", price: 25000, rating: 5, img: '123' },
            { id: 3, name: "Iphone 12", price: 25000, rating: 5, img: '123' },
            { id: 4, name: "Iphone 12", price: 25000, rating: 5, img: '123' },
            { id: 5, name: "Iphone 12", price: 25000, rating: 5, img: '123' }
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;

    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}