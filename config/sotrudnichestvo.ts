import type { IPageDefault, IAdvantage } from "./settings";
import type { Income, Specializations, Experience, Schedule, IFilter, Busyness, Format } from "./filter";

export interface ISotrudnichestvo extends IPageDefault {
}

export interface IVakansii extends IPageDefault {
    active: boolean;
    contents: IVakansiiContent[];
    description: string;
    imgVakansii: string;
    pageTitle: string;
    filters: IFilter[];

}

export interface IVakansiiContent {
    path: string;
    name: string;
    price: number;

    priceText?: string;
    description?: string[];

    case: string;
    skills: string[];
    demand: string;
    advantages: IAdvantage[];

    filter: Array<Income | Specializations | Experience | Schedule | Busyness | Format>
}

export interface IVakansiiPopular extends IPageDefault, IVakansiiContent {
}