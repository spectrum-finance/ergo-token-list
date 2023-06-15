# @spectrum-finance/ergo-token-list

[![Tests](https://github.com/spectrum-finance/ergo-token-list/workflows/Tests/badge.svg)](https://github.com/spectrum-finance/ergo-token-list/actions?query=workflow%3ATests)

This package includes a JSON schema for token list used in the Ergo side of the Spectrum Finance interface

## JSON Schema
The JSON schema represents the technical specification for a token list which can be used in a cross-chain dApp interface, such as the Spectrum Finance Interface.

The JSON schema ID is [https://spectrum.fi/tokenlist.ergo.schema.json](https://spectrum.fi/tokenlist.ergo.schema.json)

## Semantic versioning
This repo includes a version field (in package.json), which follows [semantic versioning](https://semver.org/).

List versions must follow the rules:

- Increment major version when tokens are removed or if you've updated the `tokenlist.ergo.schema.json` file;
- Increment minor version when tokens are added;
- Increment patch version when tokens already on the list have minor details changed (name, ticker, logo URL, decimals).

Changing a token address or chain ID is considered both a remove and an add, and should be a major version update.

The latest version of Spectrum Finance default token list stores [here](https://spectrum.fi/default-token-list.json).

## Adding a token
To request we add a token file a [Token Request issue](https://github.com/spectrum-finance/ergo-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_TICKER%7D%3A+%7BPROJECT_NAME%7D).

### Disclaimer
Note filing an issue does not guarantee addition to this default token list. We do not review token addition requests in any particular order, and we do not guarantee that we will review your request to add the token to the default list.
