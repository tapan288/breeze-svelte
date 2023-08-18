import { Ziggy } from "./ziggy";
import createServer from "@inertiajs/svelte/server";
import { createInertiaApp } from "@inertiajs/svelte";
import route from "../../vendor/tightenco/ziggy/dist/index.m.js";

global.route = (name, params, absolute, config) =>
    route(name, params, absolute, Ziggy);

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createServer((page) =>
    createInertiaApp({
        page,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.svelte", {
                eager: true,
            });
            return pages[`./Pages/${name}.svelte`];
        },
    })
);
