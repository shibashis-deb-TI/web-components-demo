import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OpportunityComponent } from "./components/opportunity/opportunity.component";
import { RouterModule } from "@angular/router";

const routes = [{ path: "", component: OpportunityComponent }];

@NgModule({
  declarations: [OpportunityComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OpportunitiesModule {}
