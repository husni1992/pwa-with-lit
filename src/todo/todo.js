import { __decorate } from "tslib";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
let Todo = class Todo extends LitElement {
    render() {
        return html ` <h1>TODO</h1> `;
    }
};
Todo = __decorate([
    customElement("todo-element")
], Todo);
export { Todo };
//# sourceMappingURL=todo.js.map