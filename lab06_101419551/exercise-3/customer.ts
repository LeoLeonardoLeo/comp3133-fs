class Customer {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }
    public greeter(){
        console.log(`hello ${this.firstName} ${this.lastName}`) 
    }

}


let customer = new Customer("leo", "p")

customer.greeter()