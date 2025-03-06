class Customer {
    firstName: string;
    lastName: string;
    
    public greeter(){
        console.log(`hello ${this.firstName} ${this.lastName}`) 
    }
}

let customer = new Customer()
customer.firstName = "leo"
customer.lastName = "p"
customer.greeter()