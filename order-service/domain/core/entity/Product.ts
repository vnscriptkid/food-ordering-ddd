import { AggregateRoot, Money, OrderId, ProductId } from "@kidsorg/food-ordering-common";

export interface ProductProps {
    name: string;
    price: Money;
}

export class Product extends AggregateRoot<ProductProps, ProductId> {
    constructor(id: OrderId, props: ProductProps) {
        super(id, props);
    }
}
