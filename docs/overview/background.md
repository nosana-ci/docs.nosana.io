---
title: Background
date: 2021-06-6
tags:
- nosana
- overview
---

::: tip
A phased approach to continuous delivery is not only preferable, it’s infinitely more manageable.
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

![pipeline](~@assets/pipeline.png)

## Why CI/CD ?

CI/CD is used for a multiple or reasons in software development.
At Nosana we focus on 3 main aspects.
These are [speed](#speed)$^I$, [reliability](#reliability)$^{II}$, and [growth](#growth)$^{III}$.

::::::::: tip
:::::: col-wrapper
::: col-third
![speed](~@assets/speed.jpeg =100x100)
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
![security](~@assets/security.png =100x100)
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
![growth](~@assets/growth.jpeg =100x100)
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
