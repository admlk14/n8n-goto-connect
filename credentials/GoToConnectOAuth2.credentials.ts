import { 
  ICredentialType,
  IOAuth2Options,
} from 'n8n-workflow';

export class GoToConnectOAuth2Api implements ICredentialType {
  name = 'goToConnectOAuth2Api';
  extends = ['oAuth2Api'];
  displayName = 'GoTo Connect OAuth2 API';
  documentationUrl = 'https://developer.goto.com/guides/Get%20Started/02_HOW_createClient/';

  properties: ICredentialProperties[] = [{
    displayName: 'Client ID',
    name: 'clientId',
    type: 'string',
    default: '',
  }, {
    displayName: 'Client Secret',
    name: 'clientSecret',
    type: 'string',
    typeOptions: { password: true },
    default: '',
  }, {
    displayName: 'Scope',
    name: 'scope',
    type: 'hidden',
    default:  'GoToConnect',          // Base scope
          'webrtc.v1.write',      // Click-to-call
      'call-events.v1.read',  // Call reports
         'presence.v1.read'      // Presence status
  }];

  authenticate: IOAuth2Options = {
    authorizationUrl: 'https://api.goto.com/oauth/v2/authorize',
    tokenUrl: 'https://api.goto.com/oauth/v2/token',
    authType: 'body', // Verify auth method with GoTo docs [1]
    grantType: 'authorizationCode',
  };
}
