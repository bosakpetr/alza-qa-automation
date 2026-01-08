import {Selector, t} from 'testcafe';

const addToCartBtn = "a.btnk1";

export class SearchResultsPage {
    productTile = Selector(`.browsingitem`);
    buyUsedButton = Selector('#alzaDialog .alzaDialogButtons .btnx');


    async tileWithNameExists(name: string) {
        await t.expect(this.productTile.withText(name).exists).ok(`Could not find a product with name ${name}`);
    }
    async addProductToCart(productName: string){
        await t.click(this.productTile.withText(productName).find(addToCartBtn));
        if (await this.buyUsedButton.exists) {
            await t.click(this.buyUsedButton);
        }
    }
}
