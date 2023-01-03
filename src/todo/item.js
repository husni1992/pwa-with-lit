import { __decorate } from "tslib";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
let Todo = class Todo extends LitElement {
    constructor() {
        super(...arguments);
        this._listItems = [];
    }
    render() {
        return html `<div>
        <h1>TODO</h1>
        <div
    </div>`;
    }
};
__decorate([
    property()
], Todo.prototype, "_listItems", void 0);
Todo = __decorate([
    customElement("todo-element")
], Todo);
export { Todo };
//# sourceMappingURL=item.js.map