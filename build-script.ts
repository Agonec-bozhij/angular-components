const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
    const files = [
        "node_modules/zone.js/dist/zone.min.js",
        "node_modules/rxjs/bundles/rxjs.umd.js",
        "node_modules/@angular/core/bundles/core.umd.js",
        "node_modules/@angular/common/bundles/common.umd.js",
        "node_modules/@angular/forms/bundles/forms.umd.js",
        "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
        "node_modules/@angular/elements/bundles/elements.umd.js",
    ];
    await fs.ensureDir("dist/core");
    await concat(files, "dist/core/angular-core.js");
})();
