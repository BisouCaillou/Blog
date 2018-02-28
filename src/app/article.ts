import *as moment from 'moment';

export class Article
{
    id: number;
    title: string;
    description: string;
    author: string;
    date: moment.Moment;        //librairie.Classe
    
    constructor(id:number, title:string, description:string, author:string = 'kevin')
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.date = moment();
    }
}
