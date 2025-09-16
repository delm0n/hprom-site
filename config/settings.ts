
// использовал в main/ Hero, HeroLink
export interface ILink {
    svg: string;
    title: string;
    text: string;
    customClass: string;
    ref: string;
}

// использовал в UI/BreadCrumbs
export interface IBreadCrumbs {
    title: string;
    ref?: string;
}

// для sidebar на страницах обяхательные значения
export interface IPageDefault {
    title: string;
    url: string;
}

// для props apparatswiper
export interface IImage {
    src: string;
    alt: string;
}


export interface IAdvantage {
    title: string;
    img: string;
    text: string;
}
