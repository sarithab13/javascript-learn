export class Category{
    constructor(id,code,name){
        this.id=id;
        this.code=code;
        this.name=name;
    }
    display(){
        return this.name + " sold by:"
    }
}