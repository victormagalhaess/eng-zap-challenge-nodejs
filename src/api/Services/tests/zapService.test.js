import zapServiceMock from "./mocks/zapService.mock.js";
import * as zapService from "../zapService.js";

describe("Testing zapService", () => {
  describe("Testing checkZapSaleRequsites", () => {
    it("All asserts should pass", () => {
      zapServiceMock.zapServiceSaleRequisiteMock.forEach((realty) => {
        let result = zapService.checkZapSaleRequesites(
          realty.usableAreas,
          realty.price,
          realty.lat,
          realty.lon
        );
        expect(result).toEqual(realty.shouldPass);
      });
    });

    describe("Testing checkZapRentRequsites", () => {
      it("Should validate the price", () => {
        const trueResult = zapService.checkZapRentRequesites(5000);
        expect(trueResult).toEqual(true);
        const falseResult = zapService.checkZapRentRequesites(1000);
        expect(falseResult).toEqual(false);
      });
    });

    describe("Testing validateAllZapRequesites", () => {
      it("All asserts should pass", () => {
        zapServiceMock.realties.forEach((realty) => {
          let result = zapService.validateAllZapRequesites(realty);
          expect(result).toEqual(realty.shouldPass);
        });
      });
    });
  });
});
