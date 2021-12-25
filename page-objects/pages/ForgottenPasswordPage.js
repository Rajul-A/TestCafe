import { Selector, t } from "testcafe";

class forgottenpasswordLink {
    constructor() {
        this.emailInput = Selector('#user_email')
        this.message = Selector('div')
    }
}

export default forgottenpasswordLink