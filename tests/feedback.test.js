import { Selector } from "testcafe"
import FeedbakPage from "../page-objects/pages/FeedbackPage"
import LoginPage from "../page-objects/pages/LoginPage"

const feedbackPage = new FeedbakPage()
const loginPage =  new LoginPage()

const dataSet = require('../DataDriven/data.json')

fixture `Feedbak form test`
.page `http://zero.webappsecurity.com/index.html`

dataSet.forEach(data => {
test.only('User can submit feedback via form', async t => {
    //Selector
    const linkToFeedback = Selector('#feedback')
    const heading = Selector('#feedback-title').innerText
    // const form_name = Selector('#name')
    // const form_email = Selector('#email')
    // const form_subject = Selector('#subject')
    // const form_comment = Selector('#comment')
    // const form_submit_button = Selector('input').withAttribute(
    //     'value',
    //     'Send Message'
    // )
    //const message = Selector('div').innerText

    //Actions

    await t.click(linkToFeedback)
    //feedbackPage.waitfor(4000)
    await t.typeText(feedbackPage.form_name, data.form_name)
    feedbackPage.feedbackPageFilling(data.form_email, data.form_subject, data.form_comment)
    // await t.typeText(form_name, 'Rajul', { paste: true })
    // await t.typeText(form_email, 'rajul.agrawal1612@gmail.ccom', { paste: true})
    // await t.typeText(form_subject, 'Computer Science', { paste: true})
    // await t.typeText(form_comment, 'Your comments goes here', { paste: true})
   // await t.click(form_submit_button)
    //Assertions

    //await t.expect(feedbackPage.message.innerText).contains('Thank you for your comments')
   //console.log("Sucessfully Executed this program")
})



})