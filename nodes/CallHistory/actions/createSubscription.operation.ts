import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData } from 'n8n-workflow';

export const description = {
  displayName: 'Create Call Subscription',
  name: 'createSubscription',
  value: 'createSubscription',
};

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
  const items = this.getInputData();
  const responseData = await this.helpers.request({
    method: 'POST',
    url: 'https://api.goto.com/connect/v1/callhistorysubscriptions',
    body: {
      url: this.getNodeParameter('webhookUrl', 0),
      eventTypes: ['CALL_STARTED', 'CALL_COMPLETED']
    },
  });

  return [this.helpers.returnJsonArray(responseData)];
}
