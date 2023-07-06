import { createInertiaApp } from "@inertiajs/svelte";
import createServer from "@inertiajs/svelte/server";
import route from "../../vendor/tightenco/ziggy/dist/index.m.js";
import { Ziggy } from "./ziggy";

global.route = (name, params, absolute, config) =>
    route(name, params, absolute, Ziggy);

createServer((page) =>
    createInertiaApp({
        page,
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.svelte", {
                eager: true,
            });
            return pages[`./Pages/${name}.svelte`];
        },
    })
);
