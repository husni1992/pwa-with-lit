import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    .box {
      border: 1px solid royalblue;
      margin: 5px;
      margin-bottom: 15px;
      padding: 5px;
      width: 200px;
    }

    .object {
      width: 50px;
      height: 50px;
      background-color: cyan;
    }
  `;

  @property()
  count: number = 0;

  @property()
  name: string = "";

  @property()
  checked: boolean = false;

  @property()
  isHidden: boolean = false;

  handleClick() {
    this.count++;
  }

  changeTextHandler(evt: Event) {
    const input = evt.target as HTMLInputElement;
    this.name = input.value;
  }

  toggleChecked(evt: Event) {
    this.checked = (evt.target as HTMLInputElement).checked;
  }

  toggleHidden(evt: Event) {
    this.isHidden = (evt.target as HTMLInputElement).checked;
  }

  protected render(): unknown {
    return html`
      <div>
        <h2>Hello world from Husny!</h2>
        <h3>Let's do PWA with lit</h3>
        <div class="box">
          <h3>Counter</h3>
          ${this.count}

          <div>
            <button @click=${this.handleClick}>Click me!</button>
          </div>
        </div>

        <div class="box">
          <div>
            <input @input=${this.changeTextHandler} placeholder="Enter text" />
          </div>
          <div>
            <h4>Text: ${this.name}</h4>
          </div>
        </div>

        <div class="box">
          <div style=>
            Enable editing: 
            <input type="checkbox" @change=${this.toggleChecked} />
          </div>
          </br>
          <div>
            <input .value=${this.name} ?disabled=${!this.checked} /> 
          </div> 
        </div>


        <div class="box">
          <div style=>
            Hide
            <input type="checkbox" @change=${this.toggleHidden} />
          </div>
          </br>
          <div class="object" ?hidden=${this.isHidden}>
          </div> 
        </div>
      </div>
    `;
  }
}
