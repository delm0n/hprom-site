interface ILinkTo {
    text: string;
    to: string;
}

interface IPhone {
    text: string;
    tel: string;
    title: string
}

type State = {
    burger: boolean;

    links: ILinkTo[];
    phones: IPhone[]
}

export const useHeaderStore = defineStore('headerStore', {
    state: (): State => ({
        burger: false,

        links: [
            {
                to: '/organizacija/dejatelnost',
                text: 'О компании'
            },

            {
                to: '/sotrudnichestvo/vakansii',
                text: 'Карьера'
            },

            {
                to: '/media/novosti',
                text: 'Новости'
            },

            {
                to: '/contacts',
                text: 'Контакты'
            },
        ],

        phones: [
            {
                tel: '88002505932',
                text: '8 800 250 59 32',
                title: 'Колл-центр'

            },

            {
                tel: '89229951245',
                text: '+7 (922) 995-12-46',
                title: 'Отдел подбора персонала'
            },
        ],
    }),

    actions: {
        setBurger(value: boolean) {
            this.burger = value;

            let bodyStyle = document.querySelector('body')!.style;
            //отступ для скролла на декстопах
            if (value) {
                bodyStyle.overflow = 'hidden';
            }
            else {
                bodyStyle.overflow = 'visible';
            }
        }
    }
})
