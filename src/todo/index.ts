import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

type TodoItem = {
  value: string;
  isComplete: boolean;
};

@customElement("todo-element")
export class Todo extends LitElement {
  static styles = css`
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

  @query("#newitem")
  input!: HTMLInputElement;

  @property()
  _listItems: TodoItem[] = [];

  addItem(evt: Event) {
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

  toggleComplete(item: TodoItem) {
    item.isComplete = !item.isComplete;
    this.requestUpdate();
  }

  protected render(): unknown {
    return html`<div>
      <h1>TODO</h1>
      ${this._listItems.map(
        (item) =>
          html`<ul>
            <li
              class=${classMap({
                "todo-item": true,
                completed: item.isComplete,
              })}
              @click=${() => this.toggleComplete(item)}
            >
              ${item.value}
            </li>
          </ul>`
      )}
      <form style="margin-top: 10px" @submit=${this.addItem}>
        <input id="newitem" aria-label="New item" />
        <button @click=${this.addItem}>Add</button>
      </form>
    </div>`;
  }
}
