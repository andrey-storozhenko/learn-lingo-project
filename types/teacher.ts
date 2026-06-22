interface Review {
  comment: string;
  reviewerName: string;
  reviewerRating: number;
}


export interface Teacher{
    avatar_url: string,
    conditions: string[],
    experience: string,
    languages: string[],
    lesson_info: string,
    lessons_done: number,
    levels: string[],
    name: string,
    price_per_hour: number,
    rating: number,
    reviews: Review[],
    surname:string,
}