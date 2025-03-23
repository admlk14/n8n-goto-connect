export const operations = [
  { 
    name: 'List Accounts',
    value: 'listAccounts',
    api: '/admin/rest/v1/me' 
  },
  {
    name: 'List Users',
    value: 'listUsers',
    api: '/users/v1/users?accountKey={accountKey}',
    params: ['accountKey', 'pageSize', 'pageToken']
  }
];

// Sample response handling
processUsers(response) {
  return response.items.map(user => ({
    id: user.userKey,
    name: `${user.firstName} ${user.lastName}`,
    lines: user.lines.map(line => ({
      id: line.id,
      number: line.number
    }))
  }));
}
