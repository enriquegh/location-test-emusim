import { expect } from 'chai';

describe("Walmart Location Test", ()=> {
    it("should set location and check its correct", () => {

        browser.getCurrentPackage();
        browser.getCurrentActivity();
        browser.getPageSource();

        let el1 = $('android.widget.Button')

        browser.waitUntil(() => {
            return el1.isDisplayed() && el1.isEnabled()
        }, 5000, "expected button to be present")

        el1.click()

        // browser.getPageSource()

        // var myLocation = browser.getGeoLocation();
        // console.log(`location is ${myLocation}`);
        browser.setGeoLocation({latitude: 45.5209, longitude: -123.0624, altitude: 10});
        browser.pause(10000)
        var myLocation = browser.getGeoLocation();
        console.log(`location now is ${myLocation}`);

        let hamburgerBtn = $('android.widget.ImageButton')

        browser.waitUntil(() => {
            return hamburgerBtn.isDisplayed() && hamburgerBtn.isEnabled()
        }, 5000, "expected hamburger button to be present")

        hamburgerBtn.click()
        browser.getPageSource()

        browser.touchPerform([{ "action": "press", "options": { "y": 828, "x": 384 } }, { "action": "wait", "options": { "ms": 3000 } }, { "action": "moveTo", "options": { "y": 236, "x": 384 } }, { "action": "release", "options": {} }])

        // browser.getPageSource()

        browser.touchPerform([{ "action": "press", "options": { "y": 828, "x": 384 } }, { "action": "wait", "options": { "ms": 3000 } }, { "action": "moveTo", "options": { "y": 236, "x": 384 } }, { "action": "release", "options": {} }])

        // browser.getPageSource()

        let selector = 'new UiSelector().text("Store Finder")'
        let storeFinderBtn = $(`android=${selector}`)

        browser.waitUntil(() => {
            return storeFinderBtn.isDisplayed() && storeFinderBtn.isEnabled()
        }, 5000, "expected store finder button to be present")

        storeFinderBtn.click();

        browser.getPageSource();
        let allowBtn = $('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_allow_button")')

        let isLocationBtnPresent = browser.waitUntil(() => {
            return allowBtn.isDisplayed() && allowBtn.isEnabled()
        }, 5000, "expected allowBtn to be present")

        if (isLocationBtnPresent) {
            allowBtn.click()
        }
        

        let zipCode = $('android=new UiSelector().resourceId("com.walmart.android:id/store_finder_current_location_title")')
        
        let zipCodeText = zipCode.getText()

        expect(zipCodeText).to.be.equal('97113')

    })
})


