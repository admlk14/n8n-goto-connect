webhookMethods = {
  default: {
    async checkExists() { /* Check existing subscription */ },
    async create() {
      const webhookUrl = this.getNodeWebhookUrl('default');
      
      await this.helpers.request({
        method: 'POST',
        url: 'https://api.goto.com/call-events/v1/subscriptions',
        body: {
          notificationUrl: webhookUrl,
          eventTypes: ['CALL_STARTED', 'CALL_ENDED']
        }
      });
    },
    async delete() { /* Delete subscription */ }
  }
};
