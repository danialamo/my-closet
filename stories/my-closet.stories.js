import { html } from 'lit';
import '../src/my-closet.js';

export default {
  title: 'MyCloset',
  component: 'my-closet',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <my-closet
      style="--my-closet-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </my-closet>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
