interface IModals {
    id: string;
    isOpen: boolean;
}

type State = {
    modals: IModals[]
}

const emptyModal = {
    id: "",
    isOpen: false
}

export const useModalStore = defineStore('modalStore', {
    state: (): State => ({
        modals: [
            {
                id: 'otdel-modal',
                isOpen: false
            },

            {
                id: 'filter-modal',
                isOpen: false
            },

            {
                id: 'form-modal',
                isOpen: false
            },
        ]
    }),

    getters: {
        getModalById: (state) => (id: string): IModals => {
            try {
                return state.modals.find(el => el.id == id)!
            }
            catch {
                return emptyModal;
            }
        }
    },

    actions: {
        setModal(id: string, flag: boolean) {
            let modal = this.modals.find(el => el.id == id);

            if (modal) {
                modal.isOpen = flag;

                const body = document.querySelector("body");
                const header = document.querySelector("header");
                // чтобы при открытии модального окна из-за
                // ширины скроллбара не дёргалась страница
                if (!!body && !!header) {
                    if (flag) {
                        //модальное окно открыто
                        body.style.overflow = "hidden";

                        if (
                            !(
                                "ontouchstart" in window || // если touch
                                navigator.maxTouchPoints > 0 ||
                                window.matchMedia("(pointer: coarse)").matches
                            )
                        ) {
                            body.style.paddingRight = "12px"; // ширина скролла
                            header.style.paddingRight = "12px";
                        }
                    } else {
                        //модальное окно закрыто
                        body.style.overflow = "visible";

                        if (
                            !(
                                "ontouchstart" in window || // если touch
                                navigator.maxTouchPoints > 0 ||
                                window.matchMedia("(pointer: coarse)").matches
                            )
                        ) {
                            body.style.paddingRight = "0";
                            header.style.paddingRight = "0";
                        }
                    }
                }
            }



        }
    }
})