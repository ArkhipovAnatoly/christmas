import { DataCards } from '../../types';
import Cards from './cards/cards';
import FavoriteCards from './favoritecards/favoritecards';
import Garland from './garland/garland';

export class AppView {
    cards: Cards;
    favCards: FavoriteCards;
    garland: Garland;

    constructor() {
        this.cards = new Cards();
        this.favCards = new FavoriteCards();
        this.garland = new Garland();
    }
    public garlandInit() {
        this.garland.init();
    }
    public renderCards(values: Array<DataCards>) {
        this.cards.render(values);
    }

    public clear() {
        this.cards.clear();
    }

    public setFav(value: number) {
        this.cards.favCount = value;
    }

    public getMaxFav(): number {
        return this.cards.MAX_FAV;
    }

    public addFav(id: string) {
        this.favCards.add(id);
    }

    public removeFav(id: string) {
        this.favCards.remove(id);
    }

    public getFavCollection(): string[] {
        return this.favCards.favCollection;
    }
}

export default AppView;
