import { BaseActionDispatcher } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { SourcesGridComponent } from '../sources-grid/sources-grid.component';

export class SourcesActionDispatcher extends BaseActionDispatcher {
    constructor(private source:SourcesGridComponent) {
        super();
    }
    addNewUserForm() {
        this.source.onClickAddSource();
    }

}

