export class Utils {
    static getElement(selector: string) : HTMLElement {
        return document.querySelector(selector) as HTMLElement
    }
}