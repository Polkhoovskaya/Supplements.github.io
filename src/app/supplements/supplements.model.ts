export class Supplement {
    public code: string;
    public name: string;
    public origin: string;
    public category: string;
    public danger: string;
    public color: string;
    
    constructor(code: string, name: string, origin: string, category: string, danger: string, color: string){
        this.code = code;
        this.name = name;
        this.origin = origin;
        this.category = category;
        this.danger = danger;
        this.color = color;
    }
}