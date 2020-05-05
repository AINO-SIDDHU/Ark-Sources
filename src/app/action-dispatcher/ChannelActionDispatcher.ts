import { BaseActionDispatcher } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { ChanneldataComponent } from '../channeldata/channeldata.component';

export class ChannelActionDispatcher extends BaseActionDispatcher {
    constructor(private channel:ChanneldataComponent) {
        super();
    }
    addNewUserForm() {
        this.channel.onClickAddChannel();
    }
}

