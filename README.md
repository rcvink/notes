# Notes

## Introduction

[Notes](https://rcvink.github.io/notes/) is a single page web app written in JavaScript. It has no dependencies!

The purpose of the app is to allow a user to add and view notes. The user stories are listed below.

A custom test framework was written to drive development.

## Getting started

1. Clone this repo
2. Host index.html locally
3. ???
4. Profit

## User Stories

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

## Design

The app is designed using the [Model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (MVC) pattern.

JavaScript prototype and module patterns were used to define the models, views and controller.

## TDD

The custom testing framework is similar to Jasmine and RSpec. It provides:
- Assertions, e.g. isEqual, isEmpty;
- Drive, to drive the design of a model; and
- Test, to provide unit and feature tests.

## Next Steps

- Styling
- Separate concerns
- Improve test coverage
- Improve mocking/isolation in tests
- Add before hooks to test framework
- Extract test framework
