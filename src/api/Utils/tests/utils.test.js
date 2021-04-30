import * as utils from "../utils.js";

describe("Testing utils", () => {
  describe("Testing checkCommonRealtyValidity", () => {
    it("Should return true", () => {
      const result = utils.checkCommonRealtyValidity(1, 1, 1);
      expect(result).toEqual(true);
    });
    it("Should return false (error on usableAreas)", () => {
      const result = utils.checkCommonRealtyValidity(0, 1, 1);
      expect(result).toEqual(false);
    });
    it("Should return false (error on coordinates)", () => {
      const result = utils.checkCommonRealtyValidity(1, 0, 0);
      expect(result).toEqual(false);
    });
  });

  describe("Testing isRealtyInsideZapBoundingBox", () => {
    it("Should return true", () => {
      const insideZapBoundingBoxCoordinates = { lon: -46.641146, lat: -23.546686 };
      const result = utils.isRealtyInsideZapBoundingBox(
        insideZapBoundingBoxCoordinates.lon,
        insideZapBoundingBoxCoordinates.lat
      );
      expect(result).toEqual(true);
    });
    it("Should return false", () => {
      const outsideZapBoundingBoxCoordinates = { lon: -44.0691826, lat: -20.0274474 };
      const result = utils.isRealtyInsideZapBoundingBox(
        outsideZapBoundingBoxCoordinates.lon,
        outsideZapBoundingBoxCoordinates.lat
      );
      expect(result).toEqual(false);
    });
  });

  describe("Testing paginate", () => {
    it("The paginated arrays should match their expected counterpart", () => {
      const preSlicedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      const expectedArrays = [
        [1],
        [1, 2, 3],
        [13, 14, 15, 16],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        [16],
      ];
      const resultArray = [];
      resultArray.push(utils.paginate(preSlicedArray, 1, 1));
      resultArray.push(utils.paginate(preSlicedArray, 1, 3));
      resultArray.push(utils.paginate(preSlicedArray, 4, 4));
      resultArray.push(utils.paginate(preSlicedArray, 1, 300));
      resultArray.push(utils.paginate(preSlicedArray, 16, 1));

      [...Array(expectedArrays.length).keys()].forEach((index) => {
        expect(expectedArrays[index]).toEqual(resultArray[index]);
      });
    });
  });
});
