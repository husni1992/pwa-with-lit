import { LitElement } from "lit";
type TodoItem = {
    value: string;
    isComplete: boolean;
};
export declare class Todo extends LitElement {
    static styles: import("lit").CSSResult;
    input: HTMLInputElement;
    _listItems: TodoItem[];
    addItem(evt: Event): void;
    toggleComplete(item: TodoItem): void;
    protected render(): unknown;
}
export {};
