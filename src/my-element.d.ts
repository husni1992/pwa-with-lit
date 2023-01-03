import { LitElement } from "lit";
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    count: number;
    name: string;
    checked: boolean;
    isHidden: boolean;
    handleClick(): void;
    changeTextHandler(evt: Event): void;
    toggleChecked(evt: Event): void;
    toggleHidden(evt: Event): void;
    protected render(): unknown;
}
