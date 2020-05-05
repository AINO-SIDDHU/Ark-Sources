
import { BaseActionDispatcher } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';


import { ScheduleComponent } from '../schedule/schedule.component';


export class ScheduleDispatcher extends BaseActionDispatcher {

    constructor(private schedule: ScheduleComponent) {
        super();
    }
    addNewUserForm() {
        console.log("===========inside actiondispatrcher");
        this.schedule.openDialog();

    }
}