To generate .papi files:
`npx papi add dot -n westend2_asset_hub`

To change app settings, change the .env variables, e.g:

```
API_TYPE: API provider (DEDOT|PAPI)
PROVIDER_TYPE: Client type (light|ws)
CHAIN_SLUG: Chain Spec for light client (ksmcc3|ksmcc3_asset_hub|ksmcc3_bridge_hub|ksmcc3_encointer|ksmcc3_people|paseo|paseo_asset_hub|paseo_people|polkadot|polkadot_asset_hub|polkadot_bridge_hub|polkadot_collectives|polkadot_coretime|polkadot_people|rococo_v2_2|rococo_v2_2_asset_hub|rococo_v2_2_bridge_hub|rococo_v2_2_people|westend2|westend2_asset_hub|westend2_bridge_hub|westend2_collectives|westend2_people)
WS_ENDPOINT: Chain WS-url for WS-client
```
