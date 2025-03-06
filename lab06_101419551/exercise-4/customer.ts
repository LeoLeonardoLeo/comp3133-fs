export class Customer {
    private firstName: string;
    private lastName: string;
    private age

    constructor(firstName: string, lastName: string, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    public greeter(){
        console.log(`hello ${this.firstName} ${this.lastName}`) 
    }
    public getAge(){
        console.log(`${this.firstName} ${this.lastName} age is: ${this.age}`)
    }

}


let customer = new Customer("leo", "p", 21)

customer.greeter()
customer.getAge()