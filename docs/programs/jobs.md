# Nosana Jobs <Badge type="tip" text="mainnet" vertical="middle" />

## Program Information

The jobs program allows users to post jobs and earn tokens by running jobs.

| Info            | Description                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| Type            | Solana Program                                                                                                                   |
| Source Code     | [GitHub](https://github.com/nosana-ci/nosana-programs)                                                                           |
| Instructions    | `8`                                                                                                                              |
| Domain          | `nosana-jobs.sol`                                                                                                                |
| Program Address | [`nosJhNRqr2bc9g1nfGDcXXTXvYUmxD4cVwy2pMWhrYM`](https://explorer.solana.com/address/nosJhNRqr2bc9g1nfGDcXXTXvYUmxD4cVwy2pMWhrYM) |
| APR             | [✅](https://www.apr.dev/program/nosJhNRqr2bc9g1nfGDcXXTXvYUmxD4cVwy2pMWhrYM)                                                     |

## Diagram

![](/images/jobs.svg)

## Instructions

There is a total of 8 instructions

### Init

`init()` initializes a nodes queue and a associated token vault for token deposits.

### Create

`create()` creates a Job with it's required data.
When there is a node ready in the queue it will immediately start running.

### Close

`close()` closes an existing job account.
When the job was still queued the tokens will be returned to the user.

### Enter

With `enter()` a node enters the node queue.

A few requirements are enforced:

- A node needs to have a minimum stake in Nosana Staking.
- A node needs to hold an official Nosana NFT.
- A node can only enter the queue once

### Exit

With `exit()` a node exits the node queue.

### Claim

With `claim()` a node can claim a job that is in the queued state.

To find unclaimed jobs with anchor:

```javascript
const jobs = await this.jobsProgram.account.jobAccount.all([
  {
    memcmp: {
      /** offset into program account data to start comparison */
      offset: 96,
      /** data to match, as base-58 encoded string and limited to less than 129 bytes */
      bytes: this.accounts.systemProgram.toBase58(),
    },
  },
]);
```

### Cancel

With `cancel()` a node can stop running a job that it has started.

### Finish

With `finish()` a node can can post the result for a job it has finished, and me reimbursed for the work.
