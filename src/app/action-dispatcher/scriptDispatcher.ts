import { BaseActionDispatcher } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { ScriptGridComponent } from '../script-grid/script-grid.component';

export class ScriptDispatcher extends BaseActionDispatcher {
    constructor(private script:ScriptGridComponent) {
        super();
    }
    addNewUserForm() {
        this.script.goToDraftScript();
    }

}