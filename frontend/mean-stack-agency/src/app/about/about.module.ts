import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";

@NgModule({
    declarations: [AboutComponent],   // componrnts, directives, pipes
    imports: [RouterModule],        // modules
    exports: [AboutComponent],        // items from declerations and imports
    providers: []      // services
})
export class AboutModule{

}