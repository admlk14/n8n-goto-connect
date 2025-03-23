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
