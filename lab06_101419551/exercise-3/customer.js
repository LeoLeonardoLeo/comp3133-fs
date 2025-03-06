var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer("leo", "p");
customer.greeter();
