---
title: Background
date: 2021-06-06
tags:
- nosana
- overview
---

::: tip
A phased approach to continuous delivery is not only preferable, it’s infinitely more manageable.
::: right
[Maurice Kherlakian](https://twitter.com/mkherlakian)
:::


Since it's inception CI/CD has enormously helped accelerate software release cycles.

## What is CI/CD ?

In software engineering, CI/CD is the combined practices of Continuous Integration (CI) and either
Continuous Delivery or Continuous Deployment (CD).

CI/CD bridges the gaps between development and operation activities and teams by enforcing automation in building,
testing and deployment of applications.
Modern day DevOps practices involve continuous development, continuous testing, continuous integration, continuous
deployment and continuous monitoring of software applications throughout its development life cycle.

The CI/CD practice, or CI/CD pipeline, forms the backbone of modern day DevOps operations.

## A CI/CD pipeline

Below you'll find an example of a CI/CD pipeline where a code commit triggers a series of automated steps,
that can eventually lead the deployment of a new release of the software.

@flowstart
gp=>start: 👨‍💻 Code Commit
tb=>operation: ⚙️ Trigger Build
rb=>parallel: ∞ Nosana Builds
rt=>parallel: ∞ Nosana Tests
nb=>operation: 🔔 Notification of Build outcome
nt=>operation: 🔔 Notification of Test outcome
dl=>condition: 📦 Deliver
dp=>end: 🚀 Deploy Environment

gp->tb->rb(path1, bottom)->rt(path1, bottom)->dl(yes)->dp
rt(path2, left)->nt
rb(path2, right)->nb
@flowend

## Why CI/CD ?

CI/CD is used for a multiple or reasons in software development.
At Nosana we focus on 3 main aspects.
These are [speed](#speed)$^I$, [reliability](#reliability)$^{II}$, and [growth](#growth)$^{III}$.

::::::::: tip
:::::: col-wrapper
::: col-third
<img src="../assets/speed.jpeg" class="green-img medium-zoom-image" alt="speed" width="100" height="100">
:::
::: col-half
### Speed
Ongoing feedback allows developers to commit smaller changes more often, increases development velocity.
:::
::::::
:::::::::

::::::::: tip
:::::: col-wrapper
::: col-third
<img src="../assets/security.png" class="green-img medium-zoom-image" alt="security" width="100" height="100">
:::
::: col-half
### Reliability
Automated, continuous testing ensures that codebases remain stable and release-ready at any time.
:::
::::::
:::::::::

::::::::: tip
:::::: col-wrapper
::: col-third
<img src="../assets/growth.jpeg" class="green-img medium-zoom-image" alt="growth" width="100" height="100">
:::
::: col-half
### Growth
Freed up from manual tasks, projects can focus resources on innovation, satisfaction, and downsizing technical debt.
:::
::::::
:::::::::

## Why on Solana?

As mentioned, Nosana is build entirely on the Solana Network.
There are many reasons for this. Some of which include:

- **Sealevel** allows Solana to quickly identify all non-overlapping transactions and process them at the same time.
- **Gulf Stream** makes it possible to know a small number of upcoming Validators so that they can already begin accumulating transactions before they begin producing blocks.
- **Proof of history** allows Solana to be able to scale massively in the future, without a tradeoff in speed versus security.

### Proof of History explainer video

@[youtube](https://youtu.be/rywOYfGu4EA)
