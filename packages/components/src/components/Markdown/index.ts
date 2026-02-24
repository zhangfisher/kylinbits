/**
 *
 * <kylin-markdown content="markdown内容"></kylin-button>
 *
 *
 */
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { styles } from "./styles";
@customElement("kylin-markdown")
export class KylinMarkdown extends LitElement {
    static styles = styles;

    render() {
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "kylin-markdown": KylinMarkdown;
    }
}
