import { t } from 'testcafe'
import { Selector } from 'testcafe'

export async function userLoginWithInvalidCred(username, password){
    const signInButton = Selector('#signin_button')

    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const usernameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(usernameInput, 'invalid username', { paste: true})
    await t.typeText(passwordInput, 'invalid password', { paste: true})

    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')

}