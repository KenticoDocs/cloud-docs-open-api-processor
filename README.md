![master](https://github.com/KenticoDocs/kontent-docs-open-api-processor/actions/workflows/master_kcd-open-api-processor-live-master.yml/badge.svg)
![develop](https://github.com/KenticoDocs/kontent-docs-open-api-processor/actions/workflows/develop_kcd-open-api-processor-live-dev.yml/badge.svg)

# Kentico Kontent Documentation - OpenAPI Processor

Backend function for Kentico Kontent documentation portal, which utilizes [Kentico Kontent](https://kontent.ai/) as a source of its data.

This service is responsible for creating HTML documents that represent API reference pages on the [documentation portal](https://docs.kontent.ai/), and passing them forward using [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/).

It responds to events triggered by the blob storage, after the [Reference Preprocessor](https://github.com/KenticoDocs/kontent-docs-reference-preprocessor) creates a blob with the preprocessed data. The OpenAPI Processor then processes the data into HTML pages that are then saved in the Blob Storage.

## Overview

1. This project is a TypeScript Azure Functions application.
2. It is subscribed to an Azure [Event Grid](https://azure.microsoft.com/en-us/services/event-grid/) topic and listens for events. Each event contains information about the content that was changed.
3. After receiving an event, it fetches the content from the Blob storage.
4. The fetched content is first procesed into a JSON object, that is supposed to satisfy [OpenAPI Specification 3.0.2](https://github.com/OAI/OpenAPI-Specification) format. The JSON is also validated using the [openapi-schema-validator](https://www.npmjs.com/package/openapi-schema-validator) package.
5. The created JSON object is then processed by a forked [Redoc package](https://www.npmjs.com/package/kentico-kontent-docs-redoc). Redoc generates an HTML file that represents a single API Reference page.
6. Finally, a blob with the generated HTML is stored to an Azure Blob Storage.

## Setup

### Prerequisites

1. Node 10 (+yarn) installed
2. Visual Studio Code installed

### Instructions

1. Open Visual Studio Code and install the prerequisites according to the [following steps](https://code.visualstudio.com/tutorials/functions-extension/getting-started).
2. Log in to Azure using the Azure Functions extension tab.
3. Clone the project repository and open it in Visual Studio Code.
4. Run `yarn install` in the terminal.
5. Set the required keys.
6. Deploy to Azure using Azure Functions extension tab, or run locally by pressing `Ctrl + F5` in Visual Studio Code.

#### Required Keys

Use the local.settings.json.template for a quick setup.

* `Azure.StorageKey` - Azure Storage key
* `Azure.StorageAccountName` - Azure Storage account name
* `Azure.ContainerName` - Azure Storage container name - for HTML API Reference pages
* `Azure.SpecificationContainerName` - Azure Storage container name - for JSON API Reference specifications
* `EventGrid.Notification.Key` - Key for notification eventGrid topic
* `EventGrid.Notification.Endpoint` - Url for notification eventGrid topic

## Running tests

* Run `yarn run test` in the terminal.

## Local testing

For local testing without EventGrid:

* Install and run [Windows Azure Storage Emulator 5.10](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator#get-the-storage-emulator).
* Omit setting the `EventGrid.*` keys in local.settings.json, you don't need these.
* In `.\kcd-open-api-processor\index.ts`, change the following:
  * Comment out lines 31 to 33, you don't need them.
  * Change `Configuration.set(isTest)` to `Configuration.set(false)`.
  * In the input parameters of the getBlobFromStorage function, use your own variable for `url` instead of `event.data.url`. Your URL must lead to an output JSON file from the [preprocessor](https://github.com/KenticoDocs/kontent-docs-reference-preprocessor) such as `https://<StorageAccountName>.blob.core.windows.net/<ReferenceDataContainerName/<ApiName>`.
* In `.\kcd-open-api-processor\function.json`, replace the existing `eventGridTrigger` binding with an [`httpTrigger`](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=csharp#customize-the-http-endpoint) so that the Azure Function responds to GET requests instead of eventGrid events.

Example `httpTrigger` binding.

```json
{
    "type": "httpTrigger",
    "name": "req",
    "direction": "in",
    "methods": [ "get" ]
}
```

After making the changes:

1. Press F5 to run the Azure Function in Visual Studio Code.
   * You should see a line like this `kcd-open-api-processor: [GET] http://localhost:7071/api/kcd-open-api-processor`.
2. Send a GET request to the function URL in your terminal.

The function will output two files (HTML + OAS JSON) in two remote locations, which depend on the values you specified for `Azure.ContainerName` and `Azure.SpecificationContainerName`. The HTML file will be in `ContainerName` while the JSON will be in `SpecificationContainerName`. For example, you'll find the HTML under a URL such as `https://<StorageAccountName>.blob.core.windows.net/<ContainerName/<ApiName>.html`.

## How To Contribute

Feel free to open a new issue where you describe your proposed changes, or even create a new pull request from your branch with proposed changes.

## Licence

The source codes is published under MIT licence.
