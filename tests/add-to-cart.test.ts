import { SearchResultsPage } from '../pages/search-result-page';
import { Selector, t } from 'testcafe';
import {Header} from "../pages/components/header";
import {CookieBanner} from "../pages/components/cookie-banner";
import {OrderPage} from "../pages/order-page";

const header = new Header();
const searchPage = new SearchResultsPage();
const cookies = new CookieBanner();
const orderPage = new OrderPage()

fixture `Košík na Alza.cz`
    .page `https://www.alza.cz`
    .beforeEach(async t => {
        await t.maximizeWindow();
        await cookies.acceptCookiesAll();
    });

test('Vyhledání produktu a vložení do košíku', async t => {
    const productName = 'iPhone 15 Pro';

    // Vyhledání produktu v search baru
    await header.searchText(productName);

    // Ověří, že se produkt našel, a vloží ho do košíku
    await searchPage.tileWithNameExists(productName);
    await searchPage.addProductToCart(productName);

    // Klik na ikonu košíku
    await header.clickOnCart()

    // Došlo k přesměrování do košíku
    await orderPage.orderPageExists()
});
