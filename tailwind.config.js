function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
import typographyPlugin from "@tailwindcss/typography";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Rubik", "sans-serif"],
      },
      backgroundColor: {
        primary: withOpacity("--background-primary-color"),
        secondary: withOpacity("--background-secondary-color"),
        muted: withOpacity("--background-muted-color"),
      },
      textColor: {
        primary: withOpacity("--text-primary-color"),
        current: withOpacity("--text-current-color"),
        secondary: withOpacity("--text-secondary-color"),
        muted: withOpacity("--text-muted-color"),
      },
    },
  },
  plugins: [typographyPlugin],
};
