import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "app-hello-world",
    templateUrl: "./hello-world.component.html",
    styleUrls: ["./hello-world.component.scss"]
})
export class HelloWorldComponent {
    @Input() public name: string;
    @Output() nameChange = new EventEmitter();
    
    constructor(public cdr: ChangeDetectorRef) {
        this.nameChange.subscribe((value) => {
            this.name = value;
            this.cdr.detectChanges();
        });
    }
    
    public changeName() {
        this.nameChange.emit(this.name);
    }
}
