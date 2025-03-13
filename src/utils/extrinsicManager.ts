import { web3Enable, web3FromAddress } from "@polkadot/extension-dapp";
import { Signer } from "@polkadot/types/types";
import { getPolkadotSigner, PolkadotSigner } from "polkadot-api/signer";

export class ExtrinsicManager<T> {
  protected readonly client: T;
  protected signerAddress: string;
  protected signer: Signer;
  protected polkadotSigner: PolkadotSigner;

  constructor(signerAddress: string, client: T) {
    this.signerAddress = signerAddress;
    this.client = client;
  }

  protected readonly getSigner = async (signerAddress: string) => {
    await web3Enable("polkadot-js");

    const injector = await web3FromAddress(signerAddress);

    const signer = injector.signer;

    if (!signer) {
      return;
    }

    return signer;
  };

  async setSigner(signerAddress: string) {
    this.signerAddress = signerAddress;

    const signer = await this.getSigner(this.signerAddress);

    this.polkadotSigner = getPolkadotSigner(
      Buffer.from(this.signerAddress),
      "Sr25519",
      (input) =>
        this.signer
          .signRaw({
            data: input.toString(),
            type: "bytes",
            address: this.signerAddress,
          })
          .then((res) => Buffer.from(JSON.stringify(res)))
    );

    this.signer = signer;
  }
}
