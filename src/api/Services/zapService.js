import realtySingleton from "./realtySingleton.js";
import * as utils from "../Utils/index.js";
import constants from "../Constants/index.js";

export const findAllZapRealties = () => {
  const realties = realtySingleton.realties;
  const zapRealties = realties.filter((realty) => {
    return validateAllZapRequesites(realty);
  });
  return zapRealties;
};

const validateAllZapRequesites = (realty) => {
  const lat = realty.address.geoLocation.location.lon;
  const lon = realty.address.geoLocation.location.lon;
  const usableAreas = realty.usableAreas;
  const price = realty.pricingInfos.price;
  const businessType = realty.pricingInfos.businessType;

  let passedOnTypeCheck = true;

  if (businessType === "RENTAL") {
    passedOnTypeCheck = checkZapRentRequesites(price);
  } else if (businessType === "SALE") {
    passedOnTypeCheck = checkZapSaleRequesites(usableAreas, price, lat, lon);
  }

  return utils.checkCommonRealtyValidity(usableAreas, lat, lon) && passedOnTypeCheck;
};

const checkZapSaleRequesites = (usableAreas, price, lat, lon) => {
  let usableAreaCheck = true;
  if (utils.isRealtyInsideZapBoundingBox(lon, lat)) {
    usableAreaCheck = usableAreas > constants.zap.minUsableAreas * 0.9;
  } else {
    usableAreaCheck = usableAreas > constants.zap.minUsableAreas;
  }
  return price >= constants.zap.minSale && usableAreaCheck;
};

const checkZapRentRequesites = (price) => {
  return price >= constants.zap.minRent;
};
