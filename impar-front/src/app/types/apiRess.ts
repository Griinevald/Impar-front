interface IPhoto {
    Id?: number | undefined;
    Base64: string | undefined;
}

export interface ICar {
    Id?: number;
    PhotoId?: number;
    Name: string | undefined;
    Status: string | undefined;
    Photo: IPhoto | undefined;

}
export interface IODataResponse<T> {
    "@odata.context": string;
    "@odata.count"?: number;
    value: T[];
}
export interface ICarODataResponse extends IODataResponse<ICar> {}
