interface IPhoto {
    id: number;
    base64: string;
}

export interface ICar {
    id: number;
    photoId: number;
    name: string;
    status: string;
    photo: IPhoto;
}