export async function getChainSpec(chainId: string) {
  const url = `https://raw.githubusercontent.com/paritytech/substrate-connect/refs/heads/main/packages/connect-known-chains/specs/${chainId}.json`;

  return fetch(url).then((res) => res.text());
}
