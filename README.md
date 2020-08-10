# Typescript Project Template
[![Git Commit](https://img.shields.io/github/last-commit/mojaloop/sdk-pisp-schema-adapter.svg?style=flat)](https://github.com/mojaloop/sdk-pisp-schema-adapter/commits/master)
[![Git Releases](https://img.shields.io/github/release/mojaloop/sdk-pisp-schema-adapter.svg?style=flat)](https://github.com/mojaloop/sdk-pisp-schema-adapter/releases)
[![Npm Version](https://img.shields.io/npm/v/@mojaloop/sdk-pisp-schema-adapter.svg?style=flat)](https://www.npmjs.com/package/@mojaloop/sdk-pisp-schema-adapter)
[![NPM Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@mojaloop/sdk-pisp-schema-adapter.svg?style=flat)](https://www.npmjs.com/package/@mojaloop/sdk-pisp-schema-adapter)
[![CircleCI](https://circleci.com/gh/mojaloop/sdk-pisp-schema-adapter.svg?style=svg)](https://circleci.com/gh/mojaloop/sdk-pisp-schema-adapter)

A project template for new mojaloop services and libraries that uses Typescript.

## Setup

This project provides a decent starting point for a new mojaloop library using typescript.

<!-- TODO: add setup steps for this repo -->
1. Go to https://github.com/new to create a new repo
2. Select the "mojaloop/template-typescript-public" template
3. Find and replace all instances of `sdk-pisp-schema-adapter` globally across the whole project with your new project's name 
4. Update the package name and version to match in `package.json`:
```json
  "name": "@mojaloop/repo-name",
  "version": "0.1.0", 
  ...
```

5. Copy the necessary circle ci config from the templates.

If the project is a **Library**:

```bash
cp ./.circleci/config.example.library.yml ./.circleci/config.yml
rm -f ./.circleci/config.example.*
```

If the project is a **Service**:

```bash
cp ./.circleci/config.example.service.yml ./.circleci/config.yml
rm -f ./.circleci/config.example.*
```


