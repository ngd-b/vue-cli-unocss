import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  presetTypography,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  rules: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup()],
});
