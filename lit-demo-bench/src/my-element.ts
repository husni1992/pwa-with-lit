import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  @property()
  count: number = 0;

  handleClick() {
    this.count++;
  }

  protected render(): unknown {
    return html`
      <div>
        <h2>Hello world from Husny!</h2>
        ${this.count}
        <div>
          <button @click=${this.handleClick}>Click me!</button>
        </div>
      </div>
    `;
  }
}
