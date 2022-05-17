import data from '../../data';
import { DataCards, DataFilter } from '../../types';
import AppView from '../view/appView';

class Controller {
    private ERROR_MESSAGE = 'Ой, ничего не нашлось . . .';
    private view: AppView;
    private filtered: DataCards[] = [];
    private currentFilterData: DataCards[] = [];
    private error = document.querySelector('.error') as HTMLElement;
    private errorText = document.querySelector('.error__text') as HTMLElement;

    constructor() {
        this.view = new AppView();
        this.errorText.textContent = this.ERROR_MESSAGE;
    }
    public garlandInit(): void {
        this.view.garlandInit();
    }
    public addCardToFav(value: number): void {
        this.view.setFav(value);
    }
    public getMaxFav(): number {
        return this.view.getMaxFav();
    }
    public addFav(id: string): void {
        this.view.addFav(id);
    }
    public removeFav(id: string): void {
        this.view.removeFav(id);
    }
    public getFavCollection(): string[] {
        return this.view.getFavCollection();
    }
    public sortBy(sortType = 'title-up'): void {
        let sorted: DataCards[] = [];
        if (this.filtered.length === 0) {
            sorted = [...data];
        } else {
            sorted = [...this.filtered];
        }
        switch (sortType) {
            case 'title-up':
                sorted.sort((a, b) => (a.name > b.name ? 1 : -1));
                break;
            case 'title-down':
                sorted.sort((a, b) => (a.name < b.name ? 1 : -1));
                break;
            case 'year-up':
                sorted.sort((a, b) => (+a.year > +b.year ? 1 : -1));
                break;
            case 'year-down':
                sorted.sort((a, b) => (+a.year < +b.year ? 1 : -1));
                break;
            default:
                break;
        }

        this.view.clear();
        this.view.renderCards(sorted);
        if (this.view.getFavCollection().length > 0) {
            this.view.getFavCollection().forEach((num) => {
                const el = document.querySelector(`[data-ribbonnumber="${num}"]`);
                el?.classList.add('fav');
            });
        }
    }

    public filter(options: DataFilter): void {
        const sortSelect = document.querySelector('#select') as HTMLInputElement;
        this.error.classList.remove('show');
        if (!this.isEmpty(options)) {
            this.view.clear();
            if (options.hasOwnProperty('searchValue')) {
                this.filterBy('search', options);
                this.view.renderCards(this.filtered);
                if (this.view.getFavCollection().length > 0) {
                    this.view.getFavCollection().forEach((num) => {
                        const el = document.querySelector(`[data-ribbonnumber="${num}"]`);
                        el?.classList.add('fav');
                    });
                }
                return;
            }
            this.filtered = [];
            if (options.hasOwnProperty('shape')) {
                this.filterBy('shape', options);
            }
            if (options.hasOwnProperty('sliderQuantityValues')) {
                this.filterBy('quantity', options);
            }

            if (options.hasOwnProperty('sliderYearValues')) {
                this.filterBy('year', options);
            }
            if (options.hasOwnProperty('color')) {
                this.filterBy('color', options);
            }

            if (options.hasOwnProperty('size')) {
                this.filterBy('size', options);
            }
            if (options.hasOwnProperty('isFavoritesOnly')) {
                this.filterBy('favorite', options);
            }

            this.view.renderCards(this.filtered);

            if (this.filtered.length > 0) {
                this.sortBy(sortSelect.value);
            }
            if (this.view.getFavCollection().length > 0) {
                this.view.getFavCollection().forEach((num) => {
                    const el = document.querySelector(`[data-ribbonnumber="${num}"]`);
                    el?.classList.add('fav');
                });
            }
            return;
        }

        this.filtered = [];
        (document.querySelector('#search') as HTMLInputElement).value = '';
        this.sortBy(sortSelect.value);
        if (this.view.getFavCollection().length > 0) {
            this.view.getFavCollection().forEach((num) => {
                const el = document.querySelector(`[data-ribbonnumber="${num}"]`);
                el?.classList.add('fav');
            });
        }
    }

    private filterBy(id: string, options: DataFilter): void {
        this.currentFilterData = [];
        let arrayForFilter: string[] | undefined = [];
        let type: DataCards[] = [];
        let searchString = '';
        let [min, max]: string[] | number[] = [];
        if (this.filtered.length === 0) {
            type = [...data];
        } else {
            type = [...this.filtered];
        }
        switch (id) {
            case 'shape':
                arrayForFilter = options.shape;
                break;
            case 'color':
                arrayForFilter = options.color;
                break;
            case 'size':
                arrayForFilter = options.size;
                break;
            case 'year':
                [min, max] = options.sliderYearValues as Array<string | number>;
                break;
            case 'quantity':
                [min, max] = options.sliderQuantityValues as Array<string | number>;
                break;
            case 'favorite':
                break;
            case 'search':
                searchString = options.searchValue as string;
                break;
            default:
                break;
        }

        if (id === 'quantity' || id === 'year' || id === 'favorite' || id === 'search') {
            this.currentFilterData = [
                ...this.currentFilterData,
                ...type.filter((item) => this.filterByInfo(id, item, min, max, searchString)),
            ];
        } else {
            arrayForFilter?.forEach((element) => {
                this.currentFilterData = [
                    ...this.currentFilterData,
                    ...type.filter((item) => this.filterByAppearance(id, item, element)),
                ];
            });
        }

        this.filtered = [...this.currentFilterData];

        if (this.currentFilterData.length === 0) {
            this.view.clear();
            this.error.classList.add('show');
        }
    }
    private filterByInfo(
        id: string,
        dataValue: DataCards,
        minValue: number | string,
        maxValue: number | string,
        searchInput?: string
    ) {
        if (id === 'year') {
            return +dataValue.year >= +minValue && +dataValue.year <= maxValue;
        } else if (id === 'quantity') {
            return +dataValue.count >= +minValue && +dataValue.count <= maxValue;
        } else if (id === 'favorite') {
            return dataValue.favorite === 'да';
        } else if (id === 'search') {
            return (
                dataValue.name
                    .trim()
                    .toLowerCase()
                    .indexOf(searchInput as string) !== -1
            );
        }
    }
    private filterByAppearance(id: string, dataValue: DataCards, compareTo: string) {
        if (id === 'shape') {
            return dataValue.shape === compareTo;
        } else if (id === 'color') {
            return dataValue.color === compareTo;
        } else if (id === 'size') {
            return dataValue.size === compareTo;
        }
    }

    private isEmpty(obj: DataFilter): boolean {
        return Object.keys(obj).length === 0 ? true : false;
    }
}

export default Controller;
