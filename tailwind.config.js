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
        rubik: ["Rubik", "sans-serif"],
        handle: ["Handlee", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      backgroundColor: {
        primary: withOpacity("--background-primary-color"),
        secondary: withOpacity("--background-secondary-color"),
        muted: withOpacity("--background-muted-color"),
      },
      textColor: {
        primary_color: withOpacity("--text-primary-color"),
        current_color: withOpacity("--text-current-color"),
        secondary_color: withOpacity("--text-secondary-color"),
        muted_color: withOpacity("--text-muted-color"),
      },
    },
  },
  plugins: [typographyPlugin],
};
