import vivaRealServiceMock from "./mocks/vivaRealService.mock.js";
import * as vivaRealService from "../vivaRealService.js";

describe("Testing vivaRealService", () => {
  describe("Testing checkVivaRealSaleRequsites", () => {
    it("Should validate the price", () => {
      const trueResult = vivaRealService.checkVivaRealSaleRequesites(50000);
      expect(trueResult).toEqual(true);
      const falseResult = vivaRealService.checkVivaRealSaleRequesites(1000000);
      expect(falseResult).toEqual(false);
    });

    describe("Testing checkVivaRealRentRequesites", () => {
      it("All asserts should pass", () => {
        vivaRealServiceMock.vivaRealRentRequesitesMock.forEach((realty) => {
          let result = vivaRealService.checkVivaRealRentRequesites(
            realty.price,
            realty.monthlyCondoFee,
            realty.lon,
            realty.lat
          );
          expect(result).toEqual(realty.shouldPass);
        });
      });
    });
  });

  describe("Testing validateAllVivaRealRequesites", () => {
    it("All asserts should pass", () => {
      vivaRealServiceMock.realties.forEach((realty) => {
        let result = vivaRealService.validateAllVivaRealRequesites(realty);
        expect(result).toEqual(realty.shouldPass);
      });
    });
  });
});
