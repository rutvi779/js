/*let mobile={
    brand:"apple",
    price:66000,
    color:"silver"
};

console.log(mobile)*/

class Mobile{
    constructor(brand,color,price){
        this.brand=brand;
        this.color=color;
        this.price=price;
    }
    
    setPrice(price){
        this.price=price;
    }
     getPrice(){
        return this.price;
    }
    
    setBrand(brand){
        this.brand=brand;
    }
     getBrand(){
        return this.brand;
    }
    
    setColor(color){
        this.color=color;
    }
    getColor(){
        return this.color;
    }
    
    printAll(){
        let m1=`${this.getPrice()} ++ ${this.getBrand()} ++ ${this.getColor() }`
        console.log(m1)
    }
    
}

class Person extends Mobile{
    constructor(brand,color,price,name){
        super(brand,color,price);
        this.name=name;
    }
    
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    
   printAll(){
        let d1=`${this.getPrice()} ++ ${this.getName()}`
        console.log(d1);
    }
}

let person = new Person('apple','pink',12000,'joe')
person.printAll()
