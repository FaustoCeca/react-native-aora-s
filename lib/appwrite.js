export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io',
    platform: 'com.fausto.aora',
    projectId: '661c9c76a3bd1eefd994',
    databaseId: '661c9d609254069f152c',
    userCollectionId: '661c9d75b162c4cda4ba',
    videoCollectionId: '661c9d94a0fd04dcfb8e',
    storageId: '661c9eae01ec78876310'
}

import { Account, Client, ID } from 'react-native-appwrite';
// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}