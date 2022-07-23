import { AggregateRoot, CustomerId, Money, OrderId, OrderStatus, RestaurantId } from "@kidsorg/food-ordering-common";
import { StreetAddress } from "../value-object/StreetAddress";
import { TrackingId } from "../value-object/TrackingId";
import { OrderItem } from "./OrderItem";

export interface OrderProps {
    customerId: CustomerId;
    restaurantId: RestaurantId;
    deliveryAddress: StreetAddress;
    price: Money;
    items: OrderItem[];
    trackingId: TrackingId;
    status: OrderStatus;
    failureMessages: string[];
}

export class Order extends AggregateRoot<OrderProps, OrderId> {
    constructor(id: OrderId, props: OrderProps) {
        super(id, props);
    }

    /* VALIDATION METHODS TO ENFORCE BUSINESS RULES */

    /* STATE CHANGING METHODS */
    initializeOrder() { }

    pay() { }

    initCancel() { }

    cancel() { }
}
