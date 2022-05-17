type DataSlider = {
    start: number;
    end: number;
    step: number;
};

type DataCards = {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: string;
};

type DataFilter = {
    sort?: string;
    sliderQuantityValues?: Array<number | string>;
    sliderYearValues?: Array<number | string>;
    searchValue?: string;
    shape?: Array<string>;
    color?: Array<string>;
    size?: Array<string>;
    isFavoritesOnly?: boolean;
};
interface iDraw<T> {
    render(data?: T[]): void;
}
export { DataSlider, DataCards, DataFilter };
export { iDraw };
