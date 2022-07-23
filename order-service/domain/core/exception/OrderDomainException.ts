export class OrderDomainException extends Error {
    constructor(msg = OrderDomainException.name) {
        super(msg)
    }
}