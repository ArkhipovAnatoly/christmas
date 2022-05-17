import data from '../../../data';
import { DataCards } from '../../../types';
import './favoritecards.css';

class FavoriteCards {
    private favContainer;
    private DEFAULT_TOY_NUMBER = 20;
    private _favCollection: string[] = new Array(this.DEFAULT_TOY_NUMBER).fill('');
    private message = 'В избранные ничего не добавлено. . .';
    private isInside = false;
    private isReturned = false;

    constructor() {
        this.favContainer = document.querySelector('.favorites-container') as HTMLDivElement;
        this.dragListenerInit();
        this._favCollection = this._favCollection.map((_, index) => (index + 1).toString());
        this.render();
    }

    public add(id: string): void {
        (document.querySelector('.message') as HTMLElement)?.remove();
        this._favCollection.push(id);
        this.removeAll();
        this.render();
    }
    public remove(id: string): void {
        const index: number = this.favCollection.indexOf(id);
        this._favCollection.splice(index, 1);
        this.removeFromView(id);
        this.render();
    }
    public get favCollection(): string[] {
        return this._favCollection;
    }

    private removeAll() {
        document.querySelectorAll('.favorites-card').forEach((item) => {
            item.remove();
        });
    }
    private dragListenerInit() {
        document.querySelector('#map')?.addEventListener('dragover', (e: Event) => {
            e.preventDefault();
            this.isInside = true;
        });

        document.querySelector('#map')?.addEventListener('dragleave', () => {
            this.isInside = false;
        });
    }
    private render(): void {
        this.showMessage();
        this._favCollection.forEach((item, index) => {
            if (!this.isDrowned(item)) {
                const div = document.createElement('div');
                const p = document.createElement('p');
                p.classList.add('favorites-count');
                const cardData = data.find((card) => card.num === item) as DataCards;
                p.textContent = `${cardData.count}`;
                p.setAttribute('data-amount', (index + 1).toString());
                for (let i = 0; i < +cardData.count; i++) {
                    const img = document.createElement('img');
                    img.classList.add('favorites-card-img');
                    img.src = `assets/toys/${cardData.num}.png`;
                    img.draggable = true;
                    img.alt = `${cardData.name}`;
                    img.setAttribute(`data-img`, `${index + 1}-${i + 1}`);
                    div.append(img);
                }
                div.classList.add('favorites-card');
                div.setAttribute('data-favnum', `${item}`);
                div.append(p);
                this.favContainer.append(div);
            }
        });

        const images = document.querySelectorAll('.favorites-card-img');
        const favCards = document.querySelectorAll('.favorites-card');
        favCards.forEach((card) => {
            card.addEventListener('dragover', (event: MouseEvent | Event) => {
                event.preventDefault();
                this.isReturned = true;
            });
            card.addEventListener('dragleave', () => {
                this.isReturned = false;
            });
        });
        images.forEach((img) => {
            img.addEventListener('dragend', (event: MouseEvent | Event) => {
                this.dragHandle(event);
            });
        });
    }

    private dragHandle(event: MouseEvent | Event) {
        if (this.isInside) {
            this.isInside = false;
            const favNum = ((event as Event).target as HTMLElement).parentElement?.dataset.favnum;
            const attrFull = ((event as Event).target as HTMLElement).dataset.img;
            const elem = document.querySelector(`[data-img="${attrFull}"]`) as HTMLImageElement;
            const clone = elem.cloneNode();
            (clone as HTMLImageElement).setAttribute('data-parent', favNum as string);
            clone.addEventListener('dragend', (event: MouseEvent | Event) => {
                if (this.isInside) {
                    this.isInside = false;
                    (clone as HTMLImageElement).style.left = `${(event as MouseEvent).clientX - 35}` + 'px';
                    (clone as HTMLImageElement).style.top = `${(event as MouseEvent).clientY - 100}` + 'px';
                } else if (this.isReturned) {
                    this.isReturned = false;
                    const parentNum = ((event as Event).target as HTMLElement).dataset.parent;
                    document.querySelectorAll('.favorites-card').forEach((card) => {
                        if (card.getAttribute('data-favnum') === parentNum) {
                            const attrFull = ((event as Event).target as HTMLElement).dataset.img;
                            const elem = document.querySelector(`[data-img="${attrFull}"]`) as HTMLImageElement;
                            const clone = elem.cloneNode();
                            const cardTop = card.getBoundingClientRect().top + card.clientWidth / 2 - 100;
                            const cardLeft = card.getBoundingClientRect().left + card.clientHeight / 2 - 30;
                            card.append(clone);
                            const attr: string = ((event as Event).target as HTMLElement).dataset.img?.split(
                                '-'
                            )[0] as string;
                            const el = document.querySelector(`[data-amount="${attr}"]`) as HTMLDivElement;
                            const currentAmount: string = el.textContent as string;
                            const newAmount = +currentAmount + 1;
                            el.textContent = newAmount.toString();
                            (clone as HTMLImageElement).style.left = `${cardLeft}` + 'px';
                            (clone as HTMLImageElement).style.top = `${cardTop}` + 'px';
                            clone.addEventListener('dragend', (event: MouseEvent | Event) => {
                                this.dragHandle(event);
                            });
                            elem.parentNode?.removeChild(elem);
                        }
                    });
                }
            });

            (clone as HTMLImageElement).style.left = `${(event as MouseEvent).clientX - 35}` + 'px';
            (clone as HTMLImageElement).style.top = `${(event as MouseEvent).clientY - 100}` + 'px';
            const attr: string = ((event as Event).target as HTMLElement).dataset.img?.split('-')[0] as string;
            const el = document.querySelector(`[data-amount="${attr}"]`) as HTMLDivElement;

            const currentAmount: string = el.textContent as string;
            const newAmount = +currentAmount - 1;
            el.textContent = newAmount.toString();
            document.querySelector('.area')?.append(clone);
            elem.parentNode?.removeChild(elem);
        }
    }

    private isEmpty(): boolean {
        return this._favCollection.length === 0 ? true : false;
    }
    private showMessage() {
        if (this.isEmpty()) {
            const p = document.createElement('p');
            p.innerText = this.message;
            p.classList.add('message');
            this.favContainer.append(p);
        }
    }
    private removeFromView(id: string) {
        const currentCard = document.querySelector(`[data-favnum="${id}"]`);
        const currentToys = document.querySelectorAll(`[data-parent="${id}"]`);

        currentCard?.remove();

        if (currentToys.length > 0) {
            currentToys.forEach((currentToy) => {
                currentToy.remove();
            });
        }
    }

    private isDrowned(id: string): boolean {
        const element = document.querySelector(`[data-favnum="${id}"`) as HTMLDivElement;
        if (element) {
            return true;
        }
        return false;
    }
}

export default FavoriteCards;
