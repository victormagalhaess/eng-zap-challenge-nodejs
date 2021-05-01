**Obter imóveis elegíveis para o portal Zap**
----

* **URL**

  /api/v1/zap

* **Method:**

  `GET` 
  
*  **URL Params**

   **Required:**
 
   `page=[integer]`  
   `pageSize=[integer]`

* **Success Response:**

  * **Code:** 200  
    **Content:** 
    ```js
    [
        {
            "usableAreas": 3500,
            "listingType": "USED",
            "createdAt": "2016-11-16T04:14:02Z",
            "listingStatus": "ACTIVE",
            "id": "a0f9d9647551",
            "parkingSpaces": 1,
            "updatedAt": "2016-11-16T04:14:02Z",
            "owner": false,
            "images": [
                "url.com/jpg",
                "url.com/jpg",
                "url.com/jpg",
                "url.com/jpg",
                "url.com/jpg",
            ],
            "address": {
            "city": "",
            "neighborhood": "",
            "geoLocation": {
                "precision": "ROOFTOP",
                "location": {
                "lon": -46.716542,
                "lat": -23.502555
                }
            }
            },
            "bathrooms": 2,
            "bedrooms": 3,
            "pricingInfos": {
            "yearlyIptu": "0",
            "price": "900000",
            "businessType": "SALE",
            "monthlyCondoFee": "495"
        }
            
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST  
    **Content:** `Bad request`  
    **Cause:** This error happens when either page or pageSize params (that are required) aren't sent to the api

  OR

  * **Code:** 500 INTERNAL SERVER ERROR  
    **Content:** `Internal server error`  
    **Cause:** This error happens when an unexpected exception was throw during request, check api logs for more info

