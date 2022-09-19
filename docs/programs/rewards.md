# Nosana Rewards <Badge type="tip" text="mainnet" vertical="middle" />

## Program Information

The Nosana Rewards Program allow stakers to earn rewards. Anyone that has staked NOS tokens can enter the rewards program.

| Info            | Description                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| Type            | [Solana Program](https://docs.solana.com/developing/programming-model/overview)                                                  |
| Source Code     | [GitHub](https://github.com/nosana-ci/nosana-programs)                                                                           |
| Accounts        | `3`                                                                                                                              |
| Instructions    | `6`                                                                                                                              |
| Domain          | `nosana-rewards.sol`                                                                                                             |
| Program Address | [`nosRB8DUV67oLNrL45bo2pFLrmsWPiewe2Lk2DRNYCp`](https://explorer.solana.com/address/nosRB8DUV67oLNrL45bo2pFLrmsWPiewe2Lk2DRNYCp) |
| APR             | [✅](https://www.apr.dev/program/nosRB8DUV67oLNrL45bo2pFLrmsWPiewe2Lk2DRNYCp)                                                     |

## Diagram

```mermaid
flowchart TB
    Authority -- enter --> di1{Reward Account}
    Authority -- claim --> di1{Reward Account}
    Authority -- close --> di1{Reward Account}

    Anonymous -- sync --> di1{Reward Account}
    Anonymous -- sync --> di3{Stats Account}

    Payer -- init --> di3{Sats Account}

    ci(Network Fees) -- addFee --> di3{Stats Account}
    ci(Network Fees) -.- sq1[NOS] -.->di2{Vault Account} -.- sq2[NOS] -.-> Authority

    classDef orange fill:#f96,stroke:#333,stroke-width:3px;
    classDef yellow fill:#ff7,stroke:#333,stroke-width:2px;

    class di1,di2,di3 orange
    class sq1,sq2 yellow
```

## Accounts

A number of 3 account types makes up for the Nosana Rewards program's state.

### Vault Account

The `VaultAccount` is a regular Solana Token Account.

### Reward Account

The `RewardAccount` struct holds all the information for any given user account.

```rust
pub struct RewardAccount {
  pub authority: Pubkey,
  pub bump: u8,
  pub reflection: u128,
  pub xnos: u128,
}
```

### Stats Account

The `StatsAccount` struct holds all the information on the reflection pool.

```rust
pub struct StatsAccount {
    pub bump: u8,
    pub rate: u128,
    pub total_reflection: u128,
    pub total_xnos: u128,
}
```

## Instructions

A number of 6 instruction are defined in the Nosana Rewards program.
To load the program with [Anchor](https://coral-xyz.github.io/anchor/ts/index.html) in `TypeScript`:

```typescript
const programId = new PublicKey('nosRB8DUV67oLNrL45bo2pFLrmsWPiewe2Lk2DRNYCp');
const idl = await Program.fetchIdl(programId.toString());
const program = new Program(idl, programId);
```

The following are some of the Nosana Rewards program's characteristics:

- A staker's xNOS score determines the portion of the fees a user will receive.
- You have to explicitly `enter` the rewards program to participate. The rewards
  you receive are the percentage of your xNOS compared to that of all the other participants.
- When new fees are added to the program, they are distributed to all current participants.
- The program uses a token reflection model to distribute: fees are accounted
  for "live" as they come in and no loops necessary.
- Anyone can send in new fees to be distributed using `add_fees`.
- You can `claim` your earned rewards at any time (does not require an
  unstake).
- If you `unstake` your reward account is voided. It is _critical_ that
  you claim rewards before unstaking.
- If you `upstake` or `extend` a stake your rewards program is not updated. You
  will have to `claim` upate your reward to make use of your new xNOS score.
- A user can only have 1 active rewards entry at a time.
- The rewards a user earns are automatically added to the percentage of rewards
  they receive. Earned rewards are added to their xNOS score (with a
  multiplier of 1) - but can be claimed without any delay. They gain a slight advandage from this, and it's a great feature as well. Also it's easy to `upstake` your  rewards directly in order to receive a bigger multiplier.
- One can close their own reward account at any time. If there are any unclaimed rewards on the account, they will be cancelled (and distributed to all other participants).
- Anyone is permitted to close a user's reward account if they've unstaked. This feature prevents "ghost" accounts from accumulating rewards.

### Init

The `init()` instruction initializes the [`StatsAccount`](#stats-account)
and [`VaultAccount`](#vault-account).

```typescript
let tx = await program.methods
  .init()
  .accounts({
    mint,
    stats,
    vault,
    authority,
    systemProgram,
    tokenProgram,
    rent,
  })
  .signers([authorityKey])
  .rpc();
```

### Enter

The `enter()` instruction initializes a users' [`RewardsAccount`](#reward-account).

```typescript
let tx = await program.methods
  .enter()
  .accounts({
    stats,
    stake,
    reward,
    authority,
    systemProgram,
  })
  .signers([authorityKey])
  .rpc();
```

### Claim

The `claim()` instruction sends a user's rewards to a given wallet.

```typescript
let tx = await program.methods
  .claim()
  .accounts({
    user,
    vault,
    stats,
    reward,
    stake,
    authority,
    tokenProgram,
  })
  .signers([authorityKey])
  .rpc();
```

### Sync

The `sync()` instruction re-calculates a users' `xNOS` score.

```typescript
let tx = await program.methods
  .sync()
  .accounts({
    reward,
    stake,
    stats,
  })
  .rpc();
```

### Close

The `close()` instruction closes a users' [`RewardsAccount`](#reward-account).

```typescript
let tx = await program.methods
  .close()
  .accounts({
    stats,
    reward,
    authority,
  })
  .signers([authorityKey])
  .rpc();
```

### Add Fee

The `addFee()` instruction sends `amount` of tokens to the [`VaultAccount`](#vault-account).

```typescript
let tx = await program.methods
  .addFee(amount)
  .accounts({
    user,
    stats,
    vault,
    authority,
    tokenProgram,
  })
  .signers([authorityKey])
  .rpc();
```
