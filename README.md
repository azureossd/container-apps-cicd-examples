# container-apps-cicd-examples
Examples of using CI/CD with Container Apps

`ado` prefixed folders contains a `.yaml` example for Azure DevOps, each folder is for a certain deployment aspect, eg.:
- `ado-from-source`: Uses `AzureContainerApps@1` to deploy with Oryx++ builder
- `ado-prebuilt-image`: Uses `AzureContainerApps@1` to deploy a prebuild image that resides in ACR
- `ado-with-az-cli`: Builds a Docker image on the pipeline and uses ADO AZ CLI task to deploy the image to the Container App
- `ado-with-dockerfile`: Uses `AzureContainerApps@1` to build the specified `Dockerfile` and deploy the image to the Container App

`gh-actions` prefixed folders contains a `.yaml` example for GitHub Actions, each folder is for a certain deployment aspect, eg.:
- `gh-actions-from-source`: Uses `container-apps-deploy-action@v1` to deploy with Oryx++ builder
- `gh-actions-prebuilt-image`: Uses `container-apps-deploy-action@v1` to deploy a prebuild image that resides in ACR
- `gh-actions-with-az-cli`: Builds a Docker image on the pipeline and uses the AZ CLI action to deploy the image to the Container App
- `gh-actions-with-dockerfile`: Uses `container-apps-deploy-action@v1` to build the specified `Dockerfile` and deploy the image to the Container App
