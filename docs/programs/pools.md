# Nosana Pools <Badge type="warning" text="mainnet" vertical="middle" />

## Program Information

The jobs program allows users to post jobs and earn tokens by running jobs.

| Info            | Description                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| Type            | Solana Program                                                                                                                   |
| Source Code     | [GitHub](https://github.com/nosana-ci/nosana-programs)                                                                           |
| Instructions    | `4`                                                                                                                              |
| Domain          | `nosana-pools.sol`                                                                                                               |
| Program Address | [`nosPdZrfDzND1LAR28FLMDEATUPK53K8xbRBXAirevD`](https://explorer.solana.com/address/nosPdZrfDzND1LAR28FLMDEATUPK53K8xbRBXAirevD) |
| APR             | [✅](https://www.apr.dev/program/nosPdZrfDzND1LAR28FLMDEATUPK53K8xbRBXAirevD)                                                     |

## Instructions

### Open

The `open()` instruction lets you open a Nosana Pool. 

```typescript
const throwAwayKeypair = Keypair.generate();

let tx = await poolsProgram.methods
    .open(
      emission,
      startTime,
      claimType,
      closeable
    )
    .accounts({
        pool,
        vault,
        beneficiary,
        authority,
        mint,
        systemProgram,
        tokenProgram,
        rent
    })
    .signers([authority, throwAwayKeypair])
    .rpc();
```

### Claim Fee

The `claimFee()` instruction claims emissions from a Nosana Pool with claim type `1`, 
and adds these as rewards (fees) to the RewardsProgram.

```typescript
let tx = await poolsProgram.methods
    .claimFee()
    .accounts({
        vault,
        rewardsStats,
        rewardsVault,
        pool,
        authority,
        tokenProgram,
        rewardsProgram,
        systemProgram,
    })
    .signers([authority])
    .rpc()
```

### Claim Transfer

The `claimTransfer()` instruction claims emissions from a Nosana Pool with claim type `0`, 
and transfer these to a given `user`.

```typescript
let tx = await poolsProgram.methods
    .claimTransfer()
    .accounts({
        vault,
        beneficiary,
        pool,
        authority,
        tokenProgram,
        systemProgram,
    })
    .signers([authority])
    .rpc()
```

### Close

The `close()` instruction close a Nosana Pool.

```typescript
let tx = await poolsProgram.methods
    .close()
    .accounts({
        vault,
        user,
        pool,
        authority,
        tokenProgram,
    })
    .signers([authority])
    .rpc()
```
