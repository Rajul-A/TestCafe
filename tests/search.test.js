import { Selector } from "testcafe";
import  Navbar  from '../page-objects/components/Navbar';
import SearchResultPage from "../page-objects/pages/SearchResultpage";

const navbar = new Navbar()
const searchResultPage = new SearchResultPage()

fixture `Search box text`
    .page `http://zero.webappsecurity.com/index.html`
    .beforeEach(async t =>{

        await t.maximizeWindow()
    })

test('User can search for information using search box', async t =>{
    // Selctor
    //const searchBox = Selector('#searchTerm')
    // const resultTitle = Selector('h2')
    // const linkText = Selector("div").innerText

    // XPATH  to CSS Example


    // Actions
    // await t.typeText(navbar.searchBox, 'online bank', { paste: true })
    // await t.pressKey('enter')
    navbar.search('online bank')

    // Assertion
    await t.expect(searchResultPage.resultsTitle.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t.expect(searchResultPage.linkText.innerText).contains('Zero - Free Access to Online Banking')
})
