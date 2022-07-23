import { AggregateRoot, Money, OrderId, RestaurantId } from "@kidsorg/food-ordering-common";
import { Product } from "./Product";

export interface OrderItemProps {
    order: OrderId;
    product: Product;
    quantity: number;
    price: Money;
    subTotal: Money;
}

export class OrderItem extends AggregateRoot<OrderItemProps, OrderId> {
    constructor(id: OrderId, props: OrderItemProps) {
        super(id, props);
    }
}
