import { BaseActionDispatcher } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { EditionGridComponent } from '../edition-grid/edition-grid.component';


export class AddEditionDispatcher extends BaseActionDispatcher {

    constructor(private addEdition: EditionGridComponent) {
        super();
    }
    addNewUserForm() {
        console.log("===========inside actiondispatrcher");
        this.addEdition.openDialog();

    }
}