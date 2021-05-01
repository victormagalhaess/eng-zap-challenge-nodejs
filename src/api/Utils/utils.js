import constants from "../Constants/constants.js";

export const checkCommonRealtyValidity = (usableAreas, lon, lat) => {
  return usableAreas != 0 && lon != 0 && lat != 0;
};

export const isRealtyInsideZapBoundingBox = (lon, lat) => {
  return (
    lat <= constants.boundingBox.maxlat &&
    lat >= constants.boundingBox.minlat &&
    lon <= constants.boundingBox.maxlon &&
    lon >= constants.boundingBox.minlon
  );
};

export const paginate = (filteredRealty, page, pageSize) => {
  return filteredRealty.slice((page - 1) * pageSize, page * pageSize);
};

export const assembleResponse = (page, pageSize, totalCount, listings) => {
  const response = {
    pageNumber: page,
    pageSize: pageSize,
    totalCount: totalCount,
    listings: listings,
  };
  return response;
};
