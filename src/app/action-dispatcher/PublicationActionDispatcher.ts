import { BaseActionDispatcher } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';

import { PublicationGridComponent } from '../publication-grid/publication-grid.component';
import { PublicationEditComponent } from '../publication-edit/publication-edit.component';

export class PublicationActionDispatcher extends BaseActionDispatcher {

    constructor(private publication: PublicationGridComponent) {
        super();
    }
    addNewUserForm() {
        this.publication.onClickAdd();
    }
    onRowClick(value) {
        this.publication.onClickRow(value);

    }
}