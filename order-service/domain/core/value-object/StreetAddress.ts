export class StreetAddress {
    private readonly _id: string;
    private readonly _street: string;
    private readonly _postalCode: string;
    private readonly _city: string;

    constructor(id: string, street: string, postalCode: string, city: string) {
        this._id = id;
        this._street = street;
        this._postalCode = postalCode;
        this._city = city;
    }

    public get id(): string {
        return this._id;
    }

    public get street(): string {
        return this._street;
    }

    public get postalCode(): string {
        return this._postalCode;
    }

    public get city(): string {
        return this._city;
    }

}