const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
    const files = [
        "node_modules/zone.js/dist/zone.min.js",
        "node_modules/rxjs/bundles/rxjs.umd.min.js",
        "node_modules/@angular/core/bundles/core.umd.min.js",
        "node_modules/@angular/common/bundles/common.umd.min.js",
        "node_modules/@angular/forms/bundles/forms.umd.min.js",
        "node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js",
        "node_modules/@angular/elements/bundles/elements.umd.min.js",
    ];
    await fs.ensureDir("dist/core");
    await concat(files, "dist/core/angular-core.js");
})();
