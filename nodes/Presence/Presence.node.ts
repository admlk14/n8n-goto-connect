properties: [
  {
    displayName: 'Update Interval',
    name: 'interval',
    type: 'number',
    default: 300,
    description: 'Polling interval in seconds'
  }
];

async poll(this: IPollFunctions) {
  const presenceData = await this.helpers.request({
    url: 'https://api.goto.com/presence/v1/users',
    qs: {
      userIds: this.getNodeParameter('userIds')
    }
  });
  
  return presenceData.map(user => ({
    json: {
      userId: user.id,
      status: user.presenceStatus,
      lastActive: user.lastActiveTime
    }
  }));
}
