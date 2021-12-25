import { Selector } from "testcafe"
//import { userLoginWithInvalidCred } from '../helper.test'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from "../page-objects/pages/LoginPage"
import ForgottenpasswordLink from "../page-objects/pages/ForgottenPasswordPage"

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenpasswordLink = new ForgottenpasswordLink()

fixture `Login Test`
    .page `http://zero.webappsecurity.com/`

test('User cannot login with invalid credentials', async t =>{
    // const signInButton = Selector('#signin_button')
    // await t.click(signInButton)

    // const loginForm = Selector('#login_form')
    // await t.expect(loginForm.exists).ok()

    // const usernameInput = Selector('#user_login')
    // const passwordInput = Selector('#user_password')
    // await t.typeText(usernameInput, 'invalid username', { paste: true})
    // await t.typeText(passwordInput, 'invalid password', { paste: true})

    // const submitButton = Selector('.btn-primary')
    // await t.click(submitButton)

    // const errorMessage = Selector('.alert-error').innerText
    // await t.expect(errorMessage).contains('Login and/or password are wrong.')
    await t.click(navbar.signInButton)
    //await t.click(navbar.signInButton)
    loginPage.loginToApp('invalidPass', 'invalidUser')

    //console.log(loginPage.errorErrorMessage.innerText)

    await t
        .expect(loginPage.errorMessage.innerText)
        .contains('Login and/or password are wrong.')
})


test.skip('User can login into application', async t =>{

    //const signInButton = Selector('#signin_button')
    await t.click(navbar.signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const usernameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(usernameInput, 'username', { paste: true})
    await t.typeText(passwordInput, 'password', { paste: true})

    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)

    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginForm.exists).notOk()

    const userIcon = Selector('.icon-user')
    await t.click(userIcon)

    const logoutButton = Selector('#logout_link')
    await t.click(logoutButton)

    await t.expect(logoutButton.exists).notOk()
    await t.expect(navbar.signInButton.exists).ok()
    

})

test('user can request new password to be send to this mail', async t => {
    
   // const signInButton = Selector('#signin_button')
   // const linkToPassword = Selector("a").withText('Forgot your password ?')
   // const emailInput = Selector('#user_email')
   // const message = Selector('div').innerText
   
    await t.click(navbar.signInButton)
    await t.click(loginPage.forgottenpasswordLink)
    await t.wait(1000)
    await t.typeText(forgottenpasswordLink.emailInput, 'rajul@1234.com', { 
        paste: true, 
        replace: true})
    await t.pressKey('enter')
    await t.expect(forgottenpasswordLink.message.innerText).contains('rajul@1234.com')
    await t.expect(forgottenpasswordLink.emailInput.exists).notOk()

})


    
