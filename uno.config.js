import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  presetTypography,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  cli: {
    entry: {
      patterns: ["src/**/*.{vue,js}"],
      outFile: "src/uno.css",
    },
  },
  rules: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup()],
});
