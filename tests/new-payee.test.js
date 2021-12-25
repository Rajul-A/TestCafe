import { Selector } from "testcafe";
fixture `New payee test`
    .page `http://zero.webappsecurity.com/index.html`

test.before(async t => {

    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const usernameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(usernameInput, 'username', { paste: true})
    await t.typeText(passwordInput, 'password', { paste: true})

    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)

})

test('User can add new payee to the  list', async t => {
    // Selector

    // Actions
    // Assertion
})