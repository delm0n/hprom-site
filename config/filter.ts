export enum Income { //Уровень дохода
    low = "IncomeLow", // Низкий
    middle = "IncomeMiddle", // Средний
    high = "IncomeHigh" // Высокий
}

export enum Specializations { //Специализации
    slesar = "SpecializationSlesar", // слесарь
    raznorabochij = "SpecializationRaznorabochij", // разнорабочий

    manager = "SpecializationManager", // Менеджер
    operator = "SpecializationOperator", // Оператор

    uyriskonsultant = "SpecializationUyriskonsultant", // Юрисконсультант
    inzhener = "SpecializationInzhener", // Инженер-конструктор 

}

// export enum Education { //Образование
//     not = "EducationNotRequired", // Не требуется
//     higher = "EducationHigher", // Высшее
//     technical = "EducationTechnical", // Среднее профессиональное
//     secondary = "EducationSecondary" // Среднее
// }

export enum Experience { // Опыт работы
    not = "ExperienceNotRequired", // 0
    low = "ExperienceLow", // 1-3 года
    middle = "ExperienceMiddle", // 3-6 лет
    high = "ExperienceHigh", // 6+ лет
    anyth = "ExperienceAny" // Не имеет значения
}


export enum Schedule { // График работы
    twobytwo = "ScheduleTwoBytwo", // 2/2
    full = "ScheduleFull", // 5/2
}

export enum Busyness { // Занятость
    full = "BusynessFull", // Полный
}

export enum Format { // Формат работы
    place = "FormatPlace", // на месте работодателя
    hybrid = "FormatHybrid", // гибридный

}

interface IFilterContent {
    name: string,
    value: Income | Specializations | Experience | Schedule | Busyness | Format,
    active: boolean,
}
export interface IFilter {
    title: string;
    content: IFilterContent[]
}