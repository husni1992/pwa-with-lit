import { __decorate } from "tslib";
import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
let Todo = class Todo extends LitElement {
    constructor() {
        super(...arguments);
        this._listItems = [];
    }
    addItem(evt) {
        if (!this.input.value) {
            evt.preventDefault();
            return;
        }
        this._listItems = [
            ...this._listItems,
            { value: this.input.value, isComplete: false },
        ];
        this.input.value = "";
        evt.preventDefault();
    }
    toggleComplete(item) {
        item.isComplete = !item.isComplete;
        this.requestUpdate();
    }
    render() {
        return html `<div>
      <h1>TODO</h1>
      ${this._listItems.map((item) => html `<ul>
            <li
              class=${classMap({
            "todo-item": true,
            completed: item.isComplete,
        })}
              @click=${() => this.toggleComplete(item)}
            >
              ${item.value}
            </li>
          </ul>`)}
      <form style="margin-top: 10px" @submit=${this.addItem}>
        <input id="newitem" aria-label="New item" />
        <button @click=${this.addItem}>Add</button>
      </form>
    </div>`;
    }
};
Todo.styles = css `
    .todo-item {
      moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-bottom: 3px;
      color: #777;
    }

    .completed {
      text-decoration: line-through;
    }
  `;
__decorate([
    query("#newitem")
], Todo.prototype, "input", void 0);
__decorate([
    property()
], Todo.prototype, "_listItems", void 0);
Todo = __decorate([
    customElement("todo-element")
], Todo);
export { Todo };
//# sourceMappingURL=index.js.map