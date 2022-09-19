# Getting Started

::: tip
Earn tokens by running code checks and building container images.
Or, you can just use other Nosana nodes to run your pipelines whenever you want!
:::

## Example

```yaml
commands:
  - npm ci
  - npm run lint
# docker image to run above commands
image: node:16
```
