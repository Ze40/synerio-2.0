import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        //Цвета:
        colors: {
          white: { value: "#FFFFFF" },
          gray: {
            base: { value: "#6F6F6F" },
            100: { value: "#E4E4E4" },
            200: { value: "#6F6F6F" },
            300: { value: "#2D2D2D" },
            400: { value: "#2D2D2D" },
            500: { value: "#1E1E1E" },
          },
          black: { value: "#171717" },
          primary: { value: "#F95C25" },
        },
      },
    },
  },

  themes: {
    dark: {
      tokens: {
        //Цвета:
        colors: {
          white: { value: "#FFFFFF" },
          gray: {
            base: { value: "#6F6F6F" },
            100: { value: "#E4E4E4" },
            200: { value: "#6F6F6F" },
            300: { value: "#2D2D2D" },
            400: { value: "#2D2D2D" },
            500: { value: "#1E1E1E" },
          },
          black: { value: "#171717" },
          primary: { value: "#FBB705" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
