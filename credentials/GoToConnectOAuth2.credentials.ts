import { 
  ICredentialType,
  IAuthenticateGeneric,
  INodeProperties 
} from 'n8n-workflow';

export class GoToConnectOAuth2Api implements ICredentialType {
  name = 'goToConnectOAuth2Api';
  displayName = 'GoTo Connect OAuth2 API';
  properties: INodeProperties[] = [{
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
  }];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '=Bearer {{$credentials.accessToken}}',
      },
    },
  };
}
