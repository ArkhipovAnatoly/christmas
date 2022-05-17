import './cards.css';

import { DataCards, iDraw } from '../../../types';
class Cards implements iDraw<DataCards> {
    private _MAX_FAV = 20;

    private cardsContent: HTMLElement;

    private cardInfoClasses: Array<string> = [
        'card__count',
        'card__year',
        'card__shape',
        'card__color',
        'card__size',
        'card__favorite',
    ];
    private cardInfoTitles: Array<string> = [
        'Количество',
        'Год покупки',
        'Форма игрушки',
        'Цвет игрушки',
        'Размер игрушки',
        'Любимая',
    ];

    private _favCount = 20;
    private favElement: HTMLElement;
    constructor() {
        this.favElement = document.querySelector('.cards__fav') as HTMLElement;
        this.cardsContent = document.querySelector('.cards__content') as HTMLElement;
    }
    public render(cards: DataCards[]): void {
        cards.forEach((card) => {
            const values = Object.values(card);
            values.splice(0, 2);
            const cardItem = document.createElement('div');
            const cardTitle = document.createElement('h3');
            const cardImage = document.createElement('img');
            const cardInfo = document.createElement('div');
            const cardRibbon = document.createElement('div');
            const warn = document.createElement('span');

            cardItem.classList.add('cards__item');
            cardItem.setAttribute('data-num', `${card.num}`);

            cardTitle.classList.add('card__title');
            cardTitle.textContent = card.name;

            cardImage.classList.add('card__image');
            cardImage.src = `assets/toys/${card.num}.png`;
            cardImage.setAttribute('alt', `${card.name}`);

            cardInfo.classList.add('card__info');

            cardRibbon.classList.add('ribbon');
            cardRibbon.setAttribute('data-ribbonNumber', `${card.num}`);

            warn.classList.add('card-warning');
            warn.textContent = 'Допустимо не более 20';
            warn.setAttribute('data-warnNumber', `${card.num}`);

            cardItem.append(cardTitle, cardImage, cardInfo, cardRibbon, warn);
            this.cardInfoClasses.forEach((infoClass, index) => {
                const element = document.createElement('p');
                element.classList.add(infoClass);
                element.textContent = `${this.cardInfoTitles[index]}: ${values[index]}`;
                cardInfo.append(element);
            });
            this.cardsContent.append(cardItem);
        });
    }

    public clear() {
        const cardItem = document.querySelectorAll('.cards__item');
        if (cardItem.length > 0) {
            cardItem.forEach((el) => {
                el.remove();
            });
        }
    }

    public set favCount(value: number) {
        this._favCount = value;
        if (this._favCount > this._MAX_FAV) {
            return;
        }
        this.favElement.textContent = this._favCount.toString();
    }
    public get MAX_FAV(): number {
        return this._MAX_FAV;
    }
}

export default Cards;
