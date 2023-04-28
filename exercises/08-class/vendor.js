class Vendor{
    constructor(id,name,contactNumber){
        this.id=id;
        this.name=name;
        this.contactNumber=contactNumber;
    }
    display(){
        return this.name+" ("+this.contactNumber +")";
    }
}