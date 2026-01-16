# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
Currently, the API does not require authentication (for demonstration purposes).

## Endpoints

### Health Check

**GET** `/health`

Check the health status of the API.

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2026-01-16T12:00:00.000Z"
  },
  "timestamp": "2026-01-16T12:00:00.000Z"
}
```

---

### Users

#### Get All Users

**GET** `/users`

Retrieve a list of all users.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ],
  "timestamp": "2026-01-16T12:00:00.000Z"
}
```

#### Get User by ID

**GET** `/users/:id`

Retrieve a specific user by their ID.

**Parameters:**
- `id` (number) - User ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "timestamp": "2026-01-16T12:00:00.000Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "data": null,
  "error": "User not found",
  "timestamp": "2026-01-16T12:00:00.000Z"
}
```

#### Create User

**POST** `/users`

Create a new user.

**Request Body:**
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  "timestamp": "2026-01-16T12:00:00.000Z"
}
```

**Error Response (Invalid Email):**
```json
{
  "success": false,
  "data": null,
  "error": "Invalid email",
  "timestamp": "2026-01-16T12:00:00.000Z"
}
```

## Response Format

All API responses follow this standard format:

```typescript
{
  success: boolean;      // Whether the request was successful
  data: T;               // The response data
  error?: string;        // Error message (only present on failure)
  timestamp: string;     // ISO 8601 timestamp
}
```

## Error Codes

- `400` - Bad Request (invalid input)
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

## Rate Limiting

Currently not implemented.

## CORS

CORS is enabled for all origins in development mode.
