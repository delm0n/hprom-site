import type { IPageDefault } from "./settings";

export interface IMedia extends IPageDefault {
    active: boolean;
    contents: IMediaContent[];
    buttonText: string;
}

export interface IMediaContent {
    path: string;
    title: string;
    date: string;
    img: string;
    text: string;
}