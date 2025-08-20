import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/index.css";
import DarkMode from "../src/components/DarkMode";
const withDarkMode = (Story, context) => {
  return (
    <div className="p-4">
      <DarkMode />
      <div className="mt-4">
        <Story {...context} />
      </div>
    </div>
  );
};

const preview: Preview = {
  decorators: [withDarkMode],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
