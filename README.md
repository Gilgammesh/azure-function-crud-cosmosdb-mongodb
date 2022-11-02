# Azure Function CosmosDB MongoDB CRUD

Azure Function with CRUD for storage data in CosmosDB MongoDB for User entity.

## Requirements

> [Azure Account](https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=8e0e8db5-b713-4e91-98e6-470fed0aa4c2&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DTAOn8Ft3XawiJ4KQVKRInNuwXfeJd2pTvTEqBJEaRinCm0lUSl-qU5WH9tU5c8XQWmwBUdCDuCLHhcLw83hfUoX-t59Er8kTjm0G_aKKMHQoLS1llcYxf4axX-yu0G5FO4pRhSFhE4-kwCGHKe-7gpxtT9NZQ8PJZnMkeovpLIG5VY88Ify3J6B9fIbLVrZwu05IodfoTFr0pbLLINEYo9FY51icVZOvif0jAgZZZvICC9QppcDm3BaH-mqMG8jABa8OeoisyAJR-DWpTIvh-UnQdEuNJaXn57Q2eSLAXGjy-t0DWPNX8NhhU_PULSE3nu3A676mHVipxUhZQkx1IdmYHKgdBOuB4pgEuPSDmAwn8-O-GYW5e7oBylJ2herKWG__Ad1O5-yn9bHNGsxUpzONGy9oL6JES6XsGk2k2vOUDjESUwOTBy7_2HSbmC9xWoESk3raKjNGqSe8W2WiFKVd4_JV0GEDLGGuS4hehYjephcgx3m1ht_DsMSod_ZgsU8Ve4e0auHoc5VQuFYE9qsICgsaJFeakNLfvhC5cZc&response_mode=form_post&nonce=638029724089700364.NTE4ZDI4OGQtNzc4ZC00MTk4LTg3OTYtMzExYzViNzE3YjAyOTkxZDg4YWUtMTM5Ni00MGViLTgxYTMtMWVhMjBhNzEzYzBk&redirect_uri=https%3A%2F%2Fsignup.azure.com%2Fapi%2Fuser%2Flogin&max_age=86400&post_logout_redirect_uri=https%3A%2F%2Fsignup.azure.com%2Fsignup%3Foffer%3Dms-azr-0044p%26appId%3D102%26ref%3Dazureplat-generic%26redirectURL%3Dhttps%3A%2F%2Fazure.microsoft.com%2Fes-es%2Fget-started%2Fwelcome-to-azure%2F%26l%3Des-es%26correlationId%3D6cd052c688c64de88250d4e97a828d77&x-client-SKU=ID_NET472&x-client-ver=6.17.0.0)

> [Nodejs](https://nodejs.org/download/release/v16.17.1/) (version 16.x)

> [VsCode](https://code.visualstudio.com/)

> Extensions VsCode:
>
> - [Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)
> - [Azure Resources](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureresourcegroups)
> - [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
> - [Azure Databases](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb)

## Environment variables

### Local
Copy the file `local.settings.example.json` and rename to `local.settings.json`

Edit file `local.settings.example.json`

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "CosmosDbConnectionString": "uri_azure_cosmosdb_mongodb"
  }
}
```

### Azure Portal

In function app 

Replace the value of `CosmosDbConnectionString` with Connection String from the database in Azure Portal.

## Run Project

### Install dependencies

```sh
npm install
```  

```sh
npm install -D
```

### Start locally

Press F5, they start and deploy locally

```shj
Functions:

        user: [GET,POST,PUT,DELETE] http://localhost:7071/api/user
```