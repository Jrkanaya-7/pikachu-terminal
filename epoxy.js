// Epoxy transport shim — re-exports EpoxyClient from CDN as a module
// This file must be served from the same origin as a .js (not .mjs) for GitHub Pages
export { EpoxyClient } from "https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport@latest/dist/index.js";
