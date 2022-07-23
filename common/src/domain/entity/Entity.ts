import { UniqueEntityID } from '../value-object/UniqueEntityID';

const isEntity = (v: any): v is Entity<any, UniqueEntityID> => {
    return v instanceof Entity;
};

export abstract class Entity<T, U extends UniqueEntityID> {
    protected readonly _id: U;
    public readonly props: T;

    constructor(id: U, props: T) {
        this._id = id;
        this.props = props;
    }

    public equals(object?: Entity<T, U>): boolean {

        if (object == null || object == undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }

        if (!isEntity(object)) {
            return false;
        }

        return this._id.equals(object._id);
    }
}