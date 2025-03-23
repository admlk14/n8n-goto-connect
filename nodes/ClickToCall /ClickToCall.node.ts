async execute() {
  const operation = this.getNodeParameter('operation');
  
  switch(operation) {
    case 'createDevice':
      return this.createWebRTCDevice();
    case 'makeCall':
      return this.initiateCall();
  }
}

private async createWebRTCDevice() {
  const response = await this.helpers.request({
    method: 'POST',
    url: 'https://api.goto.com/web-calls/v1/devices',
    body: {
      clientInformation: {
        deviceId: this.getNodeParameter('deviceId'),
        appId: 'n8n-integration'
      }
    }
  });
  
  this.setDeviceId(response.deviceId);
}
