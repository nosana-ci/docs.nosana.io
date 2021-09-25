---
title: Nosana Test Suite
date: 2021-08-14
tags:
- nosana
- product
---

<Badge text="alpha" type="error"/>

Nosana will enter [Solana Mainnet](https://docs.solana.com/clusters#mainnet-beta) with her first
production product: The Nosana Test Suite.
The Test Suite consist of a number of open source tools like [ESLint](https://eslint.org/),
[SonarQube](https://www.sonarqube.org/).

## What is Integration Testing?

Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors
into a single software project.
It’s a primary DevOps best practice, allowing developers to frequently merge code changes into a central repository
where builds and tests then run.
Nosana automated tools are used to assert the new code’s correctness before integration.

A source code version control system is the core of the CI process.

The version control system is also supplemented with other checks like automated code quality tests,
syntax style review tools, and more.

::: tip
CI is generally used alongside an agile software development workflow.
An organization will compile list of tasks that comprise a product roadmap.
These tasks are then distributed amongst software engineering team members for delivery.
Using CI enables these software development tasks to be developed independently
and in parallel amongst the assigned developers.
Once one of these tasks is complete,
a developer will introduce that new work to the CI system to be integrated with the rest of the project.
:::

## Example

![demo](~@assets/demo.png)
