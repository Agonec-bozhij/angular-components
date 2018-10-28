import {BrowserModule} from "@angular/platform-browser";
import {DoBootstrap, Injector, NgModule} from "@angular/core";
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {FormsModule} from "@angular/forms";
import {DialogComponent} from "./dialog/dialog.component";
import {createCustomElement} from "@angular/elements";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        HelloWorldComponent,
        DialogComponent
    ],
    entryComponents: [
        HelloWorldComponent
    ]
})
export class AppModule implements DoBootstrap {
    
    private injector: Injector;
    
    constructor(injector: Injector) {
        this.injector = injector;
    }
    
    public ngDoBootstrap(): void {
        customElements.define("hello-world", createCustomElement(HelloWorldComponent, {injector: this.injector}) as Function);
    }
}
