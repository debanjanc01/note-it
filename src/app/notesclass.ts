export class Notesclass {

    id: number;
    title: string;
    text:string;
    date:string;

    constructor(id:number,title:string,text:string,date:string)
    {
        this.id=id;
        this.title=title;
        this.text=text;
        this.date=date;
    }
}
