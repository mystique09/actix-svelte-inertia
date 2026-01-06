import { createInertiaApp, type ResolvedComponent } from "@inertiajs/svelte";
import { mount } from "svelte";
import "./app.css";

createInertiaApp({
  id: "app",
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.svelte", { eager: true });
    return pages[`./Pages/${name}.svelte`] as ResolvedComponent;
  },
  setup({ el, App, props }) {
    mount(App, { target: el!, props });
  },
  defaults: {
    form: {
      recentlySuccessfulDuration: 5000,
    },
    prefetch: {
      cacheFor: "1m",
      hoverDelay: 150,
    },
    visitOptions: (_href, options) => {
      return {
        headers: {
          ...options.headers,
        },
      };
    },
  },
});
