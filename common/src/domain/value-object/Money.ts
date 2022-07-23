export class Money {
    private readonly _amount: number;

    constructor(_amount: number) {
        this._amount = _amount;
    }

    public isGreaterThanZero(): boolean {
        return typeof this._amount === 'number' && this._amount > 0;
    }

    get value() {
        if (typeof this._amount !== 'number') throw new Error('amount is not of type number')

        return this._amount;
    }

    public isGreaterThan(object: Money): boolean {
        return this.value > object.value;
    }

    public add(object: Money): Money {
        return new Money(this.value + object.value);
    }

    public substract(object: Money): Money {
        return new Money(this.value - object.value);
    }

    public equals(object?: Money): boolean {

        if (object == null || object == undefined || !(object instanceof Money)) {
            return false;
        }

        if (this === object) {
            return true;
        }

        return this.value === object.value;
    }
}