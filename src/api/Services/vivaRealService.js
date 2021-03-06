import realtySingleton from "./realtySingleton.js";
import * as utils from "../Utils/utils.js";
import constants from "../Constants/constants.js";

export const findAllVivaRealRealties = (page, pageSize) => {
  const realties = realtySingleton.realties;
  const vivaRealRealties = realties.filter((realty) => {
    return validateAllVivaRealRequesites(realty);
  });
  const paginatedResult = utils.paginate(vivaRealRealties, page, pageSize);
  const assembledResponse = utils.assembleResponse(
    page,
    pageSize,
    vivaRealRealties.length,
    paginatedResult
  );
  return assembledResponse;
};

export const validateAllVivaRealRequesites = (realty) => {
  try {
    const lat = realty.address.geoLocation.location.lon;
    const lon = realty.address.geoLocation.location.lon;
    const usableAreas = realty.usableAreas;
    const monthlyCondoFee = realty.pricingInfos.monthlyCondoFee;
    const price = realty.pricingInfos.price;
    const businessType = realty.pricingInfos.businessType;

    let passedOnTypeCheck = true;

    if (businessType === "RENTAL") {
      passedOnTypeCheck = checkVivaRealRentRequesites(price, monthlyCondoFee, lon, lat);
    } else if (businessType === "SALE") {
      passedOnTypeCheck = checkVivaRealSaleRequesites(price);
    }

    return utils.checkCommonRealtyValidity(usableAreas, lat, lon) && passedOnTypeCheck;
  } catch (err) {
    const errorMessage = `An error ocurred searching the required data: ${err}`;
    console.log(errorMessage);
    throw errorMessage;
  }
};

export const checkVivaRealSaleRequesites = (price) => {
  return price <= constants.vivaReal.maxSale;
};

export const checkVivaRealRentRequesites = (price, monthlyCondoFee, lon, lat) => {
  let condoFeePercentageCheck = true;
  if (utils.isRealtyInsideZapBoundingBox(lon, lat)) {
    condoFeePercentageCheck = monthlyCondoFee < 0.5 * price;
  } else {
    condoFeePercentageCheck = monthlyCondoFee < 0.3 * price;
  }
  return price <= constants.vivaReal.maxRent && condoFeePercentageCheck;
};
