import { API } from 'nouislider';
import Slider from '../slider/slider';
import Controller from '../controller/controller';
import { DataFilter } from '../../types';
import AudioPlayer from '../audioplayer/audioplayer';

class App {
    private SLIDER_AMOUNT_START = 1;
    private SLIDER_AMOUNT_END = 12;
    private SLIDER_AMOUNT_STEP = 1;
    private SLIDER_YEAR_START = 1940;
    private SLIDER_YEAR_END = 2020;
    private SLIDER_YEAR_STEP = 10;
    private currentFilterState!: DataFilter;
    private sliderQuantity!: API;
    private sliderYear!: API;
    private shapeArray: Array<string> = [];
    private colorArray: Array<string> = [];
    private sizeArray: Array<string> = [];
    private controller: Controller;
    private countFav = 20;
    private audioPlayer: AudioPlayer;

    constructor() {
        this.controller = new Controller();
        this.audioPlayer = new AudioPlayer('assets/audio/audio.mp3');
        this.controller.filter({});
    }

    public start(): void {
        this.startButtonListenerInit();
        this.navListenerInit();
        this.searchListenerInit();
        this.sortListenerInit();
        this.shapeListenerInit();
        this.sliderListenerInit();
        this.colorListenerInit();
        this.sizeListenerInit();
        this.favoriteListenerInit();
        this.cardListenerInit();
        this.resetListenerInit();
        this.treeChangeListenerInit();
        this.bgChangeListenerInit();
        this.effectsControlListenerInit();
        this.garlandInit();
    }
    private garlandInit() {
        this.controller.garlandInit();
    }
    private startButtonListenerInit(): void {
        document.querySelector('.welcome__button')?.addEventListener('click', () => {
            document.querySelector('.header')?.classList.add('visible');
            document.querySelector('.toys-page')?.classList.add('visible');
            document.querySelector('.welcome-container')?.classList.add('hide');
        });
    }
    private navListenerInit(): void {
        document.querySelector('.nav')?.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;

            if (target.className === 'logo') {
                document.querySelector('.header')?.classList.remove('visible');
                document.querySelector('.toys-page')?.classList.remove('visible');
                document.querySelector('.welcome-container')?.classList.remove('hide');
                document.querySelector('.overlay')?.classList.remove('visible');
            } else {
                if (target.classList.contains('active-link')) {
                    return;
                }
                target.classList.toggle('active-link');
                if (target.classList.contains('toys-switcher')) {
                    target.nextElementSibling?.classList.remove('active-link');
                    document.querySelector('.toys-page')?.classList.add('visible');
                    document.querySelector('.overlay')?.classList.remove('visible');
                } else {
                    target.previousElementSibling?.classList.remove('active-link');
                    document.querySelector('.toys-page')?.classList.remove('visible');
                    document.querySelector('.overlay')?.classList.add('visible');
                }
            }
        });
    }
    private sliderListenerInit(): void {
        const sliderQuantityElement = document.querySelector('#slider__count') as HTMLElement;
        const sliderYearElement = document.querySelector('#slider__year') as HTMLElement;
        this.sliderQuantity = new Slider(sliderQuantityElement, {
            start: this.SLIDER_AMOUNT_START,
            end: this.SLIDER_AMOUNT_END,
            step: this.SLIDER_AMOUNT_STEP,
        }).init();
        this.sliderYear = new Slider(sliderYearElement, {
            start: this.SLIDER_YEAR_START,
            end: this.SLIDER_YEAR_END,
            step: this.SLIDER_YEAR_STEP,
        }).init();

        this.sliderQuantity.on('change', (values: (number | string)[]) => {
            const [currentMin, currentMax]: Array<string | number> = this.sliderQuantity.get() as Array<
                string | number
            >;

            if (+currentMin === this.SLIDER_AMOUNT_START && +currentMax === this.SLIDER_AMOUNT_END) {
                delete this.currentFilterState.sliderQuantityValues;
            } else {
                this.currentFilterState = { ...this.currentFilterState, sliderQuantityValues: values };
            }
            this.controller.filter(this.currentFilterState);
        });
        this.sliderYear.on('change', (values: (number | string)[]) => {
            const [currentMin, currentMax]: Array<string | number> = this.sliderQuantity.get() as Array<
                string | number
            >;
            if (+currentMin === this.SLIDER_YEAR_START && +currentMax === this.SLIDER_YEAR_END) {
                delete this.currentFilterState.sliderYearValues;
            } else {
                this.currentFilterState = { ...this.currentFilterState, sliderYearValues: values };
            }
            this.controller.filter(this.currentFilterState);
        });
    }
    private searchListenerInit(): void {
        const searchInput = document.querySelector('#search');

        searchInput?.addEventListener('input', (e: Event) => {
            const searchValue = (e.target as HTMLInputElement).value.trim().toLowerCase();
            if (searchValue === '') {
                delete this.currentFilterState.searchValue;
            } else {
                this.currentFilterState = { ...this.currentFilterState, searchValue };
            }

            this.controller.filter(this.currentFilterState);
        });
    }
    private shapeListenerInit(): void {
        const shape = document.querySelector('.shape__item');

        shape?.addEventListener('click', (e: Event) => {
            if ((e.target as HTMLButtonElement).tagName !== 'BUTTON') return;
            if ((e.target as HTMLButtonElement).classList.contains('active')) {
                (e.target as HTMLButtonElement).classList.remove('active');
                const index: number = this.shapeArray.indexOf((e.target as HTMLElement).dataset.filter as string);
                this.shapeArray.splice(index, 1);
                if (this.shapeArray.length === 0) {
                    delete this.currentFilterState.shape;
                }
            } else {
                (e.target as HTMLButtonElement).classList.add('active');
                this.shapeArray = [...this.shapeArray, (e.target as HTMLButtonElement).dataset.filter as string];
                this.currentFilterState = { ...this.currentFilterState, shape: this.shapeArray };
            }

            this.controller.filter(this.currentFilterState);
        });
    }
    private colorListenerInit(): void {
        const color = document.querySelector('.color__list');
        color?.addEventListener('change', (e: Event) => {
            if ((e.target as HTMLInputElement).tagName !== 'INPUT') return;
            if (!(e.target as HTMLInputElement).checked) {
                const index: number = this.colorArray.indexOf((e.target as HTMLInputElement).dataset.filter as string);
                this.colorArray.splice(index, 1);
                if (this.colorArray.length === 0) {
                    delete this.currentFilterState.color;
                }
            } else {
                this.colorArray = [...this.colorArray, (e.target as HTMLElement).dataset.filter as string];
                this.currentFilterState = { ...this.currentFilterState, color: this.colorArray };
            }

            this.controller.filter(this.currentFilterState);
        });
    }
    private sizeListenerInit(): void {
        const size = document.querySelector('.size__list');
        size?.addEventListener('change', (e: Event) => {
            if ((e.target as HTMLElement).tagName !== 'INPUT') return;
            if (!(e.target as HTMLInputElement).checked) {
                const index: number = this.sizeArray.indexOf((e.target as HTMLInputElement).dataset.filter as string);
                this.sizeArray.splice(index, 1);
                if (this.sizeArray.length === 0) {
                    delete this.currentFilterState.size;
                }
            } else {
                this.sizeArray = [...this.sizeArray, (e.target as HTMLElement).dataset.filter as string];
                this.currentFilterState = { ...this.currentFilterState, size: this.sizeArray };
            }
            this.controller.filter(this.currentFilterState);
        });
    }
    private favoriteListenerInit(): void {
        const favorite = document.querySelector('.favorite__list');
        favorite?.addEventListener('change', (e: Event) => {
            let isFavoritesOnly = false;
            if ((e.target as HTMLElement).tagName !== 'INPUT') return;
            if (!(e.target as HTMLInputElement).checked) {
                delete this.currentFilterState.isFavoritesOnly;
            } else {
                isFavoritesOnly = true;
                this.currentFilterState = { ...this.currentFilterState, isFavoritesOnly };
            }

            this.controller.filter(this.currentFilterState);
        });
    }

    private sortListenerInit(): void {
        const sortSelect = document.querySelector('#select');
        sortSelect?.addEventListener('change', (e: Event) => {
            const currentValue = (e.target as HTMLInputElement).value;

            this.controller.sortBy(currentValue);
        });
    }
    private resetListenerInit(): void {
        const reset = document.querySelector('.reset-btn');
        reset?.addEventListener('click', () => {
            this.sliderQuantity.set([this.SLIDER_AMOUNT_START, this.SLIDER_AMOUNT_END]);
            this.sliderYear.set([this.SLIDER_YEAR_START, this.SLIDER_YEAR_END]);

            this.clear(this.colorArray);
            this.clear(this.sizeArray);
            this.clear(this.shapeArray);
            document.querySelectorAll('.shape-button').forEach((item) => {
                item.classList.remove('active');
            });
            document.querySelectorAll('input[type=checkbox]').forEach((item) => {
                (item as HTMLInputElement).checked = false;
            });
            const sortSelect = document.querySelector('#select') as HTMLInputElement;
            sortSelect.value = 'title-up';
            this.currentFilterState = {};
            this.controller.filter({});
        });
    }
    private cardListenerInit(): void {
        const cardsContent = document.querySelector('.cards__content') as HTMLDivElement;
        cardsContent.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLDivElement;
            let attrValue = '';

            if (target.hasAttribute('data-num') || target.hasAttribute('data-ribbonnumber')) {
                attrValue = (target.dataset.num as string) || (target.dataset.ribbonnumber as string);
                document.querySelectorAll('[data-ribbonnumber]').forEach((item) => {
                    if (item.getAttribute('data-ribbonnumber') === attrValue) {
                        if (item.classList.contains('fav')) {
                            this.countFav--;
                            item.classList.remove('fav');
                            this.controller.removeFav(attrValue);
                        } else if (this.countFav < this.controller.getMaxFav()) {
                            item.classList.add('fav');
                            this.countFav++;
                            this.controller.addFav(attrValue);
                        } else if (this.countFav === this.controller.getMaxFav()) {
                            document.querySelectorAll('[data-warnNumber]').forEach((el) => {
                                if (el.getAttribute('data-warnNumber') === attrValue) {
                                    document.querySelector(`[data-warnNumber="${attrValue}"]`)?.classList.add('show');
                                    setTimeout(() => {
                                        document
                                            .querySelector(`[data-warnNumber="${attrValue}"]`)
                                            ?.classList.remove('show');
                                    }, 2000);
                                }
                            });
                        }
                    }
                });
            }

            this.controller.addCardToFav(this.countFav);
        });
    }
    private treeChangeListenerInit(): void {
        const treeContainer = document.querySelector('.tree-container') as HTMLDivElement;
        const mainTree = document.querySelector('.main-tree') as HTMLImageElement;
        treeContainer.addEventListener('click', (e: Event) => {
            if (!(e.target as HTMLDivElement).hasAttribute('data-tree')) {
                return;
            }
            const dataAttr = (e.target as HTMLDivElement).dataset.tree as string;
            mainTree.src = `assets/tree/${dataAttr}.png`;
        });
    }
    private bgChangeListenerInit(): void {
        const bgContainer = document.querySelector('.bg-container') as HTMLDivElement;
        const mainTreeContainer = document.querySelector('.main-tree-container') as HTMLDivElement;
        bgContainer.addEventListener('click', (e: Event) => {
            if (!(e.target as HTMLDivElement).hasAttribute('data-bg')) {
                return;
            }
            const dataAttr = (e.target as HTMLDivElement).dataset.bg as string;
            mainTreeContainer.style.backgroundImage = `url('assets/bg/${dataAttr}.jpg')`;
        });
    }

    private effectsControlListenerInit(): void {
        const audioSnowContainer = document.querySelector('.snow-audio-container');
        const snowFlakes = document.querySelector('.snowflakes');
        audioSnowContainer?.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLDivElement;
            if (target.classList.contains('snow-control')) {
                target.classList.toggle('active-button');
                snowFlakes?.classList.toggle('hide');
            } else if (target.classList.contains('audio-control')) {
                target.classList.toggle('active-button');
                if (this.audioPlayer.isPlay()) {
                    this.audioPlayer.play() as unknown;
                } else {
                    this.audioPlayer.stop();
                }
            }
        });
    }

    private clear(array: string[]): void {
        if (array.length > 0) {
            array.splice(0, array.length);
        }
    }
}

export default App;
