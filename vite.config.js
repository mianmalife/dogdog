import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 按需导入elment-plus组件 && 图标 , unplugin-auto-import/vite 按需导入vue api
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          // 自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
          importStyle: "sass",
        }),
      ],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    ElementPlus({
      useSource: true,
    }),
    Icons(),
  ],
  // 自定义主题
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/assets/theme/index.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
      "@": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
