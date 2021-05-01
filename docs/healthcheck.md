## **Verificar o status da execução da api**

- **URL**

  /api/v1/healthcheck

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200  
    **Content:** `Ok`

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR  
    **Content:** `Internal server error`  
    **Cause:** This error happens when an unexpected exception was throw during request, check api logs for more info
