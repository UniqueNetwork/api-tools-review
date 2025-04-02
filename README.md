# Polkadot API Tools Review

This project is a minimal web-based demo for comparing two modern, lightweight alternatives to Polkadot.js: **[PAPI](https://github.com/polkadot-api/polkadot-api)** and **[Dedot](https://github.com/dedotdev/dedot)**.

The goal is to evaluate both libraries in the context of NFT-centric dApps targeting **Asset Hub** or other Polkadot-based chains.

## Configuration

1. Install dependencies:

```sh
pnpm install
```

2. Generate `.papi` files

```sh
npx papi add dot -n westend2_asset_hub
```

3. To change app settings, change the `.env` variables, e.g:

```
NEXT_PUBLIC_API_TYPE: API provider (DEDOT|PAPI)
NEXT_PUBLIC_PROVIDER_TYPE: Client type (light|ws)
NEXT_PUBLIC_CHAIN_SLUG: Chain Spec for light client (westend2_asset_hub by default). Other available options are: (ksmcc3|ksmcc3_asset_hub|ksmcc3_bridge_hub|ksmcc3_encointer|ksmcc3_people|paseo|paseo_asset_hub|paseo_people|polkadot|polkadot_asset_hub|polkadot_bridge_hub|polkadot_collectives|polkadot_coretime|polkadot_people|rococo_v2_2|rococo_v2_2_asset_hub|rococo_v2_2_bridge_hub|rococo_v2_2_people|westend2|westend2_asset_hub|westend2_bridge_hub|westend2_collectives|westend2_people)
NEXT_PUBLIC_WS_ENDPOINT: Chain WS-url for WS-client
```
