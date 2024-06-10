interface IPhoto {
    id?: number| undefined;
    base64: string| undefined;
}

export interface ICar {
    id?: number;
    photoId?: number;
    name: string| undefined;
    status: string| undefined;
    photo: IPhoto| undefined;

}