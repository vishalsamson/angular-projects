export class Course {

    courseName: string;
    category: string;
    duration: number; // in months
    language: string;
    cost: number;
    rating: number;

    constructor(
        courseName: string,
        category: string,
        duration: number,
        language: string,
        cost: number,
        rating: number
    ){
        this.courseName = courseName;
        this.category = category;
        this.duration = duration;
        this.language = language;
        this.cost = cost;
        this.rating = rating;
    }
}
