import { Selector, t } from "testcafe";
import BasePage from "./BasePage";
class FeedbakPage extends BasePage{
    constructor() {
        super()
        this.form_name = Selector('#name')
        this.form_email = Selector('#email')
        this.form_subject = Selector('#subject')
        this.form_comment = Selector('#comment')
        this.form_submit_button = Selector('input').withAttribute(
            'value',
            'Send Message'
        )
        this.message = Selector('div')
    }

    async feedbackPageFilling( formEmail, formSubject, formComment) {

        
        await t.wait(3000)
            
            .typeText(this.form_email, formEmail, { paste: true, replace: true})
            .typeText(this.form_subject, formSubject, { paste: true, replace: true})
            .typeText(this.form_comment, formComment, { paste: true, replace: true})
            .click(this.form_submit_button)
            
    }
}
export default FeedbakPage