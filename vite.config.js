import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

export default defineConfig({
    root: "html",

    build: {
        outDir: "../dist",
        emptyOutDir: true,

        rollupOptions: {
            input: {
                index: resolve(__dirname, "html/index.html"),
                projetos: resolve(__dirname, "html/projetos.html"),
                cadastro: resolve(__dirname, "html/cadastro.html")
            }
        }
    },

    plugins: [
        {
            name: "copiar-pasta-img",
            closeBundle() {
                const origem = resolve(__dirname, "img");
                const destino = resolve(__dirname, "dist/img");

                fs.cpSync(origem, destino, { recursive: true });
            }
        }
    ]
});