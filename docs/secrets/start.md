# Getting Started

Welcome to the Nosana secrets documentation.
Here you will learn everything that you need to know to get up and started with Nosana Secrets.

## Introduction

Projects that are posting jobs/pipelines to the Nosana Network might want to share secrets that are needed
to run their job with the Nodes that are running their jobs.
This can now be achieved with the **Nosana Secret Manager**.
Projects can securely store their secrets to a Secret Manager
(hosted by Nosana, or you can [host your own](#host-your-own-secret-manager))
and specify per job which secrets the node that will run that job can retrieve.

## How does it work?

### Authentication
Everyone can store secrets (key/value pairs) in the secret manager under the scope of their own solana public key,
as long as you can prove that you own that solana address.
You can prove this by signing a custom message (`nosana_secret_${timestamp}`).
Make sure that the timestamp in the message is not older than **60 seconds**.
With this signature you can [retrieve a JWT token](api#authentication) to manage your secrets.

### Adding secrets to your jobs

After you have added secrets to a secret manager you can add them to your job IPFS JSON file to give the node
that is running your job access to these secrets:

``` javascript
{
  "type": "Github",
  "state": {
    "nosana/secrets": ["pipeline1-ssh-key"]
  },
  "url": "https://github.com/nosana-ci/secrets.git",
  "commit": "c47115da3e1dbb3666784ab3f0a6af316acc4a77",
  "pipeline": "pipeline1-yml-goes-here"
}
```

Nodes that are running jobs can access the secret keys specified in the `secrets` array in this file.
Nodes can get read-only access to these secrets by authentication to the secret manager with an
additional `job` parameter during authentication.

If you are using the Nosana Platform with the Github App integration, then you can just specify these secrets
in your `.nosana-ci.yml` file and the Nosana Platform will automatically retrieve the secret keys from this YAML
file and put them in your Job IPFS JSON file.

Here an example how you would use the secrets in your [`.nosana-ci.yml`](pipelines/specification) file:

``` yml
jobs:
  - name: test-secret-manager
    environment:
      SECRET_VALUE:
        type: nosana/secret
        endpoint: https://secrets.nosana.ci
        value: pipeline1-ssh-key
    commands:
      - env
      - sh -c 'echo test secret manager value $SECRET_VALUE'
```

The Nosana Node will try to authenticate to the secret manager endpoint and replace the value with
the secret value retrieved from the secret manager.

### Reading secrets from job results

Once a job is finished the process above also works for job results, but the other way around:
a project can get read-only access to secrets of the node that completed the job.
The secrets that a project can access are defined in the Job Results IPFS JSON, similar to the example above:
``` javascript
{
  "finished-at":1672874282,
  "state":{
    "nosana/secrets":["4UBAqPAsopKPrTk6XnDYeT7PSPhNvdiNTzDXrEVrs6Zj/result"]
  },
  "results":[
    "nos/secret",
    "https://secrets.k8s.dev.nos.ci",
    "4UBAqPAsopKPrTk6XnDYeT7PSPhNvdiNTzDXrEVrs6Zj/result"
  ]
}
```
This allows jobs to communicate resuts secretly, which is needed for private repositories.

## API

The [API Specification](api) can be found in a dedicated part of the documentation.

## Nosana's Secret Managers

Nosana hosts 2 community versions of the Secret Manager, for users of the Nosana Network.

If you don't want to [host your own](#host-your-own-secret-manager) Secrets Manager,
you are free to use the publicly available one.

For transparency’s sake we've documented the setup.
We follow AWS's cloud best practices, and are open for suggestions and improvements.

The source code of the manager is [open source](https://github.com/nosana-ci/nosana-secrets).

| Purpose     | Endpoint                         |
|-------------|--------------------------------|
| Development | https://secrets.k8s.dev.nos.ci |
| Production  | https://secrets.nosana.ci      |

### Infrastructure

So Nosana hosts 2 different Secret Managers, in two different AWS accounts.

#### DocumentDB

Secrets are stored, encrypted, in an [AWS DocumentDB](https://aws.amazon.com/documentdb/) cluster.
Data is encrypted at rest, and encryption keys are rotated each week.
Nobody within Nosana has encryption/decryption right with these keys.
Only the secret manager application has that right.

#### Kubernetes

The secrets manager application is hosted in an autoscaling setup within an
AWS EKS Kubernetes cluster.
Firewall rules limit ingress and egress to only the necessary communications for the manager.
Hence, no other application in the cluster will be able to communicate with the manager.

#### Load Balancer

Finally, an AWS Application Loadbalancer routes incoming traffic to the managers.

### Networking

In terms of networking there are 3 subnets associated with the infrastructure.
These are:

- Public Subnet
- Private Subnet
- Database Subnet

#### Public Subnet

The application load balancer resides in a public subnet that can be reached over the internet
via an internet gateway. The loadbalancer can only communicate over port `443`, for encrypted
`HTTPS` communication.

#### Private Subnet

The Secrets Manager application resides in a private subnet in the EKS cluster,
and allows only incoming connections from the load balancer.

#### Database Subnet

Finally, the database lives in a database subnet with no internet connection.
It only allows incoming connections from the proxy.

## Host your own Secret Manager

Although Nosana is providing you with a very safe and secure way to store secrets in their hosted Secret Manager, you
can also decide to host your own Secret Manager!

You can find the source code of the secret manager here:<br>
https://github.com/nosana-ci/nosana-secrets

Currently, the following storage backends are supported by setting the `STORAGE_CONNECTION`
variable in the environment of the runtime of the Secret Manager application.

| Backend                                           | `STORAGE_CONNECTION`                                                  |
|--------------------------------------------------|-----------------------------------------------------------------------|
| [sqlite](https://www.sqlite.org/)                 | `sqlite://path/to/database.sqlite`                                    |
| [mongodb](https://www.mongodb.com/)               | `mongodb://user:pass@localhost:27017/dbname`                          |
| [documentdb](https://aws.amazon.com/documentdb/) | `mongodb://user:pass@my-db.docdb.amazonaws.com:27017/dbname?tls=true` |
| [postgresql](https://www.postgresql.org/)        | `postgresql://user:pass@localhost:5432/dbname`                        |
| [mysql](https://www.mysql.com/)                  | `mysql://user:pass@localhost:3306/dbname`                             |
| [redis](https://redis.io/)                       | `redis://user:pass@localhost:6379`                                    |

If you don't specify the environment variable `STORAGE_CONNECTION` string then it will default to `sqlite://db.sqlite`

You also need to make sure to set the `JWT_SECRET` environment variable to a random secret string.

### Docker

You can also run the Nosana Secret Manager in a docker container:

``` sh
docker run -d --name nosana-secrets          \
  -e STORAGE_CONNECTION='sqlite://db.sqlite' \
  -e JWT_SECRET='your-random-secret'         \
  -p 4124:4124                               \
  nosana/nosana-secrets:latest
```

Then verify if the secret manager is running by going to `http://localhost:4124`

The container image is publicly available under:
https://hub.docker.com/r/nosana/nosana-secrets
