import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SuperElement } from './superlit/superlit';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

@customElement('my-page')
export class MyPage extends LitElement {
  @property({ attribute: false })
  article = {
    title: 'My Nifty Article',
    text: 'Some witty text.',
  };

  headerTemplate() {
    return html`<header>${this.article.title}</header>`;
  }

  articleTemplate() {
    return html`<article>${this.article.text}</article>`;
  }

  footerTemplate() {
    return html`<footer>Your footer here.</footer>`;
  }

  render() {
    return html` ${this.headerTemplate()} ${this.articleTemplate()} ${this.footerTemplate()} `;
  }
}

@customElement('my-element')
class MyElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([active]) {
      border: 1px solid red;
    }
  `;

  render() {
    return html`
      <span>Active: ${this.active}</span>
      <button @click="${() => (this.active = !this.active)}">Toggle active</button>
    `;
  }
}

@customElement('my-super-element')
export class MySuperElement extends SuperElement {
  static styles = [
    SuperElement.styles,
    css`
      div {
        color: red;
      }
    `,
  ];
}

@customElement('my-slot-element')
export class MySlotElement extends LitElement {
  protected render() {
    return html`
      <p>
        <slot name="one"></slot>
        <slot name="two"></slot>
      </p>
    `;
  }
}

@customElement('reactive-element')
export class ReactiveElement extends LitElement {
  // observed attribute name is "myvalue"
  @property({ type: Number })
  myValue = 0;

  // Observed attribute will be called my-name
  @property({
    attribute: 'my-name',
    hasChanged(newVal: string, oldVal: string) {
      console.log(`${oldVal} to ${newVal}`);
      // falseの場合はHTMLタグのattributeが変わっても、プロパティは変わらない
      return true;
    },
  })
  myName = 'Ogden';

  // No observed attribute for this property
  @property({ attribute: false })
  myData = {};

  protected render() {
    return html`<div>
      <p>${this.myValue}</p>
      <p>${this.myName}</p>
    </div>`;
  }
}
