export type CreateCollectionData = {
  settings: bigint;
  mintSettings: {
    mintType: {
      type: "Issuer" | "Public" | "HolderOf";
      value: number;
    };
    defaultItemSettings: bigint;
  };
};

export type SetAttributeData = {
  collectionId: number;
  itemId: number;
  namespace: {
    type: "Pallet" | "CollectionOwner" | "ItemOwner" | "Account";
    value: string;
  };
  key: string;
  value: string;
};

export type MintExtrinsicData = {
  collectionId: number;
  itemId: number;
  owner: string;
};

export type SetMetadataData = {
  collectionId: number;
  itemId: number;
  data: string;
};
