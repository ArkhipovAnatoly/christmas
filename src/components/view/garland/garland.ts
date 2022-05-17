import './garland.css';

class Garland {
    private garlandContainer;
    private garlandColor = 'multicolor';
    private MAX_ROPES = 8;
    private MAX_IN_FIRST_ROPE = 5;
    private MAX_IN_SECOND_ROPE = 7;
    private MAX_IN_THIRD_ROPE = 8;
    private MAX_IN_FOURTH_ROPE = 11;
    private MAX_IN_FIFTH_ROPE = 18;
    private MAX_IN_SIXTH_ROPE = 21;
    private MAX_IN_SEVENTH_ROPE = 24;
    private MAX_IN_EIGHTH_ROPE = 28;
    constructor() {
        this.garlandContainer = document.querySelector('.garland-tree-container');
    }

    public init() {
        this.garlandSwitchListenerInit();
        this.garlandBtnLIstenerInit();
    }
    private render() {
        for (let i = 1; i <= this.MAX_ROPES; i++) {
            const ul = document.createElement('ul');
            ul.classList.add('lightrope');
            switch (i) {
                case 1:
                    for (let j = 1; j <= this.MAX_IN_FIRST_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 65, 60, -65);
                                break;
                            case 2:
                                this.setStyle(li, 77, 60, -77);
                                break;
                            case 3:
                                this.setStyle(li, 89, 60, -89);
                                break;
                            case 4:
                                this.setStyle(li, 101, 60, -101);
                                break;
                            case 5:
                                this.setStyle(li, 113, 60, -113);
                                break;
                        }
                        li.classList.add(this.garlandColor);
                        ul.style.width = '120px';
                        ul.style.height = '120px';
                        ul.append(li);
                    }
                    break;
                case 2:
                    for (let j = 1; j <= this.MAX_IN_SECOND_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 60, 85, -60);
                                break;
                            case 2:
                                this.setStyle(li, 70, 85, -70);
                                break;
                            case 3:
                                this.setStyle(li, 80, 85, -80);
                                break;
                            case 4:
                                this.setStyle(li, 90, 85, -90);
                                break;
                            case 5:
                                this.setStyle(li, 100, 85, -100);
                                break;
                            case 6:
                                this.setStyle(li, 110, 85, -110);
                                break;
                            case 7:
                                this.setStyle(li, 120, 85, -120);
                                break;
                        }
                        li.classList.add(this.garlandColor);
                        ul.style.width = '170px';
                        ul.style.height = '170px';
                        ul.append(li);
                    }
                    break;
                case 3:
                    for (let j = 1; j <= this.MAX_IN_THIRD_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 60, 115, -60);
                                break;
                            case 2:
                                this.setStyle(li, 68, 115, -68);
                                break;
                            case 3:
                                this.setStyle(li, 76, 115, -76);
                                break;
                            case 4:
                                this.setStyle(li, 84, 115, -84);
                                break;
                            case 5:
                                this.setStyle(li, 92, 115, -92);
                                break;
                            case 6:
                                this.setStyle(li, 100, 115, -100);
                                break;
                            case 7:
                                this.setStyle(li, 108, 115, -108);
                                break;
                            case 8:
                                this.setStyle(li, 116, 115, -116);
                                break;
                        }

                        ul.style.width = '230px';
                        ul.style.height = '230px';
                        ul.append(li);
                    }
                    break;
                case 4:
                    for (let j = 1; j <= this.MAX_IN_FOURTH_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 60, 150, -60);
                                break;
                            case 2:
                                this.setStyle(li, 66, 150, -66);
                                break;
                            case 3:
                                this.setStyle(li, 72, 150, -72);
                                break;
                            case 4:
                                this.setStyle(li, 78, 150, -78);
                                break;
                            case 5:
                                this.setStyle(li, 84, 150, -84);
                                break;
                            case 6:
                                this.setStyle(li, 90, 150, -90);
                                break;
                            case 7:
                                this.setStyle(li, 96, 150, -96);
                                break;
                            case 8:
                                this.setStyle(li, 102, 150, -102);
                                break;
                            case 9:
                                this.setStyle(li, 108, 150, -108);
                                break;
                            case 10:
                                this.setStyle(li, 114, 150, -114);
                                break;
                            case 11:
                                this.setStyle(li, 120, 150, -120);
                                break;
                        }

                        ul.style.width = '300px';
                        ul.style.height = '300px';
                        ul.append(li);
                    }
                    break;
                case 5:
                    for (let j = 1; j <= this.MAX_IN_FIFTH_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 55, 190, -55);
                                break;
                            case 2:
                                this.setStyle(li, 59, 190, -59);
                                break;
                            case 3:
                                this.setStyle(li, 63, 190, -63);
                                break;
                            case 4:
                                this.setStyle(li, 67, 190, -67);
                                break;
                            case 5:
                                this.setStyle(li, 71, 190, -71);
                                break;
                            case 6:
                                this.setStyle(li, 75, 190, -75);
                                break;
                            case 7:
                                this.setStyle(li, 79, 190, -79);
                                break;
                            case 8:
                                this.setStyle(li, 83, 190, -83);
                                break;
                            case 9:
                                this.setStyle(li, 87, 190, -87);
                                break;
                            case 10:
                                this.setStyle(li, 91, 190, -91);
                                break;
                            case 11:
                                this.setStyle(li, 95, 190, -95);
                                break;
                            case 12:
                                this.setStyle(li, 99, 190, -99);
                                break;
                            case 13:
                                this.setStyle(li, 103, 190, -109);
                                break;
                            case 14:
                                this.setStyle(li, 107, 190, -107);
                                break;
                            case 15:
                                this.setStyle(li, 111, 190, -111);
                                break;
                            case 16:
                                this.setStyle(li, 115, 190, -115);
                                break;
                            case 17:
                                this.setStyle(li, 119, 190, -119);
                                break;
                            case 18:
                                this.setStyle(li, 123, 190, -123);
                                break;
                        }
                        ul.style.width = '380px';
                        ul.style.height = '380px';
                        ul.append(li);
                    }
                    break;
                case 6:
                    for (let j = 1; j <= this.MAX_IN_SIXTH_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 55, 232.5, -55);
                                break;
                            case 2:
                                this.setStyle(li, 58.5, 232.5, -58.5);
                                break;
                            case 3:
                                this.setStyle(li, 62, 232.5, -62);
                                break;
                            case 4:
                                this.setStyle(li, 65.5, 232.5, -65.5);
                                break;
                            case 5:
                                this.setStyle(li, 69, 232.5, -69);
                                break;
                            case 6:
                                this.setStyle(li, 72.5, 232.5, -72.5);
                                break;
                            case 7:
                                this.setStyle(li, 76, 232.5, -76);
                                break;
                            case 8:
                                this.setStyle(li, 79.5, 232.5, -79.5);
                                break;
                            case 9:
                                this.setStyle(li, 83, 232.5, -83);
                                break;
                            case 10:
                                this.setStyle(li, 86.5, 232.5, -86.5);
                                break;
                            case 11:
                                this.setStyle(li, 90, 232.5, -90);
                                break;
                            case 12:
                                this.setStyle(li, 93.5, 232.5, -93.5);
                                break;
                            case 13:
                                this.setStyle(li, 97, 232.5, -97);
                                break;
                            case 14:
                                this.setStyle(li, 100.5, 232.5, -100.5);
                                break;
                            case 15:
                                this.setStyle(li, 104, 232.5, -104);
                                break;
                            case 16:
                                this.setStyle(li, 107.5, 232.5, -107.5);
                                break;
                            case 17:
                                this.setStyle(li, 111, 232.5, -111);
                                break;
                            case 18:
                                this.setStyle(li, 114.5, 232.5, -114.5);
                                break;
                            case 19:
                                this.setStyle(li, 118, 232.5, -118);
                                break;
                            case 20:
                                this.setStyle(li, 121.5, 232.5, -121.5);
                                break;
                            case 21:
                                this.setStyle(li, 125, 232.5, -125);
                                break;
                        }
                        ul.style.width = '465px';
                        ul.style.height = '465px';

                        ul.append(li);
                    }
                    break;
                case 7:
                    for (let j = 1; j <= this.MAX_IN_SEVENTH_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 58, 277.5, -58);
                                break;
                            case 2:
                                this.setStyle(li, 61, 277.5, -61);
                                break;
                            case 3:
                                this.setStyle(li, 64, 277.5, -64);
                                break;
                            case 4:
                                this.setStyle(li, 67, 277.5, -67);
                                break;
                            case 5:
                                this.setStyle(li, 70, 277.5, -70);
                                break;
                            case 6:
                                this.setStyle(li, 73, 277.5, -73);
                                break;
                            case 7:
                                this.setStyle(li, 76, 277.5, -76);
                                break;
                            case 8:
                                this.setStyle(li, 79, 277.5, -79);
                                break;
                            case 9:
                                this.setStyle(li, 82, 277.5, -82);
                                break;
                            case 10:
                                this.setStyle(li, 85, 277.5, -85);
                                break;
                            case 11:
                                this.setStyle(li, 88, 277.5, -88);
                                break;
                            case 12:
                                this.setStyle(li, 91, 277.5, -91);
                                break;
                            case 13:
                                this.setStyle(li, 94, 277.5, -94);
                                break;
                            case 14:
                                this.setStyle(li, 97, 277.5, -97);
                                break;
                            case 15:
                                this.setStyle(li, 100, 277.5, -100);
                                break;
                            case 16:
                                this.setStyle(li, 103, 277.5, -103);
                                break;
                            case 17:
                                this.setStyle(li, 106, 277.5, -106);
                                break;
                            case 18:
                                this.setStyle(li, 109, 277.5, -109);
                                break;
                            case 19:
                                this.setStyle(li, 112, 277.5, -112);
                                break;
                            case 20:
                                this.setStyle(li, 115, 277.5, -115);
                                break;
                            case 21:
                                this.setStyle(li, 118, 277.5, -118);
                                break;
                            case 22:
                                this.setStyle(li, 121, 277.5, -121);
                                break;
                            case 23:
                                this.setStyle(li, 124, 277.5, -124);
                                break;
                            case 24:
                                this.setStyle(li, 127, 277.5, -127);
                                break;
                        }
                        ul.style.width = '555px';
                        ul.style.height = '555px';
                        ul.append(li);
                    }
                    break;
                case 8:
                    for (let j = 1; j <= this.MAX_IN_EIGHTH_ROPE; j++) {
                        const li = document.createElement('li');
                        li.classList.add(this.garlandColor);
                        switch (j) {
                            case 1:
                                this.setStyle(li, 58, 325, -58);
                                break;
                            case 2:
                                this.setStyle(li, 60.5, 325, -60.5);
                                break;
                            case 3:
                                this.setStyle(li, 63, 325, -63);
                                break;
                            case 4:
                                this.setStyle(li, 65.5, 325, -65.5);
                                break;
                            case 5:
                                this.setStyle(li, 68, 325, -68);
                                break;
                            case 6:
                                this.setStyle(li, 70.5, 325, -70.5);
                                break;
                            case 7:
                                this.setStyle(li, 73, 325, -73);
                                break;
                            case 8:
                                this.setStyle(li, 75.5, 325, -75.5);
                                break;
                            case 9:
                                this.setStyle(li, 78, 325, -78);
                                break;
                            case 10:
                                this.setStyle(li, 80.5, 325, -80.5);
                                break;
                            case 11:
                                this.setStyle(li, 83, 325, -83);
                                break;
                            case 12:
                                this.setStyle(li, 85.5, 325, -85.5);
                                break;
                            case 13:
                                this.setStyle(li, 88, 325, -88);
                                break;
                            case 14:
                                this.setStyle(li, 90.5, 325, -90.5);
                                break;
                            case 15:
                                this.setStyle(li, 93, 325, -93);
                                break;
                            case 16:
                                this.setStyle(li, 95.5, 325, -95.5);
                                break;
                            case 17:
                                this.setStyle(li, 98, 325, -98);
                                break;
                            case 18:
                                this.setStyle(li, 100.5, 325, -100.5);
                                break;
                            case 19:
                                this.setStyle(li, 103, 325, -103);
                                break;
                            case 20:
                                this.setStyle(li, 105.5, 325, -105.5);
                                break;
                            case 21:
                                this.setStyle(li, 108, 325, -108);
                                break;
                            case 22:
                                this.setStyle(li, 110.5, 325, -110.5);
                                break;
                            case 23:
                                this.setStyle(li, 115.5, 325, 115.5);
                                break;
                            case 24:
                                this.setStyle(li, 118, 325, -118);
                                break;
                            case 25:
                                this.setStyle(li, 120.5, 325, 120.5);
                                break;
                            case 26:
                                this.setStyle(li, 123, 325, -123);
                                break;
                            case 27:
                                this.setStyle(li, 125.5, 325, -125.5);
                                break;
                            case 28:
                                this.setStyle(li, 128, 325, -128);
                                break;
                        }
                        ul.style.width = '650px';
                        ul.style.height = '650px';
                        ul.append(li);
                    }
                    break;
            }
            this.garlandContainer?.append(ul);
        }
    }
    private setStyle(element: HTMLElement, ...params: number[]) {
        element.style.transform = `rotate(${params[0]}deg) translate(${params[1]}px) rotate(${params[2]}deg)`;
    }
    private remove() {
        const garland = document.querySelectorAll('.lightrope');
        garland.forEach((item) => {
            item.remove();
        });
    }

    private garlandSwitchListenerInit() {
        const garlandSwitcher = document.querySelector('.onoffswitch-checkbox');
        garlandSwitcher?.addEventListener('change', (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
                this.render();
            } else {
                this.remove();
            }
        });
    }

    private garlandBtnLIstenerInit() {
        const garlandBtn = document.querySelector('.garland-btns');
        const garlandSwitcher = document.querySelector('.onoffswitch-checkbox') as HTMLInputElement;
        garlandBtn?.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLButtonElement;

            if (!target.hasAttribute('data-color')) {
                return;
            }
            garlandSwitcher.checked = true;
            this.garlandColor = target.dataset.color as string;
            this.remove();
            this.render();
        });
    }
}

export default Garland;
