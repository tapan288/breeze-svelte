import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/svelte";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.svelte", { eager: true });
        return pages[`./Pages/${name}.svelte`];
    },
    setup({ el, App, props }) {
        new App({ target: el, props, hydrate: true });
    },
    progress: {
        color: "#4B5563",
        showSpinner: true,
    },
});
