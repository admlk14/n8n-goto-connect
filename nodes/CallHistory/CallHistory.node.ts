import { IExecuteFunctions } from 'n8n-core';
import { 
  INodeType,
  INodeTypeDescription,
  IWebhookFunctions,
  IWebhookResponseData,
} from 'n8n-workflow';
import { createSubscription } from './actions';

export class GoToConnectCallHistory implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'GoTo Connect Call History',
    name: 'goToConnectCallHistory',
    icon: 'file:goto.svg',
    group: ['transform'],
    version: 1,
    description: 'Manage GoTo Connect call history subscriptions',
    credentials: [{ 
      name: 'goToConnectOAuth2Api', 
      required: true 
    }],
    inputs: ['main'],
    outputs: ['main'],
    properties: [{
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      options: [{
        name: 'Create Subscription',
        value: 'createSubscription',
      }, {
        name: 'List Subscriptions',
        value: 'listSubscriptions',
      }],
      default: 'createSubscription',
    }],
  };

  async execute(this: IExecuteFunctions) {
    const operation = this.getNodeParameter('operation', 0);
    
    switch(operation) {
      case 'createSubscription':
        return createSubscription.execute(this);
      default:
        throw new Error('Operation not supported');
    }
  }
}
