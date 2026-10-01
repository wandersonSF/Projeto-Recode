import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "dist",
        minify: true,
        cssMinify: true,
        sourcemap: false,
        rollupOptions: {
            input: {
                inicio: resolve(__dirname, "html/index.html"),
                projetos: resolve(__dirname, "html/projetos.html"),
                cadastro: resolve(__dirname, "html/cadastro.html")
            }
        }
    }
});
