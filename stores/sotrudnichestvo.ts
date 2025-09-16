import { Income, Specializations, Experience, Schedule, Busyness, Format } from "~/config/filter";
import type { IAdvantage } from "~/config/settings";
import type { ISotrudnichestvo, IVakansii, IVakansiiContent, IVakansiiPopular } from "~/config/sotrudnichestvo"

type State = {
    sotrudnichestvo: ISotrudnichestvo[];
    vakansii: IVakansii[]
}

const emptyVakansii: IVakansii = {
    title: '',
    active: true,
    contents: [],
    url: '',
    description: '',
    imgVakansii: '',
    filters: [],
    pageTitle: '',

}

const emptyVakansiiContent: IVakansiiContent = {
    path: '',
    name: '',
    price: 0,

    case: '',
    skills: [],
    demand: '',
    advantages: [],
    filter: [],

    priceText: '',
    description: [],

}


export const useSotrudnichestvoStore = defineStore('sotrudnichestvoStore', {
    state: (): State => ({
        sotrudnichestvo: [
            {
                title: 'Вакансии',
                url: 'vakansii'
            },

            // {
            //     title: 'Оптовым клиентам',
            //     url: 'optovym-klientam'
            // },

            // {
            //     title: 'Поставщикам',
            //     url: 'postavshhikam'
            // },
        ],
        vakansii: []
    }),

    getters: {

        getVakansiiContentByUrl: (state) => (url: string | string[], path: string | string[]): IVakansiiContent => {
            try {
                //на вход в $route.params может прийти строка, а может массив строк
                let my_path: string = Array.isArray(path) ? path[0] : path;
                let my_url: string = Array.isArray(url) ? url[0] : url;

                let vakansii: IVakansii = state.vakansii.find(el => el.url == my_url)!;
                return vakansii.contents.find(el => el.path == my_path)!
            }
            catch {
                return emptyVakansiiContent;
            }

        },

        getVakansiiByUrl: (state) => (url: string | string[]): IVakansii => {
            try {
                //на вход в $route.params может прийти строка, а может массив строк
                let my_url: string = Array.isArray(url) ? url[0] : url;
                return state.vakansii.find(el => el.url == my_url)!
            }
            catch {
                return emptyVakansii;
            }
        },

        getVakansiiContent10: () => (vak: IVakansii): IVakansiiContent[] => {
            return vak.contents.slice(0, 8)
        },

        getPopularVakansii(): IVakansiiPopular[] {
            let arr: IVakansiiPopular[] = [];

            this.vakansii.forEach(parent => {
                parent.contents.forEach(children => {
                    arr.push({ ...children, title: parent.title, url: parent.url });
                })
            });

            return arr;
        }

    },

    actions: {
        setVakansiiActive(i: number) {
            this.vakansii.forEach((element, index) => {
                index == i ? (element.active = true) : (element.active = false);
            });
        },

        setVakansiiFilter(i: number, j: number, url: string) {
            let vakansii = this.vakansii.find(el => el.url == url);

            if (!!vakansii) {
                vakansii.filters[i].content.forEach((element, index) => {
                    index == j ? (element.active = !element.active) : (element.active = false);
                });
            }
        },

        setFilterFalse() {
            this.vakansii.forEach(parent => {
                parent.filters.forEach(child => {
                    child.content.forEach(el => {
                        el.active = false;
                    })
                });
            });
        },

        async fetch() {

            let office: IVakansiiContent[] = [];
            let sklad: IVakansiiContent[] = [];
            let prodaji: IVakansiiContent[] = [];
            let proizvodstvo: IVakansiiContent[] = [];

            try {

                office.push(...[
                    {
                        name: 'Юрисконсультант',
                        price: 55000,
                        path: 'uyriskonsultant',
                        case: `
                        <ul>
                          <li> Консультирование отделов компании по правовым вопросам и подготовка юридических справок;</li> 
                           <li> Сопровождение договорной работы: подготовка, экспертиза и согласование договоров;</li> 
                           <li> Претензионная клиентская работа: рассмотрение претензий, уведомлений, заявлений, а также ведение исковой деятельности;</li> 
                           <li> Взаимодействие с контролирующими структурами: обработка обращений, требований, уведомлений;</li> 
                           <li> Участие в судебных разбирательствах, защита интересов компании в суде;</li> 
                           <li> Урегулирование споров, связанных с защитой исключительных прав компании.</li> 
                        </ul>
                        `,
                        skills: [
                            'Знание законодательства',
                            'Опыт представительства в суде',
                            'Знание правил составления документов',
                            'Знание порядка систематизации и учёта правовой документации'
                        ],
                        demand: `
                        <ul>
                            <li> Высшее юридическое образование;</li> 
                            <li> Опыт работы в должности юриста или юрисконсульта от 2-х лет;</li> 
                            <li> Отличное знание гражданского законодательства;</li> 
                            <li> Уверенные навыки работы со справочно-правовыми системами и ПК;</li> 
                            <li> Умение составлять и анализировать договоры поставки/купли-продажи, оказания услуг и др.;</li> 
                            <li> Опыт представления в судах общей юрисдикции и арбитражном суде.</li> 
                        </ul>
                        `,

                        priceText: 'от 55 000 рублей',
                        description: [
                            'Требуемый опыт работы: <span> 1-3 года</span>',
                            'График: <span> полная занятость, 5/2</span>',
                            'Выплаты: <span>два раза в месяц</span>',
                            'Рабочие часы: <span>8</span>',
                            'Формат работы: <span>на месте работодателя</span>'
                        ],

                        filter: [Specializations.uyriskonsultant, Income.low, Busyness.full, Schedule.full, Format.place, Experience.low,],
                        advantages: [
                            {
                                title: 'Оформление по ТК РФ',
                                img: 'oformlenie-po-tk',
                                text: 'Официальное трудоустройство согласно ТК РФ'
                            },
                            {
                                title: 'График работы 5/2',
                                img: 'calendar',
                                text: `График работы 5/2 (8-часовой рабочий день: с 8:00 до 16:30 или с 9:00 до 17:30). 
                                <br><br> 
                                Возможность перехода на гибридный формат работы (офис/удалёнка) после успешной адаптации.`
                            },
                            {
                                title: 'Стажировка и обучение',
                                img: 'comfort',
                                text: 'Оплачиваемая стажировка и обучение, участие в тренингах за счёт компании'
                            },
                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Развитая корпоративная культура: подарки к праздникам, совместные мероприятия, конкурсы, активная спортивная жизнь'
                            },
                            {
                                title: 'Скидка на продукцию',
                                img: 'sale',
                                text: 'Скидки на продукцию компании до 30%'
                            },
                        ],
                    },

                    {
                        name: 'Инженер-конструктор',
                        price: 100000,
                        path: 'inzhener-konstruktor',
                        case: `
                         <ul>
                           <li>Разрабатывать 3D-модели и сборки нового оборудования, а также модернизировать существующее оборудование;</li>
                            <li>Проводить технические расчёты по проектам для обеспечения надёжности и долговечности изделий;</li>
                            <li>Анализировать эффективность проектируемых конструкций и предлагать оптимальные решения;</li>
                           <li>Готовить конструкторскую документацию, чертежи, а также файлы для станков лазерной резки и механической обработки.</li>
                         </ul>
                        `,
                        skills: [
                            'Твердотельное 3D-проектирование (Компас 3D, T-Flex или SolidWorks, Autodesk Inventor)'
                        ],
                        demand: `
                        <ul>
                            <li>Уверенный пользователь САПР твердотельного 3D-проектирования (Компас 3D, T-Flex, либо аналогичные программы SolidWorks, Autodesk Inventor);</li>
                            <li>Знания в области машиностроения;</li>
                            <li>Знание методов обработки материалов, типов оборудования на металлопроизводстве.</li>
                        </ul>
                        `,

                        filter: [Specializations.inzhener, Income.high, Busyness.full, Schedule.full, Format.place, Experience.low,],
                        advantages: [
                            {
                                title: 'График работы 5/2',
                                img: 'calendar',
                                text: `График работы: 5/2 с 8:00 до 16:30 (гибкое начало рабочего дня с 7:00, 8:00 или 9:00 утра)`
                            },
                            {
                                title: 'Стабильные выплаты',
                                img: 'vyplaty',
                                text: `Стабильность и своевременность выплат: заработная плата выплачивается 2 раза в месяц, без задержек`
                            },
                            {
                                title: 'Полный соц. пакет',
                                img: 'polnyj-soc-paket',
                                text: `Полный социальный пакет: официальное трудоустройство по ТК РФ, оплачиваемые больничные и отпуск`
                            },

                            {
                                title: 'Премии за новые идеи',
                                img: 'premiya',
                                text: 'Премии за рациональные предложения до 30 000 р.'
                            },
                            {
                                title: 'Скидка на продукцию',
                                img: 'sale',
                                text: 'Скидки на продукцию компании до 30%'
                            },
                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },


                        ],
                        priceText: 'от 100 000 до 150 000 рублей ',
                        description: [
                            'Требуемый опыт работы: <span> 1-3 года</span>',
                            'График: <span> полная занятость, 5/2</span>',

                        ],
                    },

                    {
                        name: 'Инженер-конструктор на производство',
                        price: 70000,
                        path: 'inzhener-konstruktor-na-proizvodstvo',
                        case: `
                        <ul>
                            <li>Разрабатывать 3D-модели и сборки изделий, штампов, кондукторов, приспособлений и специализированной оснастки;</li>
                            <li>Проводить технические расчёты по проектам для обеспечения надёжности и долговечности изделий;</li>
                            <li>Анализировать эффективность проектируемых конструкций и предлагать оптимальные решения;</li>
                            <li>Готовить конструкторскую документацию, чертежи, а также файлы для станков лазерной резки и механической обработки;</li>
                            <li>Проектировать установки для механизации и автоматизации производства.</li>
                        </ul>

                        `,
                        skills: [
                            'Твердотельное 3D-проектирование (Компас 3D, T-Flex или SolidWorks, Autodesk Inventor)'
                        ],
                        demand: `
                        <ul>
                             <li>Уверенный пользователь САПР твердотельного 3D-проектирования (Компас 3D, T-Flex, либо аналогичные программы SolidWorks, Autodesk Inventor);</li>
                             <li> Знания в области машиностроения;</li>
                             <li>Опыт разработки штампов будет плюсом;</li>
                             <li>Знание методов обработки материалов, типов оборудования на металлопроизводстве.</li>
                        </ul>

                        `,

                        filter: [Specializations.inzhener, Income.middle, Busyness.full, Schedule.full, Format.place, Experience.low,],
                        advantages: [
                            {
                                title: 'График работы 5/2',
                                img: 'calendar',
                                text: `График работы: 5/2 с 8:00 до 16:30 (гибкое начало рабочего дня с 7:00, 8:00 или 9:00 утра)`
                            },
                            {
                                title: 'Стабильные выплаты',
                                img: 'vyplaty',
                                text: `Стабильность и своевременность выплат: заработная плата выплачивается 2 раза в месяц, без задержек`
                            },
                            {
                                title: 'Полный соц. пакет',
                                img: 'polnyj-soc-paket',
                                text: `Полный социальный пакет: официальное трудоустройство по ТК РФ, оплачиваемые больничные и отпуск`
                            },

                            {
                                title: 'Премии за новые идеи',
                                img: 'premiya',
                                text: 'Премии за рациональные предложения до 30 000 р.'
                            },
                            {
                                title: 'Скидка на продукцию',
                                img: 'sale',
                                text: 'Скидки на продукцию компании до 30%'
                            },
                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },


                        ],

                        priceText: 'от 70 000 до 100 000 рублей ',
                        description: [
                            'Требуемый опыт работы: <span> 1-3 года</span>',
                            'График: <span> полная занятость, 5/2</span>',

                        ],
                    },
                ]);

                prodaji.push(...[
                    {
                        name: 'Оператор чат-поддержки',
                        price: 35000,
                        path: 'operator-chat-podderzhki',
                        case: `
                            Консультировать клиентов в чатах (Авито, ВКонтакте, сайт) — 80% времени, звонки — 20%;
                            Вести сделки в CRM, консультировать по продуктам и доводить продажи до успешного завершения;
                            Подбирать для клиентов лучшие решения, опираясь на их потребности.
                        `,
                        skills: [
                            'Уверенный пользователь ПК'
                        ],
                        demand: `
                            Опыт работы в call-центре или опыт продаж будет большим плюсом;
                            Уверенный пользователь ПК.
                        `,

                        priceText: 'от 35 000  до 40 000 рублей',
                        description: [
                            'Требуемый опыт работы: <span> не имеет значения</span>',
                            'График: <span> полная занятость, 2/2</span>',
                            'Выплаты: <span>два раза в месяц</span>',
                            'Рабочие часы: <span>11</span>',
                            'Формат работы: <span>гибридный</span>'
                        ],

                        filter: [Specializations.operator, Income.low, Busyness.full, Schedule.twobytwo, Format.hybrid, Experience.anyth],
                        advantages: [
                            {
                                title: 'Гибкий график',
                                img: 'calendar',
                                text: 'Гибкий график: во время обучения — 5/2 с возможностью начинать день в 8 или 9 утра на твой выбор; после — 2/2 с 7:00 до 19:00'
                            },

                            {
                                title: 'Удалённая работа*',
                                img: 'remote',
                                text: `Удалённый формат работы, но с возможностью при необходимости приехать в офис`
                            },

                            {
                                title: 'Обучение и тренинги',
                                img: 'comfort',
                                text: 'Обучение и тренинги за счет компании — поможем влиться в работу и освоиться'
                            },

                            {
                                title: 'Карьерный рост',
                                img: 'karernyj-rost',
                                text: 'Карьерный рост: у нас это реально — многие руководители начинали именно с отдела продаж'
                            },

                            {
                                title: 'Стабильная зарплата',
                                img: 'vyplaty',
                                text: 'Стабильная зарплата 2 раза в месяц, выплаты вовремя без задержек'
                            },

                            {
                                title: 'Оформление по ТК РФ',
                                img: 'oformlenie-po-tk',
                                text: 'Оформление по ТК РФ: оплачиваемые больничные и отпуска'
                            },

                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },
                        ],
                    },

                    {
                        name: 'Менеджер чатов',
                        price: 35000,
                        path: 'manager-chatov',
                        case: `
                            Консультировать клиентов в чатах (Авито, ВКонтакте, сайт) — 80% времени, звонки — 20%;
                            Вести сделки в CRM, консультировать по продуктам и доводить продажи до успешного завершения;
                            Подбирать для клиентов лучшие решения, опираясь на их потребности.
                        `,
                        skills: [
                            'Уверенный пользователь ПК'
                        ],
                        demand: `
                            Опыт работы в call-центре или опыт продаж будет большим плюсом;
                            Уверенный пользователь ПК.
                        `,

                        priceText: 'от 35 000  до 40 000 рублей',
                        description: [
                            'Требуемый опыт работы: <span> не имеет значения</span>',
                            'График: <span> полная занятость, 2/2</span>',
                            'Выплаты: <span>два раза в месяц</span>',
                            'Рабочие часы: <span>11</span>',
                            'Формат работы: <span>гибридный</span>'
                        ],

                        filter: [Specializations.manager, Income.low, Busyness.full, Schedule.twobytwo, Format.hybrid, Experience.anyth],
                        advantages: [
                            {
                                title: 'Гибкий график',
                                img: 'calendar',
                                text: 'Гибкий график: во время обучения — 5/2 с возможностью начинать день в 8 или 9 утра на твой выбор; после — 2/2 с 7:00 до 19:00'
                            },

                            {
                                title: 'Удалённая работа*',
                                img: 'remote',
                                text: `Удалённый формат работы, но с возможностью при необходимости приехать в офис`
                            },

                            {
                                title: 'Обучение и тренинги',
                                img: 'comfort',
                                text: 'Обучение и тренинги за счет компании — поможем влиться в работу и освоиться'
                            },

                            {
                                title: 'Карьерный рост',
                                img: 'karernyj-rost',
                                text: 'Карьерный рост: у нас это реально — многие руководители начинали именно с отдела продаж'
                            },

                            {
                                title: 'Стабильная зарплата',
                                img: 'vyplaty',
                                text: 'Стабильная зарплата 2 раза в месяц, выплаты вовремя без задержек'
                            },

                            {
                                title: 'Оформление по ТК РФ',
                                img: 'oformlenie-po-tk',
                                text: 'Оформление по ТК РФ: оплачиваемые больничные и отпуска'
                            },

                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },
                        ],
                    },
                ]);

                proizvodstvo.push(...[
                    {
                        name: 'Слесарь на подготовку к сварке',
                        price: 50000,
                        path: 'slesar-na-podgotovku-k-svarke',
                        case: `
                            На участок подготовки к сварке требуется слесарь: зачистка и подготовка изделий из нержавеющей стали к сварке.
                        `,
                        skills: [],
                        demand: `
                            Опыт работы с ручным электроинструментом (болгарка, дрель) будут плюсом
                        `,

                        priceText: '50 000 рублей ',
                        description: [
                            'Требуемый опыт работы: <span> не имеет значения</span>',
                            'График: <span> полная занятость, 2/2</span>',
                            'Выплаты: <span>два раза в месяц</span>',
                            'Рабочие часы: <span>12</span>',
                            'Формат работы: <span>на месте работодателя</span>'
                        ],

                        filter: [Schedule.twobytwo, Specializations.slesar, Income.high, Income.low, Income.middle, Busyness.full, Format.place, Experience.anyth],
                        advantages: [
                            {
                                title: 'Стабильная зарплата',
                                img: 'vyplaty',
                                text: 'Стабильные выплаты 2 раза в месяц'
                            },

                            {
                                title: 'График работы 2/2',
                                img: 'calendar',
                                text: 'График работы 2*2 (7.00-19.00), 2 перерыва на обед по 30 минут'
                            },

                            {
                                title: 'Комфортные условия',
                                img: 'comfort',
                                text: 'Оборудованная рабочая зона, спецодежда, обеденная зона, душевые'
                            },

                            {
                                title: 'Премии за новые идеи',
                                img: 'premiya',
                                text: 'Премии за рациональные предложения до 30 000 р.'
                            },

                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },
                        ],
                    },

                    {
                        name: 'Слесарь',
                        price: 40000,
                        path: 'slesar',
                        case: `
                            На участок сдачи готовой продукции требуется слесарь: зачистка и сборка изделий из нержавеющей стали.
                        `,
                        skills: [],
                        demand: `
                            Опыт работы с ручным электроинструментом (болгарка, дрель) будут плюсом
                        `,

                        priceText: '40 000 рублей ',
                        description: [
                            'Требуемый опыт работы: <span> не имеет значения</span>',
                            'График: <span> полная занятость, 2/2</span>',
                            'Выплаты: <span>два раза в месяц</span>',
                            'Рабочие часы: <span>12</span>',
                            'Формат работы: <span>на месте работодателя</span>'
                        ],

                        filter: [Schedule.twobytwo, Specializations.slesar, Income.low, Income.middle, Busyness.full, Format.place, Experience.anyth],
                        advantages: [
                            {
                                title: 'Стабильная зарплата',
                                img: 'vyplaty',
                                text: 'Стабильные выплаты 2 раза в месяц'
                            },

                            {
                                title: 'График работы 2/2',
                                img: 'calendar',
                                text: 'График работы 2*2 (7.00-19.00), 2 перерыва на обед по 30 минут'
                            },

                            {
                                title: 'Комфортные условия',
                                img: 'comfort',
                                text: 'Оборудованная рабочая зона, спецодежда, обеденная зона, душевые'
                            },

                            {
                                title: 'Премии за новые идеи',
                                img: 'premiya',
                                text: 'Премии за рациональные предложения до 30 000 р.'
                            },

                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },
                        ],
                    },

                    {
                        name: 'Разнорабочий',
                        price: 37000,
                        path: 'raznorabochij',
                        case: `
                            Мы в поиске сотрудника для выполнения несложных работ, не требующих навыка или опыта - снятие защитной плёнки с заготовок из нержавеющей стали и распределение их по цеху. Обучение с наставником в процессе стажировки и возможность быстрого роста до слесаря, сварщика, бригадира участка.
                        `,
                        skills: [],
                        demand: ``,

                        priceText: '37 000 рублей ',
                        description: [
                            'Требуемый опыт работы: <span> не имеет значения</span>',
                            'График: <span> полная занятость, 2/2</span>',
                            'Выплаты: <span>два раза в месяц</span>',
                            'Рабочие часы: <span>12</span>',
                            'Формат работы: <span>на месте работодателя</span>'
                        ],

                        filter: [Schedule.twobytwo, Specializations.raznorabochij, Income.low, Busyness.full, Format.place, Experience.anyth],
                        advantages: [
                            {
                                title: 'Стабильная зарплата',
                                img: 'vyplaty',
                                text: 'Стабильные выплаты 2 раза в месяц'
                            },

                            {
                                title: 'График работы 2/2',
                                img: 'calendar',
                                text: 'График работы 2*2 (7.00-19.00), 2 перерыва на обед по 30 минут'
                            },

                            {
                                title: 'Комфортные условия',
                                img: 'comfort',
                                text: 'Оборудованная рабочая зона, спецодежда, обеденная зона, душевые'
                            },

                            {
                                title: 'Премии за новые идеи',
                                img: 'premiya',
                                text: 'Премии за рациональные предложения до 30 000 р.'
                            },

                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },
                        ],
                    },

                    {
                        name: 'Подсобный рабочий',
                        price: 37000,
                        path: 'podsobnyj-rabochij',
                        case: `
                            Мы в поиске сотрудника для выполнения несложных работ, не требующих навыка или опыта - штамповка тонкого металла на ручном прессе. Обучение с наставником в процессе стажировки и возможность быстрого роста до слесаря, сварщика, бригадира участка.
                        `,
                        skills: [],
                        demand: ``,

                        priceText: '37 000 рублей ',
                        description: [
                            'Требуемый опыт работы: <span> не имеет значения</span>',
                            'График: <span> полная занятость, 2/2</span>',
                            'Выплаты: <span>два раза в месяц</span>',
                            'Рабочие часы: <span>12</span>',
                            'Формат работы: <span>на месте работодателя</span>'
                        ],

                        filter: [Schedule.twobytwo, Specializations.raznorabochij, Income.low, Busyness.full, Format.place, Experience.anyth],
                        advantages: [
                            {
                                title: 'Стабильная зарплата',
                                img: 'vyplaty',
                                text: 'Стабильные выплаты 2 раза в месяц'
                            },

                            {
                                title: 'График работы 2/2',
                                img: 'calendar',
                                text: 'График работы 2*2 (7.00-19.00), 2 перерыва на обед по 30 минут'
                            },

                            {
                                title: 'Комфортные условия',
                                img: 'comfort',
                                text: 'Оборудованная рабочая зона, спецодежда, обеденная зона, душевые'
                            },

                            {
                                title: 'Премии за новые идеи',
                                img: 'premiya',
                                text: 'Премии за рациональные предложения до 30 000 р.'
                            },

                            {
                                title: 'Корпоративная культура',
                                img: 'korporativ',
                                text: 'Корпоративная культура: праздники, подарки, спортивные занятия и другие мероприятия'
                            },
                        ],
                    },
                ]);

            }

            catch {
                console.log('error ');
            }

            finally {
                this.vakansii = [
                    {
                        title: "Офис и администрация",
                        pageTitle: 'Вакансии в офис и администрацию',
                        active: true,
                        contents: office,
                        url: 'office-i-administratcia',
                        description: 'Сотрудники этого отдела занимаются управлением и координацией внутренних процессов компании, обеспечивают выполнение стратегических задач (маркетинг, ноу-хау и прочее), организуют работу других отделов, а также занимаются кадровыми вопросами и ведением документооборота.',
                        imgVakansii: 'vakansii-1',
                        filters: [
                            {
                                title: "Специализации",
                                content: [
                                    {
                                        name: "Юрисконсультант",
                                        value: Specializations.uyriskonsultant,
                                        active: false,
                                    },

                                    {
                                        name: "Инженер-конструктор",
                                        value: Specializations.inzhener,
                                        active: false,
                                    },

                                ],
                            },

                            {
                                title: "Уровень дохода",
                                content: [
                                    {
                                        name: "От 50 000 руб.",
                                        value: Income.low,
                                        active: false,
                                    },

                                    {
                                        name: "От 70 000 руб.",
                                        value: Income.middle,
                                        active: false,
                                    },

                                    {
                                        name: "От 100 000 руб.",
                                        value: Income.high,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Занятость",
                                content: [
                                    {
                                        name: "Полная",
                                        value: Busyness.full,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "График работы",
                                content: [
                                    {
                                        name: "5/2",
                                        value: Schedule.full,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Формат работы",
                                content: [
                                    {
                                        name: "На месте работодателя",
                                        value: Format.place,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Опыт работы",
                                content: [
                                    {
                                        name: "От 1 года до 3 лет",
                                        value: Experience.low,
                                        active: false,
                                    },
                                ],
                            },
                        ],


                    },

                    {
                        title: "Логистика",
                        pageTitle: 'Вакансии в отдел логистики',
                        active: false,
                        contents: sklad,
                        url: 'sklad',
                        description: 'Сотрудники склада занимаются приемом, хранением и отгрузкой товаров. Они контролируют запасы, обеспечивают порядок на складе, работают с накладными и инвентаризациями, а также организуют доставку продукции к клиентам.',
                        imgVakansii: 'vakansii-2',
                        filters: [],

                    },

                    {
                        title: "Продажи",
                        pageTitle: 'Вакансии в отдел продаж',
                        active: false,
                        contents: prodaji,
                        url: 'prodaji',
                        description: 'В этом отделе работают операторы, которые принимают и обрабатывают звонки от клиентов. Они предоставляют информацию о продуктах и услугах, консультируют по вопросам и решают проблемы, а также собирают обратную связь для улучшения сервиса.',
                        imgVakansii: 'vakansii-3',
                        filters: [
                            {
                                title: "Специализации",
                                content: [
                                    {
                                        name: "Менеджер",
                                        value: Specializations.manager,
                                        active: false,
                                    },

                                    {
                                        name: "Оператор",
                                        value: Specializations.operator,
                                        active: false,
                                    },

                                ],
                            },

                            {
                                title: "Уровень дохода",
                                content: [
                                    {
                                        name: "От 30 000 руб.",
                                        value: Income.low,
                                        active: false,
                                    },

                                ],
                            },

                            {
                                title: "Занятость",
                                content: [
                                    {
                                        name: "Полная",
                                        value: Busyness.full,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "График работы",
                                content: [
                                    {
                                        name: "2/2",
                                        value: Schedule.twobytwo,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Формат работы",
                                content: [
                                    {
                                        name: "Гибридный",
                                        value: Format.hybrid,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Опыт работы",
                                content: [
                                    {
                                        name: "Не имеет значения",
                                        value: Experience.anyth,
                                        active: false,
                                    },
                                ],
                            },

                        ],



                    },

                    {
                        title: "Производство",
                        pageTitle: 'Вакансии в отдел производства',
                        active: false,
                        contents: proizvodstvo,
                        url: 'proizvodstvo',
                        description: 'В этом отделе работают специалисты, которые отвечают за выпуск продукции. Они контролируют производственный процесс, оптимизируют технологии и обеспечивают качество.',
                        imgVakansii: 'vakansii-4',
                        filters: [
                            {
                                title: "Специализации",
                                content: [
                                    {
                                        name: "Слесарь",
                                        value: Specializations.slesar,
                                        active: false,
                                    },

                                    {
                                        name: "Разнорабочий",
                                        value: Specializations.raznorabochij,
                                        active: false,
                                    },

                                ],
                            },

                            {
                                title: "Уровень дохода",
                                content: [
                                    {
                                        name: "От 30 000 руб.",
                                        value: Income.low,
                                        active: false,
                                    },

                                    {
                                        name: "От 40 000 руб.",
                                        value: Income.middle,
                                        active: false,
                                    },

                                    {
                                        name: "От 50 000 руб.",
                                        value: Income.high,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Занятость",
                                content: [
                                    {
                                        name: "Полная",
                                        value: Busyness.full,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "График работы",
                                content: [
                                    {
                                        name: "2/2",
                                        value: Schedule.twobytwo,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Формат работы",
                                content: [
                                    {
                                        name: "На месте работодателя",
                                        value: Format.place,
                                        active: false,
                                    },
                                ],
                            },

                            {
                                title: "Опыт работы",
                                content: [
                                    {
                                        name: "Не имеет значения",
                                        value: Experience.anyth,
                                        active: false,
                                    },
                                ],
                            },
                        ],



                    },
                ]
            }
        }
    }
})
