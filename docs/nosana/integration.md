---
title: Continuous Integration
---

# Nosana Decentralized Continuous Integration

## What is Integration Testing?

Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors 
into a single software project. 
It’s a primary DevOps best practice, allowing developers to frequently merge code changes into a central repository 
where builds and tests then run. Automated tools are used to assert the new code’s correctness before integration.

A source code version control system is the crux of the CI process. 
The version control system is also supplemented with other checks like automated code quality tests, 
syntax style review tools, and more. 

::: tip How CI can be used
CI is generally used alongside an agile software development workflow. 
An organization will compile list of tasks that comprise a product roadmap. 
These tasks are then distributed amongst software engineering team members for delivery.
Using CI enables these software development tasks to be developed independently 
and in parallel amongst the assigned developers. 
Once one of theses tasks is complete,
a developer will introduce that new work to the CI system to be integrated with the rest of the project.
:::

![demo](~@assets/demo.png)

## What is Unit Testing?

Unit testing is a type of testing in which individual units or functions of software testing.
Its primary purpose is to test each unit or function.
A unit is the smallest testable part of an application.
It mainly has one or a few inputs and produces a single output.
In procedural programming, a unit referred to as an individual program, while object-oriented programming languages include Base/Superclass, abstract class, Derived/Child class takes place. Unit test frameworks, drivers, stubs and mocks /fake objects used in Unit Testing.
It works on the basis of a White box technique.

::: tip Unit Testing can be used for
- Improve Quality of Code
- Build Reusable and Reliable Code
- Simplify Documentation
- Enable Seamless Integration
:::

## The importance of continuous integration

In order to understand the importance of CI, 
it’s helpful to first discuss some pain points that often arise due to the absence of CI. 
Without CI, developers must manually coordinate and communicate when they are contributing code to the end product. 
This coordination extends beyond the development teams to operations and the rest of the organization. 
Product teams must coordinate when to sequentially launch features and fixes and which team members will be responsible.

The communication overhead of a non-CI environment can become a complex and entangled synchronization chore, 
which adds unnecessary bureaucratic cost to projects. 
This causes slower code releases with higher rates of failure, 
as it requires developers to be sensitive and thoughtful towards the integrations. 
These risks grow exponentially as the engineering team and codebase sizes increase.

Without a robust CI pipeline, a disconnect between the engineering team and the rest of the organization can form. 
Communication between product and engineering can be cumbersome. 
Engineering becomes a black box which the rest of the team inputs requirements 
and features and maybe gets expected results back. 
It will make it harder for engineering to estimate time of delivery on requests because the time to 
integrate new changes becomes an unknown risk.

## What CI does

CI helps to scale up headcount and delivery output of engineering teams.
Introducing CI to the aforementioned scenario allows software developers to work 
independently on features in parallel. 
When they are ready to merge these features into the end product, 
they can do so independently and rapidly. CI is a valuable and well-established practice in modern, 
high performance software engineering organizations.
