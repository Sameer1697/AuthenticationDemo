import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/bfbb9a2b-6d99-4e78-b3c7-95005d555c8b',
    clientId: 'b77c11d0-89b1-4ba5-b0e6-84646e4d07b2',
    redirectUri: 'https://localhost:3000/callback',
    //redirectUri: 'https://oci-bisa-d01:7171/callback'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
// Authentication Parameters
const authenticationParameters = {
  scopes: [
    'user.read'
  ]
}
 
// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};