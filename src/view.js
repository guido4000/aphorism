import { html } from "hyperapp";

const view = (model, msg) => html`
  <div>

    <h1>${model.current}</h1>
  </div>
`;

export default view;
// <button onclick=${msg.set}>set</button>
