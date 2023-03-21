import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";

@NgModule({
    declarations: [AboutComponent],   // componrnts, directives, pipes
    imports: [],        // modules
    exports: [AboutComponent],        // items from declerations and imports
    providers: []      // services
})
export class AboutModule{

}