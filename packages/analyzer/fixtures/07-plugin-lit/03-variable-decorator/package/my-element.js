import { LitElement, customElement, property } from 'lit-element';

const TAG_NAME = 'my-variable-element';

@customElement(TAG_NAME)
export class MyVariableElement extends LitElement {
  @property({ type: String })
  message = 'Hello World';
}
