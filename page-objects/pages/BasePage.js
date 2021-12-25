import { Selector, t } from "testcafe";
class BasePage {

    async waitfor(milliseconds){
        await t.wait(milliseconds)
    }
    async setTestSpeed(speedLevel){
        await t.setTestSpeed(speedLevel)
    }
}
export default BasePage