import { Selector, t } from 'testcafe';

export class Header {
    searchBarInput = Selector(`[data-testid="searchInput"]`);
    searchBtn = Selector(`[data-testid="button-search"]`);
    cartIcon = Selector(`[data-testid="headerBasketIcon"]`);

    async searchText(text: string) {
        await t.typeText(this.searchBarInput, text).wait(1000).click(this.searchBtn)
    }
    async clickOnCart() {
        await t.click(this.cartIcon)
    }
}
