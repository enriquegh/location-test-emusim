import { expect } from 'chai';

describe("Walmart Location Test", ()=> {
    it("should set location and check its correct", () => {

        let el1 = $('android=new UiSelector().resourceId("com.google.android.gms.location.sample.locationupdates:id/start_updates_button")')
        el1.click();

        var myLocation = browser.getGeoLocation();
        console.log(`location is ${myLocation}`);
        browser.setGeoLocation({latitude: 17.003, longitude: 56.033, altitude: 1});
        browser.pause(10000)
        myLocation = browser.getGeoLocation();
        console.log(`location now is ${myLocation}`);


        expect(myLocation.latitude).to.be.closeTo(17.002, 1)
        expect(myLocation.longitude).to.be.closeTo(56.033, 6)

    })
})


