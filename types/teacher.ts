interface Review {
  comment: string;
  reviewerName: string;
  reviewerRating: number;
}


export interface Teacher{
    avatarUrl: string,
    conditions: string[],
    experience: string,
    languages: string[],
    lessonInfo: string,
    lessonDone: number,
    levels: string[],
    name: string,
    price: number,
    rating: number,
    reviews: Review[],
    surname:string,
}