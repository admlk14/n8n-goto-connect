![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# GoTo Connect Node (Non-Official) Documentation

## Authentication Setup
1. Create OAuth2 client via [GoTo Developer Portal](https://developer.goto.com/guides/Get%20Started/02_HOW_createClient/)
2. Configure credentials in n8n:
   - Client ID: `<your-client-id>`
   - Client Secret: `<your-client-secret>`

## Operations
| Endpoint | Method | Parameters |
|----------|--------|------------|
| /callhistorysubscriptions | POST | `url`, `eventTypes` |
| /callhistorysubscriptions | GET | - |

## Webhook Implementation

This structure follows n8n's recommended patterns while implementing GoTo Connect's specific API requirements [1][2]. Remember to implement proper error handling and pagination based on your use case requirements.
