import {Selector, t} from 'testcafe';

export class OrderPage {
    orderContainer = Selector('#orderpage');

    async orderPageExists() {
        await t.expect(this.orderContainer.exists).ok();
    }
}
