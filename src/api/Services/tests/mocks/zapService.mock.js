const zapServiceMock = {
  zapServiceSaleRequisiteMock: [
    { price: 600000, usableAreas: 3501, lon: -44.0691826, lat: -20.0274474, shouldPass: true },
    { price: 600000, usableAreas: 3151, lon: -46.641146, lat: -23.546686, shouldPass: true },
    { price: 599999, usableAreas: 3501, lon: -44.0691826, lat: -20.0274474, shouldPass: false },
    { price: 600000, usableAreas: 3500, lon: -44.0691826, lat: -20.0274474, shouldPass: false },
    { price: 600000, usableAreas: 3150, lon: -46.641146, lat: -23.546686, shouldPass: false },
  ],
  realties: [
    {
      shouldPass: true,
      usableAreas: 3900,
      listingType: "USED",
      createdAt: "2016-11-16T04:14:02Z",
      listingStatus: "ACTIVE",
      id: "some-id",
      parkingSpaces: 1,
      updatedAt: "2016-11-16T04:14:02Z",
      owner: false,
      images: [
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id1.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id2.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id3.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id4.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id5.jpg",
      ],
      address: {
        city: "",
        neighborhood: "",
        geoLocation: {
          precision: "ROOFTOP",
          location: {
            lon: -46.716542,
            lat: -23.502555,
          },
        },
      },
      bathrooms: 2,
      bedrooms: 3,
      pricingInfos: {
        yearlyIptu: "0",
        price: "700000",
        businessType: "SALE",
        monthlyCondoFee: "495",
      },
    },
    {
      shouldPass: false,
      usableAreas: 3900,
      listingType: "USED",
      createdAt: "2017-04-22T18:39:31.138Z",
      listingStatus: "ACTIVE",
      id: "some-id-2",
      parkingSpaces: 1,
      updatedAt: "2017-04-22T18:39:31.138Z",
      owner: false,
      images: [
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id-2-1.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id-2-2.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id-2-3.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id-2-4.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id-2-5.jpg",
      ],
      address: {
        city: "",
        neighborhood: "",
        geoLocation: {
          precision: "ROOFTOP",
          location: {
            lon: -46.716542,
            lat: -23.502555,
          },
        },
      },
      bathrooms: 1,
      bedrooms: 2,
      pricingInfos: {
        yearlyIptu: "60",
        price: "276000",
        businessType: "SALE",
        monthlyCondoFee: "0",
      },
    },
    {
      shouldPass: true,
      usableAreas: 3900,
      listingType: "USED",
      createdAt: "2016-11-16T04:14:02Z",
      listingStatus: "ACTIVE",
      id: "some-id",
      parkingSpaces: 1,
      updatedAt: "2016-11-16T04:14:02Z",
      owner: false,
      images: [
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id1.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id2.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id3.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id4.jpg",
        "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/some-id5.jpg",
      ],
      address: {
        city: "",
        neighborhood: "",
        geoLocation: {
          precision: "ROOFTOP",
          location: {
            lon: -46.716542,
            lat: -23.502555,
          },
        },
      },
      bathrooms: 2,
      bedrooms: 3,
      pricingInfos: {
        yearlyIptu: "0",
        price: "5000",
        businessType: "RENTAL",
        monthlyCondoFee: "495",
      },
    },
  ],
};

export default zapServiceMock;
