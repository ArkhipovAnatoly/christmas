import noUiSlider, { API } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { DataSlider } from '../../types';

class Slider {
    private element: HTMLElement;
    private start: number;
    private end: number;
    private step: number;

    constructor(element: HTMLElement, range: DataSlider) {
        this.element = element;
        this.start = range.start;
        this.end = range.end;
        this.step = range.step;
    }

    public init(): API {
        return noUiSlider.create(this.element, {
            start: [this.start, this.end],
            connect: true,
            tooltips: [
                {
                    to: function (value) {
                        return value.toFixed(0);
                    },
                },
                {
                    to: function (value) {
                        return value.toFixed(0);
                    },
                },
            ],
            step: this.step,
            range: {
                min: this.start,
                max: this.end,
            },
        });
    }
}

export default Slider;
