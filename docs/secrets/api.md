# Secrets API

Welcome to the Nosana Secrets API documentation.


##### Nosana Secret Manager on Solana Mainnet

`https://secrets.nosana.ci`

##### Nosana Secret Manager on Solana Devnet

`https://secrets.k8s.dev.nos.ci`

## Authentication

You can use the authentication endpoint to get a JWT token to access secrets as a node or to store secrets
as a project by adding the following header to your request:

``` headers
Authorization: Bearer your-jwt-token-here
```

### Endpoint

``` sh
POST /login
```

### Parameters

| Name      | Type    | Description                                                                                                     | Required |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------|----------|
| address   | string  | Your Solana public key                                                                                          | Required |
| address   | string  | Your signature for the message `nosana_secret_${timestamp}`                                                     | Required |
| timestamp | integer | The unix timestamp that you signed                                                                              | Required |
| job       | string  | The public key of the job you want to retrieve secrets for. Make sure the node (`address`) has this job claimed | Optional |

### Response

``` json
Status: 200

{
  "token": "your-jwt-token-that-you-can-to-authenticate"
}
```

## Retrieve secrets

Use this endpoint to retrieve your own secrets or the secrets for a specific job.
Your JWT token will decide what secrets you can access.
Either the `address` parameter (your own secrets) from the authentication workflow or the `job` parameter
(secrets for a specific job that you claimed) decide the scope of your secrets

### Endpoint

``` sh
GET /secrets
```

### Response

``` json
Status: 200

{
  "secret-key": "secret value",
  "secret-key-2": "secret value 2"
}
```

## Add/Update secrets

Add or update your own secrets.
Make sure you requested a JWT token at the authorization endpoint without specifing a `job` parameter.
That way you get a token with access to your own secrets (mainly useful for projects posting jobs)

### Endpoint

``` sh
POST /secrets
```

### Parameters

| Name      | Type         | Description                                                                                                                                                    | Required |
|-----------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| secrets   | JSON object  | JSON object where the keys are the secret names and the values the secret values. If a secret key already exists, it will overwrite the currently stored value | Required |

### Response

``` json
Status: 200

OK
```

## Delete secrets

Delete your own secrets. Make sure you requested a JWT token at the authorization endpoint without
specifing a `job` parameter.
That way you get a token with access to your own secrets (mainly useful for projects posting jobs)

### Endpoint

``` sh
DELETE /secrets
```

### Parameters

| Name      | Type         | Description                                    | Required |
|-----------|--------------|------------------------------------------------|----------|
| key       | string       | name of the secret key that you want to delete | Required |

### Response

``` json
Status: 200

OK
```
