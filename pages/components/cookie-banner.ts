import { Selector, t } from 'testcafe';

export class CookieBanner {
    acceptBtn = Selector('a.js-cookies-info-accept');

    async acceptCookiesAll() {
        if (await this.acceptBtn.exists) {
            await t.click(this.acceptBtn);
        }
    }
}
