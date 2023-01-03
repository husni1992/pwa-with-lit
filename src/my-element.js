import { __decorate } from "tslib";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
        this.name = "";
        this.checked = false;
        this.isHidden = false;
    }
    handleClick() {
        this.count++;
    }
    changeTextHandler(evt) {
        const input = evt.target;
        this.name = input.value;
    }
    toggleChecked(evt) {
        this.checked = evt.target.checked;
    }
    toggleHidden(evt) {
        this.isHidden = evt.target.checked;
    }
    render() {
        return html `
      <div>
        <h2>Hello world from Husny!</h2>
        <h3>Let's do PWA with lit html <a target="_blank" href="https://lit.dev/">Lit</a></h3>

        <div> 
          <img src="./logo.svg" class="logo" alt="logo" />
        </div>

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
          <div>
            Enable editing: 
            <input type="checkbox" @change=${this.toggleChecked} />
          </div>
          </br>
          <div>
            <input .value=${this.name} ?disabled=${!this.checked} /> 
          </div> 
        </div>


        <div class="box">
          <div>
            Hide
            <input type="checkbox" @change=${this.toggleHidden} />
          </div>
          </br>
          <div class="object" ?hidden=${this.isHidden}>
          </div> 
        </div>

        <div class="box">

        
        </div>
      </div>
    `;
    }
};
MyElement.styles = css `
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

    .logo {
      height: 30vmin;
      pointer-events: none;
      margin: 10px;
    }
  `;
__decorate([
    property()
], MyElement.prototype, "count", void 0);
__decorate([
    property()
], MyElement.prototype, "name", void 0);
__decorate([
    property()
], MyElement.prototype, "checked", void 0);
__decorate([
    property()
], MyElement.prototype, "isHidden", void 0);
MyElement = __decorate([
    customElement("my-element")
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map