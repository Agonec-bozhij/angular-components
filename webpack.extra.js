module.exports = {
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements"
    },
    entry: {
        main: "./src/main.ts",
        polyfills: [
            "./src/polyfills.ts"
        ]
    }
};
