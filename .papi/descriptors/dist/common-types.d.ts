import { Enum, GetEnum, FixedSizeBinary, Binary, SS58String, FixedSizeArray, ResultPayload, TxCallData } from "polkadot-api";
type AnonymousEnum<T extends {}> = T & {
    __anonymous: true;
};
type MyTuple<T> = [T, ...T[]];
type SeparateUndefined<T> = undefined extends T ? undefined | Exclude<T, undefined> : T;
type Anonymize<T> = SeparateUndefined<T extends FixedSizeBinary<infer L> ? number extends L ? Binary : FixedSizeBinary<L> : T extends string | number | bigint | boolean | void | undefined | null | symbol | Uint8Array | Enum<any> ? T : T extends AnonymousEnum<infer V> ? Enum<V> : T extends MyTuple<any> ? {
    [K in keyof T]: T[K];
} : T extends [] ? [] : T extends FixedSizeArray<infer L, infer T> ? number extends L ? Array<T> : FixedSizeArray<L, T> : {
    [K in keyof T & string]: T[K];
}>;
export type I5sesotjlssv2d = {
    "nonce": number;
    "consumers": number;
    "providers": number;
    "sufficients": number;
    "data": Anonymize<I1q8tnt1cluu5j>;
};
export type I1q8tnt1cluu5j = {
    "free": bigint;
    "reserved": bigint;
    "frozen": bigint;
    "flags": bigint;
};
export type Iffmde3ekjedi9 = {
    "normal": Anonymize<I4q39t5hn830vp>;
    "operational": Anonymize<I4q39t5hn830vp>;
    "mandatory": Anonymize<I4q39t5hn830vp>;
};
export type I4q39t5hn830vp = {
    "ref_time": bigint;
    "proof_size": bigint;
};
export type I4mddgoa69c0a2 = Array<DigestItem>;
export type DigestItem = Enum<{
    "PreRuntime": Anonymize<I82jm9g7pufuel>;
    "Consensus": Anonymize<I82jm9g7pufuel>;
    "Seal": Anonymize<I82jm9g7pufuel>;
    "Other": Binary;
    "RuntimeEnvironmentUpdated": undefined;
}>;
export declare const DigestItem: GetEnum<DigestItem>;
export type I82jm9g7pufuel = [FixedSizeBinary<4>, Binary];
export type I2jrp6ei12vd6a = Array<Anonymize<Iat08ok9sqd923>>;
export type Iat08ok9sqd923 = {
    "phase": Phase;
    "event": Anonymize<I8nhgi0vpu3lov>;
    "topics": Anonymize<Ic5m5lp1oioo8r>;
};
export type Phase = Enum<{
    "ApplyExtrinsic": number;
    "Finalization": undefined;
    "Initialization": undefined;
}>;
export declare const Phase: GetEnum<Phase>;
export type I8nhgi0vpu3lov = AnonymousEnum<{
    "System": Anonymize<Iedn6n6g21st14>;
    "ParachainSystem": Anonymize<Icbsekf57miplo>;
    "MultiBlockMigrations": Anonymize<I94co7vj7h6bo>;
    "Balances": Anonymize<Iao8h4hv7atnq3>;
    "TransactionPayment": TransactionPaymentEvent;
    "AssetTxPayment": Anonymize<I78bosroad52fa>;
    "CollatorSelection": Anonymize<I4srakrmf0fspo>;
    "Session": SessionEvent;
    "XcmpQueue": Anonymize<Idsqc7mhp6nnle>;
    "PolkadotXcm": Anonymize<Iel5f66clbekc3>;
    "CumulusXcm": Anonymize<Ihpdgvt7vs2cb>;
    "ToRococoXcmRouter": Anonymize<Ift4p4jnj5bri1>;
    "MessageQueue": Anonymize<I2kosejppk3jon>;
    "Utility": Anonymize<I6p4pglc8elinf>;
    "Multisig": Anonymize<Icd61nufu486fo>;
    "Proxy": Anonymize<I89140ul676lq9>;
    "Assets": Anonymize<I6avancvg8fd05>;
    "Uniques": Anonymize<Ia0j71vjrjqu9p>;
    "Nfts": Anonymize<I6qicn8jn4fftj>;
    "ForeignAssets": Anonymize<I95qdjot35qdnr>;
    "NftFractionalization": Anonymize<I41s7j0hsp2u0b>;
    "PoolAssets": Anonymize<I6avancvg8fd05>;
    "AssetConversion": Anonymize<Ievo2o32gc42ng>;
    "AssetsFreezer": Anonymize<I7omheqbc53plq>;
    "ForeignAssetsFreezer": Anonymize<I7bdov8cfj9qk8>;
    "PoolAssetsFreezer": Anonymize<I7omheqbc53plq>;
    "Revive": Anonymize<I3vl9org1c535t>;
    "AssetRewards": Anonymize<I23dbg5epnfjeo>;
    "StateTrieMigration": Anonymize<I61dksvl51aujo>;
    "AssetConversionMigration": Anonymize<Ifiu844mj7r2h6>;
}>;
export type Iedn6n6g21st14 = AnonymousEnum<{
    /**
     *An extrinsic completed successfully.
     */
    "ExtrinsicSuccess": Anonymize<Ia82mnkmeo2rhc>;
    /**
     *An extrinsic failed.
     */
    "ExtrinsicFailed": Anonymize<Ibncgkhmqmbq6h>;
    /**
     *`:code` was updated.
     */
    "CodeUpdated": undefined;
    /**
     *A new account was created.
     */
    "NewAccount": Anonymize<Icbccs0ug47ilf>;
    /**
     *An account was reaped.
     */
    "KilledAccount": Anonymize<Icbccs0ug47ilf>;
    /**
     *On on-chain remark happened.
     */
    "Remarked": Anonymize<I855j4i3kr8ko1>;
    /**
     *An upgrade was authorized.
     */
    "UpgradeAuthorized": Anonymize<Ibgl04rn6nbfm6>;
}>;
export type Ia82mnkmeo2rhc = {
    "dispatch_info": Anonymize<Ic9s8f85vjtncc>;
};
export type Ic9s8f85vjtncc = {
    "weight": Anonymize<I4q39t5hn830vp>;
    "class": DispatchClass;
    "pays_fee": Anonymize<Iehg04bj71rkd>;
};
export type DispatchClass = Enum<{
    "Normal": undefined;
    "Operational": undefined;
    "Mandatory": undefined;
}>;
export declare const DispatchClass: GetEnum<DispatchClass>;
export type Iehg04bj71rkd = AnonymousEnum<{
    "Yes": undefined;
    "No": undefined;
}>;
export type Ibncgkhmqmbq6h = {
    "dispatch_error": Anonymize<I2em38gdd5updn>;
    "dispatch_info": Anonymize<Ic9s8f85vjtncc>;
};
export type I2em38gdd5updn = AnonymousEnum<{
    "Other": undefined;
    "CannotLookup": undefined;
    "BadOrigin": undefined;
    "Module": Anonymize<I40fbmlcc6bpg3>;
    "ConsumerRemaining": undefined;
    "NoProviders": undefined;
    "TooManyConsumers": undefined;
    "Token": TokenError;
    "Arithmetic": ArithmeticError;
    "Transactional": TransactionalError;
    "Exhausted": undefined;
    "Corruption": undefined;
    "Unavailable": undefined;
    "RootNotAllowed": undefined;
    "Trie": Anonymize<Idh4cj79bvroj8>;
}>;
export type I40fbmlcc6bpg3 = AnonymousEnum<{
    "System": Anonymize<I5o0s7c8q1cc9b>;
    "ParachainSystem": Anonymize<I9p95gln24a0rn>;
    "Timestamp": undefined;
    "ParachainInfo": undefined;
    "WeightReclaim": undefined;
    "MultiBlockMigrations": Anonymize<Iaaqq5jevtahm8>;
    "Balances": Anonymize<Idj13i7adlomht>;
    "TransactionPayment": undefined;
    "AssetTxPayment": undefined;
    "Authorship": undefined;
    "CollatorSelection": Anonymize<I36bcffk2387dv>;
    "Session": Anonymize<I1e07dgbaqd1sq>;
    "Aura": undefined;
    "AuraExt": undefined;
    "XcmpQueue": Anonymize<Idnnbndsjjeqqs>;
    "PolkadotXcm": Anonymize<I87j95aq93d7dq>;
    "CumulusXcm": undefined;
    "ToRococoXcmRouter": undefined;
    "MessageQueue": Anonymize<I5iupade5ag2dp>;
    "Utility": Anonymize<I8dt2g2hcrgh36>;
    "Multisig": Anonymize<Ia76qmhhg4jvb9>;
    "Proxy": Anonymize<Iuvt54ei4cehc>;
    "Assets": Anonymize<Iapedqb0veh71>;
    "Uniques": Anonymize<Ienq2ge2rhv4jm>;
    "Nfts": Anonymize<I58r1150kmj18u>;
    "ForeignAssets": Anonymize<Iapedqb0veh71>;
    "NftFractionalization": Anonymize<Ib24bvufha821j>;
    "PoolAssets": Anonymize<Iapedqb0veh71>;
    "AssetConversion": Anonymize<I4u78hb23uhvi2>;
    "AssetsFreezer": Anonymize<I4dd4ctqfnk5kr>;
    "ForeignAssetsFreezer": Anonymize<I4dd4ctqfnk5kr>;
    "PoolAssetsFreezer": Anonymize<I4dd4ctqfnk5kr>;
    "Revive": Anonymize<I1togkjovtjn9r>;
    "AssetRewards": Anonymize<I1vqs5qaqr6h6>;
    "StateTrieMigration": Anonymize<I96objte63brjr>;
    "AssetConversionMigration": Anonymize<I1t0slqjho4lh4>;
}>;
export type I5o0s7c8q1cc9b = AnonymousEnum<{
    /**
     *The name of specification does not match between the current runtime
     *and the new runtime.
     */
    "InvalidSpecName": undefined;
    /**
     *The specification version is not allowed to decrease between the current runtime
     *and the new runtime.
     */
    "SpecVersionNeedsToIncrease": undefined;
    /**
     *Failed to extract the runtime version from the new runtime.
     *
     *Either calling `Core_version` or decoding `RuntimeVersion` failed.
     */
    "FailedToExtractRuntimeVersion": undefined;
    /**
     *Suicide called when the account has non-default composite data.
     */
    "NonDefaultComposite": undefined;
    /**
     *There is a non-zero reference count preventing the account from being purged.
     */
    "NonZeroRefCount": undefined;
    /**
     *The origin filter prevent the call to be dispatched.
     */
    "CallFiltered": undefined;
    /**
     *A multi-block migration is ongoing and prevents the current code from being replaced.
     */
    "MultiBlockMigrationsOngoing": undefined;
    /**
     *No upgrade authorized.
     */
    "NothingAuthorized": undefined;
    /**
     *The submitted code is not authorized.
     */
    "Unauthorized": undefined;
}>;
export type I9p95gln24a0rn = AnonymousEnum<{
    /**
     *Attempt to upgrade validation function while existing upgrade pending.
     */
    "OverlappingUpgrades": undefined;
    /**
     *Polkadot currently prohibits this parachain from upgrading its validation function.
     */
    "ProhibitedByPolkadot": undefined;
    /**
     *The supplied validation function has compiled into a blob larger than Polkadot is
     *willing to run.
     */
    "TooBig": undefined;
    /**
     *The inherent which supplies the validation data did not run this block.
     */
    "ValidationDataNotAvailable": undefined;
    /**
     *The inherent which supplies the host configuration did not run this block.
     */
    "HostConfigurationNotAvailable": undefined;
    /**
     *No validation function upgrade is currently scheduled.
     */
    "NotScheduled": undefined;
    /**
     *No code upgrade has been authorized.
     */
    "NothingAuthorized": undefined;
    /**
     *The given code upgrade has not been authorized.
     */
    "Unauthorized": undefined;
}>;
export type Iaaqq5jevtahm8 = AnonymousEnum<{
    /**
     *The operation cannot complete since some MBMs are ongoing.
     */
    "Ongoing": undefined;
}>;
export type Idj13i7adlomht = AnonymousEnum<{
    /**
     *Vesting balance too high to send value.
     */
    "VestingBalance": undefined;
    /**
     *Account liquidity restrictions prevent withdrawal.
     */
    "LiquidityRestrictions": undefined;
    /**
     *Balance too low to send value.
     */
    "InsufficientBalance": undefined;
    /**
     *Value too low to create account due to existential deposit.
     */
    "ExistentialDeposit": undefined;
    /**
     *Transfer/payment would kill account.
     */
    "Expendability": undefined;
    /**
     *A vesting schedule already exists for this account.
     */
    "ExistingVestingSchedule": undefined;
    /**
     *Beneficiary account must pre-exist.
     */
    "DeadAccount": undefined;
    /**
     *Number of named reserves exceed `MaxReserves`.
     */
    "TooManyReserves": undefined;
    /**
     *Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
     */
    "TooManyHolds": undefined;
    /**
     *Number of freezes exceed `MaxFreezes`.
     */
    "TooManyFreezes": undefined;
    /**
     *The issuance cannot be modified since it is already deactivated.
     */
    "IssuanceDeactivated": undefined;
    /**
     *The delta cannot be zero.
     */
    "DeltaZero": undefined;
}>;
export type I36bcffk2387dv = AnonymousEnum<{
    /**
     *The pallet has too many candidates.
     */
    "TooManyCandidates": undefined;
    /**
     *Leaving would result in too few candidates.
     */
    "TooFewEligibleCollators": undefined;
    /**
     *Account is already a candidate.
     */
    "AlreadyCandidate": undefined;
    /**
     *Account is not a candidate.
     */
    "NotCandidate": undefined;
    /**
     *There are too many Invulnerables.
     */
    "TooManyInvulnerables": undefined;
    /**
     *Account is already an Invulnerable.
     */
    "AlreadyInvulnerable": undefined;
    /**
     *Account is not an Invulnerable.
     */
    "NotInvulnerable": undefined;
    /**
     *Account has no associated validator ID.
     */
    "NoAssociatedValidatorId": undefined;
    /**
     *Validator ID is not yet registered.
     */
    "ValidatorNotRegistered": undefined;
    /**
     *Could not insert in the candidate list.
     */
    "InsertToCandidateListFailed": undefined;
    /**
     *Could not remove from the candidate list.
     */
    "RemoveFromCandidateListFailed": undefined;
    /**
     *New deposit amount would be below the minimum candidacy bond.
     */
    "DepositTooLow": undefined;
    /**
     *Could not update the candidate list.
     */
    "UpdateCandidateListFailed": undefined;
    /**
     *Deposit amount is too low to take the target's slot in the candidate list.
     */
    "InsufficientBond": undefined;
    /**
     *The target account to be replaced in the candidate list is not a candidate.
     */
    "TargetIsNotCandidate": undefined;
    /**
     *The updated deposit amount is equal to the amount already reserved.
     */
    "IdenticalDeposit": undefined;
    /**
     *Cannot lower candidacy bond while occupying a future collator slot in the list.
     */
    "InvalidUnreserve": undefined;
}>;
export type I1e07dgbaqd1sq = AnonymousEnum<{
    /**
     *Invalid ownership proof.
     */
    "InvalidProof": undefined;
    /**
     *No associated validator ID for account.
     */
    "NoAssociatedValidatorId": undefined;
    /**
     *Registered duplicate key.
     */
    "DuplicatedKey": undefined;
    /**
     *No keys are associated with this account.
     */
    "NoKeys": undefined;
    /**
     *Key setting account is not live, so it's impossible to associate keys.
     */
    "NoAccount": undefined;
}>;
export type Idnnbndsjjeqqs = AnonymousEnum<{
    /**
     *Setting the queue config failed since one of its values was invalid.
     */
    "BadQueueConfig": undefined;
    /**
     *The execution is already suspended.
     */
    "AlreadySuspended": undefined;
    /**
     *The execution is already resumed.
     */
    "AlreadyResumed": undefined;
    /**
     *There are too many active outbound channels.
     */
    "TooManyActiveOutboundChannels": undefined;
    /**
     *The message is too big.
     */
    "TooBig": undefined;
}>;
export type I87j95aq93d7dq = AnonymousEnum<{
    /**
     *The desired destination was unreachable, generally because there is a no way of routing
     *to it.
     */
    "Unreachable": undefined;
    /**
     *There was some other issue (i.e. not to do with routing) in sending the message.
     *Perhaps a lack of space for buffering the message.
     */
    "SendFailure": undefined;
    /**
     *The message execution fails the filter.
     */
    "Filtered": undefined;
    /**
     *The message's weight could not be determined.
     */
    "UnweighableMessage": undefined;
    /**
     *The destination `Location` provided cannot be inverted.
     */
    "DestinationNotInvertible": undefined;
    /**
     *The assets to be sent are empty.
     */
    "Empty": undefined;
    /**
     *Could not re-anchor the assets to declare the fees for the destination chain.
     */
    "CannotReanchor": undefined;
    /**
     *Too many assets have been attempted for transfer.
     */
    "TooManyAssets": undefined;
    /**
     *Origin is invalid for sending.
     */
    "InvalidOrigin": undefined;
    /**
     *The version of the `Versioned` value used is not able to be interpreted.
     */
    "BadVersion": undefined;
    /**
     *The given location could not be used (e.g. because it cannot be expressed in the
     *desired version of XCM).
     */
    "BadLocation": undefined;
    /**
     *The referenced subscription could not be found.
     */
    "NoSubscription": undefined;
    /**
     *The location is invalid since it already has a subscription from us.
     */
    "AlreadySubscribed": undefined;
    /**
     *Could not check-out the assets for teleportation to the destination chain.
     */
    "CannotCheckOutTeleport": undefined;
    /**
     *The owner does not own (all) of the asset that they wish to do the operation on.
     */
    "LowBalance": undefined;
    /**
     *The asset owner has too many locks on the asset.
     */
    "TooManyLocks": undefined;
    /**
     *The given account is not an identifiable sovereign account for any location.
     */
    "AccountNotSovereign": undefined;
    /**
     *The operation required fees to be paid which the initiator could not meet.
     */
    "FeesNotMet": undefined;
    /**
     *A remote lock with the corresponding data could not be found.
     */
    "LockNotFound": undefined;
    /**
     *The unlock operation cannot succeed because there are still consumers of the lock.
     */
    "InUse": undefined;
    /**
     *Invalid asset, reserve chain could not be determined for it.
     */
    "InvalidAssetUnknownReserve": undefined;
    /**
     *Invalid asset, do not support remote asset reserves with different fees reserves.
     */
    "InvalidAssetUnsupportedReserve": undefined;
    /**
     *Too many assets with different reserve locations have been attempted for transfer.
     */
    "TooManyReserves": undefined;
    /**
     *Local XCM execution incomplete.
     */
    "LocalExecutionIncomplete": undefined;
}>;
export type I5iupade5ag2dp = AnonymousEnum<{
    /**
     *Page is not reapable because it has items remaining to be processed and is not old
     *enough.
     */
    "NotReapable": undefined;
    /**
     *Page to be reaped does not exist.
     */
    "NoPage": undefined;
    /**
     *The referenced message could not be found.
     */
    "NoMessage": undefined;
    /**
     *The message was already processed and cannot be processed again.
     */
    "AlreadyProcessed": undefined;
    /**
     *The message is queued for future execution.
     */
    "Queued": undefined;
    /**
     *There is temporarily not enough weight to continue servicing messages.
     */
    "InsufficientWeight": undefined;
    /**
     *This message is temporarily unprocessable.
     *
     *Such errors are expected, but not guaranteed, to resolve themselves eventually through
     *retrying.
     */
    "TemporarilyUnprocessable": undefined;
    /**
     *The queue is paused and no message can be executed from it.
     *
     *This can change at any time and may resolve in the future by re-trying.
     */
    "QueuePaused": undefined;
    /**
     *Another call is in progress and needs to finish before this call can happen.
     */
    "RecursiveDisallowed": undefined;
}>;
export type I8dt2g2hcrgh36 = AnonymousEnum<{
    /**
     *Too many calls batched.
     */
    "TooManyCalls": undefined;
}>;
export type Ia76qmhhg4jvb9 = AnonymousEnum<{
    /**
     *Threshold must be 2 or greater.
     */
    "MinimumThreshold": undefined;
    /**
     *Call is already approved by this signatory.
     */
    "AlreadyApproved": undefined;
    /**
     *Call doesn't need any (more) approvals.
     */
    "NoApprovalsNeeded": undefined;
    /**
     *There are too few signatories in the list.
     */
    "TooFewSignatories": undefined;
    /**
     *There are too many signatories in the list.
     */
    "TooManySignatories": undefined;
    /**
     *The signatories were provided out of order; they should be ordered.
     */
    "SignatoriesOutOfOrder": undefined;
    /**
     *The sender was contained in the other signatories; it shouldn't be.
     */
    "SenderInSignatories": undefined;
    /**
     *Multisig operation not found when attempting to cancel.
     */
    "NotFound": undefined;
    /**
     *Only the account that originally created the multisig is able to cancel it.
     */
    "NotOwner": undefined;
    /**
     *No timepoint was given, yet the multisig operation is already underway.
     */
    "NoTimepoint": undefined;
    /**
     *A different timepoint was given to the multisig operation that is underway.
     */
    "WrongTimepoint": undefined;
    /**
     *A timepoint was given, yet no multisig operation is underway.
     */
    "UnexpectedTimepoint": undefined;
    /**
     *The maximum weight information provided was too low.
     */
    "MaxWeightTooLow": undefined;
    /**
     *The data to be stored is already stored.
     */
    "AlreadyStored": undefined;
}>;
export type Iuvt54ei4cehc = AnonymousEnum<{
    /**
     *There are too many proxies registered or too many announcements pending.
     */
    "TooMany": undefined;
    /**
     *Proxy registration not found.
     */
    "NotFound": undefined;
    /**
     *Sender is not a proxy of the account to be proxied.
     */
    "NotProxy": undefined;
    /**
     *A call which is incompatible with the proxy type's filter was attempted.
     */
    "Unproxyable": undefined;
    /**
     *Account is already a proxy.
     */
    "Duplicate": undefined;
    /**
     *Call may not be made by proxy because it may escalate its privileges.
     */
    "NoPermission": undefined;
    /**
     *Announcement, if made at all, was made too recently.
     */
    "Unannounced": undefined;
    /**
     *Cannot add self as proxy.
     */
    "NoSelfProxy": undefined;
}>;
export type Iapedqb0veh71 = AnonymousEnum<{
    /**
     *Account balance must be greater than or equal to the transfer amount.
     */
    "BalanceLow": undefined;
    /**
     *The account to alter does not exist.
     */
    "NoAccount": undefined;
    /**
     *The signing account has no permission to do the operation.
     */
    "NoPermission": undefined;
    /**
     *The given asset ID is unknown.
     */
    "Unknown": undefined;
    /**
     *The origin account is frozen.
     */
    "Frozen": undefined;
    /**
     *The asset ID is already taken.
     */
    "InUse": undefined;
    /**
     *Invalid witness data given.
     */
    "BadWitness": undefined;
    /**
     *Minimum balance should be non-zero.
     */
    "MinBalanceZero": undefined;
    /**
     *Unable to increment the consumer reference counters on the account. Either no provider
     *reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
     *fewer then the maximum number of consumers has been reached.
     */
    "UnavailableConsumer": undefined;
    /**
     *Invalid metadata given.
     */
    "BadMetadata": undefined;
    /**
     *No approval exists that would allow the transfer.
     */
    "Unapproved": undefined;
    /**
     *The source account would not survive the transfer and it needs to stay alive.
     */
    "WouldDie": undefined;
    /**
     *The asset-account already exists.
     */
    "AlreadyExists": undefined;
    /**
     *The asset-account doesn't have an associated deposit.
     */
    "NoDeposit": undefined;
    /**
     *The operation would result in funds being burned.
     */
    "WouldBurn": undefined;
    /**
     *The asset is a live asset and is actively being used. Usually emit for operations such
     *as `start_destroy` which require the asset to be in a destroying state.
     */
    "LiveAsset": undefined;
    /**
     *The asset is not live, and likely being destroyed.
     */
    "AssetNotLive": undefined;
    /**
     *The asset status is not the expected status.
     */
    "IncorrectStatus": undefined;
    /**
     *The asset should be frozen before the given operation.
     */
    "NotFrozen": undefined;
    /**
     *Callback action resulted in error
     */
    "CallbackFailed": undefined;
    /**
     *The asset ID must be equal to the [`NextAssetId`].
     */
    "BadAssetId": undefined;
}>;
export type Ienq2ge2rhv4jm = AnonymousEnum<{
    /**
     *The signing account has no permission to do the operation.
     */
    "NoPermission": undefined;
    /**
     *The given item ID is unknown.
     */
    "UnknownCollection": undefined;
    /**
     *The item ID has already been used for an item.
     */
    "AlreadyExists": undefined;
    /**
     *The owner turned out to be different to what was expected.
     */
    "WrongOwner": undefined;
    /**
     *Invalid witness data given.
     */
    "BadWitness": undefined;
    /**
     *The item ID is already taken.
     */
    "InUse": undefined;
    /**
     *The item or collection is frozen.
     */
    "Frozen": undefined;
    /**
     *The delegate turned out to be different to what was expected.
     */
    "WrongDelegate": undefined;
    /**
     *There is no delegate approved.
     */
    "NoDelegate": undefined;
    /**
     *No approval exists that would allow the transfer.
     */
    "Unapproved": undefined;
    /**
     *The named owner has not signed ownership of the collection is acceptable.
     */
    "Unaccepted": undefined;
    /**
     *The item is locked.
     */
    "Locked": undefined;
    /**
     *All items have been minted.
     */
    "MaxSupplyReached": undefined;
    /**
     *The max supply has already been set.
     */
    "MaxSupplyAlreadySet": undefined;
    /**
     *The provided max supply is less to the amount of items a collection already has.
     */
    "MaxSupplyTooSmall": undefined;
    /**
     *The given item ID is unknown.
     */
    "UnknownItem": undefined;
    /**
     *Item is not for sale.
     */
    "NotForSale": undefined;
    /**
     *The provided bid is too low.
     */
    "BidTooLow": undefined;
}>;
export type I58r1150kmj18u = AnonymousEnum<{
    /**
     *The signing account has no permission to do the operation.
     */
    "NoPermission": undefined;
    /**
     *The given item ID is unknown.
     */
    "UnknownCollection": undefined;
    /**
     *The item ID has already been used for an item.
     */
    "AlreadyExists": undefined;
    /**
     *The approval had a deadline that expired, so the approval isn't valid anymore.
     */
    "ApprovalExpired": undefined;
    /**
     *The owner turned out to be different to what was expected.
     */
    "WrongOwner": undefined;
    /**
     *The witness data given does not match the current state of the chain.
     */
    "BadWitness": undefined;
    /**
     *Collection ID is already taken.
     */
    "CollectionIdInUse": undefined;
    /**
     *Items within that collection are non-transferable.
     */
    "ItemsNonTransferable": undefined;
    /**
     *The provided account is not a delegate.
     */
    "NotDelegate": undefined;
    /**
     *The delegate turned out to be different to what was expected.
     */
    "WrongDelegate": undefined;
    /**
     *No approval exists that would allow the transfer.
     */
    "Unapproved": undefined;
    /**
     *The named owner has not signed ownership acceptance of the collection.
     */
    "Unaccepted": undefined;
    /**
     *The item is locked (non-transferable).
     */
    "ItemLocked": undefined;
    /**
     *Item's attributes are locked.
     */
    "LockedItemAttributes": undefined;
    /**
     *Collection's attributes are locked.
     */
    "LockedCollectionAttributes": undefined;
    /**
     *Item's metadata is locked.
     */
    "LockedItemMetadata": undefined;
    /**
     *Collection's metadata is locked.
     */
    "LockedCollectionMetadata": undefined;
    /**
     *All items have been minted.
     */
    "MaxSupplyReached": undefined;
    /**
     *The max supply is locked and can't be changed.
     */
    "MaxSupplyLocked": undefined;
    /**
     *The provided max supply is less than the number of items a collection already has.
     */
    "MaxSupplyTooSmall": undefined;
    /**
     *The given item ID is unknown.
     */
    "UnknownItem": undefined;
    /**
     *Swap doesn't exist.
     */
    "UnknownSwap": undefined;
    /**
     *The given item has no metadata set.
     */
    "MetadataNotFound": undefined;
    /**
     *The provided attribute can't be found.
     */
    "AttributeNotFound": undefined;
    /**
     *Item is not for sale.
     */
    "NotForSale": undefined;
    /**
     *The provided bid is too low.
     */
    "BidTooLow": undefined;
    /**
     *The item has reached its approval limit.
     */
    "ReachedApprovalLimit": undefined;
    /**
     *The deadline has already expired.
     */
    "DeadlineExpired": undefined;
    /**
     *The duration provided should be less than or equal to `MaxDeadlineDuration`.
     */
    "WrongDuration": undefined;
    /**
     *The method is disabled by system settings.
     */
    "MethodDisabled": undefined;
    /**
     *The provided setting can't be set.
     */
    "WrongSetting": undefined;
    /**
     *Item's config already exists and should be equal to the provided one.
     */
    "InconsistentItemConfig": undefined;
    /**
     *Config for a collection or an item can't be found.
     */
    "NoConfig": undefined;
    /**
     *Some roles were not cleared.
     */
    "RolesNotCleared": undefined;
    /**
     *Mint has not started yet.
     */
    "MintNotStarted": undefined;
    /**
     *Mint has already ended.
     */
    "MintEnded": undefined;
    /**
     *The provided Item was already used for claiming.
     */
    "AlreadyClaimed": undefined;
    /**
     *The provided data is incorrect.
     */
    "IncorrectData": undefined;
    /**
     *The extrinsic was sent by the wrong origin.
     */
    "WrongOrigin": undefined;
    /**
     *The provided signature is incorrect.
     */
    "WrongSignature": undefined;
    /**
     *The provided metadata might be too long.
     */
    "IncorrectMetadata": undefined;
    /**
     *Can't set more attributes per one call.
     */
    "MaxAttributesLimitReached": undefined;
    /**
     *The provided namespace isn't supported in this call.
     */
    "WrongNamespace": undefined;
    /**
     *Can't delete non-empty collections.
     */
    "CollectionNotEmpty": undefined;
    /**
     *The witness data should be provided.
     */
    "WitnessRequired": undefined;
}>;
export type Ib24bvufha821j = AnonymousEnum<{
    /**
     *Asset ID does not correspond to locked NFT.
     */
    "IncorrectAssetId": undefined;
    /**
     *The signing account has no permission to do the operation.
     */
    "NoPermission": undefined;
    /**
     *NFT doesn't exist.
     */
    "NftNotFound": undefined;
    /**
     *NFT has not yet been fractionalised.
     */
    "NftNotFractionalized": undefined;
}>;
export type I4u78hb23uhvi2 = AnonymousEnum<{
    /**
     *Provided asset pair is not supported for pool.
     */
    "InvalidAssetPair": undefined;
    /**
     *Pool already exists.
     */
    "PoolExists": undefined;
    /**
     *Desired amount can't be zero.
     */
    "WrongDesiredAmount": undefined;
    /**
     *Provided amount should be greater than or equal to the existential deposit/asset's
     *minimal amount.
     */
    "AmountOneLessThanMinimal": undefined;
    /**
     *Provided amount should be greater than or equal to the existential deposit/asset's
     *minimal amount.
     */
    "AmountTwoLessThanMinimal": undefined;
    /**
     *Reserve needs to always be greater than or equal to the existential deposit/asset's
     *minimal amount.
     */
    "ReserveLeftLessThanMinimal": undefined;
    /**
     *Desired amount can't be equal to the pool reserve.
     */
    "AmountOutTooHigh": undefined;
    /**
     *The pool doesn't exist.
     */
    "PoolNotFound": undefined;
    /**
     *An overflow happened.
     */
    "Overflow": undefined;
    /**
     *The minimal amount requirement for the first token in the pair wasn't met.
     */
    "AssetOneDepositDidNotMeetMinimum": undefined;
    /**
     *The minimal amount requirement for the second token in the pair wasn't met.
     */
    "AssetTwoDepositDidNotMeetMinimum": undefined;
    /**
     *The minimal amount requirement for the first token in the pair wasn't met.
     */
    "AssetOneWithdrawalDidNotMeetMinimum": undefined;
    /**
     *The minimal amount requirement for the second token in the pair wasn't met.
     */
    "AssetTwoWithdrawalDidNotMeetMinimum": undefined;
    /**
     *Optimal calculated amount is less than desired.
     */
    "OptimalAmountLessThanDesired": undefined;
    /**
     *Insufficient liquidity minted.
     */
    "InsufficientLiquidityMinted": undefined;
    /**
     *Requested liquidity can't be zero.
     */
    "ZeroLiquidity": undefined;
    /**
     *Amount can't be zero.
     */
    "ZeroAmount": undefined;
    /**
     *Calculated amount out is less than provided minimum amount.
     */
    "ProvidedMinimumNotSufficientForSwap": undefined;
    /**
     *Provided maximum amount is not sufficient for swap.
     */
    "ProvidedMaximumNotSufficientForSwap": undefined;
    /**
     *The provided path must consists of 2 assets at least.
     */
    "InvalidPath": undefined;
    /**
     *The provided path must consists of unique assets.
     */
    "NonUniquePath": undefined;
    /**
     *It was not possible to get or increment the Id of the pool.
     */
    "IncorrectPoolAssetId": undefined;
    /**
     *The destination account cannot exist with the swapped funds.
     */
    "BelowMinimum": undefined;
}>;
export type I4dd4ctqfnk5kr = AnonymousEnum<{
    /**
     *Number of freezes on an account would exceed `MaxFreezes`.
     */
    "TooManyFreezes": undefined;
}>;
export type I1togkjovtjn9r = AnonymousEnum<{
    /**
     *Invalid schedule supplied, e.g. with zero weight of a basic operation.
     */
    "InvalidSchedule": undefined;
    /**
     *Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
     */
    "InvalidCallFlags": undefined;
    /**
     *The executed contract exhausted its gas limit.
     */
    "OutOfGas": undefined;
    /**
     *Performing the requested transfer failed. Probably because there isn't enough
     *free balance in the sender's account.
     */
    "TransferFailed": undefined;
    /**
     *Performing a call was denied because the calling depth reached the limit
     *of what is specified in the schedule.
     */
    "MaxCallDepthReached": undefined;
    /**
     *No contract was found at the specified address.
     */
    "ContractNotFound": undefined;
    /**
     *No code could be found at the supplied code hash.
     */
    "CodeNotFound": undefined;
    /**
     *No code info could be found at the supplied code hash.
     */
    "CodeInfoNotFound": undefined;
    /**
     *A buffer outside of sandbox memory was passed to a contract API function.
     */
    "OutOfBounds": undefined;
    /**
     *Input passed to a contract API function failed to decode as expected type.
     */
    "DecodingFailed": undefined;
    /**
     *Contract trapped during execution.
     */
    "ContractTrapped": undefined;
    /**
     *The size defined in `T::MaxValueSize` was exceeded.
     */
    "ValueTooLarge": undefined;
    /**
     *Termination of a contract is not allowed while the contract is already
     *on the call stack. Can be triggered by `seal_terminate`.
     */
    "TerminatedWhileReentrant": undefined;
    /**
     *`seal_call` forwarded this contracts input. It therefore is no longer available.
     */
    "InputForwarded": undefined;
    /**
     *The amount of topics passed to `seal_deposit_events` exceeds the limit.
     */
    "TooManyTopics": undefined;
    /**
     *The chain does not provide a chain extension. Calling the chain extension results
     *in this error. Note that this usually  shouldn't happen as deploying such contracts
     *is rejected.
     */
    "NoChainExtension": undefined;
    /**
     *Failed to decode the XCM program.
     */
    "XCMDecodeFailed": undefined;
    /**
     *A contract with the same AccountId already exists.
     */
    "DuplicateContract": undefined;
    /**
     *A contract self destructed in its constructor.
     *
     *This can be triggered by a call to `seal_terminate`.
     */
    "TerminatedInConstructor": undefined;
    /**
     *A call tried to invoke a contract that is flagged as non-reentrant.
     */
    "ReentranceDenied": undefined;
    /**
     *A contract called into the runtime which then called back into this pallet.
     */
    "ReenteredPallet": undefined;
    /**
     *A contract attempted to invoke a state modifying API while being in read-only mode.
     */
    "StateChangeDenied": undefined;
    /**
     *Origin doesn't have enough balance to pay the required storage deposits.
     */
    "StorageDepositNotEnoughFunds": undefined;
    /**
     *More storage was created than allowed by the storage deposit limit.
     */
    "StorageDepositLimitExhausted": undefined;
    /**
     *Code removal was denied because the code is still in use by at least one contract.
     */
    "CodeInUse": undefined;
    /**
     *The contract ran to completion but decided to revert its storage changes.
     *Please note that this error is only returned from extrinsics. When called directly
     *or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
     *to determine whether a reversion has taken place.
     */
    "ContractReverted": undefined;
    /**
     *The contract failed to compile or is missing the correct entry points.
     *
     *A more detailed error can be found on the node console if debug messages are enabled
     *by supplying `-lruntime::revive=debug`.
     */
    "CodeRejected": undefined;
    /**
     *The code blob supplied is larger than [`limits::code::BLOB_BYTES`].
     */
    "BlobTooLarge": undefined;
    /**
     *The static memory consumption of the blob will be larger than
     *[`limits::code::STATIC_MEMORY_BYTES`].
     */
    "StaticMemoryTooLarge": undefined;
    /**
     *The program contains a basic block that is larger than allowed.
     */
    "BasicBlockTooLarge": undefined;
    /**
     *The program contains an invalid instruction.
     */
    "InvalidInstruction": undefined;
    /**
     *The contract has reached its maximum number of delegate dependencies.
     */
    "MaxDelegateDependenciesReached": undefined;
    /**
     *The dependency was not found in the contract's delegate dependencies.
     */
    "DelegateDependencyNotFound": undefined;
    /**
     *The contract already depends on the given delegate dependency.
     */
    "DelegateDependencyAlreadyExists": undefined;
    /**
     *Can not add a delegate dependency to the code hash of the contract itself.
     */
    "CannotAddSelfAsDelegateDependency": undefined;
    /**
     *Can not add more data to transient storage.
     */
    "OutOfTransientStorage": undefined;
    /**
     *The contract tried to call a syscall which does not exist (at its current api level).
     */
    "InvalidSyscall": undefined;
    /**
     *Invalid storage flags were passed to one of the storage syscalls.
     */
    "InvalidStorageFlags": undefined;
    /**
     *PolkaVM failed during code execution. Probably due to a malformed program.
     */
    "ExecutionFailed": undefined;
    /**
     *Failed to convert a U256 to a Balance.
     */
    "BalanceConversionFailed": undefined;
    /**
     *Failed to convert an EVM balance to a native balance.
     */
    "DecimalPrecisionLoss": undefined;
    /**
     *Immutable data can only be set during deploys and only be read during calls.
     *Additionally, it is only valid to set the data once and it must not be empty.
     */
    "InvalidImmutableAccess": undefined;
    /**
     *An `AccountID32` account tried to interact with the pallet without having a mapping.
     *
     *Call [`Pallet::map_account`] in order to create a mapping for the account.
     */
    "AccountUnmapped": undefined;
    /**
     *Tried to map an account that is already mapped.
     */
    "AccountAlreadyMapped": undefined;
    /**
     *The transaction used to dry-run a contract is invalid.
     */
    "InvalidGenericTransaction": undefined;
    /**
     *The refcount of a code either over or underflowed.
     */
    "RefcountOverOrUnderflow": undefined;
}>;
export type I1vqs5qaqr6h6 = AnonymousEnum<{
    /**
     *The staker does not have enough tokens to perform the operation.
     */
    "NotEnoughTokens": undefined;
    /**
     *An operation was attempted on a non-existent pool.
     */
    "NonExistentPool": undefined;
    /**
     *An operation was attempted for a non-existent staker.
     */
    "NonExistentStaker": undefined;
    /**
     *An operation was attempted with a non-existent asset.
     */
    "NonExistentAsset": undefined;
    /**
     *There was an error converting a block number.
     */
    "BlockNumberConversionError": undefined;
    /**
     *The expiry block must be in the future.
     */
    "ExpiryBlockMustBeInTheFuture": undefined;
    /**
     *Insufficient funds to create the freeze.
     */
    "InsufficientFunds": undefined;
    /**
     *The expiry block can be only extended.
     */
    "ExpiryCut": undefined;
    /**
     *The reward rate per block can be only increased.
     */
    "RewardRateCut": undefined;
    /**
     *The pool still has staked tokens or rewards.
     */
    "NonEmptyPool": undefined;
}>;
export type I96objte63brjr = AnonymousEnum<{
    /**
     *Max signed limits not respected.
     */
    "MaxSignedLimits": undefined;
    /**
     *A key was longer than the configured maximum.
     *
     *This means that the migration halted at the current [`Progress`] and
     *can be resumed with a larger [`crate::Config::MaxKeyLen`] value.
     *Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.
     *The value should only be increased to avoid a storage migration for the currently
     *stored [`crate::Progress::LastKey`].
     */
    "KeyTooLong": undefined;
    /**
     *submitter does not have enough funds.
     */
    "NotEnoughFunds": undefined;
    /**
     *Bad witness data provided.
     */
    "BadWitness": undefined;
    /**
     *Signed migration is not allowed because the maximum limit is not set yet.
     */
    "SignedMigrationNotAllowed": undefined;
    /**
     *Bad child root provided.
     */
    "BadChildRoot": undefined;
}>;
export type I1t0slqjho4lh4 = AnonymousEnum<{
    /**
     *Provided asset pair is not supported for pool.
     */
    "InvalidAssetPair": undefined;
    /**
     *The pool doesn't exist.
     */
    "PoolNotFound": undefined;
    /**
     *Pool's balance cannot be zero.
     */
    "ZeroBalance": undefined;
    /**
     *Indicates a partial transfer of balance to the new account during a migration.
     */
    "PartialTransfer": undefined;
}>;
export type TokenError = Enum<{
    "FundsUnavailable": undefined;
    "OnlyProvider": undefined;
    "BelowMinimum": undefined;
    "CannotCreate": undefined;
    "UnknownAsset": undefined;
    "Frozen": undefined;
    "Unsupported": undefined;
    "CannotCreateHold": undefined;
    "NotExpendable": undefined;
    "Blocked": undefined;
}>;
export declare const TokenError: GetEnum<TokenError>;
export type ArithmeticError = Enum<{
    "Underflow": undefined;
    "Overflow": undefined;
    "DivisionByZero": undefined;
}>;
export declare const ArithmeticError: GetEnum<ArithmeticError>;
export type TransactionalError = Enum<{
    "LimitReached": undefined;
    "NoLayer": undefined;
}>;
export declare const TransactionalError: GetEnum<TransactionalError>;
export type Idh4cj79bvroj8 = AnonymousEnum<{
    "InvalidStateRoot": undefined;
    "IncompleteDatabase": undefined;
    "ValueAtIncompleteKey": undefined;
    "DecoderError": undefined;
    "InvalidHash": undefined;
    "DuplicateKey": undefined;
    "ExtraneousNode": undefined;
    "ExtraneousValue": undefined;
    "ExtraneousHashReference": undefined;
    "InvalidChildReference": undefined;
    "ValueMismatch": undefined;
    "IncompleteProof": undefined;
    "RootMismatch": undefined;
    "DecodeError": undefined;
}>;
export type Icbccs0ug47ilf = {
    "account": SS58String;
};
export type I855j4i3kr8ko1 = {
    "sender": SS58String;
    "hash": FixedSizeBinary<32>;
};
export type Ibgl04rn6nbfm6 = {
    "code_hash": FixedSizeBinary<32>;
    "check_version": boolean;
};
export type Icbsekf57miplo = AnonymousEnum<{
    /**
     *The validation function has been scheduled to apply.
     */
    "ValidationFunctionStored": undefined;
    /**
     *The validation function was applied as of the contained relay chain block number.
     */
    "ValidationFunctionApplied": Anonymize<Idd7hd99u0ho0n>;
    /**
     *The relay-chain aborted the upgrade process.
     */
    "ValidationFunctionDiscarded": undefined;
    /**
     *Some downward messages have been received and will be processed.
     */
    "DownwardMessagesReceived": Anonymize<Iafscmv8tjf0ou>;
    /**
     *Downward messages were processed using the given weight.
     */
    "DownwardMessagesProcessed": Anonymize<I100l07kaehdlp>;
    /**
     *An upward message was sent to the relay chain.
     */
    "UpwardMessageSent": Anonymize<I6gnbnvip5vvdi>;
}>;
export type Idd7hd99u0ho0n = {
    "relay_chain_block_num": number;
};
export type Iafscmv8tjf0ou = {
    "count": number;
};
export type I100l07kaehdlp = {
    "weight_used": Anonymize<I4q39t5hn830vp>;
    "dmq_head": FixedSizeBinary<32>;
};
export type I6gnbnvip5vvdi = {
    "message_hash"?: Anonymize<I4s6vifaf8k998>;
};
export type I4s6vifaf8k998 = (FixedSizeBinary<32>) | undefined;
export type I94co7vj7h6bo = AnonymousEnum<{
    /**
     *A Runtime upgrade started.
     *
     *Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
     */
    "UpgradeStarted": Anonymize<If1co0pilmi7oq>;
    /**
     *The current runtime upgrade completed.
     *
     *This implies that all of its migrations completed successfully as well.
     */
    "UpgradeCompleted": undefined;
    /**
     *Runtime upgrade failed.
     *
     *This is very bad and will require governance intervention.
     */
    "UpgradeFailed": undefined;
    /**
     *A migration was skipped since it was already executed in the past.
     */
    "MigrationSkipped": Anonymize<I666bl2fqjkejo>;
    /**
     *A migration progressed.
     */
    "MigrationAdvanced": Anonymize<Iae74gjak1qibn>;
    /**
     *A Migration completed.
     */
    "MigrationCompleted": Anonymize<Iae74gjak1qibn>;
    /**
     *A Migration failed.
     *
     *This implies that the whole upgrade failed and governance intervention is required.
     */
    "MigrationFailed": Anonymize<Iae74gjak1qibn>;
    /**
     *The set of historical migrations has been cleared.
     */
    "HistoricCleared": Anonymize<I3escdojpj0551>;
}>;
export type If1co0pilmi7oq = {
    /**
     *The number of migrations that this upgrade contains.
     *
     *This can be used to design a progress indicator in combination with counting the
     *`MigrationCompleted` and `MigrationSkipped` events.
     */
    "migrations": number;
};
export type I666bl2fqjkejo = {
    /**
     *The index of the skipped migration within the [`Config::Migrations`] list.
     */
    "index": number;
};
export type Iae74gjak1qibn = {
    /**
     *The index of the migration within the [`Config::Migrations`] list.
     */
    "index": number;
    /**
     *The number of blocks that this migration took so far.
     */
    "took": number;
};
export type I3escdojpj0551 = {
    /**
     *Should be passed to `clear_historic` in a successive call.
     */
    "next_cursor"?: Anonymize<Iabpgqcjikia83>;
};
export type Iabpgqcjikia83 = (Binary) | undefined;
export type Iao8h4hv7atnq3 = AnonymousEnum<{
    /**
     *An account was created with some free balance.
     */
    "Endowed": Anonymize<Icv68aq8841478>;
    /**
     *An account was removed whose balance was non-zero but below ExistentialDeposit,
     *resulting in an outright loss.
     */
    "DustLost": Anonymize<Ic262ibdoec56a>;
    /**
     *Transfer succeeded.
     */
    "Transfer": Anonymize<Iflcfm9b6nlmdd>;
    /**
     *A balance was set by root.
     */
    "BalanceSet": Anonymize<Ijrsf4mnp3eka>;
    /**
     *Some balance was reserved (moved from free to reserved).
     */
    "Reserved": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some balance was unreserved (moved from reserved to free).
     */
    "Unreserved": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some balance was moved from the reserve of the first account to the second account.
     *Final argument indicates the destination balance type.
     */
    "ReserveRepatriated": Anonymize<I8tjvj9uq4b7hi>;
    /**
     *Some amount was deposited (e.g. for transaction fees).
     */
    "Deposit": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    "Withdraw": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some amount was removed from the account (e.g. for misbehavior).
     */
    "Slashed": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some amount was minted into an account.
     */
    "Minted": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some amount was burned from an account.
     */
    "Burned": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some amount was suspended from an account (it can be restored later).
     */
    "Suspended": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some amount was restored into an account.
     */
    "Restored": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *An account was upgraded.
     */
    "Upgraded": Anonymize<I4cbvqmqadhrea>;
    /**
     *Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    "Issued": Anonymize<I3qt1hgg4djhgb>;
    /**
     *Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    "Rescinded": Anonymize<I3qt1hgg4djhgb>;
    /**
     *Some balance was locked.
     */
    "Locked": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some balance was unlocked.
     */
    "Unlocked": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some balance was frozen.
     */
    "Frozen": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *Some balance was thawed.
     */
    "Thawed": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *The `TotalIssuance` was forcefully changed.
     */
    "TotalIssuanceForced": Anonymize<I4fooe9dun9o0t>;
}>;
export type Icv68aq8841478 = {
    "account": SS58String;
    "free_balance": bigint;
};
export type Ic262ibdoec56a = {
    "account": SS58String;
    "amount": bigint;
};
export type Iflcfm9b6nlmdd = {
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
};
export type Ijrsf4mnp3eka = {
    "who": SS58String;
    "free": bigint;
};
export type Id5fm4p8lj5qgi = {
    "who": SS58String;
    "amount": bigint;
};
export type I8tjvj9uq4b7hi = {
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
    "destination_status": BalanceStatus;
};
export type BalanceStatus = Enum<{
    "Free": undefined;
    "Reserved": undefined;
}>;
export declare const BalanceStatus: GetEnum<BalanceStatus>;
export type I4cbvqmqadhrea = {
    "who": SS58String;
};
export type I3qt1hgg4djhgb = {
    "amount": bigint;
};
export type I4fooe9dun9o0t = {
    "old": bigint;
    "new": bigint;
};
export type TransactionPaymentEvent = Enum<{
    /**
     *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     *has been paid by `who`.
     */
    "TransactionFeePaid": Anonymize<Ier2cke86dqbr2>;
}>;
export declare const TransactionPaymentEvent: GetEnum<TransactionPaymentEvent>;
export type Ier2cke86dqbr2 = {
    "who": SS58String;
    "actual_fee": bigint;
    "tip": bigint;
};
export type I78bosroad52fa = AnonymousEnum<{
    /**
     *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     *has been paid by `who` in an asset `asset_id`.
     */
    "AssetTxFeePaid": Anonymize<Imhre0s2vm68p>;
    /**
     *A swap of the refund in native currency back to asset failed.
     */
    "AssetRefundFailed": Anonymize<Icjchvrijclvlv>;
}>;
export type Imhre0s2vm68p = {
    "who": SS58String;
    "actual_fee": bigint;
    "tip": bigint;
    "asset_id": Anonymize<If9iqq7i64mur8>;
};
export type If9iqq7i64mur8 = {
    "parents": number;
    "interior": XcmV5Junctions;
};
export type XcmV5Junctions = Enum<{
    "Here": undefined;
    "X1": XcmV5Junction;
    "X2": Anonymize<I279b0st0go8pj>;
    "X3": Anonymize<I8t3509dftknlg>;
    "X4": Anonymize<Iegifjnm8bgl6n>;
    "X5": Anonymize<Ic40rerdemoe3f>;
    "X6": Anonymize<Ieehae2qh5qhrv>;
    "X7": Anonymize<I1pmgeuqv3eom3>;
    "X8": Anonymize<I32k80jnq35fij>;
}>;
export declare const XcmV5Junctions: GetEnum<XcmV5Junctions>;
export type XcmV5Junction = Enum<{
    "Parachain": number;
    "AccountId32": Anonymize<I303u17k2gp1si>;
    "AccountIndex64": Anonymize<Iejvsa7fje7ib3>;
    "AccountKey20": Anonymize<Icmn90ot6tcot8>;
    "PalletInstance": number;
    "GeneralIndex": bigint;
    "GeneralKey": Anonymize<I15lht6t53odo4>;
    "OnlyChild": undefined;
    "Plurality": Anonymize<I518fbtnclg1oc>;
    "GlobalConsensus": XcmV5NetworkId;
}>;
export declare const XcmV5Junction: GetEnum<XcmV5Junction>;
export type I303u17k2gp1si = {
    "network"?: Anonymize<I97pd2rst02a7r>;
    "id": FixedSizeBinary<32>;
};
export type I97pd2rst02a7r = (XcmV5NetworkId) | undefined;
export type XcmV5NetworkId = Enum<{
    "ByGenesis": FixedSizeBinary<32>;
    "ByFork": Anonymize<I15vf5oinmcgps>;
    "Polkadot": undefined;
    "Kusama": undefined;
    "Ethereum": Anonymize<I623eo8t3jrbeo>;
    "BitcoinCore": undefined;
    "BitcoinCash": undefined;
    "PolkadotBulletin": undefined;
}>;
export declare const XcmV5NetworkId: GetEnum<XcmV5NetworkId>;
export type I15vf5oinmcgps = {
    "block_number": bigint;
    "block_hash": FixedSizeBinary<32>;
};
export type I623eo8t3jrbeo = {
    "chain_id": bigint;
};
export type Iejvsa7fje7ib3 = {
    "network"?: Anonymize<I97pd2rst02a7r>;
    "index": bigint;
};
export type Icmn90ot6tcot8 = {
    "network"?: Anonymize<I97pd2rst02a7r>;
    "key": FixedSizeBinary<20>;
};
export type I15lht6t53odo4 = {
    "length": number;
    "data": FixedSizeBinary<32>;
};
export type I518fbtnclg1oc = {
    "id": XcmV3JunctionBodyId;
    "part": XcmV2JunctionBodyPart;
};
export type XcmV3JunctionBodyId = Enum<{
    "Unit": undefined;
    "Moniker": FixedSizeBinary<4>;
    "Index": number;
    "Executive": undefined;
    "Technical": undefined;
    "Legislative": undefined;
    "Judicial": undefined;
    "Defense": undefined;
    "Administration": undefined;
    "Treasury": undefined;
}>;
export declare const XcmV3JunctionBodyId: GetEnum<XcmV3JunctionBodyId>;
export type XcmV2JunctionBodyPart = Enum<{
    "Voice": undefined;
    "Members": Anonymize<Iafscmv8tjf0ou>;
    "Fraction": Anonymize<Idif02efq16j92>;
    "AtLeastProportion": Anonymize<Idif02efq16j92>;
    "MoreThanProportion": Anonymize<Idif02efq16j92>;
}>;
export declare const XcmV2JunctionBodyPart: GetEnum<XcmV2JunctionBodyPart>;
export type Idif02efq16j92 = {
    "nom": number;
    "denom": number;
};
export type I279b0st0go8pj = FixedSizeArray<2, XcmV5Junction>;
export type I8t3509dftknlg = FixedSizeArray<3, XcmV5Junction>;
export type Iegifjnm8bgl6n = FixedSizeArray<4, XcmV5Junction>;
export type Ic40rerdemoe3f = FixedSizeArray<5, XcmV5Junction>;
export type Ieehae2qh5qhrv = FixedSizeArray<6, XcmV5Junction>;
export type I1pmgeuqv3eom3 = FixedSizeArray<7, XcmV5Junction>;
export type I32k80jnq35fij = FixedSizeArray<8, XcmV5Junction>;
export type Icjchvrijclvlv = {
    "native_amount_kept": bigint;
};
export type I4srakrmf0fspo = AnonymousEnum<{
    /**
     *New Invulnerables were set.
     */
    "NewInvulnerables": Anonymize<I39t01nnod9109>;
    /**
     *A new Invulnerable was added.
     */
    "InvulnerableAdded": Anonymize<I6v8sm60vvkmk7>;
    /**
     *An Invulnerable was removed.
     */
    "InvulnerableRemoved": Anonymize<I6v8sm60vvkmk7>;
    /**
     *The number of desired candidates was set.
     */
    "NewDesiredCandidates": Anonymize<I1qmtmbe5so8r3>;
    /**
     *The candidacy bond was set.
     */
    "NewCandidacyBond": Anonymize<Ih99m6ehpcar7>;
    /**
     *A new candidate joined.
     */
    "CandidateAdded": Anonymize<Idgorhsbgdq2ap>;
    /**
     *Bond of a candidate updated.
     */
    "CandidateBondUpdated": Anonymize<Idgorhsbgdq2ap>;
    /**
     *A candidate was removed.
     */
    "CandidateRemoved": Anonymize<I6v8sm60vvkmk7>;
    /**
     *An account was replaced in the candidate list by another one.
     */
    "CandidateReplaced": Anonymize<I9ubb2kqevnu6t>;
    /**
     *An account was unable to be added to the Invulnerables because they did not have keys
     *registered. Other Invulnerables may have been set.
     */
    "InvalidInvulnerableSkipped": Anonymize<I6v8sm60vvkmk7>;
}>;
export type I39t01nnod9109 = {
    "invulnerables": Anonymize<Ia2lhg7l2hilo3>;
};
export type Ia2lhg7l2hilo3 = Array<SS58String>;
export type I6v8sm60vvkmk7 = {
    "account_id": SS58String;
};
export type I1qmtmbe5so8r3 = {
    "desired_candidates": number;
};
export type Ih99m6ehpcar7 = {
    "bond_amount": bigint;
};
export type Idgorhsbgdq2ap = {
    "account_id": SS58String;
    "deposit": bigint;
};
export type I9ubb2kqevnu6t = {
    "old": SS58String;
    "new": SS58String;
    "deposit": bigint;
};
export type SessionEvent = Enum<{
    /**
     *New session has happened. Note that the argument is the session index, not the
     *block number as the type might suggest.
     */
    "NewSession": Anonymize<I2hq50pu2kdjpo>;
}>;
export declare const SessionEvent: GetEnum<SessionEvent>;
export type I2hq50pu2kdjpo = {
    "session_index": number;
};
export type Idsqc7mhp6nnle = AnonymousEnum<{
    /**
     *An HRMP message was sent to a sibling parachain.
     */
    "XcmpMessageSent": Anonymize<I137t1cld92pod>;
}>;
export type I137t1cld92pod = {
    "message_hash": FixedSizeBinary<32>;
};
export type Iel5f66clbekc3 = AnonymousEnum<{
    /**
     *Execution of an XCM message was attempted.
     */
    "Attempted": Anonymize<Ia72eet39sf8j9>;
    /**
     *A XCM message was sent.
     */
    "Sent": Anonymize<If8u5kl4h8070m>;
    /**
     *Query response received which does not match a registered query. This may be because a
     *matching query was never registered, it may be because it is a duplicate response, or
     *because the query timed out.
     */
    "UnexpectedResponse": Anonymize<Icl7nl1rfeog3i>;
    /**
     *Query response has been received and is ready for taking with `take_response`. There is
     *no registered notification call.
     */
    "ResponseReady": Anonymize<Iasr6pj6shs0fl>;
    /**
     *Query response has been received and query is removed. The registered notification has
     *been dispatched and executed successfully.
     */
    "Notified": Anonymize<I2uqmls7kcdnii>;
    /**
     *Query response has been received and query is removed. The registered notification
     *could not be dispatched because the dispatch weight is greater than the maximum weight
     *originally budgeted by this runtime for the query result.
     */
    "NotifyOverweight": Anonymize<Idg69klialbkb8>;
    /**
     *Query response has been received and query is removed. There was a general error with
     *dispatching the notification call.
     */
    "NotifyDispatchError": Anonymize<I2uqmls7kcdnii>;
    /**
     *Query response has been received and query is removed. The dispatch was unable to be
     *decoded into a `Call`; this might be due to dispatch function having a signature which
     *is not `(origin, QueryId, Response)`.
     */
    "NotifyDecodeFailed": Anonymize<I2uqmls7kcdnii>;
    /**
     *Expected query response has been received but the origin location of the response does
     *not match that expected. The query remains registered for a later, valid, response to
     *be received and acted upon.
     */
    "InvalidResponder": Anonymize<I7r6b7145022pp>;
    /**
     *Expected query response has been received but the expected origin location placed in
     *storage by this runtime previously cannot be decoded. The query remains registered.
     *
     *This is unexpected (since a location placed in storage in a previously executing
     *runtime should be readable prior to query timeout) and dangerous since the possibly
     *valid response will be dropped. Manual governance intervention is probably going to be
     *needed.
     */
    "InvalidResponderVersion": Anonymize<Icl7nl1rfeog3i>;
    /**
     *Received query response has been read and removed.
     */
    "ResponseTaken": Anonymize<I30pg328m00nr3>;
    /**
     *Some assets have been placed in an asset trap.
     */
    "AssetsTrapped": Anonymize<Icmrn7bogp28cs>;
    /**
     *An XCM version change notification message has been attempted to be sent.
     *
     *The cost of sending it (borne by the chain) is included.
     */
    "VersionChangeNotified": Anonymize<I7m9b5plj4h5ot>;
    /**
     *The supported version of a location has been changed. This might be through an
     *automatic notification or a manual intervention.
     */
    "SupportedVersionChanged": Anonymize<I9kt8c221c83ln>;
    /**
     *A given location which had a version change subscription was dropped owing to an error
     *sending the notification to it.
     */
    "NotifyTargetSendFail": Anonymize<I9onhk772nfs4f>;
    /**
     *A given location which had a version change subscription was dropped owing to an error
     *migrating the location to our new XCM format.
     */
    "NotifyTargetMigrationFail": Anonymize<I3l6bnksrmt56r>;
    /**
     *Expected query response has been received but the expected querier location placed in
     *storage by this runtime previously cannot be decoded. The query remains registered.
     *
     *This is unexpected (since a location placed in storage in a previously executing
     *runtime should be readable prior to query timeout) and dangerous since the possibly
     *valid response will be dropped. Manual governance intervention is probably going to be
     *needed.
     */
    "InvalidQuerierVersion": Anonymize<Icl7nl1rfeog3i>;
    /**
     *Expected query response has been received but the querier location of the response does
     *not match the expected. The query remains registered for a later, valid, response to
     *be received and acted upon.
     */
    "InvalidQuerier": Anonymize<Idh09k0l2pmdcg>;
    /**
     *A remote has requested XCM version change notification from us and we have honored it.
     *A version information message is sent to them and its cost is included.
     */
    "VersionNotifyStarted": Anonymize<I7uoiphbm0tj4r>;
    /**
     *We have requested that a remote chain send us XCM version change notifications.
     */
    "VersionNotifyRequested": Anonymize<I7uoiphbm0tj4r>;
    /**
     *We have requested that a remote chain stops sending us XCM version change
     *notifications.
     */
    "VersionNotifyUnrequested": Anonymize<I7uoiphbm0tj4r>;
    /**
     *Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    "FeesPaid": Anonymize<I512p1n7qt24l8>;
    /**
     *Some assets have been claimed from an asset trap
     */
    "AssetsClaimed": Anonymize<Icmrn7bogp28cs>;
    /**
     *A XCM version migration finished.
     */
    "VersionMigrationFinished": Anonymize<I6s1nbislhk619>;
}>;
export type Ia72eet39sf8j9 = {
    "outcome": Anonymize<I6uq5gb4s805s7>;
};
export type I6uq5gb4s805s7 = AnonymousEnum<{
    "Complete": Anonymize<I30iff2d192eu7>;
    "Incomplete": Anonymize<I4bs14miklcn3h>;
    "Error": Anonymize<Iflkd2j467575k>;
}>;
export type I30iff2d192eu7 = {
    "used": Anonymize<I4q39t5hn830vp>;
};
export type I4bs14miklcn3h = {
    "used": Anonymize<I4q39t5hn830vp>;
    "error": Anonymize<Id56rgs0bdb7gl>;
};
export type Id56rgs0bdb7gl = AnonymousEnum<{
    "Overflow": undefined;
    "Unimplemented": undefined;
    "UntrustedReserveLocation": undefined;
    "UntrustedTeleportLocation": undefined;
    "LocationFull": undefined;
    "LocationNotInvertible": undefined;
    "BadOrigin": undefined;
    "InvalidLocation": undefined;
    "AssetNotFound": undefined;
    "FailedToTransactAsset": undefined;
    "NotWithdrawable": undefined;
    "LocationCannotHold": undefined;
    "ExceedsMaxMessageSize": undefined;
    "DestinationUnsupported": undefined;
    "Transport": undefined;
    "Unroutable": undefined;
    "UnknownClaim": undefined;
    "FailedToDecode": undefined;
    "MaxWeightInvalid": undefined;
    "NotHoldingFees": undefined;
    "TooExpensive": undefined;
    "Trap": bigint;
    "ExpectationFalse": undefined;
    "PalletNotFound": undefined;
    "NameMismatch": undefined;
    "VersionIncompatible": undefined;
    "HoldingWouldOverflow": undefined;
    "ExportError": undefined;
    "ReanchorFailed": undefined;
    "NoDeal": undefined;
    "FeesNotMet": undefined;
    "LockError": undefined;
    "NoPermission": undefined;
    "Unanchored": undefined;
    "NotDepositable": undefined;
    "TooManyAssets": undefined;
    "UnhandledXcmVersion": undefined;
    "WeightLimitReached": Anonymize<I4q39t5hn830vp>;
    "Barrier": undefined;
    "WeightNotComputable": undefined;
    "ExceedsStackLimit": undefined;
}>;
export type Iflkd2j467575k = {
    "error": Anonymize<Id56rgs0bdb7gl>;
};
export type If8u5kl4h8070m = {
    "origin": Anonymize<If9iqq7i64mur8>;
    "destination": Anonymize<If9iqq7i64mur8>;
    "message": Anonymize<Ict03eedr8de9s>;
    "message_id": FixedSizeBinary<32>;
};
export type Ict03eedr8de9s = Array<XcmV5Instruction>;
export type XcmV5Instruction = Enum<{
    "WithdrawAsset": Anonymize<I4npjalvhmfuj>;
    "ReserveAssetDeposited": Anonymize<I4npjalvhmfuj>;
    "ReceiveTeleportedAsset": Anonymize<I4npjalvhmfuj>;
    "QueryResponse": Anonymize<I7lviboj0crq1q>;
    "TransferAsset": Anonymize<Ia4uoqg6e605nj>;
    "TransferReserveAsset": Anonymize<I9u1fdlf66htce>;
    "Transact": Anonymize<I1b8drcbbicg14>;
    "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>;
    "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>;
    "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>;
    "ClearOrigin": undefined;
    "DescendOrigin": XcmV5Junctions;
    "ReportError": Anonymize<I6vsmh07hrp1rc>;
    "DepositAsset": Anonymize<I81oo73d6i5279>;
    "DepositReserveAsset": Anonymize<I5patag90o6n2g>;
    "ExchangeAsset": Anonymize<I2ga96bjhsjqmo>;
    "InitiateReserveWithdraw": Anonymize<I73lqp53eureh4>;
    "InitiateTeleport": Anonymize<I5patag90o6n2g>;
    "ReportHolding": Anonymize<Ifti8mofggqket>;
    "BuyExecution": Anonymize<I491l3ihqncggf>;
    "RefundSurplus": undefined;
    "SetErrorHandler": Anonymize<Ict03eedr8de9s>;
    "SetAppendix": Anonymize<Ict03eedr8de9s>;
    "ClearError": undefined;
    "ClaimAsset": Anonymize<I2felkchmfl53m>;
    "Trap": bigint;
    "SubscribeVersion": Anonymize<Ieprdqqu7ildvr>;
    "UnsubscribeVersion": undefined;
    "BurnAsset": Anonymize<I4npjalvhmfuj>;
    "ExpectAsset": Anonymize<I4npjalvhmfuj>;
    "ExpectOrigin"?: Anonymize<I4pai6qnfk426l>;
    "ExpectError"?: Anonymize<I3l6ejee750fv1>;
    "ExpectTransactStatus": XcmV3MaybeErrorCode;
    "QueryPallet": Anonymize<Ie5blkq940nvkd>;
    "ExpectPallet": Anonymize<Id7mf37dkpgfjs>;
    "ReportTransactStatus": Anonymize<I6vsmh07hrp1rc>;
    "ClearTransactStatus": undefined;
    "UniversalOrigin": XcmV5Junction;
    "ExportMessage": Anonymize<I46338r4f4c3gj>;
    "LockAsset": Anonymize<Idsbn0vvkhdj4i>;
    "UnlockAsset": Anonymize<I70l2gii2hrbik>;
    "NoteUnlockable": Anonymize<I4d5rrublaq1fn>;
    "RequestUnlock": Anonymize<Imh2n1s2lr5v4>;
    "SetFeesMode": Anonymize<I4nae9rsql8fa7>;
    "SetTopic": FixedSizeBinary<32>;
    "ClearTopic": undefined;
    "AliasOrigin": Anonymize<If9iqq7i64mur8>;
    "UnpaidExecution": Anonymize<I6apoeqjvad59g>;
    "PayFees": Anonymize<I9btmbcvj13kgi>;
    "InitiateTransfer": Anonymize<I2e7qiqdb7vvnq>;
    "ExecuteWithOrigin": Anonymize<Icvu0u7vrbur4e>;
    "SetHints": Anonymize<I3po4d1m5647ct>;
}>;
export declare const XcmV5Instruction: GetEnum<XcmV5Instruction>;
export type I4npjalvhmfuj = Array<Anonymize<Iffh1nc5e1mod6>>;
export type Iffh1nc5e1mod6 = {
    "id": Anonymize<If9iqq7i64mur8>;
    "fun": XcmV3MultiassetFungibility;
};
export type XcmV3MultiassetFungibility = Enum<{
    "Fungible": bigint;
    "NonFungible": XcmV3MultiassetAssetInstance;
}>;
export declare const XcmV3MultiassetFungibility: GetEnum<XcmV3MultiassetFungibility>;
export type XcmV3MultiassetAssetInstance = Enum<{
    "Undefined": undefined;
    "Index": bigint;
    "Array4": FixedSizeBinary<4>;
    "Array8": FixedSizeBinary<8>;
    "Array16": FixedSizeBinary<16>;
    "Array32": FixedSizeBinary<32>;
}>;
export declare const XcmV3MultiassetAssetInstance: GetEnum<XcmV3MultiassetAssetInstance>;
export type I7lviboj0crq1q = {
    "query_id": bigint;
    "response": Anonymize<I7vucpgm2c6959>;
    "max_weight": Anonymize<I4q39t5hn830vp>;
    "querier"?: Anonymize<I4pai6qnfk426l>;
};
export type I7vucpgm2c6959 = AnonymousEnum<{
    "Null": undefined;
    "Assets": Anonymize<I4npjalvhmfuj>;
    "ExecutionResult"?: Anonymize<I3l6ejee750fv1>;
    "Version": number;
    "PalletsInfo": Anonymize<I599u7h20b52at>;
    "DispatchResult": XcmV3MaybeErrorCode;
}>;
export type I3l6ejee750fv1 = (Anonymize<Ia1dtsqe0g5uqn>) | undefined;
export type Ia1dtsqe0g5uqn = [number, Anonymize<Id56rgs0bdb7gl>];
export type I599u7h20b52at = Array<Anonymize<Ift5r9b1bvoh16>>;
export type Ift5r9b1bvoh16 = {
    "index": number;
    "name": Binary;
    "module_name": Binary;
    "major": number;
    "minor": number;
    "patch": number;
};
export type XcmV3MaybeErrorCode = Enum<{
    "Success": undefined;
    "Error": Binary;
    "TruncatedError": Binary;
}>;
export declare const XcmV3MaybeErrorCode: GetEnum<XcmV3MaybeErrorCode>;
export type I4pai6qnfk426l = (Anonymize<If9iqq7i64mur8>) | undefined;
export type Ia4uoqg6e605nj = {
    "assets": Anonymize<I4npjalvhmfuj>;
    "beneficiary": Anonymize<If9iqq7i64mur8>;
};
export type I9u1fdlf66htce = {
    "assets": Anonymize<I4npjalvhmfuj>;
    "dest": Anonymize<If9iqq7i64mur8>;
    "xcm": Anonymize<Ict03eedr8de9s>;
};
export type I1b8drcbbicg14 = {
    "origin_kind": XcmV2OriginKind;
    "fallback_max_weight"?: Anonymize<Iasb8k6ash5mjn>;
    "call": Binary;
};
export type XcmV2OriginKind = Enum<{
    "Native": undefined;
    "SovereignAccount": undefined;
    "Superuser": undefined;
    "Xcm": undefined;
}>;
export declare const XcmV2OriginKind: GetEnum<XcmV2OriginKind>;
export type Iasb8k6ash5mjn = (Anonymize<I4q39t5hn830vp>) | undefined;
export type I5uhhrjqfuo4e5 = {
    "sender": number;
    "max_message_size": number;
    "max_capacity": number;
};
export type Ifij4jam0o7sub = {
    "recipient": number;
};
export type Ieeb4svd9i8fji = {
    "initiator": number;
    "sender": number;
    "recipient": number;
};
export type I6vsmh07hrp1rc = {
    "destination": Anonymize<If9iqq7i64mur8>;
    "query_id": bigint;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type I81oo73d6i5279 = {
    "assets": XcmV5AssetFilter;
    "beneficiary": Anonymize<If9iqq7i64mur8>;
};
export type XcmV5AssetFilter = Enum<{
    "Definite": Anonymize<I4npjalvhmfuj>;
    "Wild": XcmV5WildAsset;
}>;
export declare const XcmV5AssetFilter: GetEnum<XcmV5AssetFilter>;
export type XcmV5WildAsset = Enum<{
    "All": undefined;
    "AllOf": Anonymize<I3ufm9dj6id8cd>;
    "AllCounted": number;
    "AllOfCounted": Anonymize<Ibobri3ld2tm8f>;
}>;
export declare const XcmV5WildAsset: GetEnum<XcmV5WildAsset>;
export type I3ufm9dj6id8cd = {
    "id": Anonymize<If9iqq7i64mur8>;
    "fun": XcmV2MultiassetWildFungibility;
};
export type XcmV2MultiassetWildFungibility = Enum<{
    "Fungible": undefined;
    "NonFungible": undefined;
}>;
export declare const XcmV2MultiassetWildFungibility: GetEnum<XcmV2MultiassetWildFungibility>;
export type Ibobri3ld2tm8f = {
    "id": Anonymize<If9iqq7i64mur8>;
    "fun": XcmV2MultiassetWildFungibility;
    "count": number;
};
export type I5patag90o6n2g = {
    "assets": XcmV5AssetFilter;
    "dest": Anonymize<If9iqq7i64mur8>;
    "xcm": Anonymize<Ict03eedr8de9s>;
};
export type I2ga96bjhsjqmo = {
    "give": XcmV5AssetFilter;
    "want": Anonymize<I4npjalvhmfuj>;
    "maximal": boolean;
};
export type I73lqp53eureh4 = {
    "assets": XcmV5AssetFilter;
    "reserve": Anonymize<If9iqq7i64mur8>;
    "xcm": Anonymize<Ict03eedr8de9s>;
};
export type Ifti8mofggqket = {
    "response_info": Anonymize<I6vsmh07hrp1rc>;
    "assets": XcmV5AssetFilter;
};
export type I491l3ihqncggf = {
    "fees": Anonymize<Iffh1nc5e1mod6>;
    "weight_limit": XcmV3WeightLimit;
};
export type XcmV3WeightLimit = Enum<{
    "Unlimited": undefined;
    "Limited": Anonymize<I4q39t5hn830vp>;
}>;
export declare const XcmV3WeightLimit: GetEnum<XcmV3WeightLimit>;
export type I2felkchmfl53m = {
    "assets": Anonymize<I4npjalvhmfuj>;
    "ticket": Anonymize<If9iqq7i64mur8>;
};
export type Ieprdqqu7ildvr = {
    "query_id": bigint;
    "max_response_weight": Anonymize<I4q39t5hn830vp>;
};
export type Ie5blkq940nvkd = {
    "module_name": Binary;
    "response_info": Anonymize<I6vsmh07hrp1rc>;
};
export type Id7mf37dkpgfjs = {
    "index": number;
    "name": Binary;
    "module_name": Binary;
    "crate_major": number;
    "min_crate_minor": number;
};
export type I46338r4f4c3gj = {
    "network": XcmV5NetworkId;
    "destination": XcmV5Junctions;
    "xcm": Anonymize<Ict03eedr8de9s>;
};
export type Idsbn0vvkhdj4i = {
    "asset": Anonymize<Iffh1nc5e1mod6>;
    "unlocker": Anonymize<If9iqq7i64mur8>;
};
export type I70l2gii2hrbik = {
    "asset": Anonymize<Iffh1nc5e1mod6>;
    "target": Anonymize<If9iqq7i64mur8>;
};
export type I4d5rrublaq1fn = {
    "asset": Anonymize<Iffh1nc5e1mod6>;
    "owner": Anonymize<If9iqq7i64mur8>;
};
export type Imh2n1s2lr5v4 = {
    "asset": Anonymize<Iffh1nc5e1mod6>;
    "locker": Anonymize<If9iqq7i64mur8>;
};
export type I4nae9rsql8fa7 = {
    "jit_withdraw": boolean;
};
export type I6apoeqjvad59g = {
    "weight_limit": XcmV3WeightLimit;
    "check_origin"?: Anonymize<I4pai6qnfk426l>;
};
export type I9btmbcvj13kgi = {
    "asset": Anonymize<Iffh1nc5e1mod6>;
};
export type I2e7qiqdb7vvnq = {
    "destination": Anonymize<If9iqq7i64mur8>;
    "remote_fees"?: Anonymize<Ibu57i57ap4ll>;
    "preserve_origin": boolean;
    "assets": Anonymize<If6bfvop70u5hr>;
    "remote_xcm": Anonymize<Ict03eedr8de9s>;
};
export type Ibu57i57ap4ll = (Anonymize<Ifhmc9e7vpeeig>) | undefined;
export type Ifhmc9e7vpeeig = AnonymousEnum<{
    "Teleport": XcmV5AssetFilter;
    "ReserveDeposit": XcmV5AssetFilter;
    "ReserveWithdraw": XcmV5AssetFilter;
}>;
export type If6bfvop70u5hr = Array<Anonymize<Ifhmc9e7vpeeig>>;
export type Icvu0u7vrbur4e = {
    "descendant_origin"?: Anonymize<I8tsbjvlpig5v>;
    "xcm": Anonymize<Ict03eedr8de9s>;
};
export type I8tsbjvlpig5v = (XcmV5Junctions) | undefined;
export type I3po4d1m5647ct = {
    "hints": Anonymize<I76e3pq7smrso1>;
};
export type I76e3pq7smrso1 = Array<Anonymize<I17rrlvqs2ftbt>>;
export type I17rrlvqs2ftbt = AnonymousEnum<{
    "AssetClaimer": Anonymize<I2adkav4nfpltp>;
}>;
export type I2adkav4nfpltp = {
    "location": Anonymize<If9iqq7i64mur8>;
};
export type Icl7nl1rfeog3i = {
    "origin": Anonymize<If9iqq7i64mur8>;
    "query_id": bigint;
};
export type Iasr6pj6shs0fl = {
    "query_id": bigint;
    "response": Anonymize<I7vucpgm2c6959>;
};
export type I2uqmls7kcdnii = {
    "query_id": bigint;
    "pallet_index": number;
    "call_index": number;
};
export type Idg69klialbkb8 = {
    "query_id": bigint;
    "pallet_index": number;
    "call_index": number;
    "actual_weight": Anonymize<I4q39t5hn830vp>;
    "max_budgeted_weight": Anonymize<I4q39t5hn830vp>;
};
export type I7r6b7145022pp = {
    "origin": Anonymize<If9iqq7i64mur8>;
    "query_id": bigint;
    "expected_location"?: Anonymize<I4pai6qnfk426l>;
};
export type I30pg328m00nr3 = {
    "query_id": bigint;
};
export type Icmrn7bogp28cs = {
    "hash": FixedSizeBinary<32>;
    "origin": Anonymize<If9iqq7i64mur8>;
    "assets": XcmVersionedAssets;
};
export type XcmVersionedAssets = Enum<{
    "V3": Anonymize<Iai6dhqiq3bach>;
    "V4": Anonymize<I50mli3hb64f9b>;
    "V5": Anonymize<I4npjalvhmfuj>;
}>;
export declare const XcmVersionedAssets: GetEnum<XcmVersionedAssets>;
export type Iai6dhqiq3bach = Array<Anonymize<Idcm24504c8bkk>>;
export type Idcm24504c8bkk = {
    "id": XcmV3MultiassetAssetId;
    "fun": XcmV3MultiassetFungibility;
};
export type XcmV3MultiassetAssetId = Enum<{
    "Concrete": Anonymize<I4c0s5cioidn76>;
    "Abstract": FixedSizeBinary<32>;
}>;
export declare const XcmV3MultiassetAssetId: GetEnum<XcmV3MultiassetAssetId>;
export type I4c0s5cioidn76 = {
    "parents": number;
    "interior": XcmV3Junctions;
};
export type XcmV3Junctions = Enum<{
    "Here": undefined;
    "X1": XcmV3Junction;
    "X2": Anonymize<Iam58b36i8f27i>;
    "X3": Anonymize<Iegjh9cie771d8>;
    "X4": Anonymize<Iae5flu84s2oia>;
    "X5": Anonymize<Iejq8c4n82a165>;
    "X6": Anonymize<I7rmt803vbpqrl>;
    "X7": Anonymize<I7onfe2toh27f0>;
    "X8": Anonymize<I3vjadpg0k2omo>;
}>;
export declare const XcmV3Junctions: GetEnum<XcmV3Junctions>;
export type XcmV3Junction = Enum<{
    "Parachain": number;
    "AccountId32": Anonymize<Ifq0i8kc6ds30i>;
    "AccountIndex64": Anonymize<I2a3org9qntfkr>;
    "AccountKey20": Anonymize<I9ed2klpttaegt>;
    "PalletInstance": number;
    "GeneralIndex": bigint;
    "GeneralKey": Anonymize<I15lht6t53odo4>;
    "OnlyChild": undefined;
    "Plurality": Anonymize<I518fbtnclg1oc>;
    "GlobalConsensus": XcmV3JunctionNetworkId;
}>;
export declare const XcmV3Junction: GetEnum<XcmV3Junction>;
export type Ifq0i8kc6ds30i = {
    "network"?: Anonymize<Idcq3vns9tgp5p>;
    "id": FixedSizeBinary<32>;
};
export type Idcq3vns9tgp5p = (XcmV3JunctionNetworkId) | undefined;
export type XcmV3JunctionNetworkId = Enum<{
    "ByGenesis": FixedSizeBinary<32>;
    "ByFork": Anonymize<I15vf5oinmcgps>;
    "Polkadot": undefined;
    "Kusama": undefined;
    "Westend": undefined;
    "Rococo": undefined;
    "Wococo": undefined;
    "Ethereum": Anonymize<I623eo8t3jrbeo>;
    "BitcoinCore": undefined;
    "BitcoinCash": undefined;
    "PolkadotBulletin": undefined;
}>;
export declare const XcmV3JunctionNetworkId: GetEnum<XcmV3JunctionNetworkId>;
export type I2a3org9qntfkr = {
    "network"?: Anonymize<Idcq3vns9tgp5p>;
    "index": bigint;
};
export type I9ed2klpttaegt = {
    "network"?: Anonymize<Idcq3vns9tgp5p>;
    "key": FixedSizeBinary<20>;
};
export type Iam58b36i8f27i = FixedSizeArray<2, XcmV3Junction>;
export type Iegjh9cie771d8 = FixedSizeArray<3, XcmV3Junction>;
export type Iae5flu84s2oia = FixedSizeArray<4, XcmV3Junction>;
export type Iejq8c4n82a165 = FixedSizeArray<5, XcmV3Junction>;
export type I7rmt803vbpqrl = FixedSizeArray<6, XcmV3Junction>;
export type I7onfe2toh27f0 = FixedSizeArray<7, XcmV3Junction>;
export type I3vjadpg0k2omo = FixedSizeArray<8, XcmV3Junction>;
export type I50mli3hb64f9b = Array<Anonymize<Ia5l7mu5a6v49o>>;
export type Ia5l7mu5a6v49o = {
    "id": Anonymize<I4c0s5cioidn76>;
    "fun": XcmV3MultiassetFungibility;
};
export type I7m9b5plj4h5ot = {
    "destination": Anonymize<If9iqq7i64mur8>;
    "result": number;
    "cost": Anonymize<I4npjalvhmfuj>;
    "message_id": FixedSizeBinary<32>;
};
export type I9kt8c221c83ln = {
    "location": Anonymize<If9iqq7i64mur8>;
    "version": number;
};
export type I9onhk772nfs4f = {
    "location": Anonymize<If9iqq7i64mur8>;
    "query_id": bigint;
    "error": Anonymize<Id56rgs0bdb7gl>;
};
export type I3l6bnksrmt56r = {
    "location": XcmVersionedLocation;
    "query_id": bigint;
};
export type XcmVersionedLocation = Enum<{
    "V3": Anonymize<I4c0s5cioidn76>;
    "V4": Anonymize<I4c0s5cioidn76>;
    "V5": Anonymize<If9iqq7i64mur8>;
}>;
export declare const XcmVersionedLocation: GetEnum<XcmVersionedLocation>;
export type Idh09k0l2pmdcg = {
    "origin": Anonymize<If9iqq7i64mur8>;
    "query_id": bigint;
    "expected_querier": Anonymize<If9iqq7i64mur8>;
    "maybe_actual_querier"?: Anonymize<I4pai6qnfk426l>;
};
export type I7uoiphbm0tj4r = {
    "destination": Anonymize<If9iqq7i64mur8>;
    "cost": Anonymize<I4npjalvhmfuj>;
    "message_id": FixedSizeBinary<32>;
};
export type I512p1n7qt24l8 = {
    "paying": Anonymize<If9iqq7i64mur8>;
    "fees": Anonymize<I4npjalvhmfuj>;
};
export type I6s1nbislhk619 = {
    "version": number;
};
export type Ihpdgvt7vs2cb = AnonymousEnum<{
    /**
     *Downward message is invalid XCM.
     *\[ id \]
     */
    "InvalidFormat": FixedSizeBinary<32>;
    /**
     *Downward message is unsupported version of XCM.
     *\[ id \]
     */
    "UnsupportedVersion": FixedSizeBinary<32>;
    /**
     *Downward message executed with the given outcome.
     *\[ id, outcome \]
     */
    "ExecutedDownward": Anonymize<Ibeto40kl3r5j7>;
}>;
export type Ibeto40kl3r5j7 = [FixedSizeBinary<32>, Anonymize<I6uq5gb4s805s7>];
export type Ift4p4jnj5bri1 = AnonymousEnum<{
    /**
     *Delivery fee factor has been decreased.
     */
    "DeliveryFeeFactorDecreased": Anonymize<Ie8hpsm3jhsvo3>;
    /**
     *Delivery fee factor has been increased.
     */
    "DeliveryFeeFactorIncreased": Anonymize<Ie8hpsm3jhsvo3>;
}>;
export type Ie8hpsm3jhsvo3 = {
    /**
     *New value of the `DeliveryFeeFactor`.
     */
    "new_value": bigint;
};
export type I2kosejppk3jon = AnonymousEnum<{
    /**
     *Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    "ProcessingFailed": Anonymize<I1rvj4ubaplho0>;
    /**
     *Message is processed.
     */
    "Processed": Anonymize<Ia3uu7lqcc1q1i>;
    /**
     *Message placed in overweight queue.
     */
    "OverweightEnqueued": Anonymize<I7crucfnonitkn>;
    /**
     *This page was reaped.
     */
    "PageReaped": Anonymize<I7tmrp94r9sq4n>;
}>;
export type I1rvj4ubaplho0 = {
    /**
     *The `blake2_256` hash of the message.
     */
    "id": FixedSizeBinary<32>;
    /**
     *The queue of the message.
     */
    "origin": Anonymize<Iejeo53sea6n4q>;
    /**
     *The error that occurred.
     *
     *This error is pretty opaque. More fine-grained errors need to be emitted as events
     *by the `MessageProcessor`.
     */
    "error": Anonymize<I5hhsj7l9obr84>;
};
export type Iejeo53sea6n4q = AnonymousEnum<{
    "Here": undefined;
    "Parent": undefined;
    "Sibling": number;
}>;
export type I5hhsj7l9obr84 = AnonymousEnum<{
    "BadFormat": undefined;
    "Corrupt": undefined;
    "Unsupported": undefined;
    "Overweight": Anonymize<I4q39t5hn830vp>;
    "Yield": undefined;
    "StackLimitReached": undefined;
}>;
export type Ia3uu7lqcc1q1i = {
    /**
     *The `blake2_256` hash of the message.
     */
    "id": FixedSizeBinary<32>;
    /**
     *The queue of the message.
     */
    "origin": Anonymize<Iejeo53sea6n4q>;
    /**
     *How much weight was used to process the message.
     */
    "weight_used": Anonymize<I4q39t5hn830vp>;
    /**
     *Whether the message was processed.
     *
     *Note that this does not mean that the underlying `MessageProcessor` was internally
     *successful. It *solely* means that the MQ pallet will treat this as a success
     *condition and discard the message. Any internal error needs to be emitted as events
     *by the `MessageProcessor`.
     */
    "success": boolean;
};
export type I7crucfnonitkn = {
    /**
     *The `blake2_256` hash of the message.
     */
    "id": FixedSizeBinary<32>;
    /**
     *The queue of the message.
     */
    "origin": Anonymize<Iejeo53sea6n4q>;
    /**
     *The page of the message.
     */
    "page_index": number;
    /**
     *The index of the message within the page.
     */
    "message_index": number;
};
export type I7tmrp94r9sq4n = {
    /**
     *The queue of the page.
     */
    "origin": Anonymize<Iejeo53sea6n4q>;
    /**
     *The index of the page.
     */
    "index": number;
};
export type I6p4pglc8elinf = AnonymousEnum<{
    /**
     *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     *well as the error.
     */
    "BatchInterrupted": Anonymize<I8v56q7re8pj7u>;
    /**
     *Batch of dispatches completed fully with no error.
     */
    "BatchCompleted": undefined;
    /**
     *Batch of dispatches completed but has errors.
     */
    "BatchCompletedWithErrors": undefined;
    /**
     *A single item within a Batch of dispatches has completed with no error.
     */
    "ItemCompleted": undefined;
    /**
     *A single item within a Batch of dispatches has completed with error.
     */
    "ItemFailed": Anonymize<I6m588sg2388aj>;
    /**
     *A call was dispatched.
     */
    "DispatchedAs": Anonymize<I6jjglabvmk9sv>;
}>;
export type I8v56q7re8pj7u = {
    "index": number;
    "error": Anonymize<I2em38gdd5updn>;
};
export type I6m588sg2388aj = {
    "error": Anonymize<I2em38gdd5updn>;
};
export type I6jjglabvmk9sv = {
    "result": Anonymize<I1qbf7nguucccc>;
};
export type I1qbf7nguucccc = ResultPayload<undefined, Anonymize<I2em38gdd5updn>>;
export type Icd61nufu486fo = AnonymousEnum<{
    /**
     *A new multisig operation has begun.
     */
    "NewMultisig": Anonymize<Iep27ialq4a7o7>;
    /**
     *A multisig operation has been approved by someone.
     */
    "MultisigApproval": Anonymize<Iasu5jvoqr43mv>;
    /**
     *A multisig operation has been executed.
     */
    "MultisigExecuted": Anonymize<I7bulsgqb0n2i7>;
    /**
     *A multisig operation has been cancelled.
     */
    "MultisigCancelled": Anonymize<I5qolde99acmd1>;
}>;
export type Iep27ialq4a7o7 = {
    "approving": SS58String;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type Iasu5jvoqr43mv = {
    "approving": SS58String;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type Itvprrpb0nm3o = {
    "height": number;
    "index": number;
};
export type I7bulsgqb0n2i7 = {
    "approving": SS58String;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
    "result": Anonymize<I1qbf7nguucccc>;
};
export type I5qolde99acmd1 = {
    "cancelling": SS58String;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type I89140ul676lq9 = AnonymousEnum<{
    /**
     *A proxy was executed correctly, with the given.
     */
    "ProxyExecuted": Anonymize<I6jjglabvmk9sv>;
    /**
     *A pure account has been created by new proxy with given
     *disambiguation index and proxy type.
     */
    "PureCreated": Anonymize<Ie7cuj84ohvg56>;
    /**
     *An announcement was placed to make a call in the future.
     */
    "Announced": Anonymize<I2ur0oeqg495j8>;
    /**
     *A proxy was added.
     */
    "ProxyAdded": Anonymize<I8ioopvokvl3ud>;
    /**
     *A proxy was removed.
     */
    "ProxyRemoved": Anonymize<I8ioopvokvl3ud>;
}>;
export type Ie7cuj84ohvg56 = {
    "pure": SS58String;
    "who": SS58String;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "disambiguation_index": number;
};
export type I5ftepkjop3g1u = AnonymousEnum<{
    "Any": undefined;
    "NonTransfer": undefined;
    "CancelProxy": undefined;
    "Assets": undefined;
    "AssetOwner": undefined;
    "AssetManager": undefined;
    "Collator": undefined;
}>;
export type I2ur0oeqg495j8 = {
    "real": SS58String;
    "proxy": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type I8ioopvokvl3ud = {
    "delegator": SS58String;
    "delegatee": SS58String;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
};
export type I6avancvg8fd05 = AnonymousEnum<{
    /**
     *Some asset class was created.
     */
    "Created": Anonymize<I88ff3u4dpivk>;
    /**
     *Some assets were issued.
     */
    "Issued": Anonymize<I33cp947glv1ks>;
    /**
     *Some assets were transferred.
     */
    "Transferred": Anonymize<Ic9om1gmmqu7rq>;
    /**
     *Some assets were destroyed.
     */
    "Burned": Anonymize<I5hfov2b68ppb6>;
    /**
     *The management team changed.
     */
    "TeamChanged": Anonymize<Ibthhb2m9vneds>;
    /**
     *The owner changed.
     */
    "OwnerChanged": Anonymize<Iaitn5bqfacj7k>;
    /**
     *Some account `who` was frozen.
     */
    "Frozen": Anonymize<If4ebvclj2ugvi>;
    /**
     *Some account `who` was thawed.
     */
    "Thawed": Anonymize<If4ebvclj2ugvi>;
    /**
     *Some asset `asset_id` was frozen.
     */
    "AssetFrozen": Anonymize<Ia5le7udkgbaq9>;
    /**
     *Some asset `asset_id` was thawed.
     */
    "AssetThawed": Anonymize<Ia5le7udkgbaq9>;
    /**
     *Accounts were destroyed for given asset.
     */
    "AccountsDestroyed": Anonymize<Ieduc1e6frq8rb>;
    /**
     *Approvals were destroyed for given asset.
     */
    "ApprovalsDestroyed": Anonymize<I9h6gbtabovtm4>;
    /**
     *An asset class is in the process of being destroyed.
     */
    "DestructionStarted": Anonymize<Ia5le7udkgbaq9>;
    /**
     *An asset class was destroyed.
     */
    "Destroyed": Anonymize<Ia5le7udkgbaq9>;
    /**
     *Some asset class was force-created.
     */
    "ForceCreated": Anonymize<Iaitn5bqfacj7k>;
    /**
     *New metadata has been set for an asset.
     */
    "MetadataSet": Anonymize<Ifnsa0dkkpf465>;
    /**
     *Metadata has been cleared for an asset.
     */
    "MetadataCleared": Anonymize<Ia5le7udkgbaq9>;
    /**
     *(Additional) funds have been approved for transfer to a destination account.
     */
    "ApprovedTransfer": Anonymize<I65dtqr2egjbc3>;
    /**
     *An approval for account `delegate` was cancelled by `owner`.
     */
    "ApprovalCancelled": Anonymize<Ibqj3vg5s5lk0c>;
    /**
     *An `amount` was transferred in its entirety from `owner` to `destination` by
     *the approved `delegate`.
     */
    "TransferredApproved": Anonymize<I6l73u513p8rna>;
    /**
     *An asset has had its attributes changed by the `Force` origin.
     */
    "AssetStatusChanged": Anonymize<Ia5le7udkgbaq9>;
    /**
     *The min_balance of an asset has been updated by the asset owner.
     */
    "AssetMinBalanceChanged": Anonymize<Iefqmt2htu1dlu>;
    /**
     *Some account `who` was created with a deposit from `depositor`.
     */
    "Touched": Anonymize<If8bgtgqrchjtu>;
    /**
     *Some account `who` was blocked.
     */
    "Blocked": Anonymize<If4ebvclj2ugvi>;
    /**
     *Some assets were deposited (e.g. for transaction fees).
     */
    "Deposited": Anonymize<Idusmq77988cmt>;
    /**
     *Some assets were withdrawn from the account (e.g. for transaction fees).
     */
    "Withdrawn": Anonymize<Idusmq77988cmt>;
}>;
export type I88ff3u4dpivk = {
    "asset_id": number;
    "creator": SS58String;
    "owner": SS58String;
};
export type I33cp947glv1ks = {
    "asset_id": number;
    "owner": SS58String;
    "amount": bigint;
};
export type Ic9om1gmmqu7rq = {
    "asset_id": number;
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
};
export type I5hfov2b68ppb6 = {
    "asset_id": number;
    "owner": SS58String;
    "balance": bigint;
};
export type Ibthhb2m9vneds = {
    "asset_id": number;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
};
export type Iaitn5bqfacj7k = {
    "asset_id": number;
    "owner": SS58String;
};
export type If4ebvclj2ugvi = {
    "asset_id": number;
    "who": SS58String;
};
export type Ia5le7udkgbaq9 = {
    "asset_id": number;
};
export type Ieduc1e6frq8rb = {
    "asset_id": number;
    "accounts_destroyed": number;
    "accounts_remaining": number;
};
export type I9h6gbtabovtm4 = {
    "asset_id": number;
    "approvals_destroyed": number;
    "approvals_remaining": number;
};
export type Ifnsa0dkkpf465 = {
    "asset_id": number;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type I65dtqr2egjbc3 = {
    "asset_id": number;
    "source": SS58String;
    "delegate": SS58String;
    "amount": bigint;
};
export type Ibqj3vg5s5lk0c = {
    "asset_id": number;
    "owner": SS58String;
    "delegate": SS58String;
};
export type I6l73u513p8rna = {
    "asset_id": number;
    "owner": SS58String;
    "delegate": SS58String;
    "destination": SS58String;
    "amount": bigint;
};
export type Iefqmt2htu1dlu = {
    "asset_id": number;
    "new_min_balance": bigint;
};
export type If8bgtgqrchjtu = {
    "asset_id": number;
    "who": SS58String;
    "depositor": SS58String;
};
export type Idusmq77988cmt = {
    "asset_id": number;
    "who": SS58String;
    "amount": bigint;
};
export type Ia0j71vjrjqu9p = AnonymousEnum<{
    /**
     *A `collection` was created.
     */
    "Created": Anonymize<I9gqanbbbe917p>;
    /**
     *A `collection` was force-created.
     */
    "ForceCreated": Anonymize<Id1m1230297f7a>;
    /**
     *A `collection` was destroyed.
     */
    "Destroyed": Anonymize<I6cu7obfo0rr0o>;
    /**
     *An `item` was issued.
     */
    "Issued": Anonymize<Ifvb1p5munhhv4>;
    /**
     *An `item` was transferred.
     */
    "Transferred": Anonymize<I46h83ilqeed3g>;
    /**
     *An `item` was destroyed.
     */
    "Burned": Anonymize<Ifvb1p5munhhv4>;
    /**
     *Some `item` was frozen.
     */
    "Frozen": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Some `item` was thawed.
     */
    "Thawed": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Some `collection` was frozen.
     */
    "CollectionFrozen": Anonymize<I6cu7obfo0rr0o>;
    /**
     *Some `collection` was thawed.
     */
    "CollectionThawed": Anonymize<I6cu7obfo0rr0o>;
    /**
     *The owner changed.
     */
    "OwnerChanged": Anonymize<Icahse3uoi76n7>;
    /**
     *The management team changed.
     */
    "TeamChanged": Anonymize<I75sj3uv7gnemk>;
    /**
     *An `item` of a `collection` has been approved by the `owner` for transfer by
     *a `delegate`.
     */
    "ApprovedTransfer": Anonymize<I5fjkvcb5vr6nb>;
    /**
     *An approval for a `delegate` account to transfer the `item` of an item
     *`collection` was cancelled by its `owner`.
     */
    "ApprovalCancelled": Anonymize<I5fjkvcb5vr6nb>;
    /**
     *A `collection` has had its attributes changed by the `Force` origin.
     */
    "ItemStatusChanged": Anonymize<I6cu7obfo0rr0o>;
    /**
     *New metadata has been set for a `collection`.
     */
    "CollectionMetadataSet": Anonymize<I9viqhmdtuof5e>;
    /**
     *Metadata has been cleared for a `collection`.
     */
    "CollectionMetadataCleared": Anonymize<I6cu7obfo0rr0o>;
    /**
     *New metadata has been set for an item.
     */
    "MetadataSet": Anonymize<Iceq9fmmp9aeqv>;
    /**
     *Metadata has been cleared for an item.
     */
    "MetadataCleared": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Metadata has been cleared for an item.
     */
    "Redeposited": Anonymize<I2gr1toekv86b9>;
    /**
     *New attribute metadata has been set for a `collection` or `item`.
     */
    "AttributeSet": Anonymize<I5tvvgui05tn6e>;
    /**
     *Attribute metadata has been cleared for a `collection` or `item`.
     */
    "AttributeCleared": Anonymize<Ibal0joadvdc2h>;
    /**
     *Ownership acceptance has changed for an account.
     */
    "OwnershipAcceptanceChanged": Anonymize<I2v2ikqt2trp52>;
    /**
     *Max supply has been set for a collection.
     */
    "CollectionMaxSupplySet": Anonymize<I6h88h8vba22v8>;
    /**
     *The price was set for the instance.
     */
    "ItemPriceSet": Anonymize<If3057hi1g5qlo>;
    /**
     *The price for the instance was removed.
     */
    "ItemPriceRemoved": Anonymize<Iafkqus0ohh6l6>;
    /**
     *An item was bought.
     */
    "ItemBought": Anonymize<Iaii5qf41d5n3d>;
}>;
export type I9gqanbbbe917p = {
    "collection": number;
    "creator": SS58String;
    "owner": SS58String;
};
export type Id1m1230297f7a = {
    "collection": number;
    "owner": SS58String;
};
export type I6cu7obfo0rr0o = {
    "collection": number;
};
export type Ifvb1p5munhhv4 = {
    "collection": number;
    "item": number;
    "owner": SS58String;
};
export type I46h83ilqeed3g = {
    "collection": number;
    "item": number;
    "from": SS58String;
    "to": SS58String;
};
export type Iafkqus0ohh6l6 = {
    "collection": number;
    "item": number;
};
export type Icahse3uoi76n7 = {
    "collection": number;
    "new_owner": SS58String;
};
export type I75sj3uv7gnemk = {
    "collection": number;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
};
export type I5fjkvcb5vr6nb = {
    "collection": number;
    "item": number;
    "owner": SS58String;
    "delegate": SS58String;
};
export type I9viqhmdtuof5e = {
    "collection": number;
    "data": Binary;
    "is_frozen": boolean;
};
export type Iceq9fmmp9aeqv = {
    "collection": number;
    "item": number;
    "data": Binary;
    "is_frozen": boolean;
};
export type I2gr1toekv86b9 = {
    "collection": number;
    "successful_items": Anonymize<Icgljjb6j82uhn>;
};
export type Icgljjb6j82uhn = Array<number>;
export type I5tvvgui05tn6e = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
    "value": Binary;
};
export type I4arjljr6dpflb = (number) | undefined;
export type Ibal0joadvdc2h = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
};
export type I2v2ikqt2trp52 = {
    "who": SS58String;
    "maybe_collection"?: Anonymize<I4arjljr6dpflb>;
};
export type I6h88h8vba22v8 = {
    "collection": number;
    "max_supply": number;
};
export type If3057hi1g5qlo = {
    "collection": number;
    "item": number;
    "price": bigint;
    "whitelisted_buyer"?: Anonymize<Ihfphjolmsqq1>;
};
export type Ihfphjolmsqq1 = (SS58String) | undefined;
export type Iaii5qf41d5n3d = {
    "collection": number;
    "item": number;
    "price": bigint;
    "seller": SS58String;
    "buyer": SS58String;
};
export type I6qicn8jn4fftj = AnonymousEnum<{
    /**
     *A `collection` was created.
     */
    "Created": Anonymize<I9gqanbbbe917p>;
    /**
     *A `collection` was force-created.
     */
    "ForceCreated": Anonymize<Id1m1230297f7a>;
    /**
     *A `collection` was destroyed.
     */
    "Destroyed": Anonymize<I6cu7obfo0rr0o>;
    /**
     *An `item` was issued.
     */
    "Issued": Anonymize<Ifvb1p5munhhv4>;
    /**
     *An `item` was transferred.
     */
    "Transferred": Anonymize<I46h83ilqeed3g>;
    /**
     *An `item` was destroyed.
     */
    "Burned": Anonymize<Ifvb1p5munhhv4>;
    /**
     *An `item` became non-transferable.
     */
    "ItemTransferLocked": Anonymize<Iafkqus0ohh6l6>;
    /**
     *An `item` became transferable.
     */
    "ItemTransferUnlocked": Anonymize<Iafkqus0ohh6l6>;
    /**
     *`item` metadata or attributes were locked.
     */
    "ItemPropertiesLocked": Anonymize<I1jj31tn29ie3c>;
    /**
     *Some `collection` was locked.
     */
    "CollectionLocked": Anonymize<I6cu7obfo0rr0o>;
    /**
     *The owner changed.
     */
    "OwnerChanged": Anonymize<Icahse3uoi76n7>;
    /**
     *The management team changed.
     */
    "TeamChanged": Anonymize<Ico8bnjc6taa27>;
    /**
     *An `item` of a `collection` has been approved by the `owner` for transfer by
     *a `delegate`.
     */
    "TransferApproved": Anonymize<I78i1bvlonei69>;
    /**
     *An approval for a `delegate` account to transfer the `item` of an item
     *`collection` was cancelled by its `owner`.
     */
    "ApprovalCancelled": Anonymize<I5fjkvcb5vr6nb>;
    /**
     *All approvals of an item got cancelled.
     */
    "AllApprovalsCancelled": Anonymize<Ifvb1p5munhhv4>;
    /**
     *A `collection` has had its config changed by the `Force` origin.
     */
    "CollectionConfigChanged": Anonymize<I6cu7obfo0rr0o>;
    /**
     *New metadata has been set for a `collection`.
     */
    "CollectionMetadataSet": Anonymize<I78u60nqh0etah>;
    /**
     *Metadata has been cleared for a `collection`.
     */
    "CollectionMetadataCleared": Anonymize<I6cu7obfo0rr0o>;
    /**
     *New metadata has been set for an item.
     */
    "ItemMetadataSet": Anonymize<Icrkms46uh8tpb>;
    /**
     *Metadata has been cleared for an item.
     */
    "ItemMetadataCleared": Anonymize<Iafkqus0ohh6l6>;
    /**
     *The deposit for a set of `item`s within a `collection` has been updated.
     */
    "Redeposited": Anonymize<I2gr1toekv86b9>;
    /**
     *New attribute metadata has been set for a `collection` or `item`.
     */
    "AttributeSet": Anonymize<I5llu6o6a0go5i>;
    /**
     *Attribute metadata has been cleared for a `collection` or `item`.
     */
    "AttributeCleared": Anonymize<I93r2effh7od84>;
    /**
     *A new approval to modify item attributes was added.
     */
    "ItemAttributesApprovalAdded": Anonymize<I9i1f9mrso1hmf>;
    /**
     *A new approval to modify item attributes was removed.
     */
    "ItemAttributesApprovalRemoved": Anonymize<I9i1f9mrso1hmf>;
    /**
     *Ownership acceptance has changed for an account.
     */
    "OwnershipAcceptanceChanged": Anonymize<I2v2ikqt2trp52>;
    /**
     *Max supply has been set for a collection.
     */
    "CollectionMaxSupplySet": Anonymize<I6h88h8vba22v8>;
    /**
     *Mint settings for a collection had changed.
     */
    "CollectionMintSettingsUpdated": Anonymize<I6cu7obfo0rr0o>;
    /**
     *Event gets emitted when the `NextCollectionId` gets incremented.
     */
    "NextCollectionIdIncremented": Anonymize<I9ksla2si91s56>;
    /**
     *The price was set for the item.
     */
    "ItemPriceSet": Anonymize<If3057hi1g5qlo>;
    /**
     *The price for the item was removed.
     */
    "ItemPriceRemoved": Anonymize<Iafkqus0ohh6l6>;
    /**
     *An item was bought.
     */
    "ItemBought": Anonymize<Iaii5qf41d5n3d>;
    /**
     *A tip was sent.
     */
    "TipSent": Anonymize<Id9j7b85otvjru>;
    /**
     *An `item` swap intent was created.
     */
    "SwapCreated": Anonymize<Iaihk9pek2ajl9>;
    /**
     *The swap was cancelled.
     */
    "SwapCancelled": Anonymize<Iaihk9pek2ajl9>;
    /**
     *The swap has been claimed.
     */
    "SwapClaimed": Anonymize<Id9av23h47ufb2>;
    /**
     *New attributes have been set for an `item` of the `collection`.
     */
    "PreSignedAttributesSet": Anonymize<Ib4kpnijas4jqp>;
    /**
     *A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
     *within that `collection`.
     */
    "PalletAttributeSet": Anonymize<I2vnu5k0u1i65h>;
}>;
export type I1jj31tn29ie3c = {
    "collection": number;
    "item": number;
    "lock_metadata": boolean;
    "lock_attributes": boolean;
};
export type Ico8bnjc6taa27 = {
    "collection": number;
    "issuer"?: Anonymize<Ihfphjolmsqq1>;
    "admin"?: Anonymize<Ihfphjolmsqq1>;
    "freezer"?: Anonymize<Ihfphjolmsqq1>;
};
export type I78i1bvlonei69 = {
    "collection": number;
    "item": number;
    "owner": SS58String;
    "delegate": SS58String;
    "deadline"?: Anonymize<I4arjljr6dpflb>;
};
export type I78u60nqh0etah = {
    "collection": number;
    "data": Binary;
};
export type Icrkms46uh8tpb = {
    "collection": number;
    "item": number;
    "data": Binary;
};
export type I5llu6o6a0go5i = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
    "value": Binary;
    "namespace": Anonymize<If3jjadhmug6qc>;
};
export type If3jjadhmug6qc = AnonymousEnum<{
    "Pallet": undefined;
    "CollectionOwner": undefined;
    "ItemOwner": undefined;
    "Account": SS58String;
}>;
export type I93r2effh7od84 = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
    "namespace": Anonymize<If3jjadhmug6qc>;
};
export type I9i1f9mrso1hmf = {
    "collection": number;
    "item": number;
    "delegate": SS58String;
};
export type I9ksla2si91s56 = {
    "next_id"?: Anonymize<I4arjljr6dpflb>;
};
export type Id9j7b85otvjru = {
    "collection": number;
    "item": number;
    "sender": SS58String;
    "receiver": SS58String;
    "amount": bigint;
};
export type Iaihk9pek2ajl9 = {
    "offered_collection": number;
    "offered_item": number;
    "desired_collection": number;
    "desired_item"?: Anonymize<I4arjljr6dpflb>;
    "price"?: Anonymize<I6oogc1jbmmi81>;
    "deadline": number;
};
export type I6oogc1jbmmi81 = (Anonymize<I9b1jgmi22enn5>) | undefined;
export type I9b1jgmi22enn5 = {
    "amount": bigint;
    "direction": Anonymize<I1p7rj0j3gmh73>;
};
export type I1p7rj0j3gmh73 = AnonymousEnum<{
    "Send": undefined;
    "Receive": undefined;
}>;
export type Id9av23h47ufb2 = {
    "sent_collection": number;
    "sent_item": number;
    "sent_item_owner": SS58String;
    "received_collection": number;
    "received_item": number;
    "received_item_owner": SS58String;
    "price"?: Anonymize<I6oogc1jbmmi81>;
    "deadline": number;
};
export type Ib4kpnijas4jqp = {
    "collection": number;
    "item": number;
    "namespace": Anonymize<If3jjadhmug6qc>;
};
export type I2vnu5k0u1i65h = {
    "collection": number;
    "item"?: Anonymize<I4arjljr6dpflb>;
    "attribute": Anonymize<I75km45qj0eg5n>;
    "value": Binary;
};
export type I75km45qj0eg5n = AnonymousEnum<{
    "UsedToClaim": number;
    "TransferDisabled": undefined;
}>;
export type I95qdjot35qdnr = AnonymousEnum<{
    /**
     *Some asset class was created.
     */
    "Created": Anonymize<Icqe266pmnr25o>;
    /**
     *Some assets were issued.
     */
    "Issued": Anonymize<I5hoiph0lqphp>;
    /**
     *Some assets were transferred.
     */
    "Transferred": Anonymize<I5k7oropl9ofc7>;
    /**
     *Some assets were destroyed.
     */
    "Burned": Anonymize<I48vagp1omigob>;
    /**
     *The management team changed.
     */
    "TeamChanged": Anonymize<Ib5tst4ppem1g6>;
    /**
     *The owner changed.
     */
    "OwnerChanged": Anonymize<Ibn64edsrg3737>;
    /**
     *Some account `who` was frozen.
     */
    "Frozen": Anonymize<I83r9d02dh47j9>;
    /**
     *Some account `who` was thawed.
     */
    "Thawed": Anonymize<I83r9d02dh47j9>;
    /**
     *Some asset `asset_id` was frozen.
     */
    "AssetFrozen": Anonymize<I22bm4d7re21j9>;
    /**
     *Some asset `asset_id` was thawed.
     */
    "AssetThawed": Anonymize<I22bm4d7re21j9>;
    /**
     *Accounts were destroyed for given asset.
     */
    "AccountsDestroyed": Anonymize<I3jnhifvaeuama>;
    /**
     *Approvals were destroyed for given asset.
     */
    "ApprovalsDestroyed": Anonymize<I8n1gia0lo42ok>;
    /**
     *An asset class is in the process of being destroyed.
     */
    "DestructionStarted": Anonymize<I22bm4d7re21j9>;
    /**
     *An asset class was destroyed.
     */
    "Destroyed": Anonymize<I22bm4d7re21j9>;
    /**
     *Some asset class was force-created.
     */
    "ForceCreated": Anonymize<Ibn64edsrg3737>;
    /**
     *New metadata has been set for an asset.
     */
    "MetadataSet": Anonymize<I6gb0o7lqjfdjq>;
    /**
     *Metadata has been cleared for an asset.
     */
    "MetadataCleared": Anonymize<I22bm4d7re21j9>;
    /**
     *(Additional) funds have been approved for transfer to a destination account.
     */
    "ApprovedTransfer": Anonymize<Idh36v6iegkmpq>;
    /**
     *An approval for account `delegate` was cancelled by `owner`.
     */
    "ApprovalCancelled": Anonymize<I27hnueutmchbe>;
    /**
     *An `amount` was transferred in its entirety from `owner` to `destination` by
     *the approved `delegate`.
     */
    "TransferredApproved": Anonymize<Iectm2em66uhao>;
    /**
     *An asset has had its attributes changed by the `Force` origin.
     */
    "AssetStatusChanged": Anonymize<I22bm4d7re21j9>;
    /**
     *The min_balance of an asset has been updated by the asset owner.
     */
    "AssetMinBalanceChanged": Anonymize<I7q57goff3j72h>;
    /**
     *Some account `who` was created with a deposit from `depositor`.
     */
    "Touched": Anonymize<Ibe49veu9i9nro>;
    /**
     *Some account `who` was blocked.
     */
    "Blocked": Anonymize<I83r9d02dh47j9>;
    /**
     *Some assets were deposited (e.g. for transaction fees).
     */
    "Deposited": Anonymize<I1rnkmiu7usb82>;
    /**
     *Some assets were withdrawn from the account (e.g. for transaction fees).
     */
    "Withdrawn": Anonymize<I1rnkmiu7usb82>;
}>;
export type Icqe266pmnr25o = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "creator": SS58String;
    "owner": SS58String;
};
export type I5hoiph0lqphp = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "owner": SS58String;
    "amount": bigint;
};
export type I5k7oropl9ofc7 = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
};
export type I48vagp1omigob = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "owner": SS58String;
    "balance": bigint;
};
export type Ib5tst4ppem1g6 = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
};
export type Ibn64edsrg3737 = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "owner": SS58String;
};
export type I83r9d02dh47j9 = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "who": SS58String;
};
export type I22bm4d7re21j9 = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
};
export type I3jnhifvaeuama = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "accounts_destroyed": number;
    "accounts_remaining": number;
};
export type I8n1gia0lo42ok = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "approvals_destroyed": number;
    "approvals_remaining": number;
};
export type I6gb0o7lqjfdjq = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type Idh36v6iegkmpq = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "source": SS58String;
    "delegate": SS58String;
    "amount": bigint;
};
export type I27hnueutmchbe = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "owner": SS58String;
    "delegate": SS58String;
};
export type Iectm2em66uhao = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "owner": SS58String;
    "delegate": SS58String;
    "destination": SS58String;
    "amount": bigint;
};
export type I7q57goff3j72h = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "new_min_balance": bigint;
};
export type Ibe49veu9i9nro = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "who": SS58String;
    "depositor": SS58String;
};
export type I1rnkmiu7usb82 = {
    "asset_id": Anonymize<If9iqq7i64mur8>;
    "who": SS58String;
    "amount": bigint;
};
export type I41s7j0hsp2u0b = AnonymousEnum<{
    /**
     *An NFT was successfully fractionalized.
     */
    "NftFractionalized": Anonymize<Ib67harsthtcvr>;
    /**
     *An NFT was successfully returned back.
     */
    "NftUnified": Anonymize<Ic7ok3lq0728f7>;
}>;
export type Ib67harsthtcvr = {
    "nft_collection": number;
    "nft": number;
    "fractions": bigint;
    "asset": number;
    "beneficiary": SS58String;
};
export type Ic7ok3lq0728f7 = {
    "nft_collection": number;
    "nft": number;
    "asset": number;
    "beneficiary": SS58String;
};
export type Ievo2o32gc42ng = AnonymousEnum<{
    /**
     *A successful call of the `CreatePool` extrinsic will create this event.
     */
    "PoolCreated": Anonymize<I1q546n7mmm8nk>;
    /**
     *A successful call of the `AddLiquidity` extrinsic will create this event.
     */
    "LiquidityAdded": Anonymize<If7i5aoh4lk0a1>;
    /**
     *A successful call of the `RemoveLiquidity` extrinsic will create this event.
     */
    "LiquidityRemoved": Anonymize<If9prqbk25189q>;
    /**
     *Assets have been converted from one to another. Both `SwapExactTokenForToken`
     *and `SwapTokenForExactToken` will generate this event.
     */
    "SwapExecuted": Anonymize<Icugn66dlnp8rd>;
    /**
     *Assets have been converted from one to another.
     */
    "SwapCreditExecuted": Anonymize<I1bfrt15apsnp>;
    /**
     *Pool has been touched in order to fulfill operational requirements.
     */
    "Touched": Anonymize<Id3old33tr9erj>;
}>;
export type I1q546n7mmm8nk = {
    /**
     *The account that created the pool.
     */
    "creator": SS58String;
    /**
     *The pool id associated with the pool. Note that the order of the assets may not be
     *the same as the order specified in the create pool extrinsic.
     */
    "pool_id": Anonymize<If21n82i0516em>;
    /**
     *The account ID of the pool.
     */
    "pool_account": SS58String;
    /**
     *The id of the liquidity tokens that will be minted when assets are added to this
     *pool.
     */
    "lp_token": number;
};
export type If21n82i0516em = FixedSizeArray<2, Anonymize<If9iqq7i64mur8>>;
export type If7i5aoh4lk0a1 = {
    /**
     *The account that the liquidity was taken from.
     */
    "who": SS58String;
    /**
     *The account that the liquidity tokens were minted to.
     */
    "mint_to": SS58String;
    /**
     *The pool id of the pool that the liquidity was added to.
     */
    "pool_id": Anonymize<If21n82i0516em>;
    /**
     *The amount of the first asset that was added to the pool.
     */
    "amount1_provided": bigint;
    /**
     *The amount of the second asset that was added to the pool.
     */
    "amount2_provided": bigint;
    /**
     *The id of the lp token that was minted.
     */
    "lp_token": number;
    /**
     *The amount of lp tokens that were minted of that id.
     */
    "lp_token_minted": bigint;
};
export type If9prqbk25189q = {
    /**
     *The account that the liquidity tokens were burned from.
     */
    "who": SS58String;
    /**
     *The account that the assets were transferred to.
     */
    "withdraw_to": SS58String;
    /**
     *The pool id that the liquidity was removed from.
     */
    "pool_id": Anonymize<If21n82i0516em>;
    /**
     *The amount of the first asset that was removed from the pool.
     */
    "amount1": bigint;
    /**
     *The amount of the second asset that was removed from the pool.
     */
    "amount2": bigint;
    /**
     *The id of the lp token that was burned.
     */
    "lp_token": number;
    /**
     *The amount of lp tokens that were burned of that id.
     */
    "lp_token_burned": bigint;
    /**
     *Liquidity withdrawal fee (%).
     */
    "withdrawal_fee": number;
};
export type Icugn66dlnp8rd = {
    /**
     *Which account was the instigator of the swap.
     */
    "who": SS58String;
    /**
     *The account that the assets were transferred to.
     */
    "send_to": SS58String;
    /**
     *The amount of the first asset that was swapped.
     */
    "amount_in": bigint;
    /**
     *The amount of the second asset that was received.
     */
    "amount_out": bigint;
    /**
     *The route of asset IDs with amounts that the swap went through.
     *E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
     */
    "path": Anonymize<I7egh93q89718t>;
};
export type I7egh93q89718t = Array<Anonymize<I3n8fv9mo53kq5>>;
export type I3n8fv9mo53kq5 = [Anonymize<If9iqq7i64mur8>, bigint];
export type I1bfrt15apsnp = {
    /**
     *The amount of the first asset that was swapped.
     */
    "amount_in": bigint;
    /**
     *The amount of the second asset that was received.
     */
    "amount_out": bigint;
    /**
     *The route of asset IDs with amounts that the swap went through.
     *E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
     */
    "path": Anonymize<I7egh93q89718t>;
};
export type Id3old33tr9erj = {
    /**
     *The ID of the pool.
     */
    "pool_id": Anonymize<If21n82i0516em>;
    /**
     *The account initiating the touch.
     */
    "who": SS58String;
};
export type I7omheqbc53plq = AnonymousEnum<{
    "Frozen": Anonymize<Idusmq77988cmt>;
    "Thawed": Anonymize<Idusmq77988cmt>;
}>;
export type I7bdov8cfj9qk8 = AnonymousEnum<{
    "Frozen": Anonymize<I1rnkmiu7usb82>;
    "Thawed": Anonymize<I1rnkmiu7usb82>;
}>;
export type I3vl9org1c535t = AnonymousEnum<{
    /**
     *A custom event emitted by the contract.
     */
    "ContractEmitted": Anonymize<I7svbvm6hg57aj>;
}>;
export type I7svbvm6hg57aj = {
    /**
     *The contract that emitted the event.
     */
    "contract": FixedSizeBinary<20>;
    /**
     *Data supplied by the contract. Metadata generated during contract compilation
     *is needed to decode it.
     */
    "data": Binary;
    /**
     *A list of topics used to index the event.
     *Number of topics is capped by [`limits::NUM_EVENT_TOPICS`].
     */
    "topics": Anonymize<Ic5m5lp1oioo8r>;
};
export type Ic5m5lp1oioo8r = Array<FixedSizeBinary<32>>;
export type I23dbg5epnfjeo = AnonymousEnum<{
    /**
     *An account staked some tokens in a pool.
     */
    "Staked": Anonymize<I2k42nnm9nluhp>;
    /**
     *An account unstaked some tokens from a pool.
     */
    "Unstaked": Anonymize<Ic37bju0plgup1>;
    /**
     *An account harvested some rewards.
     */
    "RewardsHarvested": Anonymize<Ic37bju0plgup1>;
    /**
     *A new reward pool was created.
     */
    "PoolCreated": Anonymize<I7sm6ctq17lb21>;
    /**
     *A pool reward rate was modified by the admin.
     */
    "PoolRewardRateModified": Anonymize<I3fl7kvh9tccu2>;
    /**
     *A pool admin was modified.
     */
    "PoolAdminModified": Anonymize<I51711mrb372ih>;
    /**
     *A pool expiry block was modified by the admin.
     */
    "PoolExpiryBlockModified": Anonymize<I5j2utcjc4hktd>;
    /**
     *A pool information was cleared after it's completion.
     */
    "PoolCleanedUp": Anonymize<I931cottvong90>;
}>;
export type I2k42nnm9nluhp = {
    /**
     *The account that staked assets.
     */
    "staker": SS58String;
    /**
     *The pool.
     */
    "pool_id": number;
    /**
     *The staked asset amount.
     */
    "amount": bigint;
};
export type Ic37bju0plgup1 = {
    /**
     *The account that signed transaction.
     */
    "caller": SS58String;
    /**
     *The account that unstaked assets.
     */
    "staker": SS58String;
    /**
     *The pool.
     */
    "pool_id": number;
    /**
     *The unstaked asset amount.
     */
    "amount": bigint;
};
export type I7sm6ctq17lb21 = {
    /**
     *The account that created the pool.
     */
    "creator": SS58String;
    /**
     *The unique ID for the new pool.
     */
    "pool_id": number;
    /**
     *The staking asset.
     */
    "staked_asset_id": Anonymize<If9iqq7i64mur8>;
    /**
     *The reward asset.
     */
    "reward_asset_id": Anonymize<If9iqq7i64mur8>;
    /**
     *The initial reward rate per block.
     */
    "reward_rate_per_block": bigint;
    /**
     *The block the pool will cease to accumulate rewards.
     */
    "expiry_block": number;
    /**
     *The account allowed to modify the pool.
     */
    "admin": SS58String;
};
export type I3fl7kvh9tccu2 = {
    /**
     *The modified pool.
     */
    "pool_id": number;
    /**
     *The new reward rate per block.
     */
    "new_reward_rate_per_block": bigint;
};
export type I51711mrb372ih = {
    /**
     *The modified pool.
     */
    "pool_id": number;
    /**
     *The new admin.
     */
    "new_admin": SS58String;
};
export type I5j2utcjc4hktd = {
    /**
     *The modified pool.
     */
    "pool_id": number;
    /**
     *The new expiry block.
     */
    "new_expiry_block": number;
};
export type I931cottvong90 = {
    /**
     *The cleared pool.
     */
    "pool_id": number;
};
export type I61dksvl51aujo = AnonymousEnum<{
    /**
     *Given number of `(top, child)` keys were migrated respectively, with the given
     *`compute`.
     */
    "Migrated": Anonymize<Iagqcb06kbevb1>;
    /**
     *Some account got slashed by the given amount.
     */
    "Slashed": Anonymize<Id5fm4p8lj5qgi>;
    /**
     *The auto migration task finished.
     */
    "AutoMigrationFinished": undefined;
    /**
     *Migration got halted due to an error or miss-configuration.
     */
    "Halted": Anonymize<Iec8defeh924b6>;
}>;
export type Iagqcb06kbevb1 = {
    "top": number;
    "child": number;
    "compute": Anonymize<I85ah77hcf4cpl>;
};
export type I85ah77hcf4cpl = AnonymousEnum<{
    "Signed": undefined;
    "Auto": undefined;
}>;
export type Iec8defeh924b6 = {
    "error": Anonymize<I96objte63brjr>;
};
export type Ifiu844mj7r2h6 = AnonymousEnum<{
    /**
     *Indicates that a pool has been migrated to the new account ID.
     */
    "MigratedToNewAccount": Anonymize<I9al0v2qskkktj>;
}>;
export type I9al0v2qskkktj = {
    /**
     *Pool's ID.
     */
    "pool_id": Anonymize<If21n82i0516em>;
    /**
     *Pool's prior account ID.
     */
    "prior_account": SS58String;
    /**
     *Pool's new account ID.
     */
    "new_account": SS58String;
};
export type I95g6i7ilua7lq = Array<Anonymize<I9jd27rnpm8ttv>>;
export type I9jd27rnpm8ttv = FixedSizeArray<2, number>;
export type Ieniouoqkq4icf = {
    "spec_version": number;
    "spec_name": string;
};
export type I1v7jbnil3tjns = Array<Anonymize<Ifv73m0cjq92it>>;
export type Ifv73m0cjq92it = {
    "used_bandwidth": Anonymize<Ieafp1gui1o4cl>;
    "para_head_hash"?: Anonymize<I4s6vifaf8k998>;
    "consumed_go_ahead_signal"?: Anonymize<Iav8k1edbj86k7>;
};
export type Ieafp1gui1o4cl = {
    "ump_msg_count": number;
    "ump_total_bytes": number;
    "hrmp_outgoing": Anonymize<I68brng9hc4b57>;
};
export type I68brng9hc4b57 = Array<Anonymize<I2hfpgo4vigap7>>;
export type I2hfpgo4vigap7 = [number, Anonymize<I37lfg356jmoof>];
export type I37lfg356jmoof = {
    "msg_count": number;
    "total_bytes": number;
};
export type Iav8k1edbj86k7 = (UpgradeGoAhead) | undefined;
export type UpgradeGoAhead = Enum<{
    "Abort": undefined;
    "GoAhead": undefined;
}>;
export declare const UpgradeGoAhead: GetEnum<UpgradeGoAhead>;
export type I8jgj1nhcr2dg8 = {
    "used_bandwidth": Anonymize<Ieafp1gui1o4cl>;
    "hrmp_watermark"?: Anonymize<I4arjljr6dpflb>;
    "consumed_go_ahead_signal"?: Anonymize<Iav8k1edbj86k7>;
};
export type Ifn6q3equiq9qi = {
    "parent_head": Binary;
    "relay_parent_number": number;
    "relay_parent_storage_root": FixedSizeBinary<32>;
    "max_pov_size": number;
};
export type Ia3sb0vgvovhtg = (UpgradeRestriction) | undefined;
export type UpgradeRestriction = Enum<{
    "Present": undefined;
}>;
export declare const UpgradeRestriction: GetEnum<UpgradeRestriction>;
export type Itom7fk49o0c9 = Array<Binary>;
export type I4i91h98n3cv1b = {
    "dmq_mqc_head": FixedSizeBinary<32>;
    "relay_dispatch_queue_remaining_capacity": Anonymize<I3j1v1c2btq4bd>;
    "ingress_channels": Anonymize<I2d966pi8ko0ts>;
    "egress_channels": Anonymize<I2d966pi8ko0ts>;
};
export type I3j1v1c2btq4bd = {
    "remaining_count": number;
    "remaining_size": number;
};
export type I2d966pi8ko0ts = Array<Anonymize<Ib4li5mtsch8a1>>;
export type Ib4li5mtsch8a1 = [number, Anonymize<Ivvvdad7teq4e>];
export type Ivvvdad7teq4e = {
    "max_capacity": number;
    "max_total_size": number;
    "max_message_size": number;
    "msg_count": number;
    "total_size": number;
    "mqc_head"?: Anonymize<I4s6vifaf8k998>;
};
export type I4iumukclgj8ej = {
    "max_code_size": number;
    "max_head_data_size": number;
    "max_upward_queue_count": number;
    "max_upward_queue_size": number;
    "max_upward_message_size": number;
    "max_upward_message_num_per_candidate": number;
    "hrmp_max_message_num_per_candidate": number;
    "validation_upgrade_cooldown": number;
    "validation_upgrade_delay": number;
    "async_backing_params": Anonymize<Iavuvfkop6318c>;
};
export type Iavuvfkop6318c = {
    "max_candidate_depth": number;
    "allowed_ancestry_len": number;
};
export type Iqnbvitf7a7l3 = Array<Anonymize<I4p5t2krb1gmvp>>;
export type I4p5t2krb1gmvp = [number, FixedSizeBinary<32>];
export type I6r5cbv8ttrb09 = Array<Anonymize<I958l48g4qg5rf>>;
export type I958l48g4qg5rf = {
    "recipient": number;
    "data": Binary;
};
export type Iepbsvlk3qceij = AnonymousEnum<{
    "Active": Anonymize<Iessq0bats6ofh>;
    "Stuck": undefined;
}>;
export type Iessq0bats6ofh = {
    "index": number;
    "inner_cursor"?: Anonymize<Iabpgqcjikia83>;
    "started_at": number;
};
export type I8ds64oj6581v0 = Array<Anonymize<Ifd60g9ld04ljn>>;
export type Ifd60g9ld04ljn = {
    "id": FixedSizeBinary<8>;
    "amount": bigint;
    "reasons": BalancesTypesReasons;
};
export type BalancesTypesReasons = Enum<{
    "Fee": undefined;
    "Misc": undefined;
    "All": undefined;
}>;
export declare const BalancesTypesReasons: GetEnum<BalancesTypesReasons>;
export type Ia7pdug7cdsg8g = Array<Anonymize<I1basc5up2fk73>>;
export type I1basc5up2fk73 = {
    "id": FixedSizeBinary<8>;
    "amount": bigint;
};
export type I3jggpqhtc9902 = Array<Anonymize<I45v07rt5vvkb5>>;
export type I45v07rt5vvkb5 = {
    "id": Anonymize<Ioh34108q3h91>;
    "amount": bigint;
};
export type Ioh34108q3h91 = AnonymousEnum<{
    "NftFractionalization": Anonymize<I8bf8ma56td7eh>;
    "Revive": Anonymize<I364se861k3md3>;
    "AssetRewards": Anonymize<Icf8m1v8b5b6eh>;
    "StateTrieMigration": Anonymize<I7lf1val3vmpq0>;
}>;
export type I8bf8ma56td7eh = AnonymousEnum<{
    "Fractionalized": undefined;
}>;
export type I364se861k3md3 = AnonymousEnum<{
    "CodeUploadDepositReserve": undefined;
    "StorageDepositReserve": undefined;
    "AddressMapping": undefined;
}>;
export type Icf8m1v8b5b6eh = AnonymousEnum<{
    "PoolCreation": undefined;
}>;
export type I7lf1val3vmpq0 = AnonymousEnum<{
    "SlashForMigrate": undefined;
}>;
export type I88srdm17ahab6 = Array<Anonymize<Ic016g8hpt188c>>;
export type Ic016g8hpt188c = {
    "id": Anonymize<I1ld54nckf4al>;
    "amount": bigint;
};
export type I1ld54nckf4al = AnonymousEnum<{
    "AssetRewards": Anonymize<Idod1r495oa5gh>;
}>;
export type Idod1r495oa5gh = AnonymousEnum<{
    "Staked": undefined;
}>;
export type TransactionPaymentReleases = Enum<{
    "V1Ancient": undefined;
    "V2": undefined;
}>;
export declare const TransactionPaymentReleases: GetEnum<TransactionPaymentReleases>;
export type Ifi4da1gej1fri = Array<Anonymize<Iep1lmt6q3s6r3>>;
export type Iep1lmt6q3s6r3 = {
    "who": SS58String;
    "deposit": bigint;
};
export type Ifvgo9568rpmqc = Array<Anonymize<I8uo3fpd3bcc6f>>;
export type I8uo3fpd3bcc6f = [SS58String, FixedSizeBinary<32>];
export type I6cs1itejju2vv = [bigint, number];
export type Ib77b0fp1a6mjr = Array<Anonymize<I1tbd609kokm4d>>;
export type I1tbd609kokm4d = {
    "recipient": number;
    "state": Anonymize<Ic2gg6ldfq068e>;
    "signals_exist": boolean;
    "first_index": number;
    "last_index": number;
};
export type Ic2gg6ldfq068e = AnonymousEnum<{
    "Ok": undefined;
    "Suspended": undefined;
}>;
export type I5g2vv0ckl2m8b = [number, number];
export type Ifup3lg9ro8a0f = {
    "suspend_threshold": number;
    "drop_threshold": number;
    "resume_threshold": number;
};
export type I5qfubnuvrnqn6 = AnonymousEnum<{
    "Pending": Anonymize<I8n1p8t37t4406>;
    "VersionNotifier": Anonymize<Invrgr8s9n09r>;
    "Ready": Anonymize<I2ssu86ioj11k3>;
}>;
export type I8n1p8t37t4406 = {
    "responder": XcmVersionedLocation;
    "maybe_match_querier"?: Anonymize<I1k8uk4m0m3gr4>;
    "maybe_notify"?: Anonymize<I1faufi0iffstp>;
    "timeout": number;
};
export type I1k8uk4m0m3gr4 = (XcmVersionedLocation) | undefined;
export type I1faufi0iffstp = (FixedSizeBinary<2>) | undefined;
export type Invrgr8s9n09r = {
    "origin": XcmVersionedLocation;
    "is_active": boolean;
};
export type I2ssu86ioj11k3 = {
    "response": Anonymize<I9um3bb0cui9cs>;
    "at": number;
};
export type I9um3bb0cui9cs = AnonymousEnum<{
    "V3": XcmV3Response;
    "V4": XcmV4Response;
    "V5": Anonymize<I7vucpgm2c6959>;
}>;
export type XcmV3Response = Enum<{
    "Null": undefined;
    "Assets": Anonymize<Iai6dhqiq3bach>;
    "ExecutionResult"?: Anonymize<I7sltvf8v2nure>;
    "Version": number;
    "PalletsInfo": Anonymize<I599u7h20b52at>;
    "DispatchResult": XcmV3MaybeErrorCode;
}>;
export declare const XcmV3Response: GetEnum<XcmV3Response>;
export type I7sltvf8v2nure = (Anonymize<Id8ide743umavp>) | undefined;
export type Id8ide743umavp = [number, XcmV3TraitsError];
export type XcmV3TraitsError = Enum<{
    "Overflow": undefined;
    "Unimplemented": undefined;
    "UntrustedReserveLocation": undefined;
    "UntrustedTeleportLocation": undefined;
    "LocationFull": undefined;
    "LocationNotInvertible": undefined;
    "BadOrigin": undefined;
    "InvalidLocation": undefined;
    "AssetNotFound": undefined;
    "FailedToTransactAsset": undefined;
    "NotWithdrawable": undefined;
    "LocationCannotHold": undefined;
    "ExceedsMaxMessageSize": undefined;
    "DestinationUnsupported": undefined;
    "Transport": undefined;
    "Unroutable": undefined;
    "UnknownClaim": undefined;
    "FailedToDecode": undefined;
    "MaxWeightInvalid": undefined;
    "NotHoldingFees": undefined;
    "TooExpensive": undefined;
    "Trap": bigint;
    "ExpectationFalse": undefined;
    "PalletNotFound": undefined;
    "NameMismatch": undefined;
    "VersionIncompatible": undefined;
    "HoldingWouldOverflow": undefined;
    "ExportError": undefined;
    "ReanchorFailed": undefined;
    "NoDeal": undefined;
    "FeesNotMet": undefined;
    "LockError": undefined;
    "NoPermission": undefined;
    "Unanchored": undefined;
    "NotDepositable": undefined;
    "UnhandledXcmVersion": undefined;
    "WeightLimitReached": Anonymize<I4q39t5hn830vp>;
    "Barrier": undefined;
    "WeightNotComputable": undefined;
    "ExceedsStackLimit": undefined;
}>;
export declare const XcmV3TraitsError: GetEnum<XcmV3TraitsError>;
export type XcmV4Response = Enum<{
    "Null": undefined;
    "Assets": Anonymize<I50mli3hb64f9b>;
    "ExecutionResult"?: Anonymize<I7sltvf8v2nure>;
    "Version": number;
    "PalletsInfo": Anonymize<I599u7h20b52at>;
    "DispatchResult": XcmV3MaybeErrorCode;
}>;
export declare const XcmV4Response: GetEnum<XcmV4Response>;
export type I8t3u2dv73ahbd = [number, XcmVersionedLocation];
export type I7vlvrrl2pnbgk = [bigint, Anonymize<I4q39t5hn830vp>, number];
export type Ie0rpl5bahldfk = Array<Anonymize<I609v0gelr96h6>>;
export type I609v0gelr96h6 = [XcmVersionedLocation, number];
export type XcmPalletVersionMigrationStage = Enum<{
    "MigrateSupportedVersion": undefined;
    "MigrateVersionNotifiers": undefined;
    "NotifyCurrentTargets"?: Anonymize<Iabpgqcjikia83>;
    "MigrateAndNotifyOldTargets": undefined;
}>;
export declare const XcmPalletVersionMigrationStage: GetEnum<XcmPalletVersionMigrationStage>;
export type I7e5oaj2qi4kl1 = {
    "amount": bigint;
    "owner": XcmVersionedLocation;
    "locker": XcmVersionedLocation;
    "consumers": Anonymize<I2ia97v5nng96b>;
};
export type I2ia97v5nng96b = Array<Anonymize<I2a3me3o6q76s8>>;
export type I2a3me3o6q76s8 = [undefined, bigint];
export type Ie849h3gncgvok = [number, SS58String, XcmVersionedAssetId];
export type XcmVersionedAssetId = Enum<{
    "V3": XcmV3MultiassetAssetId;
    "V4": Anonymize<I4c0s5cioidn76>;
    "V5": Anonymize<If9iqq7i64mur8>;
}>;
export declare const XcmVersionedAssetId: GetEnum<XcmVersionedAssetId>;
export type Iat62vud7hlod2 = Array<Anonymize<I55s5m6u4mntoo>>;
export type I55s5m6u4mntoo = [bigint, XcmVersionedLocation];
export type I7f4alf2hnuu8s = {
    "delivery_fee_factor": bigint;
    "is_congested": boolean;
};
export type Idh2ug6ou4a8og = {
    "begin": number;
    "end": number;
    "count": number;
    "ready_neighbours"?: Anonymize<Ignpjhsnd42fu>;
    "message_count": bigint;
    "size": bigint;
};
export type Ignpjhsnd42fu = (Anonymize<I9d2uml1gs7v8>) | undefined;
export type I9d2uml1gs7v8 = {
    "prev": Anonymize<Iejeo53sea6n4q>;
    "next": Anonymize<Iejeo53sea6n4q>;
};
export type I53esa2ms463bk = {
    "remaining": number;
    "remaining_size": number;
    "first_index": number;
    "first": number;
    "last": number;
    "heap": Binary;
};
export type Ib4jhb8tt3uung = [Anonymize<Iejeo53sea6n4q>, number];
export type Iag146hmjgqfgj = {
    "when": Anonymize<Itvprrpb0nm3o>;
    "deposit": bigint;
    "depositor": SS58String;
    "approvals": Anonymize<Ia2lhg7l2hilo3>;
};
export type I32or1mos65f9o = [Anonymize<I8r6bfjpbrc70c>, bigint];
export type I8r6bfjpbrc70c = Array<Anonymize<I5temii03lnchi>>;
export type I5temii03lnchi = {
    "delegate": SS58String;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
};
export type I9p9lq3rej5bhc = [Anonymize<Ie1hjkhaoshr67>, bigint];
export type Ie1hjkhaoshr67 = Array<Anonymize<I70eqajm9p2sc5>>;
export type I70eqajm9p2sc5 = {
    "real": SS58String;
    "call_hash": FixedSizeBinary<32>;
    "height": number;
};
export type I3qklfjubrljqh = {
    "owner": SS58String;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
    "supply": bigint;
    "deposit": bigint;
    "min_balance": bigint;
    "is_sufficient": boolean;
    "accounts": number;
    "sufficients": number;
    "approvals": number;
    "status": Anonymize<I3sd59779ndgs3>;
};
export type I3sd59779ndgs3 = AnonymousEnum<{
    "Live": undefined;
    "Frozen": undefined;
    "Destroying": undefined;
}>;
export type Iag3f1hum3p4c8 = {
    "balance": bigint;
    "status": Anonymize<Icvjt1ogfma62c>;
    "reason": Anonymize<Ia34prnt421tan>;
};
export type Icvjt1ogfma62c = AnonymousEnum<{
    "Liquid": undefined;
    "Frozen": undefined;
    "Blocked": undefined;
}>;
export type Ia34prnt421tan = AnonymousEnum<{
    "Consumer": undefined;
    "Sufficient": undefined;
    "DepositHeld": bigint;
    "DepositRefunded": undefined;
    "DepositFrom": Anonymize<I95l2k9b1re95f>;
}>;
export type I95l2k9b1re95f = [SS58String, bigint];
export type I7svnfko10tq2e = [number, SS58String];
export type I4s6jkha20aoh0 = {
    "amount": bigint;
    "deposit": bigint;
};
export type I2brm5b9jij1st = [number, SS58String, SS58String];
export type I78s05f59eoi8b = {
    "deposit": bigint;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type Ianufjuplcj6u4 = {
    "owner": SS58String;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
    "total_deposit": bigint;
    "free_holding": boolean;
    "items": number;
    "item_metadatas": number;
    "attributes": number;
    "is_frozen": boolean;
};
export type Id32h28hjj1tch = [SS58String, number, number];
export type I6ouflveob4eli = [SS58String, number];
export type I2mv9dvsaj3kcr = {
    "owner": SS58String;
    "approved"?: Anonymize<Ihfphjolmsqq1>;
    "is_frozen": boolean;
    "deposit": bigint;
};
export type I7781vnk0rm9eq = {
    "deposit": bigint;
    "data": Binary;
    "is_frozen": boolean;
};
export type Ie2iqtdb0stqo1 = [Binary, bigint];
export type I5irutptk105do = [number, Anonymize<I4arjljr6dpflb>, Binary];
export type Ic9nev69d8grv1 = [bigint, Anonymize<Ihfphjolmsqq1>];
export type I18m6a0sc4k7s9 = {
    "owner": SS58String;
    "owner_deposit": bigint;
    "items": number;
    "item_metadatas": number;
    "item_configs": number;
    "attributes": number;
};
export type Ic9iokm15iigt6 = {
    "owner": SS58String;
    "approvals": Anonymize<I4m61c4hi7qpuv>;
    "deposit": Anonymize<Ic262ibdoec56a>;
};
export type I4m61c4hi7qpuv = Array<Anonymize<I2bebbvuje4ra8>>;
export type I2bebbvuje4ra8 = [SS58String, Anonymize<I4arjljr6dpflb>];
export type I35m96p3u4vl0p = {
    "deposit": bigint;
    "data": Binary;
};
export type Iapmji0h53pmkn = {
    "deposit": Anonymize<I6e70ge7ubff75>;
    "data": Binary;
};
export type I6e70ge7ubff75 = {
    "account"?: Anonymize<Ihfphjolmsqq1>;
    "amount": bigint;
};
export type Idrr42svup341f = [Binary, Anonymize<I6e70ge7ubff75>];
export type I4ugih6gb4fmug = [number, Anonymize<I4arjljr6dpflb>, Anonymize<If3jjadhmug6qc>, Binary];
export type Idac0t49lnd4ls = {
    "desired_collection": number;
    "desired_item"?: Anonymize<I4arjljr6dpflb>;
    "price"?: Anonymize<I6oogc1jbmmi81>;
    "deadline": number;
};
export type I72ndo6phms8ik = {
    "settings": bigint;
    "max_supply"?: Anonymize<I4arjljr6dpflb>;
    "mint_settings": Anonymize<Ia3s8qquibn97v>;
};
export type Ia3s8qquibn97v = {
    "mint_type": Anonymize<I41p72ko7duf22>;
    "price"?: Anonymize<I35p85j063s0il>;
    "start_block"?: Anonymize<I4arjljr6dpflb>;
    "end_block"?: Anonymize<I4arjljr6dpflb>;
    "default_item_settings": bigint;
};
export type I41p72ko7duf22 = AnonymousEnum<{
    "Issuer": undefined;
    "Public": undefined;
    "HolderOf": number;
}>;
export type I35p85j063s0il = (bigint) | undefined;
export type I4v5g6i7bmt06o = [Anonymize<If9iqq7i64mur8>, SS58String];
export type I84bhscllvv07n = [Anonymize<If9iqq7i64mur8>, SS58String, SS58String];
export type I1b2ckfeib3nig = {
    "asset": number;
    "fractions": bigint;
    "deposit": bigint;
    "asset_creator": SS58String;
};
export type Idtkgtc4to05ia = {
    "owner": SS58String;
    "deposit": bigint;
    "refcount": bigint;
    "code_len": number;
    "behaviour_version": number;
};
export type I5t5eoogd7ekut = {
    "trie_id": Binary;
    "code_hash": FixedSizeBinary<32>;
    "storage_bytes": number;
    "storage_items": number;
    "storage_byte_deposit": bigint;
    "storage_item_deposit": bigint;
    "storage_base_deposit": bigint;
    "immutable_data_len": number;
};
export type I8t4pajubp34g3 = {
    "insert_counter": number;
    "delete_counter": number;
};
export type Id8jl5g9dhjihk = {
    "amount": bigint;
    "rewards": bigint;
    "reward_per_token_paid": bigint;
};
export type I797avu38kpqn = {
    "staked_asset_id": Anonymize<If9iqq7i64mur8>;
    "reward_asset_id": Anonymize<If9iqq7i64mur8>;
    "reward_rate_per_block": bigint;
    "expiry_block": number;
    "admin": SS58String;
    "total_tokens_staked": bigint;
    "reward_per_token_stored": bigint;
    "last_update_block": number;
    "account": SS58String;
};
export type If354jrdedj0pj = {
    "progress_top": Anonymize<I1ufmh6d8psvik>;
    "progress_child": Anonymize<I1ufmh6d8psvik>;
    "size": number;
    "top_items": number;
    "child_items": number;
};
export type I1ufmh6d8psvik = AnonymousEnum<{
    "ToStart": undefined;
    "LastKey": Binary;
    "Complete": undefined;
}>;
export type Ib17t3992hb64n = (Anonymize<I215mkl885p4da>) | undefined;
export type I215mkl885p4da = {
    "size": number;
    "item": number;
};
export type In7a38730s6qs = {
    "base_block": Anonymize<I4q39t5hn830vp>;
    "max_block": Anonymize<I4q39t5hn830vp>;
    "per_class": Anonymize<I79te2qqsklnbd>;
};
export type I79te2qqsklnbd = {
    "normal": Anonymize<Ia78ef0a3p5958>;
    "operational": Anonymize<Ia78ef0a3p5958>;
    "mandatory": Anonymize<Ia78ef0a3p5958>;
};
export type Ia78ef0a3p5958 = {
    "base_extrinsic": Anonymize<I4q39t5hn830vp>;
    "max_extrinsic"?: Anonymize<Iasb8k6ash5mjn>;
    "max_total"?: Anonymize<Iasb8k6ash5mjn>;
    "reserved"?: Anonymize<Iasb8k6ash5mjn>;
};
export type If15el53dd76v9 = {
    "normal": number;
    "operational": number;
    "mandatory": number;
};
export type I9s0ave7t0vnrk = {
    "read": bigint;
    "write": bigint;
};
export type I4fo08joqmcqnm = {
    "spec_name": string;
    "impl_name": string;
    "authoring_version": number;
    "spec_version": number;
    "impl_version": number;
    "apis": Anonymize<Ic9hg6pp5pkea5>;
    "transaction_version": number;
    "system_version": number;
};
export type Ic9hg6pp5pkea5 = Array<Anonymize<I85u3mm1me217a>>;
export type I85u3mm1me217a = [FixedSizeBinary<8>, number];
export type Iekve0i6djpd9f = AnonymousEnum<{
    /**
     *Make some on-chain remark.
     *
     *Can be executed by every `origin`.
     */
    "remark": Anonymize<I8ofcg5rbj0g2c>;
    /**
     *Set the number of pages in the WebAssembly environment's heap.
     */
    "set_heap_pages": Anonymize<I4adgbll7gku4i>;
    /**
     *Set the new runtime code.
     */
    "set_code": Anonymize<I6pjjpfvhvcfru>;
    /**
     *Set the new runtime code without doing any checks of the given `code`.
     *
     *Note that runtime upgrades will not run if this is called with a not-increasing spec
     *version!
     */
    "set_code_without_checks": Anonymize<I6pjjpfvhvcfru>;
    /**
     *Set some items of storage.
     */
    "set_storage": Anonymize<I9pj91mj79qekl>;
    /**
     *Kill some items from storage.
     */
    "kill_storage": Anonymize<I39uah9nss64h9>;
    /**
     *Kill all storage items with a key that starts with the given prefix.
     *
     ***NOTE:** We rely on the Root origin to provide us the number of subkeys under
     *the prefix we are removing to accurately calculate the weight of this function.
     */
    "kill_prefix": Anonymize<Ik64dknsq7k08>;
    /**
     *Make some on-chain remark and emit event.
     */
    "remark_with_event": Anonymize<I8ofcg5rbj0g2c>;
    /**
     *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     *later.
     *
     *This call requires Root origin.
     */
    "authorize_upgrade": Anonymize<Ib51vk42m1po4n>;
    /**
     *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     *later.
     *
     *WARNING: This authorizes an upgrade that will take place without any safety checks, for
     *example that the spec name remains the same and that the version number increases. Not
     *recommended for normal use. Use `authorize_upgrade` instead.
     *
     *This call requires Root origin.
     */
    "authorize_upgrade_without_checks": Anonymize<Ib51vk42m1po4n>;
    /**
     *Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
     *
     *If the authorization required a version check, this call will ensure the spec name
     *remains unchanged and that the spec version has increased.
     *
     *Depending on the runtime's `OnSetCode` configuration, this function may directly apply
     *the new `code` in the same block or attempt to schedule the upgrade.
     *
     *All origins are allowed.
     */
    "apply_authorized_upgrade": Anonymize<I6pjjpfvhvcfru>;
}>;
export type I8ofcg5rbj0g2c = {
    "remark": Binary;
};
export type I4adgbll7gku4i = {
    "pages": bigint;
};
export type I6pjjpfvhvcfru = {
    "code": Binary;
};
export type I9pj91mj79qekl = {
    "items": Anonymize<I6pi5ou8r1hblk>;
};
export type I6pi5ou8r1hblk = Array<Anonymize<Idkbvh6dahk1v7>>;
export type Idkbvh6dahk1v7 = FixedSizeArray<2, Binary>;
export type I39uah9nss64h9 = {
    "keys": Anonymize<Itom7fk49o0c9>;
};
export type Ik64dknsq7k08 = {
    "prefix": Binary;
    "subkeys": number;
};
export type Ib51vk42m1po4n = {
    "code_hash": FixedSizeBinary<32>;
};
export type I5kev21p7u6ajb = AnonymousEnum<{
    /**
     *Set the current validation data.
     *
     *This should be invoked exactly once per block. It will panic at the finalization
     *phase if the call was not invoked.
     *
     *The dispatch origin for this call must be `Inherent`
     *
     *As a side effect, this function upgrades the current validation function
     *if the appropriate time has come.
     */
    "set_validation_data": Anonymize<I60v7bikk54tpu>;
    "sudo_send_upward_message": Anonymize<Ifpj261e8s63m3>;
}>;
export type I60v7bikk54tpu = {
    "data": Anonymize<I1c673c4up9l62>;
};
export type I1c673c4up9l62 = {
    "validation_data": Anonymize<Ifn6q3equiq9qi>;
    "relay_chain_state": Anonymize<Itom7fk49o0c9>;
    "downward_messages": Anonymize<I6ljjd4b5fa4ov>;
    "horizontal_messages": Anonymize<I2pf0b05mc7sdr>;
};
export type I6ljjd4b5fa4ov = Array<Anonymize<I60847k37jfcc6>>;
export type I60847k37jfcc6 = {
    "sent_at": number;
    "msg": Binary;
};
export type I2pf0b05mc7sdr = Array<Anonymize<I9hvej6h53dqj0>>;
export type I9hvej6h53dqj0 = [number, Anonymize<Iev3u09i2vqn93>];
export type Iev3u09i2vqn93 = Array<Anonymize<I409qo0sfkbh16>>;
export type I409qo0sfkbh16 = {
    "sent_at": number;
    "data": Binary;
};
export type Ifpj261e8s63m3 = {
    "message": Binary;
};
export type I7d75gqfg6jh9c = AnonymousEnum<{
    /**
     *Set the current time.
     *
     *This call should be invoked exactly once per block. It will panic at the finalization
     *phase, if this call hasn't been invoked by that time.
     *
     *The timestamp should be greater than the previous one by the amount specified by
     *[`Config::MinimumPeriod`].
     *
     *The dispatch origin for this call must be _None_.
     *
     *This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
     *that changing the complexity of this call could result exhausting the resources in a
     *block to execute any other calls.
     *
     *## Complexity
     *- `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     *- 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
     *  `on_finalize`)
     *- 1 event handler `on_timestamp_set`. Must be `O(1)`.
     */
    "set": Anonymize<Idcr6u6361oad9>;
}>;
export type Idcr6u6361oad9 = {
    "now": bigint;
};
export type I4oqb168b2d4er = AnonymousEnum<{
    /**
     *Allows root to set a cursor to forcefully start, stop or forward the migration process.
     *
     *Should normally not be needed and is only in place as emergency measure. Note that
     *restarting the migration process in this manner will not call the
     *[`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
     */
    "force_set_cursor": Anonymize<Ibou4u1engb441>;
    /**
     *Allows root to set an active cursor to forcefully start/forward the migration process.
     *
     *This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
     *`started_at` value to the next block number. Otherwise this would not be possible, since
     *`force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
     *indicates that the current block number plus one should be used.
     */
    "force_set_active_cursor": Anonymize<Id6nbvqoqdj4o2>;
    /**
     *Forces the onboarding of the migrations.
     *
     *This process happens automatically on a runtime upgrade. It is in place as an emergency
     *measurement. The cursor needs to be `None` for this to succeed.
     */
    "force_onboard_mbms": undefined;
    /**
     *Clears the `Historic` set.
     *
     *`map_cursor` must be set to the last value that was returned by the
     *`HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
     *way that will result in a sensible weight.
     */
    "clear_historic": Anonymize<I95iqep3b8snn9>;
}>;
export type Ibou4u1engb441 = {
    "cursor"?: Anonymize<Icmmmo81k3r2n7>;
};
export type Icmmmo81k3r2n7 = (Anonymize<Iepbsvlk3qceij>) | undefined;
export type Id6nbvqoqdj4o2 = {
    "index": number;
    "inner_cursor"?: Anonymize<Iabpgqcjikia83>;
    "started_at"?: Anonymize<I4arjljr6dpflb>;
};
export type I95iqep3b8snn9 = {
    "selector": Anonymize<I2il0noe6jkb0o>;
};
export type I2il0noe6jkb0o = AnonymousEnum<{
    "Specific": Anonymize<Itom7fk49o0c9>;
    "Wildcard": Anonymize<Id9494tkgood2r>;
}>;
export type Id9494tkgood2r = {
    "limit"?: Anonymize<I4arjljr6dpflb>;
    "previous_cursor"?: Anonymize<Iabpgqcjikia83>;
};
export type I9svldsp29mh87 = AnonymousEnum<{
    /**
     *Transfer some liquid free balance to another account.
     *
     *`transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     *If the sender's account is below the existential deposit as a result
     *of the transfer, the account will be reaped.
     *
     *The dispatch origin for this call must be `Signed` by the transactor.
     */
    "transfer_allow_death": Anonymize<I4ktuaksf5i1gk>;
    /**
     *Exactly as `transfer_allow_death`, except the origin must be root and the source account
     *may be specified.
     */
    "force_transfer": Anonymize<I9bqtpv2ii35mp>;
    /**
     *Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
     *kill the origin account.
     *
     *99% of the time you want [`transfer_allow_death`] instead.
     *
     *[`transfer_allow_death`]: struct.Pallet.html#method.transfer
     */
    "transfer_keep_alive": Anonymize<I4ktuaksf5i1gk>;
    /**
     *Transfer the entire transferable balance from the caller account.
     *
     *NOTE: This function only attempts to transfer _transferable_ balances. This means that
     *any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     *transferred by this function. To ensure that this function results in a killed account,
     *you might need to prepare the account by removing any reference counters, storage
     *deposits, etc...
     *
     *The dispatch origin of this call must be Signed.
     *
     *- `dest`: The recipient of the transfer.
     *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *  of the funds the account has, causing the sender account to be killed (false), or
     *  transfer everything except at least the existential deposit, which will guarantee to
     *  keep the sender account alive (true).
     */
    "transfer_all": Anonymize<I9j7pagd6d4bda>;
    /**
     *Unreserve some balance from a user by force.
     *
     *Can only be called by ROOT.
     */
    "force_unreserve": Anonymize<I2h9pmio37r7fb>;
    /**
     *Upgrade a specified account.
     *
     *- `origin`: Must be `Signed`.
     *- `who`: The account to be upgraded.
     *
     *This will waive the transaction fee if at least all but 10% of the accounts needed to
     *be upgraded. (We let some not have to be upgraded just in order to allow for the
     *possibility of churn).
     */
    "upgrade_accounts": Anonymize<Ibmr18suc9ikh9>;
    /**
     *Set the regular balance of a given account.
     *
     *The dispatch origin for this call is `root`.
     */
    "force_set_balance": Anonymize<I9iq22t0burs89>;
    /**
     *Adjust the total issuance in a saturating way.
     *
     *Can only be called by root and always needs a positive `delta`.
     *
     *# Example
     */
    "force_adjust_total_issuance": Anonymize<I5u8olqbbvfnvf>;
    /**
     *Burn the specified liquid free balance from the origin account.
     *
     *If the origin's account ends up below the existential deposit as a result
     *of the burn and `keep_alive` is false, the account will be reaped.
     *
     *Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
     *this `burn` operation will reduce total issuance by the amount _burned_.
     */
    "burn": Anonymize<I5utcetro501ir>;
}>;
export type I4ktuaksf5i1gk = {
    "dest": MultiAddress;
    "value": bigint;
};
export type MultiAddress = Enum<{
    "Id": SS58String;
    "Index": undefined;
    "Raw": Binary;
    "Address32": FixedSizeBinary<32>;
    "Address20": FixedSizeBinary<20>;
}>;
export declare const MultiAddress: GetEnum<MultiAddress>;
export type I9bqtpv2ii35mp = {
    "source": MultiAddress;
    "dest": MultiAddress;
    "value": bigint;
};
export type I9j7pagd6d4bda = {
    "dest": MultiAddress;
    "keep_alive": boolean;
};
export type I2h9pmio37r7fb = {
    "who": MultiAddress;
    "amount": bigint;
};
export type Ibmr18suc9ikh9 = {
    "who": Anonymize<Ia2lhg7l2hilo3>;
};
export type I9iq22t0burs89 = {
    "who": MultiAddress;
    "new_free": bigint;
};
export type I5u8olqbbvfnvf = {
    "direction": BalancesAdjustmentDirection;
    "delta": bigint;
};
export type BalancesAdjustmentDirection = Enum<{
    "Increase": undefined;
    "Decrease": undefined;
}>;
export declare const BalancesAdjustmentDirection: GetEnum<BalancesAdjustmentDirection>;
export type I5utcetro501ir = {
    "value": bigint;
    "keep_alive": boolean;
};
export type I9dpq5287dur8b = AnonymousEnum<{
    /**
     *Set the list of invulnerable (fixed) collators. These collators must do some
     *preparation, namely to have registered session keys.
     *
     *The call will remove any accounts that have not registered keys from the set. That is,
     *it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
     *acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
     *
     *This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
     *is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
     *`batch_all` can also be used to enforce atomicity. If any candidates are included in
     *`new`, they should be removed with `remove_invulnerable_candidate` after execution.
     *
     *Must be called by the `UpdateOrigin`.
     */
    "set_invulnerables": Anonymize<Ifccifqltb5obi>;
    /**
     *Set the ideal number of non-invulnerable collators. If lowering this number, then the
     *number of running collators could be higher than this figure. Aside from that edge case,
     *there should be no other way to have more candidates than the desired number.
     *
     *The origin for this call must be the `UpdateOrigin`.
     */
    "set_desired_candidates": Anonymize<Iadtsfv699cq8b>;
    /**
     *Set the candidacy bond amount.
     *
     *If the candidacy bond is increased by this call, all current candidates which have a
     *deposit lower than the new bond will be kicked from the list and get their deposits
     *back.
     *
     *The origin for this call must be the `UpdateOrigin`.
     */
    "set_candidacy_bond": Anonymize<Ialpmgmhr3gk5r>;
    /**
     *Register this account as a collator candidate. The account must (a) already have
     *registered session keys and (b) be able to reserve the `CandidacyBond`.
     *
     *This call is not available to `Invulnerable` collators.
     */
    "register_as_candidate": undefined;
    /**
     *Deregister `origin` as a collator candidate. Note that the collator can only leave on
     *session change. The `CandidacyBond` will be unreserved immediately.
     *
     *This call will fail if the total number of candidates would drop below
     *`MinEligibleCollators`.
     */
    "leave_intent": undefined;
    /**
     *Add a new account `who` to the list of `Invulnerables` collators. `who` must have
     *registered session keys. If `who` is a candidate, they will be removed.
     *
     *The origin for this call must be the `UpdateOrigin`.
     */
    "add_invulnerable": Anonymize<I4cbvqmqadhrea>;
    /**
     *Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
     *be sorted.
     *
     *The origin for this call must be the `UpdateOrigin`.
     */
    "remove_invulnerable": Anonymize<I4cbvqmqadhrea>;
    /**
     *Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
     *
     *Setting a `new_deposit` that is lower than the current deposit while `origin` is
     *occupying a top-`DesiredCandidates` slot is not allowed.
     *
     *This call will fail if `origin` is not a collator candidate, the updated bond is lower
     *than the minimum candidacy bond, and/or the amount cannot be reserved.
     */
    "update_bond": Anonymize<I3sdol54kg5jaq>;
    /**
     *The caller `origin` replaces a candidate `target` in the collator candidate list by
     *reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
     *the existing bond of the target it is trying to replace.
     *
     *This call will fail if the caller is already a collator candidate or invulnerable, the
     *caller does not have registered session keys, the target is not a collator candidate,
     *and/or the `deposit` amount cannot be reserved.
     */
    "take_candidate_slot": Anonymize<I8fougodaj6di6>;
}>;
export type Ifccifqltb5obi = {
    "new": Anonymize<Ia2lhg7l2hilo3>;
};
export type Iadtsfv699cq8b = {
    "max": number;
};
export type Ialpmgmhr3gk5r = {
    "bond": bigint;
};
export type I3sdol54kg5jaq = {
    "new_deposit": bigint;
};
export type I8fougodaj6di6 = {
    "deposit": bigint;
    "target": SS58String;
};
export type I77dda7hps0u37 = AnonymousEnum<{
    /**
     *Sets the session key(s) of the function caller to `keys`.
     *Allows an account to set its session key prior to becoming a validator.
     *This doesn't take effect until the next session.
     *
     *The dispatch origin of this function must be signed.
     *
     *## Complexity
     *- `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
     *  fixed.
     */
    "set_keys": Anonymize<I81vt5eq60l4b6>;
    /**
     *Removes any session key(s) of the function caller.
     *
     *This doesn't take effect until the next session.
     *
     *The dispatch origin of this function must be Signed and the account must be either be
     *convertible to a validator ID using the chain's typical addressing system (this usually
     *means being a controller account) or directly convertible into a validator ID (which
     *usually means being a stash account).
     *
     *## Complexity
     *- `O(1)` in number of key types. Actual cost depends on the number of length of
     *  `T::Keys::key_ids()` which is fixed.
     */
    "purge_keys": undefined;
}>;
export type I81vt5eq60l4b6 = {
    "keys": FixedSizeBinary<32>;
    "proof": Binary;
};
export type Ib7tahn20bvsep = AnonymousEnum<{
    /**
     *Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     *
     *- `origin`: Must pass `ControllerOrigin`.
     */
    "suspend_xcm_execution": undefined;
    /**
     *Resumes all XCM executions for the XCMP queue.
     *
     *Note that this function doesn't change the status of the in/out bound channels.
     *
     *- `origin`: Must pass `ControllerOrigin`.
     */
    "resume_xcm_execution": undefined;
    /**
     *Overwrites the number of pages which must be in the queue for the other side to be
     *told to suspend their sending.
     *
     *- `origin`: Must pass `Root`.
     *- `new`: Desired value for `QueueConfigData.suspend_value`
     */
    "update_suspend_threshold": Anonymize<I3vh014cqgmrfd>;
    /**
     *Overwrites the number of pages which must be in the queue after which we drop any
     *further messages from the channel.
     *
     *- `origin`: Must pass `Root`.
     *- `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    "update_drop_threshold": Anonymize<I3vh014cqgmrfd>;
    /**
     *Overwrites the number of pages which the queue must be reduced to before it signals
     *that message sending may recommence after it has been suspended.
     *
     *- `origin`: Must pass `Root`.
     *- `new`: Desired value for `QueueConfigData.resume_threshold`
     */
    "update_resume_threshold": Anonymize<I3vh014cqgmrfd>;
}>;
export type I3vh014cqgmrfd = {
    "new": number;
};
export type I4up31a3q8cjhp = AnonymousEnum<{
    "send": Anonymize<Ia5cotcvi888ln>;
    /**
     *Teleport some assets from the local chain to some destination chain.
     *
     ***This function is deprecated: Use `limited_teleport_assets` instead.**
     *
     *Fee payment on the destination side is made from the asset in the `assets` vector of
     *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     *with all fees taken as needed from the asset.
     *
     *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *- `dest`: Destination context for the assets. Will typically be `[Parent,
     *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *  relay to parachain.
     *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *  generally be an `AccountId32` value.
     *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *  fee on the `dest` chain.
     *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *  fees.
     */
    "teleport_assets": Anonymize<I21jsa919m88fd>;
    /**
     *Transfer some assets from the local chain to the destination chain through their local,
     *destination or remote reserve.
     *
     *`assets` must have same reserve location and may not be teleportable to `dest`.
     * - `assets` have local reserve: transfer assets to sovereign account of destination
     *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *   assets to `beneficiary`.
     * - `assets` have destination reserve: burn local assets and forward a notification to
     *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *   deposit them to `beneficiary`.
     * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
     *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
     *   to mint and deposit reserve-based assets to `beneficiary`.
     *
     ***This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
     *
     *Fee payment on the destination side is made from the asset in the `assets` vector of
     *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     *with all fees taken as needed from the asset.
     *
     *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *- `dest`: Destination context for the assets. Will typically be `[Parent,
     *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *  relay to parachain.
     *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *  generally be an `AccountId32` value.
     *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *  fee on the `dest` (and possibly reserve) chains.
     *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *  fees.
     */
    "reserve_transfer_assets": Anonymize<I21jsa919m88fd>;
    /**
     *Execute an XCM message from a local, signed, origin.
     *
     *An event is deposited indicating whether `msg` could be executed completely or only
     *partially.
     *
     *No more than `max_weight` will be used in its attempted execution. If this is less than
     *the maximum amount of weight that the message could take to be executed, then no
     *execution attempt will be made.
     */
    "execute": Anonymize<Iegif7m3upfe1k>;
    /**
     *Extoll that a particular destination can be communicated with through a particular
     *version of XCM.
     *
     *- `origin`: Must be an origin specified by AdminOrigin.
     *- `location`: The destination that is being described.
     *- `xcm_version`: The latest version of XCM that `location` supports.
     */
    "force_xcm_version": Anonymize<I9kt8c221c83ln>;
    /**
     *Set a safe XCM version (the version that XCM should be encoded with if the most recent
     *version a destination can accept is unknown).
     *
     *- `origin`: Must be an origin specified by AdminOrigin.
     *- `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    "force_default_xcm_version": Anonymize<Ic76kfh5ebqkpl>;
    /**
     *Ask a location to notify us regarding their XCM version and any changes to it.
     *
     *- `origin`: Must be an origin specified by AdminOrigin.
     *- `location`: The location to which we should subscribe for XCM version notifications.
     */
    "force_subscribe_version_notify": Anonymize<Icscpmubum33bq>;
    /**
     *Require that a particular destination should no longer notify us regarding any XCM
     *version changes.
     *
     *- `origin`: Must be an origin specified by AdminOrigin.
     *- `location`: The location to which we are currently subscribed for XCM version
     *  notifications which we no longer desire.
     */
    "force_unsubscribe_version_notify": Anonymize<Icscpmubum33bq>;
    /**
     *Transfer some assets from the local chain to the destination chain through their local,
     *destination or remote reserve.
     *
     *`assets` must have same reserve location and may not be teleportable to `dest`.
     * - `assets` have local reserve: transfer assets to sovereign account of destination
     *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *   assets to `beneficiary`.
     * - `assets` have destination reserve: burn local assets and forward a notification to
     *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *   deposit them to `beneficiary`.
     * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
     *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
     *   to mint and deposit reserve-based assets to `beneficiary`.
     *
     *Fee payment on the destination side is made from the asset in the `assets` vector of
     *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     *is needed than `weight_limit`, then the operation will fail and the sent assets may be
     *at risk.
     *
     *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *- `dest`: Destination context for the assets. Will typically be `[Parent,
     *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *  relay to parachain.
     *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *  generally be an `AccountId32` value.
     *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *  fee on the `dest` (and possibly reserve) chains.
     *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *  fees.
     *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    "limited_reserve_transfer_assets": Anonymize<I21d2olof7eb60>;
    /**
     *Teleport some assets from the local chain to some destination chain.
     *
     *Fee payment on the destination side is made from the asset in the `assets` vector of
     *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     *is needed than `weight_limit`, then the operation will fail and the sent assets may be
     *at risk.
     *
     *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *- `dest`: Destination context for the assets. Will typically be `[Parent,
     *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *  relay to parachain.
     *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *  generally be an `AccountId32` value.
     *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *  fee on the `dest` chain.
     *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *  fees.
     *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    "limited_teleport_assets": Anonymize<I21d2olof7eb60>;
    /**
     *Set or unset the global suspension state of the XCM executor.
     *
     *- `origin`: Must be an origin specified by AdminOrigin.
     *- `suspended`: `true` to suspend, `false` to resume.
     */
    "force_suspension": Anonymize<Ibgm4rnf22lal1>;
    /**
     *Transfer some assets from the local chain to the destination chain through their local,
     *destination or remote reserve, or through teleports.
     *
     *Fee payment on the destination side is made from the asset in the `assets` vector of
     *index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
     *`weight_limit` of weight. If more weight is needed than `weight_limit`, then the
     *operation will fail and the sent assets may be at risk.
     *
     *`assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
     *to `dest`, no limitations imposed on `fees`.
     * - for local reserve: transfer assets to sovereign account of destination chain and
     *   forward a notification XCM to `dest` to mint and deposit reserve-based assets to
     *   `beneficiary`.
     * - for destination reserve: burn local assets and forward a notification to `dest` chain
     *   to withdraw the reserve assets from this chain's sovereign account and deposit them
     *   to `beneficiary`.
     * - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
     *   from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
     *   and deposit reserve-based assets to `beneficiary`.
     * - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
     *   assets and deposit them to `beneficiary`.
     *
     *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *- `dest`: Destination context for the assets. Will typically be `X2(Parent,
     *  Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
     *  from relay to parachain.
     *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
     *  generally be an `AccountId32` value.
     *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *  fee on the `dest` (and possibly reserve) chains.
     *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *  fees.
     *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    "transfer_assets": Anonymize<I21d2olof7eb60>;
    /**
     *Claims assets trapped on this pallet because of leftover assets during XCM execution.
     *
     *- `origin`: Anyone can call this extrinsic.
     *- `assets`: The exact assets that were trapped. Use the version to specify what version
     *was the latest when they were trapped.
     *- `beneficiary`: The location/account where the claimed assets will be deposited.
     */
    "claim_assets": Anonymize<Ie68np0vpihith>;
    /**
     *Transfer assets from the local chain to the destination chain using explicit transfer
     *types for assets and fees.
     *
     *`assets` must have same reserve location or may be teleportable to `dest`. Caller must
     *provide the `assets_transfer_type` to be used for `assets`:
     * - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
     *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
     *   assets to `beneficiary`.
     * - `TransferType::DestinationReserve`: burn local assets and forward a notification to
     *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
     *   deposit them to `beneficiary`.
     * - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
     *   chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
     *   XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
     *   the remote `reserve` is Asset Hub.
     * - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
     *   mint/teleport assets and deposit them to `beneficiary`.
     *
     *On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
     *buy execution using transferred `assets` identified by `remote_fees_id`.
     *Make sure enough of the specified `remote_fees_id` asset is included in the given list
     *of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
     *is needed than `weight_limit`, then the operation will fail and the sent assets may be
     *at risk.
     *
     *`remote_fees_id` may use different transfer type than rest of `assets` and can be
     *specified through `fees_transfer_type`.
     *
     *The caller needs to specify what should happen to the transferred assets once they reach
     *the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
     *contains the instructions to execute on `dest` as a final step.
     *  This is usually as simple as:
     *  `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
     *  but could be something more exotic like sending the `assets` even further.
     *
     *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     *- `dest`: Destination context for the assets. Will typically be `[Parent,
     *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
     *  relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
     *  parachain across a bridge to another ecosystem destination.
     *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
     *  fee on the `dest` (and possibly reserve) chains.
     *- `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
     *- `remote_fees_id`: One of the included `assets` to be used to pay fees.
     *- `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
     *- `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
     *  transfer, which also determines what happens to the assets on the destination chain.
     *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    "transfer_assets_using_type_and_then": Anonymize<I9bnv6lu0crf1q>;
}>;
export type Ia5cotcvi888ln = {
    "dest": XcmVersionedLocation;
    "message": XcmVersionedXcm;
};
export type XcmVersionedXcm = Enum<{
    "V3": Anonymize<Ianvng4e08j9ii>;
    "V4": Anonymize<Iegrepoo0c1jc5>;
    "V5": Anonymize<Ict03eedr8de9s>;
}>;
export declare const XcmVersionedXcm: GetEnum<XcmVersionedXcm>;
export type Ianvng4e08j9ii = Array<XcmV3Instruction>;
export type XcmV3Instruction = Enum<{
    "WithdrawAsset": Anonymize<Iai6dhqiq3bach>;
    "ReserveAssetDeposited": Anonymize<Iai6dhqiq3bach>;
    "ReceiveTeleportedAsset": Anonymize<Iai6dhqiq3bach>;
    "QueryResponse": Anonymize<I6g12ltekg2vaj>;
    "TransferAsset": Anonymize<I8d6ni89sh0qmn>;
    "TransferReserveAsset": Anonymize<Ib2euffogp56pp>;
    "Transact": Anonymize<I92p6l5cs3fr50>;
    "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>;
    "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>;
    "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>;
    "ClearOrigin": undefined;
    "DescendOrigin": XcmV3Junctions;
    "ReportError": Anonymize<I4r3v6e91d1qbs>;
    "DepositAsset": Anonymize<Ia848euuv1lip6>;
    "DepositReserveAsset": Anonymize<I3m8e0mi6lq6fj>;
    "ExchangeAsset": Anonymize<Ich3d4125568vq>;
    "InitiateReserveWithdraw": Anonymize<I3k3ia72gehj6b>;
    "InitiateTeleport": Anonymize<I3m8e0mi6lq6fj>;
    "ReportHolding": Anonymize<I4qgd1h8m3umqc>;
    "BuyExecution": Anonymize<I9ff02md5rmeur>;
    "RefundSurplus": undefined;
    "SetErrorHandler": Anonymize<Ianvng4e08j9ii>;
    "SetAppendix": Anonymize<Ianvng4e08j9ii>;
    "ClearError": undefined;
    "ClaimAsset": Anonymize<I8pu3j74el68mi>;
    "Trap": bigint;
    "SubscribeVersion": Anonymize<Ieprdqqu7ildvr>;
    "UnsubscribeVersion": undefined;
    "BurnAsset": Anonymize<Iai6dhqiq3bach>;
    "ExpectAsset": Anonymize<Iai6dhqiq3bach>;
    "ExpectOrigin"?: Anonymize<Ia9cgf4r40b26h>;
    "ExpectError"?: Anonymize<I7sltvf8v2nure>;
    "ExpectTransactStatus": XcmV3MaybeErrorCode;
    "QueryPallet": Anonymize<Iba5bdbapp16oo>;
    "ExpectPallet": Anonymize<Id7mf37dkpgfjs>;
    "ReportTransactStatus": Anonymize<I4r3v6e91d1qbs>;
    "ClearTransactStatus": undefined;
    "UniversalOrigin": XcmV3Junction;
    "ExportMessage": Anonymize<I8up5nu6gcp077>;
    "LockAsset": Anonymize<I2ieo5vo1bi5a0>;
    "UnlockAsset": Anonymize<I3u52dm5pikv6l>;
    "NoteUnlockable": Anonymize<Idu2tro9aukpp8>;
    "RequestUnlock": Anonymize<Iarqpt33435e7r>;
    "SetFeesMode": Anonymize<I4nae9rsql8fa7>;
    "SetTopic": FixedSizeBinary<32>;
    "ClearTopic": undefined;
    "AliasOrigin": Anonymize<I4c0s5cioidn76>;
    "UnpaidExecution": Anonymize<I40d50jeai33oq>;
}>;
export declare const XcmV3Instruction: GetEnum<XcmV3Instruction>;
export type I6g12ltekg2vaj = {
    "query_id": bigint;
    "response": XcmV3Response;
    "max_weight": Anonymize<I4q39t5hn830vp>;
    "querier"?: Anonymize<Ia9cgf4r40b26h>;
};
export type Ia9cgf4r40b26h = (Anonymize<I4c0s5cioidn76>) | undefined;
export type I8d6ni89sh0qmn = {
    "assets": Anonymize<Iai6dhqiq3bach>;
    "beneficiary": Anonymize<I4c0s5cioidn76>;
};
export type Ib2euffogp56pp = {
    "assets": Anonymize<Iai6dhqiq3bach>;
    "dest": Anonymize<I4c0s5cioidn76>;
    "xcm": Anonymize<Ianvng4e08j9ii>;
};
export type I92p6l5cs3fr50 = {
    "origin_kind": XcmV2OriginKind;
    "require_weight_at_most": Anonymize<I4q39t5hn830vp>;
    "call": Binary;
};
export type I4r3v6e91d1qbs = {
    "destination": Anonymize<I4c0s5cioidn76>;
    "query_id": bigint;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type Ia848euuv1lip6 = {
    "assets": XcmV3MultiassetMultiAssetFilter;
    "beneficiary": Anonymize<I4c0s5cioidn76>;
};
export type XcmV3MultiassetMultiAssetFilter = Enum<{
    "Definite": Anonymize<Iai6dhqiq3bach>;
    "Wild": XcmV3MultiassetWildMultiAsset;
}>;
export declare const XcmV3MultiassetMultiAssetFilter: GetEnum<XcmV3MultiassetMultiAssetFilter>;
export type XcmV3MultiassetWildMultiAsset = Enum<{
    "All": undefined;
    "AllOf": Anonymize<Iemi0m9547o42b>;
    "AllCounted": number;
    "AllOfCounted": Anonymize<I2ii8gjc2m1ca3>;
}>;
export declare const XcmV3MultiassetWildMultiAsset: GetEnum<XcmV3MultiassetWildMultiAsset>;
export type Iemi0m9547o42b = {
    "id": XcmV3MultiassetAssetId;
    "fun": XcmV2MultiassetWildFungibility;
};
export type I2ii8gjc2m1ca3 = {
    "id": XcmV3MultiassetAssetId;
    "fun": XcmV2MultiassetWildFungibility;
    "count": number;
};
export type I3m8e0mi6lq6fj = {
    "assets": XcmV3MultiassetMultiAssetFilter;
    "dest": Anonymize<I4c0s5cioidn76>;
    "xcm": Anonymize<Ianvng4e08j9ii>;
};
export type Ich3d4125568vq = {
    "give": XcmV3MultiassetMultiAssetFilter;
    "want": Anonymize<Iai6dhqiq3bach>;
    "maximal": boolean;
};
export type I3k3ia72gehj6b = {
    "assets": XcmV3MultiassetMultiAssetFilter;
    "reserve": Anonymize<I4c0s5cioidn76>;
    "xcm": Anonymize<Ianvng4e08j9ii>;
};
export type I4qgd1h8m3umqc = {
    "response_info": Anonymize<I4r3v6e91d1qbs>;
    "assets": XcmV3MultiassetMultiAssetFilter;
};
export type I9ff02md5rmeur = {
    "fees": Anonymize<Idcm24504c8bkk>;
    "weight_limit": XcmV3WeightLimit;
};
export type I8pu3j74el68mi = {
    "assets": Anonymize<Iai6dhqiq3bach>;
    "ticket": Anonymize<I4c0s5cioidn76>;
};
export type Iba5bdbapp16oo = {
    "module_name": Binary;
    "response_info": Anonymize<I4r3v6e91d1qbs>;
};
export type I8up5nu6gcp077 = {
    "network": XcmV3JunctionNetworkId;
    "destination": XcmV3Junctions;
    "xcm": Anonymize<Ianvng4e08j9ii>;
};
export type I2ieo5vo1bi5a0 = {
    "asset": Anonymize<Idcm24504c8bkk>;
    "unlocker": Anonymize<I4c0s5cioidn76>;
};
export type I3u52dm5pikv6l = {
    "asset": Anonymize<Idcm24504c8bkk>;
    "target": Anonymize<I4c0s5cioidn76>;
};
export type Idu2tro9aukpp8 = {
    "asset": Anonymize<Idcm24504c8bkk>;
    "owner": Anonymize<I4c0s5cioidn76>;
};
export type Iarqpt33435e7r = {
    "asset": Anonymize<Idcm24504c8bkk>;
    "locker": Anonymize<I4c0s5cioidn76>;
};
export type I40d50jeai33oq = {
    "weight_limit": XcmV3WeightLimit;
    "check_origin"?: Anonymize<Ia9cgf4r40b26h>;
};
export type Iegrepoo0c1jc5 = Array<XcmV4Instruction>;
export type XcmV4Instruction = Enum<{
    "WithdrawAsset": Anonymize<I50mli3hb64f9b>;
    "ReserveAssetDeposited": Anonymize<I50mli3hb64f9b>;
    "ReceiveTeleportedAsset": Anonymize<I50mli3hb64f9b>;
    "QueryResponse": Anonymize<I9o9uda3nddbna>;
    "TransferAsset": Anonymize<I7s0ar727m8n1j>;
    "TransferReserveAsset": Anonymize<I5bepfv83t9cg7>;
    "Transact": Anonymize<I92p6l5cs3fr50>;
    "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>;
    "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>;
    "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>;
    "ClearOrigin": undefined;
    "DescendOrigin": XcmV3Junctions;
    "ReportError": Anonymize<I4r3v6e91d1qbs>;
    "DepositAsset": Anonymize<Idbqvv6kvph2qq>;
    "DepositReserveAsset": Anonymize<I6epv2jfejmsps>;
    "ExchangeAsset": Anonymize<Ifunmnuvdqirrm>;
    "InitiateReserveWithdraw": Anonymize<Id1994sd13a1fk>;
    "InitiateTeleport": Anonymize<I6epv2jfejmsps>;
    "ReportHolding": Anonymize<I53nvbjei7ovcg>;
    "BuyExecution": Anonymize<I60dnk6pb13k6r>;
    "RefundSurplus": undefined;
    "SetErrorHandler": Anonymize<Iegrepoo0c1jc5>;
    "SetAppendix": Anonymize<Iegrepoo0c1jc5>;
    "ClearError": undefined;
    "ClaimAsset": Anonymize<I39e2979fh1sq0>;
    "Trap": bigint;
    "SubscribeVersion": Anonymize<Ieprdqqu7ildvr>;
    "UnsubscribeVersion": undefined;
    "BurnAsset": Anonymize<I50mli3hb64f9b>;
    "ExpectAsset": Anonymize<I50mli3hb64f9b>;
    "ExpectOrigin"?: Anonymize<Ia9cgf4r40b26h>;
    "ExpectError"?: Anonymize<I7sltvf8v2nure>;
    "ExpectTransactStatus": XcmV3MaybeErrorCode;
    "QueryPallet": Anonymize<Iba5bdbapp16oo>;
    "ExpectPallet": Anonymize<Id7mf37dkpgfjs>;
    "ReportTransactStatus": Anonymize<I4r3v6e91d1qbs>;
    "ClearTransactStatus": undefined;
    "UniversalOrigin": XcmV3Junction;
    "ExportMessage": Anonymize<Idjv4c30koq53t>;
    "LockAsset": Anonymize<Ic2kq28flu5j2f>;
    "UnlockAsset": Anonymize<I63d4j1l5gkla3>;
    "NoteUnlockable": Anonymize<Ibs79g4hs4qcqq>;
    "RequestUnlock": Anonymize<Ifv72gq013neli>;
    "SetFeesMode": Anonymize<I4nae9rsql8fa7>;
    "SetTopic": FixedSizeBinary<32>;
    "ClearTopic": undefined;
    "AliasOrigin": Anonymize<I4c0s5cioidn76>;
    "UnpaidExecution": Anonymize<I40d50jeai33oq>;
}>;
export declare const XcmV4Instruction: GetEnum<XcmV4Instruction>;
export type I9o9uda3nddbna = {
    "query_id": bigint;
    "response": XcmV4Response;
    "max_weight": Anonymize<I4q39t5hn830vp>;
    "querier"?: Anonymize<Ia9cgf4r40b26h>;
};
export type I7s0ar727m8n1j = {
    "assets": Anonymize<I50mli3hb64f9b>;
    "beneficiary": Anonymize<I4c0s5cioidn76>;
};
export type I5bepfv83t9cg7 = {
    "assets": Anonymize<I50mli3hb64f9b>;
    "dest": Anonymize<I4c0s5cioidn76>;
    "xcm": Anonymize<Iegrepoo0c1jc5>;
};
export type Idbqvv6kvph2qq = {
    "assets": XcmV4AssetAssetFilter;
    "beneficiary": Anonymize<I4c0s5cioidn76>;
};
export type XcmV4AssetAssetFilter = Enum<{
    "Definite": Anonymize<I50mli3hb64f9b>;
    "Wild": XcmV4AssetWildAsset;
}>;
export declare const XcmV4AssetAssetFilter: GetEnum<XcmV4AssetAssetFilter>;
export type XcmV4AssetWildAsset = Enum<{
    "All": undefined;
    "AllOf": Anonymize<I9k109i13ivgac>;
    "AllCounted": number;
    "AllOfCounted": Anonymize<Iano6fp1hcf6vu>;
}>;
export declare const XcmV4AssetWildAsset: GetEnum<XcmV4AssetWildAsset>;
export type I9k109i13ivgac = {
    "id": Anonymize<I4c0s5cioidn76>;
    "fun": XcmV2MultiassetWildFungibility;
};
export type Iano6fp1hcf6vu = {
    "id": Anonymize<I4c0s5cioidn76>;
    "fun": XcmV2MultiassetWildFungibility;
    "count": number;
};
export type I6epv2jfejmsps = {
    "assets": XcmV4AssetAssetFilter;
    "dest": Anonymize<I4c0s5cioidn76>;
    "xcm": Anonymize<Iegrepoo0c1jc5>;
};
export type Ifunmnuvdqirrm = {
    "give": XcmV4AssetAssetFilter;
    "want": Anonymize<I50mli3hb64f9b>;
    "maximal": boolean;
};
export type Id1994sd13a1fk = {
    "assets": XcmV4AssetAssetFilter;
    "reserve": Anonymize<I4c0s5cioidn76>;
    "xcm": Anonymize<Iegrepoo0c1jc5>;
};
export type I53nvbjei7ovcg = {
    "response_info": Anonymize<I4r3v6e91d1qbs>;
    "assets": XcmV4AssetAssetFilter;
};
export type I60dnk6pb13k6r = {
    "fees": Anonymize<Ia5l7mu5a6v49o>;
    "weight_limit": XcmV3WeightLimit;
};
export type I39e2979fh1sq0 = {
    "assets": Anonymize<I50mli3hb64f9b>;
    "ticket": Anonymize<I4c0s5cioidn76>;
};
export type Idjv4c30koq53t = {
    "network": XcmV3JunctionNetworkId;
    "destination": XcmV3Junctions;
    "xcm": Anonymize<Iegrepoo0c1jc5>;
};
export type Ic2kq28flu5j2f = {
    "asset": Anonymize<Ia5l7mu5a6v49o>;
    "unlocker": Anonymize<I4c0s5cioidn76>;
};
export type I63d4j1l5gkla3 = {
    "asset": Anonymize<Ia5l7mu5a6v49o>;
    "target": Anonymize<I4c0s5cioidn76>;
};
export type Ibs79g4hs4qcqq = {
    "asset": Anonymize<Ia5l7mu5a6v49o>;
    "owner": Anonymize<I4c0s5cioidn76>;
};
export type Ifv72gq013neli = {
    "asset": Anonymize<Ia5l7mu5a6v49o>;
    "locker": Anonymize<I4c0s5cioidn76>;
};
export type I21jsa919m88fd = {
    "dest": XcmVersionedLocation;
    "beneficiary": XcmVersionedLocation;
    "assets": XcmVersionedAssets;
    "fee_asset_item": number;
};
export type Iegif7m3upfe1k = {
    "message": XcmVersionedXcm;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type Ic76kfh5ebqkpl = {
    "maybe_xcm_version"?: Anonymize<I4arjljr6dpflb>;
};
export type Icscpmubum33bq = {
    "location": XcmVersionedLocation;
};
export type I21d2olof7eb60 = {
    "dest": XcmVersionedLocation;
    "beneficiary": XcmVersionedLocation;
    "assets": XcmVersionedAssets;
    "fee_asset_item": number;
    "weight_limit": XcmV3WeightLimit;
};
export type Ibgm4rnf22lal1 = {
    "suspended": boolean;
};
export type Ie68np0vpihith = {
    "assets": XcmVersionedAssets;
    "beneficiary": XcmVersionedLocation;
};
export type I9bnv6lu0crf1q = {
    "dest": XcmVersionedLocation;
    "assets": XcmVersionedAssets;
    "assets_transfer_type": Anonymize<I4gnu4rrr0ftsf>;
    "remote_fees_id": XcmVersionedAssetId;
    "fees_transfer_type": Anonymize<I4gnu4rrr0ftsf>;
    "custom_xcm_on_dest": XcmVersionedXcm;
    "weight_limit": XcmV3WeightLimit;
};
export type I4gnu4rrr0ftsf = AnonymousEnum<{
    "Teleport": undefined;
    "LocalReserve": undefined;
    "DestinationReserve": undefined;
    "RemoteReserve": XcmVersionedLocation;
}>;
export type I6epb28bkd5aqn = AnonymousEnum<{
    /**
     *Notification about congested bridge queue.
     */
    "report_bridge_status": Anonymize<Idlampfle3vh6q>;
}>;
export type Idlampfle3vh6q = {
    "bridge_id": FixedSizeBinary<32>;
    "is_congested": boolean;
};
export type Ic2uoe7jdksosp = AnonymousEnum<{
    /**
     *Remove a page which has no more messages remaining to be processed or is stale.
     */
    "reap_page": Anonymize<I40pqum1mu8qg3>;
    /**
     *Execute an overweight message.
     *
     *Temporary processing errors will be propagated whereas permanent errors are treated
     *as success condition.
     *
     *- `origin`: Must be `Signed`.
     *- `message_origin`: The origin from which the message to be executed arrived.
     *- `page`: The page in the queue in which the message to be executed is sitting.
     *- `index`: The index into the queue of the message to be executed.
     *- `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
     *  of the message.
     *
     *Benchmark complexity considerations: O(index + weight_limit).
     */
    "execute_overweight": Anonymize<I1r4c2ghbtvjuc>;
}>;
export type I40pqum1mu8qg3 = {
    "message_origin": Anonymize<Iejeo53sea6n4q>;
    "page_index": number;
};
export type I1r4c2ghbtvjuc = {
    "message_origin": Anonymize<Iejeo53sea6n4q>;
    "page": number;
    "index": number;
    "weight_limit": Anonymize<I4q39t5hn830vp>;
};
export type Ia75h4vs8idvmt = AnonymousEnum<{
    /**
     *Send a batch of dispatch calls.
     *
     *May be called from any origin except `None`.
     *
     *- `calls`: The calls to be dispatched from the same origin. The number of call must not
     *  exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     *If origin is root then the calls are dispatched without checking origin filter. (This
     *includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     *## Complexity
     *- O(C) where C is the number of calls to be batched.
     *
     *This will return `Ok` in all circumstances. To determine the success of the batch, an
     *event is deposited. If a call failed and the batch was interrupted, then the
     *`BatchInterrupted` event is deposited, along with the number of successful calls made
     *and the error of the failed call. If all were successful, then the `BatchCompleted`
     *event is deposited.
     */
    "batch": Anonymize<Ic7ck1v09l9ujq>;
    /**
     *Send a call through an indexed pseudonym of the sender.
     *
     *Filter from origin are passed along. The call will be dispatched with an origin which
     *use the same filter as the origin of this call.
     *
     *NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     *because you expect `proxy` to have been used prior in the call stack and you do not want
     *the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     *in the Multisig pallet instead.
     *
     *NOTE: Prior to version *12, this was called `as_limited_sub`.
     *
     *The dispatch origin for this call must be _Signed_.
     */
    "as_derivative": Anonymize<I17derqjq4a37r>;
    /**
     *Send a batch of dispatch calls and atomically execute them.
     *The whole transaction will rollback and fail if any of the calls failed.
     *
     *May be called from any origin except `None`.
     *
     *- `calls`: The calls to be dispatched from the same origin. The number of call must not
     *  exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     *If origin is root then the calls are dispatched without checking origin filter. (This
     *includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     *## Complexity
     *- O(C) where C is the number of calls to be batched.
     */
    "batch_all": Anonymize<Ic7ck1v09l9ujq>;
    /**
     *Dispatches a function call with a provided origin.
     *
     *The dispatch origin for this call must be _Root_.
     *
     *## Complexity
     *- O(1).
     */
    "dispatch_as": Anonymize<Ialmd7v4av50f4>;
    /**
     *Send a batch of dispatch calls.
     *Unlike `batch`, it allows errors and won't interrupt.
     *
     *May be called from any origin except `None`.
     *
     *- `calls`: The calls to be dispatched from the same origin. The number of call must not
     *  exceed the constant: `batched_calls_limit` (available in constant metadata).
     *
     *If origin is root then the calls are dispatch without checking origin filter. (This
     *includes bypassing `frame_system::Config::BaseCallFilter`).
     *
     *## Complexity
     *- O(C) where C is the number of calls to be batched.
     */
    "force_batch": Anonymize<Ic7ck1v09l9ujq>;
    /**
     *Dispatch a function call with a specified weight.
     *
     *This function does not check the weight of the call, and instead allows the
     *Root origin to specify the weight of the call.
     *
     *The dispatch origin for this call must be _Root_.
     */
    "with_weight": Anonymize<I9o70c0qbdau1p>;
}>;
export type Ic7ck1v09l9ujq = {
    "calls": Anonymize<I21bp90u65i41q>;
};
export type I21bp90u65i41q = Array<TxCallData>;
export type I17derqjq4a37r = {
    "index": number;
    "call": TxCallData;
};
export type Ialmd7v4av50f4 = {
    "as_origin": Anonymize<I42ficri7uep20>;
    "call": TxCallData;
};
export type I42ficri7uep20 = AnonymousEnum<{
    "system": DispatchRawOrigin;
    "PolkadotXcm": Anonymize<Icvilmd7qu30i4>;
    "CumulusXcm": Anonymize<I3in0d0lb61qi8>;
}>;
export type DispatchRawOrigin = Enum<{
    "Root": undefined;
    "Signed": SS58String;
    "None": undefined;
}>;
export declare const DispatchRawOrigin: GetEnum<DispatchRawOrigin>;
export type Icvilmd7qu30i4 = AnonymousEnum<{
    "Xcm": Anonymize<If9iqq7i64mur8>;
    "Response": Anonymize<If9iqq7i64mur8>;
}>;
export type I3in0d0lb61qi8 = AnonymousEnum<{
    "Relay": undefined;
    "SiblingParachain": number;
}>;
export type I9o70c0qbdau1p = {
    "call": TxCallData;
    "weight": Anonymize<I4q39t5hn830vp>;
};
export type Ifn2s8b3oob4np = AnonymousEnum<{
    /**
     *Immediately dispatch a multi-signature call using a single approval from the caller.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *- `other_signatories`: The accounts (other than the sender) who are part of the
     *multi-signature, but do not participate in the approval process.
     *- `call`: The call to be executed.
     *
     *Result is equivalent to the dispatched result.
     *
     *## Complexity
     *O(Z + C) where Z is the length of the call and C its execution weight.
     */
    "as_multi_threshold_1": Anonymize<If7sk2ugakk2b6>;
    /**
     *Register approval for a dispatch to be made from a deterministic composite account if
     *approved by a total of `threshold - 1` of `other_signatories`.
     *
     *If there are enough, then dispatch the call.
     *
     *Payment: `DepositBase` will be reserved if this is the first approval, plus
     *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *is cancelled.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *- `threshold`: The total number of approvals for this dispatch before it is executed.
     *- `other_signatories`: The accounts (other than the sender) who can approve this
     *dispatch. May not be empty.
     *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *not the first approval, then it must be `Some`, with the timepoint (block number and
     *transaction index) of the first approval transaction.
     *- `call`: The call to be executed.
     *
     *NOTE: Unless this is the final approval, you will generally want to use
     *`approve_as_multi` instead, since it only requires a hash of the call.
     *
     *Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *on success, result is `Ok` and the result from the interior call, if it was executed,
     *may be found in the deposited `MultisigExecuted` event.
     *
     *## Complexity
     *- `O(S + Z + Call)`.
     *- Up to one balance-reserve or unreserve operation.
     *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *- One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *- One encode & hash, both of complexity `O(S)`.
     *- Up to one binary search and insert (`O(logS + S)`).
     *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *- One event.
     *- The weight of the `call`.
     *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    "as_multi": Anonymize<Ibimg9sma81ang>;
    /**
     *Register approval for a dispatch to be made from a deterministic composite account if
     *approved by a total of `threshold - 1` of `other_signatories`.
     *
     *Payment: `DepositBase` will be reserved if this is the first approval, plus
     *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *is cancelled.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *- `threshold`: The total number of approvals for this dispatch before it is executed.
     *- `other_signatories`: The accounts (other than the sender) who can approve this
     *dispatch. May not be empty.
     *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *not the first approval, then it must be `Some`, with the timepoint (block number and
     *transaction index) of the first approval transaction.
     *- `call_hash`: The hash of the call to be executed.
     *
     *NOTE: If this is the final approval, you will want to use `as_multi` instead.
     *
     *## Complexity
     *- `O(S)`.
     *- Up to one balance-reserve or unreserve operation.
     *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *- One encode & hash, both of complexity `O(S)`.
     *- Up to one binary search and insert (`O(logS + S)`).
     *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *- One event.
     *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    "approve_as_multi": Anonymize<Ideaemvoneh309>;
    /**
     *Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *for this operation will be unreserved on success.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *- `threshold`: The total number of approvals for this dispatch before it is executed.
     *- `other_signatories`: The accounts (other than the sender) who can approve this
     *dispatch. May not be empty.
     *- `timepoint`: The timepoint (block number and transaction index) of the first approval
     *transaction for this dispatch.
     *- `call_hash`: The hash of the call to be executed.
     *
     *## Complexity
     *- `O(S)`.
     *- Up to one balance-reserve or unreserve operation.
     *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *- One encode & hash, both of complexity `O(S)`.
     *- One event.
     *- I/O: 1 read `O(S)`, one remove.
     *- Storage: removes one item.
     */
    "cancel_as_multi": Anonymize<I3d9o9d7epp66v>;
}>;
export type If7sk2ugakk2b6 = {
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "call": TxCallData;
};
export type Ibimg9sma81ang = {
    "threshold": number;
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "maybe_timepoint"?: Anonymize<I95jfd8j5cr5eh>;
    "call": TxCallData;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type I95jfd8j5cr5eh = (Anonymize<Itvprrpb0nm3o>) | undefined;
export type Ideaemvoneh309 = {
    "threshold": number;
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "maybe_timepoint"?: Anonymize<I95jfd8j5cr5eh>;
    "call_hash": FixedSizeBinary<32>;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type I3d9o9d7epp66v = {
    "threshold": number;
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "call_hash": FixedSizeBinary<32>;
};
export type I15in8r1qc9ppk = AnonymousEnum<{
    /**
     *Dispatch the given `call` from an account that the sender is authorised for through
     *`add_proxy`.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *Parameters:
     *- `real`: The account that the proxy will make a call on behalf of.
     *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *- `call`: The call to be made by the `real` account.
     */
    "proxy": Anonymize<I1sltd6cqv1s5q>;
    /**
     *Register a proxy account for the sender that is able to make calls on its behalf.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *Parameters:
     *- `proxy`: The account that the `caller` would like to make a proxy.
     *- `proxy_type`: The permissions allowed for this proxy account.
     *- `delay`: The announcement period required of the initial proxy. Will generally be
     *zero.
     */
    "add_proxy": Anonymize<Iovrcu9bfelfq>;
    /**
     *Unregister a proxy account for the sender.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *Parameters:
     *- `proxy`: The account that the `caller` would like to remove as a proxy.
     *- `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    "remove_proxy": Anonymize<Iovrcu9bfelfq>;
    /**
     *Unregister all proxy accounts for the sender.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *WARNING: This may be called on accounts created by `pure`, however if done, then
     *the unreserved fees will be inaccessible. **All access to this account will be lost.**
     */
    "remove_proxies": undefined;
    /**
     *Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     *initialize it with a proxy of `proxy_type` for `origin` sender.
     *
     *Requires a `Signed` origin.
     *
     *- `proxy_type`: The type of the proxy that the sender will be registered as over the
     *new account. This will almost always be the most permissive `ProxyType` possible to
     *allow for maximum flexibility.
     *- `index`: A disambiguation index, in case this is called multiple times in the same
     *transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     *want to use `0`.
     *- `delay`: The announcement period required of the initial proxy. Will generally be
     *zero.
     *
     *Fails with `Duplicate` if this has already been called in this transaction, from the
     *same sender, with the same parameters.
     *
     *Fails if there are insufficient funds to pay for deposit.
     */
    "create_pure": Anonymize<Iefr8jgtgfk8um>;
    /**
     *Removes a previously spawned pure proxy.
     *
     *WARNING: **All access to this account will be lost.** Any funds held in it will be
     *inaccessible.
     *
     *Requires a `Signed` origin, and the sender account must have been created by a call to
     *`pure` with corresponding parameters.
     *
     *- `spawner`: The account that originally called `pure` to create this account.
     *- `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     *- `proxy_type`: The proxy type originally passed to `pure`.
     *- `height`: The height of the chain when the call to `pure` was processed.
     *- `ext_index`: The extrinsic index in which the call to `pure` was processed.
     *
     *Fails with `NoPermission` in case the caller is not a previously created pure
     *account whose `pure` call has corresponding parameters.
     */
    "kill_pure": Anonymize<I3j05hul54uj7q>;
    /**
     *Publish the hash of a proxy-call that will be made in the future.
     *
     *This must be called some number of blocks before the corresponding `proxy` is attempted
     *if the delay associated with the proxy relationship is greater than zero.
     *
     *No more than `MaxPending` announcements may be made at any one time.
     *
     *This will take a deposit of `AnnouncementDepositFactor` as well as
     *`AnnouncementDepositBase` if there are no other pending announcements.
     *
     *The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     *
     *Parameters:
     *- `real`: The account that the proxy will make a call on behalf of.
     *- `call_hash`: The hash of the call to be made by the `real` account.
     */
    "announce": Anonymize<I2eb501t8s6hsq>;
    /**
     *Remove a given announcement.
     *
     *May be called by a proxy account to remove a call they previously announced and return
     *the deposit.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *Parameters:
     *- `real`: The account that the proxy will make a call on behalf of.
     *- `call_hash`: The hash of the call to be made by the `real` account.
     */
    "remove_announcement": Anonymize<I2eb501t8s6hsq>;
    /**
     *Remove the given announcement of a delegate.
     *
     *May be called by a target (proxied) account to remove a call that one of their delegates
     *(`delegate`) has announced they want to execute. The deposit is returned.
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *Parameters:
     *- `delegate`: The account that previously announced the call.
     *- `call_hash`: The hash of the call to be made.
     */
    "reject_announcement": Anonymize<Ianmuoljk2sk1u>;
    /**
     *Dispatch the given `call` from an account that the sender is authorized for through
     *`add_proxy`.
     *
     *Removes any corresponding announcement(s).
     *
     *The dispatch origin for this call must be _Signed_.
     *
     *Parameters:
     *- `real`: The account that the proxy will make a call on behalf of.
     *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     *- `call`: The call to be made by the `real` account.
     */
    "proxy_announced": Anonymize<I1luig08vsaqns>;
}>;
export type I1sltd6cqv1s5q = {
    "real": MultiAddress;
    "force_proxy_type"?: Anonymize<I7rk1n3vg3et43>;
    "call": TxCallData;
};
export type I7rk1n3vg3et43 = (Anonymize<I5ftepkjop3g1u>) | undefined;
export type Iovrcu9bfelfq = {
    "delegate": MultiAddress;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
};
export type Iefr8jgtgfk8um = {
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
    "index": number;
};
export type I3j05hul54uj7q = {
    "spawner": MultiAddress;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "index": number;
    "height": number;
    "ext_index": number;
};
export type I2eb501t8s6hsq = {
    "real": MultiAddress;
    "call_hash": FixedSizeBinary<32>;
};
export type Ianmuoljk2sk1u = {
    "delegate": MultiAddress;
    "call_hash": FixedSizeBinary<32>;
};
export type I1luig08vsaqns = {
    "delegate": MultiAddress;
    "real": MultiAddress;
    "force_proxy_type"?: Anonymize<I7rk1n3vg3et43>;
    "call": TxCallData;
};
export type I84851acvod2ic = AnonymousEnum<{
    /**
     *Issue a new class of fungible assets from a public origin.
     *
     *This new asset class has no assets initially and its owner is the origin.
     *
     *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
     *
     *Funds of sender are reserved by `AssetDeposit`.
     *
     *Parameters:
     *- `id`: The identifier of the new asset. This must not be currently in use to identify
     *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
     *- `admin`: The admin of this class of assets. The admin is the initial address of each
     *member of the asset class's admin team.
     *- `min_balance`: The minimum balance of this new asset that any single account must
     *have. If an account's balance is reduced below this, then it collapses to zero.
     *
     *Emits `Created` event when successful.
     *
     *Weight: `O(1)`
     */
    "create": Anonymize<Ic357tcepuvo5c>;
    /**
     *Issue a new class of fungible assets from a privileged origin.
     *
     *This new asset class has no assets initially.
     *
     *The origin must conform to `ForceOrigin`.
     *
     *Unlike `create`, no funds are reserved.
     *
     *- `id`: The identifier of the new asset. This must not be currently in use to identify
     *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
     *- `owner`: The owner of this class of assets. The owner has full superuser permissions
     *over this asset, but may later change and configure the permissions using
     *`transfer_ownership` and `set_team`.
     *- `min_balance`: The minimum balance of this new asset that any single account must
     *have. If an account's balance is reduced below this, then it collapses to zero.
     *
     *Emits `ForceCreated` event when successful.
     *
     *Weight: `O(1)`
     */
    "force_create": Anonymize<I2rnoam876ruhj>;
    /**
     *Start the process of destroying a fungible asset class.
     *
     *`start_destroy` is the first in a series of extrinsics that should be called, to allow
     *destruction of an asset class.
     *
     *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     */
    "start_destroy": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Destroy all accounts associated with a given asset.
     *
     *`destroy_accounts` should only be called after `start_destroy` has been called, and the
     *asset is in a `Destroying` state.
     *
     *Due to weight restrictions, this function may need to be called multiple times to fully
     *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     *
     *Each call emits the `Event::DestroyedAccounts` event.
     */
    "destroy_accounts": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
     *
     *`destroy_approvals` should only be called after `start_destroy` has been called, and the
     *asset is in a `Destroying` state.
     *
     *Due to weight restrictions, this function may need to be called multiple times to fully
     *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     *
     *Each call emits the `Event::DestroyedApprovals` event.
     */
    "destroy_approvals": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Complete destroying asset and unreserve currency.
     *
     *`finish_destroy` should only be called after `start_destroy` has been called, and the
     *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
     *hand.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     *
     *Each successful call emits the `Event::Destroyed` event.
     */
    "finish_destroy": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Mint assets of a particular class.
     *
     *The origin must be Signed and the sender must be the Issuer of the asset `id`.
     *
     *- `id`: The identifier of the asset to have some amount minted.
     *- `beneficiary`: The account to be credited with the minted assets.
     *- `amount`: The amount of the asset to be minted.
     *
     *Emits `Issued` event when successful.
     *
     *Weight: `O(1)`
     *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
     */
    "mint": Anonymize<Ib3qnc19gu633c>;
    /**
     *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
     *
     *Origin must be Signed and the sender should be the Manager of the asset `id`.
     *
     *Bails with `NoAccount` if the `who` is already dead.
     *
     *- `id`: The identifier of the asset to have some amount burned.
     *- `who`: The account to be debited from.
     *- `amount`: The maximum amount by which `who`'s balance should be reduced.
     *
     *Emits `Burned` with the actual amount burned. If this takes the balance to below the
     *minimum for the asset, then the amount burned is increased to take it to zero.
     *
     *Weight: `O(1)`
     *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
     */
    "burn": Anonymize<Ifira6u9hi7cu1>;
    /**
     *Move some assets from the sender account to another.
     *
     *Origin must be Signed.
     *
     *- `id`: The identifier of the asset to have some amount transferred.
     *- `target`: The account to be credited.
     *- `amount`: The amount by which the sender's balance of assets should be reduced and
     *`target`'s balance increased. The amount actually transferred may be slightly greater in
     *the case that the transfer would otherwise take the sender balance above zero but below
     *the minimum balance. Must be greater than zero.
     *
     *Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *to below the minimum for the asset, then the amount transferred is increased to take it
     *to zero.
     *
     *Weight: `O(1)`
     *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
     *`target`.
     */
    "transfer": Anonymize<I72tqocvdoqfff>;
    /**
     *Move some assets from the sender account to another, keeping the sender account alive.
     *
     *Origin must be Signed.
     *
     *- `id`: The identifier of the asset to have some amount transferred.
     *- `target`: The account to be credited.
     *- `amount`: The amount by which the sender's balance of assets should be reduced and
     *`target`'s balance increased. The amount actually transferred may be slightly greater in
     *the case that the transfer would otherwise take the sender balance above zero but below
     *the minimum balance. Must be greater than zero.
     *
     *Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *to below the minimum for the asset, then the amount transferred is increased to take it
     *to zero.
     *
     *Weight: `O(1)`
     *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
     *`target`.
     */
    "transfer_keep_alive": Anonymize<I72tqocvdoqfff>;
    /**
     *Move some assets from one account to another.
     *
     *Origin must be Signed and the sender should be the Admin of the asset `id`.
     *
     *- `id`: The identifier of the asset to have some amount transferred.
     *- `source`: The account to be debited.
     *- `dest`: The account to be credited.
     *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
     *`dest`'s balance increased. The amount actually transferred may be slightly greater in
     *the case that the transfer would otherwise take the `source` balance above zero but
     *below the minimum balance. Must be greater than zero.
     *
     *Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *to below the minimum for the asset, then the amount transferred is increased to take it
     *to zero.
     *
     *Weight: `O(1)`
     *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
     *`dest`.
     */
    "force_transfer": Anonymize<I2i27f3sfmvc05>;
    /**
     *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
     *must already exist as an entry in `Account`s of the asset. If you want to freeze an
     *account that does not have an entry, use `touch_other` first.
     *
     *Origin must be Signed and the sender should be the Freezer of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *- `who`: The account to be frozen.
     *
     *Emits `Frozen`.
     *
     *Weight: `O(1)`
     */
    "freeze": Anonymize<I1nlrtd1epki2d>;
    /**
     *Allow unprivileged transfers to and from an account again.
     *
     *Origin must be Signed and the sender should be the Admin of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *- `who`: The account to be unfrozen.
     *
     *Emits `Thawed`.
     *
     *Weight: `O(1)`
     */
    "thaw": Anonymize<I1nlrtd1epki2d>;
    /**
     *Disallow further unprivileged transfers for the asset class.
     *
     *Origin must be Signed and the sender should be the Freezer of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *
     *Emits `Frozen`.
     *
     *Weight: `O(1)`
     */
    "freeze_asset": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Allow unprivileged transfers for the asset again.
     *
     *Origin must be Signed and the sender should be the Admin of the asset `id`.
     *
     *- `id`: The identifier of the asset to be thawed.
     *
     *Emits `Thawed`.
     *
     *Weight: `O(1)`
     */
    "thaw_asset": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Change the Owner of an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *- `id`: The identifier of the asset.
     *- `owner`: The new Owner of this asset.
     *
     *Emits `OwnerChanged`.
     *
     *Weight: `O(1)`
     */
    "transfer_ownership": Anonymize<I3abtumcmempjs>;
    /**
     *Change the Issuer, Admin and Freezer of an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *- `issuer`: The new Issuer of this asset.
     *- `admin`: The new Admin of this asset.
     *- `freezer`: The new Freezer of this asset.
     *
     *Emits `TeamChanged`.
     *
     *Weight: `O(1)`
     */
    "set_team": Anonymize<Id81m8flopt8ha>;
    /**
     *Set the metadata for an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *Funds of sender are reserved according to the formula:
     *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
     *account any already reserved funds.
     *
     *- `id`: The identifier of the asset to update.
     *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     *- `decimals`: The number of decimals this asset uses to represent one unit.
     *
     *Emits `MetadataSet`.
     *
     *Weight: `O(1)`
     */
    "set_metadata": Anonymize<I8hff7chabggkd>;
    /**
     *Clear the metadata for an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *Any deposit is freed for the asset owner.
     *
     *- `id`: The identifier of the asset to clear.
     *
     *Emits `MetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_metadata": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Force the metadata for an asset to some value.
     *
     *Origin must be ForceOrigin.
     *
     *Any deposit is left alone.
     *
     *- `id`: The identifier of the asset to update.
     *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     *- `decimals`: The number of decimals this asset uses to represent one unit.
     *
     *Emits `MetadataSet`.
     *
     *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
     */
    "force_set_metadata": Anonymize<I49i39mtj1ivbs>;
    /**
     *Clear the metadata for an asset.
     *
     *Origin must be ForceOrigin.
     *
     *Any deposit is returned.
     *
     *- `id`: The identifier of the asset to clear.
     *
     *Emits `MetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "force_clear_metadata": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Alter the attributes of a given asset.
     *
     *Origin must be `ForceOrigin`.
     *
     *- `id`: The identifier of the asset.
     *- `owner`: The new Owner of this asset.
     *- `issuer`: The new Issuer of this asset.
     *- `admin`: The new Admin of this asset.
     *- `freezer`: The new Freezer of this asset.
     *- `min_balance`: The minimum balance of this new asset that any single account must
     *have. If an account's balance is reduced below this, then it collapses to zero.
     *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
     *value to account for the state bloat associated with its balance storage. If set to
     *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
     *an ED in the Balances pallet or whatever else is used to control user-account state
     *growth).
     *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
     *instructions.
     *
     *Emits `AssetStatusChanged` with the identity of the asset.
     *
     *Weight: `O(1)`
     */
    "force_asset_status": Anonymize<Ifkr2kcak2vto1>;
    /**
     *Approve an amount of asset for transfer by a delegated third-party account.
     *
     *Origin must be Signed.
     *
     *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
     *for the purpose of holding the approval. If some non-zero amount of assets is already
     *approved from signing account to `delegate`, then it is topped up or unreserved to
     *meet the right value.
     *
     *NOTE: The signing account does not need to own `amount` of assets at the point of
     *making this call.
     *
     *- `id`: The identifier of the asset.
     *- `delegate`: The account to delegate permission to transfer asset.
     *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
     *already an approval in place, then this acts additively.
     *
     *Emits `ApprovedTransfer` on success.
     *
     *Weight: `O(1)`
     */
    "approve_transfer": Anonymize<I1ju6r8q0cs9jt>;
    /**
     *Cancel all of some asset approved for delegated transfer by a third-party account.
     *
     *Origin must be Signed and there must be an approval in place between signer and
     *`delegate`.
     *
     *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     *
     *- `id`: The identifier of the asset.
     *- `delegate`: The account delegated permission to transfer asset.
     *
     *Emits `ApprovalCancelled` on success.
     *
     *Weight: `O(1)`
     */
    "cancel_approval": Anonymize<I4kpeq6j7cd5bu>;
    /**
     *Cancel all of some asset approved for delegated transfer by a third-party account.
     *
     *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
     *account of the asset `id`.
     *
     *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     *
     *- `id`: The identifier of the asset.
     *- `delegate`: The account delegated permission to transfer asset.
     *
     *Emits `ApprovalCancelled` on success.
     *
     *Weight: `O(1)`
     */
    "force_cancel_approval": Anonymize<I5na1ka76k6811>;
    /**
     *Transfer some asset balance from a previously delegated account to some third-party
     *account.
     *
     *Origin must be Signed and there must be an approval in place by the `owner` to the
     *signer.
     *
     *If the entire amount approved for transfer is transferred, then any deposit previously
     *reserved by `approve_transfer` is unreserved.
     *
     *- `id`: The identifier of the asset.
     *- `owner`: The account which previously approved for a transfer of at least `amount` and
     *from which the asset balance will be withdrawn.
     *- `destination`: The account to which the asset balance of `amount` will be transferred.
     *- `amount`: The amount of assets to transfer.
     *
     *Emits `TransferredApproved` on success.
     *
     *Weight: `O(1)`
     */
    "transfer_approved": Anonymize<I59mhdb9omdqfa>;
    /**
     *Create an asset account for non-provider assets.
     *
     *A deposit will be taken from the signer account.
     *
     *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
     *  to be taken.
     *- `id`: The identifier of the asset for the account to be created.
     *
     *Emits `Touched` event when successful.
     */
    "touch": Anonymize<Ic5b47dj4coa3r>;
    /**
     *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
     *account.
     *
     *The origin must be Signed.
     *
     *- `id`: The identifier of the asset for which the caller would like the deposit
     *  refunded.
     *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
     *
     *Emits `Refunded` event when successful.
     */
    "refund": Anonymize<I9vl5kpk0fpakt>;
    /**
     *Sets the minimum balance of an asset.
     *
     *Only works if there aren't any accounts that are holding the asset or if
     *the new value of `min_balance` is less than the old one.
     *
     *Origin must be Signed and the sender has to be the Owner of the
     *asset `id`.
     *
     *- `id`: The identifier of the asset.
     *- `min_balance`: The new value of `min_balance`.
     *
     *Emits `AssetMinBalanceChanged` event when successful.
     */
    "set_min_balance": Anonymize<I717jt61hu19b4>;
    /**
     *Create an asset account for `who`.
     *
     *A deposit will be taken from the signer account.
     *
     *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
     *  must have sufficient funds for a deposit to be taken.
     *- `id`: The identifier of the asset for the account to be created.
     *- `who`: The account to be created.
     *
     *Emits `Touched` event when successful.
     */
    "touch_other": Anonymize<I1nlrtd1epki2d>;
    /**
     *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
     *
     *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
     *order to burn a non-zero balance of the asset, the caller must be the account and should
     *use `refund`.
     *
     *- `id`: The identifier of the asset for the account holding a deposit.
     *- `who`: The account to refund.
     *
     *Emits `Refunded` event when successful.
     */
    "refund_other": Anonymize<I1nlrtd1epki2d>;
    /**
     *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
     *
     *Origin must be Signed and the sender should be the Freezer of the asset `id`.
     *
     *- `id`: The identifier of the account's asset.
     *- `who`: The account to be unblocked.
     *
     *Emits `Blocked`.
     *
     *Weight: `O(1)`
     */
    "block": Anonymize<I1nlrtd1epki2d>;
    /**
     *Transfer the entire transferable balance from the caller asset account.
     *
     *NOTE: This function only attempts to transfer _transferable_ balances. This means that
     *any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
     *transferred by this function. To ensure that this function results in a killed account,
     *you might need to prepare the account by removing any reference counters, storage
     *deposits, etc...
     *
     *The dispatch origin of this call must be Signed.
     *
     *- `id`: The identifier of the asset for the account holding a deposit.
     *- `dest`: The recipient of the transfer.
     *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *  of the funds the asset account has, causing the sender asset account to be killed
     *  (false), or transfer everything except at least the minimum balance, which will
     *  guarantee to keep the sender asset account alive (true).
     */
    "transfer_all": Anonymize<I7f7v8192r1lmq>;
}>;
export type Ic357tcepuvo5c = {
    "id": number;
    "admin": MultiAddress;
    "min_balance": bigint;
};
export type I2rnoam876ruhj = {
    "id": number;
    "owner": MultiAddress;
    "is_sufficient": boolean;
    "min_balance": bigint;
};
export type Ic5b47dj4coa3r = {
    "id": number;
};
export type Ib3qnc19gu633c = {
    "id": number;
    "beneficiary": MultiAddress;
    "amount": bigint;
};
export type Ifira6u9hi7cu1 = {
    "id": number;
    "who": MultiAddress;
    "amount": bigint;
};
export type I72tqocvdoqfff = {
    "id": number;
    "target": MultiAddress;
    "amount": bigint;
};
export type I2i27f3sfmvc05 = {
    "id": number;
    "source": MultiAddress;
    "dest": MultiAddress;
    "amount": bigint;
};
export type I1nlrtd1epki2d = {
    "id": number;
    "who": MultiAddress;
};
export type I3abtumcmempjs = {
    "id": number;
    "owner": MultiAddress;
};
export type Id81m8flopt8ha = {
    "id": number;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
};
export type I8hff7chabggkd = {
    "id": number;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
};
export type I49i39mtj1ivbs = {
    "id": number;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type Ifkr2kcak2vto1 = {
    "id": number;
    "owner": MultiAddress;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
    "min_balance": bigint;
    "is_sufficient": boolean;
    "is_frozen": boolean;
};
export type I1ju6r8q0cs9jt = {
    "id": number;
    "delegate": MultiAddress;
    "amount": bigint;
};
export type I4kpeq6j7cd5bu = {
    "id": number;
    "delegate": MultiAddress;
};
export type I5na1ka76k6811 = {
    "id": number;
    "owner": MultiAddress;
    "delegate": MultiAddress;
};
export type I59mhdb9omdqfa = {
    "id": number;
    "owner": MultiAddress;
    "destination": MultiAddress;
    "amount": bigint;
};
export type I9vl5kpk0fpakt = {
    "id": number;
    "allow_burn": boolean;
};
export type I717jt61hu19b4 = {
    "id": number;
    "min_balance": bigint;
};
export type I7f7v8192r1lmq = {
    "id": number;
    "dest": MultiAddress;
    "keep_alive": boolean;
};
export type Icu49uv7rfej74 = AnonymousEnum<{
    /**
     *Issue a new collection of non-fungible items from a public origin.
     *
     *This new collection has no items initially and its owner is the origin.
     *
     *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
     *
     *`ItemDeposit` funds of sender are reserved.
     *
     *Parameters:
     *- `collection`: The identifier of the new collection. This must not be currently in use.
     *- `admin`: The admin of this collection. The admin is the initial address of each
     *member of the collection's admin team.
     *
     *Emits `Created` event when successful.
     *
     *Weight: `O(1)`
     */
    "create": Anonymize<If66ivi02f7256>;
    /**
     *Issue a new collection of non-fungible items from a privileged origin.
     *
     *This new collection has no items initially.
     *
     *The origin must conform to `ForceOrigin`.
     *
     *Unlike `create`, no funds are reserved.
     *
     *- `collection`: The identifier of the new item. This must not be currently in use.
     *- `owner`: The owner of this collection of items. The owner has full superuser
     *  permissions
     *over this item, but may later change and configure the permissions using
     *`transfer_ownership` and `set_team`.
     *
     *Emits `ForceCreated` event when successful.
     *
     *Weight: `O(1)`
     */
    "force_create": Anonymize<I223jtcatlfkrc>;
    /**
     *Destroy a collection of fungible items.
     *
     *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
     *owner of the `collection`.
     *
     *- `collection`: The identifier of the collection to be destroyed.
     *- `witness`: Information on the items minted in the collection. This must be
     *correct.
     *
     *Emits `Destroyed` event when successful.
     *
     *Weight: `O(n + m)` where:
     *- `n = witness.items`
     *- `m = witness.item_metadatas`
     *- `a = witness.attributes`
     */
    "destroy": Anonymize<I223jg78mng8hq>;
    /**
     *Mint an item of a particular collection.
     *
     *The origin must be Signed and the sender must be the Issuer of the `collection`.
     *
     *- `collection`: The collection of the item to be minted.
     *- `item`: The item value of the item to be minted.
     *- `beneficiary`: The initial owner of the minted item.
     *
     *Emits `Issued` event when successful.
     *
     *Weight: `O(1)`
     */
    "mint": Anonymize<I4iiuiftkpq3fd>;
    /**
     *Destroy a single item.
     *
     *Origin must be Signed and the signing account must be either:
     *- the Admin of the `collection`;
     *- the Owner of the `item`;
     *
     *- `collection`: The collection of the item to be burned.
     *- `item`: The item of the item to be burned.
     *- `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
     *  item is owned by this value.
     *
     *Emits `Burned` with the actual amount burned.
     *
     *Weight: `O(1)`
     *Modes: `check_owner.is_some()`.
     */
    "burn": Anonymize<Ibra6533h92c0a>;
    /**
     *Move an item from the sender account to another.
     *
     *This resets the approved account of the item.
     *
     *Origin must be Signed and the signing account must be either:
     *- the Admin of the `collection`;
     *- the Owner of the `item`;
     *- the approved delegate for the `item` (in this case, the approval is reset).
     *
     *Arguments:
     *- `collection`: The collection of the item to be transferred.
     *- `item`: The item of the item to be transferred.
     *- `dest`: The account to receive ownership of the item.
     *
     *Emits `Transferred`.
     *
     *Weight: `O(1)`
     */
    "transfer": Anonymize<Ibgvkh96s68a66>;
    /**
     *Reevaluate the deposits on some items.
     *
     *Origin must be Signed and the sender should be the Owner of the `collection`.
     *
     *- `collection`: The collection to be frozen.
     *- `items`: The items of the collection whose deposits will be reevaluated.
     *
     *NOTE: This exists as a best-effort function. Any items which are unknown or
     *in the case that the owner account does not have reservable funds to pay for a
     *deposit increase are ignored. Generally the owner isn't going to call this on items
     *whose existing deposit is less than the refreshed deposit as it would only cost them,
     *so it's of little consequence.
     *
     *It will still return an error in the case that the collection is unknown of the signer
     *is not permitted to call it.
     *
     *Weight: `O(items.len())`
     */
    "redeposit": Anonymize<If9vko7pv0231m>;
    /**
     *Disallow further unprivileged transfer of an item.
     *
     *Origin must be Signed and the sender should be the Freezer of the `collection`.
     *
     *- `collection`: The collection of the item to be frozen.
     *- `item`: The item of the item to be frozen.
     *
     *Emits `Frozen`.
     *
     *Weight: `O(1)`
     */
    "freeze": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Re-allow unprivileged transfer of an item.
     *
     *Origin must be Signed and the sender should be the Freezer of the `collection`.
     *
     *- `collection`: The collection of the item to be thawed.
     *- `item`: The item of the item to be thawed.
     *
     *Emits `Thawed`.
     *
     *Weight: `O(1)`
     */
    "thaw": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Disallow further unprivileged transfers for a whole collection.
     *
     *Origin must be Signed and the sender should be the Freezer of the `collection`.
     *
     *- `collection`: The collection to be frozen.
     *
     *Emits `CollectionFrozen`.
     *
     *Weight: `O(1)`
     */
    "freeze_collection": Anonymize<I6cu7obfo0rr0o>;
    /**
     *Re-allow unprivileged transfers for a whole collection.
     *
     *Origin must be Signed and the sender should be the Admin of the `collection`.
     *
     *- `collection`: The collection to be thawed.
     *
     *Emits `CollectionThawed`.
     *
     *Weight: `O(1)`
     */
    "thaw_collection": Anonymize<I6cu7obfo0rr0o>;
    /**
     *Change the Owner of a collection.
     *
     *Origin must be Signed and the sender should be the Owner of the `collection`.
     *
     *- `collection`: The collection whose owner should be changed.
     *- `owner`: The new Owner of this collection. They must have called
     *  `set_accept_ownership` with `collection` in order for this operation to succeed.
     *
     *Emits `OwnerChanged`.
     *
     *Weight: `O(1)`
     */
    "transfer_ownership": Anonymize<I736lv5q9m5bot>;
    /**
     *Change the Issuer, Admin and Freezer of a collection.
     *
     *Origin must be Signed and the sender should be the Owner of the `collection`.
     *
     *- `collection`: The collection whose team should be changed.
     *- `issuer`: The new Issuer of this collection.
     *- `admin`: The new Admin of this collection.
     *- `freezer`: The new Freezer of this collection.
     *
     *Emits `TeamChanged`.
     *
     *Weight: `O(1)`
     */
    "set_team": Anonymize<I1ap9tlenhr44l>;
    /**
     *Approve an item to be transferred by a delegated third-party account.
     *
     *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
     *either the owner of the `item` or the admin of the collection.
     *
     *- `collection`: The collection of the item to be approved for delegated transfer.
     *- `item`: The item of the item to be approved for delegated transfer.
     *- `delegate`: The account to delegate permission to transfer the item.
     *
     *Important NOTE: The `approved` account gets reset after each transfer.
     *
     *Emits `ApprovedTransfer` on success.
     *
     *Weight: `O(1)`
     */
    "approve_transfer": Anonymize<Ib92t90p616grb>;
    /**
     *Cancel the prior approval for the transfer of an item by a delegate.
     *
     *Origin must be either:
     *- the `Force` origin;
     *- `Signed` with the signer being the Admin of the `collection`;
     *- `Signed` with the signer being the Owner of the `item`;
     *
     *Arguments:
     *- `collection`: The collection of the item of whose approval will be cancelled.
     *- `item`: The item of the item of whose approval will be cancelled.
     *- `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
     *  which permission of transfer is delegated.
     *
     *Emits `ApprovalCancelled` on success.
     *
     *Weight: `O(1)`
     */
    "cancel_approval": Anonymize<Ieipuujd6879do>;
    /**
     *Alter the attributes of a given item.
     *
     *Origin must be `ForceOrigin`.
     *
     *- `collection`: The identifier of the item.
     *- `owner`: The new Owner of this item.
     *- `issuer`: The new Issuer of this item.
     *- `admin`: The new Admin of this item.
     *- `freezer`: The new Freezer of this item.
     *- `free_holding`: Whether a deposit is taken for holding an item of this collection.
     *- `is_frozen`: Whether this collection is frozen except for permissioned/admin
     *instructions.
     *
     *Emits `ItemStatusChanged` with the identity of the item.
     *
     *Weight: `O(1)`
     */
    "force_item_status": Anonymize<Ie56eq9sg1rsoc>;
    /**
     *Set an attribute for a collection or item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     *`collection`.
     *
     *If the origin is Signed, then funds of signer are reserved according to the formula:
     *`MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
     *account any already reserved funds.
     *
     *- `collection`: The identifier of the collection whose item's metadata to set.
     *- `maybe_item`: The identifier of the item whose metadata to set.
     *- `key`: The key of the attribute.
     *- `value`: The value to which to set the attribute.
     *
     *Emits `AttributeSet`.
     *
     *Weight: `O(1)`
     */
    "set_attribute": Anonymize<I5tvvgui05tn6e>;
    /**
     *Clear an attribute for a collection or item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     *`collection`.
     *
     *Any deposit is freed for the collection's owner.
     *
     *- `collection`: The identifier of the collection whose item's metadata to clear.
     *- `maybe_item`: The identifier of the item whose metadata to clear.
     *- `key`: The key of the attribute.
     *
     *Emits `AttributeCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_attribute": Anonymize<Ibal0joadvdc2h>;
    /**
     *Set the metadata for an item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     *`collection`.
     *
     *If the origin is Signed, then funds of signer are reserved according to the formula:
     *`MetadataDepositBase + DepositPerByte * data.len` taking into
     *account any already reserved funds.
     *
     *- `collection`: The identifier of the collection whose item's metadata to set.
     *- `item`: The identifier of the item whose metadata to set.
     *- `data`: The general information of this item. Limited in length by `StringLimit`.
     *- `is_frozen`: Whether the metadata should be frozen against further changes.
     *
     *Emits `MetadataSet`.
     *
     *Weight: `O(1)`
     */
    "set_metadata": Anonymize<Iceq9fmmp9aeqv>;
    /**
     *Clear the metadata for an item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     *`item`.
     *
     *Any deposit is freed for the collection's owner.
     *
     *- `collection`: The identifier of the collection whose item's metadata to clear.
     *- `item`: The identifier of the item whose metadata to clear.
     *
     *Emits `MetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_metadata": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Set the metadata for a collection.
     *
     *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     *the `collection`.
     *
     *If the origin is `Signed`, then funds of signer are reserved according to the formula:
     *`MetadataDepositBase + DepositPerByte * data.len` taking into
     *account any already reserved funds.
     *
     *- `collection`: The identifier of the item whose metadata to update.
     *- `data`: The general information of this item. Limited in length by `StringLimit`.
     *- `is_frozen`: Whether the metadata should be frozen against further changes.
     *
     *Emits `CollectionMetadataSet`.
     *
     *Weight: `O(1)`
     */
    "set_collection_metadata": Anonymize<I9viqhmdtuof5e>;
    /**
     *Clear the metadata for a collection.
     *
     *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     *the `collection`.
     *
     *Any deposit is freed for the collection's owner.
     *
     *- `collection`: The identifier of the collection whose metadata to clear.
     *
     *Emits `CollectionMetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>;
    /**
     *Set (or reset) the acceptance of ownership for a particular account.
     *
     *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
     *provider reference.
     *
     *- `maybe_collection`: The identifier of the collection whose ownership the signer is
     *  willing to accept, or if `None`, an indication that the signer is willing to accept no
     *  ownership transferal.
     *
     *Emits `OwnershipAcceptanceChanged`.
     */
    "set_accept_ownership": Anonymize<Ibqooroq6rr5kr>;
    /**
     *Set the maximum amount of items a collection could have.
     *
     *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     *the `collection`.
     *
     *Note: This function can only succeed once per collection.
     *
     *- `collection`: The identifier of the collection to change.
     *- `max_supply`: The maximum amount of items a collection could have.
     *
     *Emits `CollectionMaxSupplySet` event when successful.
     */
    "set_collection_max_supply": Anonymize<I6h88h8vba22v8>;
    /**
     *Set (or reset) the price for an item.
     *
     *Origin must be Signed and must be the owner of the asset `item`.
     *
     *- `collection`: The collection of the item.
     *- `item`: The item to set the price for.
     *- `price`: The price for the item. Pass `None`, to reset the price.
     *- `buyer`: Restricts the buy operation to a specific account.
     *
     *Emits `ItemPriceSet` on success if the price is not `None`.
     *Emits `ItemPriceRemoved` on success if the price is `None`.
     */
    "set_price": Anonymize<Ia9cd4jqb5eecb>;
    /**
     *Allows to buy an item if it's up for sale.
     *
     *Origin must be Signed and must not be the owner of the `item`.
     *
     *- `collection`: The collection of the item.
     *- `item`: The item the sender wants to buy.
     *- `bid_price`: The price the sender is willing to pay.
     *
     *Emits `ItemBought` on success.
     */
    "buy_item": Anonymize<I19jiel1ftbcce>;
}>;
export type If66ivi02f7256 = {
    "collection": number;
    "admin": MultiAddress;
};
export type I223jtcatlfkrc = {
    "collection": number;
    "owner": MultiAddress;
    "free_holding": boolean;
};
export type I223jg78mng8hq = {
    "collection": number;
    "witness": Anonymize<I59th026dnaruk>;
};
export type I59th026dnaruk = {
    "items": number;
    "item_metadatas": number;
    "attributes": number;
};
export type I4iiuiftkpq3fd = {
    "collection": number;
    "item": number;
    "owner": MultiAddress;
};
export type Ibra6533h92c0a = {
    "collection": number;
    "item": number;
    "check_owner"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type Ia0jlc0rcbskuk = (MultiAddress) | undefined;
export type Ibgvkh96s68a66 = {
    "collection": number;
    "item": number;
    "dest": MultiAddress;
};
export type If9vko7pv0231m = {
    "collection": number;
    "items": Anonymize<Icgljjb6j82uhn>;
};
export type I736lv5q9m5bot = {
    "collection": number;
    "new_owner": MultiAddress;
};
export type I1ap9tlenhr44l = {
    "collection": number;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
};
export type Ib92t90p616grb = {
    "collection": number;
    "item": number;
    "delegate": MultiAddress;
};
export type Ieipuujd6879do = {
    "collection": number;
    "item": number;
    "maybe_check_delegate"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type Ie56eq9sg1rsoc = {
    "collection": number;
    "owner": MultiAddress;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
    "free_holding": boolean;
    "is_frozen": boolean;
};
export type Ibqooroq6rr5kr = {
    "maybe_collection"?: Anonymize<I4arjljr6dpflb>;
};
export type Ia9cd4jqb5eecb = {
    "collection": number;
    "item": number;
    "price"?: Anonymize<I35p85j063s0il>;
    "whitelisted_buyer"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type I19jiel1ftbcce = {
    "collection": number;
    "item": number;
    "bid_price": bigint;
};
export type I1k4il7i5elhc7 = AnonymousEnum<{
    /**
     *Issue a new collection of non-fungible items from a public origin.
     *
     *This new collection has no items initially and its owner is the origin.
     *
     *The origin must be Signed and the sender must have sufficient funds free.
     *
     *`CollectionDeposit` funds of sender are reserved.
     *
     *Parameters:
     *- `admin`: The admin of this collection. The admin is the initial address of each
     *member of the collection's admin team.
     *
     *Emits `Created` event when successful.
     *
     *Weight: `O(1)`
     */
    "create": Anonymize<I43aobns89nbkh>;
    /**
     *Issue a new collection of non-fungible items from a privileged origin.
     *
     *This new collection has no items initially.
     *
     *The origin must conform to `ForceOrigin`.
     *
     *Unlike `create`, no funds are reserved.
     *
     *- `owner`: The owner of this collection of items. The owner has full superuser
     *  permissions over this item, but may later change and configure the permissions using
     *  `transfer_ownership` and `set_team`.
     *
     *Emits `ForceCreated` event when successful.
     *
     *Weight: `O(1)`
     */
    "force_create": Anonymize<Iamd7rovec1hfb>;
    /**
     *Destroy a collection of fungible items.
     *
     *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
     *owner of the `collection`.
     *
     *NOTE: The collection must have 0 items to be destroyed.
     *
     *- `collection`: The identifier of the collection to be destroyed.
     *- `witness`: Information on the items minted in the collection. This must be
     *correct.
     *
     *Emits `Destroyed` event when successful.
     *
     *Weight: `O(m + c + a)` where:
     *- `m = witness.item_metadatas`
     *- `c = witness.item_configs`
     *- `a = witness.attributes`
     */
    "destroy": Anonymize<I77ie723ncd4co>;
    /**
     *Mint an item of a particular collection.
     *
     *The origin must be Signed and the sender must comply with the `mint_settings` rules.
     *
     *- `collection`: The collection of the item to be minted.
     *- `item`: An identifier of the new item.
     *- `mint_to`: Account into which the item will be minted.
     *- `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned
     *  item_id from that collection needs to be provided within the witness data object. If
     *  the mint price is set, then it should be additionally confirmed in the `witness_data`.
     *
     *Note: the deposit will be taken from the `origin` and not the `owner` of the `item`.
     *
     *Emits `Issued` event when successful.
     *
     *Weight: `O(1)`
     */
    "mint": Anonymize<Ieebloeahma3ke>;
    /**
     *Mint an item of a particular collection from a privileged origin.
     *
     *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
     *Issuer of the `collection`.
     *
     *- `collection`: The collection of the item to be minted.
     *- `item`: An identifier of the new item.
     *- `mint_to`: Account into which the item will be minted.
     *- `item_config`: A config of the new item.
     *
     *Emits `Issued` event when successful.
     *
     *Weight: `O(1)`
     */
    "force_mint": Anonymize<I4mbtpf4pu3rec>;
    /**
     *Destroy a single item.
     *
     *The origin must conform to `ForceOrigin` or must be Signed and the signing account must
     *be the owner of the `item`.
     *
     *- `collection`: The collection of the item to be burned.
     *- `item`: The item to be burned.
     *
     *Emits `Burned`.
     *
     *Weight: `O(1)`
     */
    "burn": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Move an item from the sender account to another.
     *
     *Origin must be Signed and the signing account must be either:
     *- the Owner of the `item`;
     *- the approved delegate for the `item` (in this case, the approval is reset).
     *
     *Arguments:
     *- `collection`: The collection of the item to be transferred.
     *- `item`: The item to be transferred.
     *- `dest`: The account to receive ownership of the item.
     *
     *Emits `Transferred`.
     *
     *Weight: `O(1)`
     */
    "transfer": Anonymize<Ibgvkh96s68a66>;
    /**
     *Re-evaluate the deposits on some items.
     *
     *Origin must be Signed and the sender should be the Owner of the `collection`.
     *
     *- `collection`: The collection of the items to be reevaluated.
     *- `items`: The items of the collection whose deposits will be reevaluated.
     *
     *NOTE: This exists as a best-effort function. Any items which are unknown or
     *in the case that the owner account does not have reservable funds to pay for a
     *deposit increase are ignored. Generally the owner isn't going to call this on items
     *whose existing deposit is less than the refreshed deposit as it would only cost them,
     *so it's of little consequence.
     *
     *It will still return an error in the case that the collection is unknown or the signer
     *is not permitted to call it.
     *
     *Weight: `O(items.len())`
     */
    "redeposit": Anonymize<If9vko7pv0231m>;
    /**
     *Disallow further unprivileged transfer of an item.
     *
     *Origin must be Signed and the sender should be the Freezer of the `collection`.
     *
     *- `collection`: The collection of the item to be changed.
     *- `item`: The item to become non-transferable.
     *
     *Emits `ItemTransferLocked`.
     *
     *Weight: `O(1)`
     */
    "lock_item_transfer": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Re-allow unprivileged transfer of an item.
     *
     *Origin must be Signed and the sender should be the Freezer of the `collection`.
     *
     *- `collection`: The collection of the item to be changed.
     *- `item`: The item to become transferable.
     *
     *Emits `ItemTransferUnlocked`.
     *
     *Weight: `O(1)`
     */
    "unlock_item_transfer": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Disallows specified settings for the whole collection.
     *
     *Origin must be Signed and the sender should be the Owner of the `collection`.
     *
     *- `collection`: The collection to be locked.
     *- `lock_settings`: The settings to be locked.
     *
     *Note: it's possible to only lock(set) the setting, but not to unset it.
     *
     *Emits `CollectionLocked`.
     *
     *Weight: `O(1)`
     */
    "lock_collection": Anonymize<I1ahf3pvgsgbu>;
    /**
     *Change the Owner of a collection.
     *
     *Origin must be Signed and the sender should be the Owner of the `collection`.
     *
     *- `collection`: The collection whose owner should be changed.
     *- `owner`: The new Owner of this collection. They must have called
     *  `set_accept_ownership` with `collection` in order for this operation to succeed.
     *
     *Emits `OwnerChanged`.
     *
     *Weight: `O(1)`
     */
    "transfer_ownership": Anonymize<I736lv5q9m5bot>;
    /**
     *Change the Issuer, Admin and Freezer of a collection.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     *`collection`.
     *
     *Note: by setting the role to `None` only the `ForceOrigin` will be able to change it
     *after to `Some(account)`.
     *
     *- `collection`: The collection whose team should be changed.
     *- `issuer`: The new Issuer of this collection.
     *- `admin`: The new Admin of this collection.
     *- `freezer`: The new Freezer of this collection.
     *
     *Emits `TeamChanged`.
     *
     *Weight: `O(1)`
     */
    "set_team": Anonymize<I9uapdn16emsti>;
    /**
     *Change the Owner of a collection.
     *
     *Origin must be `ForceOrigin`.
     *
     *- `collection`: The identifier of the collection.
     *- `owner`: The new Owner of this collection.
     *
     *Emits `OwnerChanged`.
     *
     *Weight: `O(1)`
     */
    "force_collection_owner": Anonymize<Ie5i0q2glmr0md>;
    /**
     *Change the config of a collection.
     *
     *Origin must be `ForceOrigin`.
     *
     *- `collection`: The identifier of the collection.
     *- `config`: The new config of this collection.
     *
     *Emits `CollectionConfigChanged`.
     *
     *Weight: `O(1)`
     */
    "force_collection_config": Anonymize<I97qcg6i3l8gee>;
    /**
     *Approve an item to be transferred by a delegated third-party account.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     *`item`.
     *
     *- `collection`: The collection of the item to be approved for delegated transfer.
     *- `item`: The item to be approved for delegated transfer.
     *- `delegate`: The account to delegate permission to transfer the item.
     *- `maybe_deadline`: Optional deadline for the approval. Specified by providing the
     *	number of blocks after which the approval will expire
     *
     *Emits `TransferApproved` on success.
     *
     *Weight: `O(1)`
     */
    "approve_transfer": Anonymize<Ib5udrahak005b>;
    /**
     *Cancel one of the transfer approvals for a specific item.
     *
     *Origin must be either:
     *- the `Force` origin;
     *- `Signed` with the signer being the Owner of the `item`;
     *
     *Arguments:
     *- `collection`: The collection of the item of whose approval will be cancelled.
     *- `item`: The item of the collection of whose approval will be cancelled.
     *- `delegate`: The account that is going to loose their approval.
     *
     *Emits `ApprovalCancelled` on success.
     *
     *Weight: `O(1)`
     */
    "cancel_approval": Anonymize<Ib92t90p616grb>;
    /**
     *Cancel all the approvals of a specific item.
     *
     *Origin must be either:
     *- the `Force` origin;
     *- `Signed` with the signer being the Owner of the `item`;
     *
     *Arguments:
     *- `collection`: The collection of the item of whose approvals will be cleared.
     *- `item`: The item of the collection of whose approvals will be cleared.
     *
     *Emits `AllApprovalsCancelled` on success.
     *
     *Weight: `O(1)`
     */
    "clear_all_transfer_approvals": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Disallows changing the metadata or attributes of the item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin
     *of the `collection`.
     *
     *- `collection`: The collection if the `item`.
     *- `item`: An item to be locked.
     *- `lock_metadata`: Specifies whether the metadata should be locked.
     *- `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace
     *  should be locked.
     *
     *Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.
     *When the metadata or attributes are locked, it won't be possible the unlock them.
     *
     *Emits `ItemPropertiesLocked`.
     *
     *Weight: `O(1)`
     */
    "lock_item_properties": Anonymize<I1jj31tn29ie3c>;
    /**
     *Set an attribute for a collection or item.
     *
     *Origin must be Signed and must conform to the namespace ruleset:
     *- `CollectionOwner` namespace could be modified by the `collection` Admin only;
     *- `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item`
     *  should be set in that case;
     *- `Account(AccountId)` namespace could be modified only when the `origin` was given a
     *  permission to do so;
     *
     *The funds of `origin` are reserved according to the formula:
     *`AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into
     *account any already reserved funds.
     *
     *- `collection`: The identifier of the collection whose item's metadata to set.
     *- `maybe_item`: The identifier of the item whose metadata to set.
     *- `namespace`: Attribute's namespace.
     *- `key`: The key of the attribute.
     *- `value`: The value to which to set the attribute.
     *
     *Emits `AttributeSet`.
     *
     *Weight: `O(1)`
     */
    "set_attribute": Anonymize<I5llu6o6a0go5i>;
    /**
     *Force-set an attribute for a collection or item.
     *
     *Origin must be `ForceOrigin`.
     *
     *If the attribute already exists and it was set by another account, the deposit
     *will be returned to the previous owner.
     *
     *- `set_as`: An optional owner of the attribute.
     *- `collection`: The identifier of the collection whose item's metadata to set.
     *- `maybe_item`: The identifier of the item whose metadata to set.
     *- `namespace`: Attribute's namespace.
     *- `key`: The key of the attribute.
     *- `value`: The value to which to set the attribute.
     *
     *Emits `AttributeSet`.
     *
     *Weight: `O(1)`
     */
    "force_set_attribute": Anonymize<Ic8b8561e6t9ie>;
    /**
     *Clear an attribute for a collection or item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
     *attribute.
     *
     *Any deposit is freed for the collection's owner.
     *
     *- `collection`: The identifier of the collection whose item's metadata to clear.
     *- `maybe_item`: The identifier of the item whose metadata to clear.
     *- `namespace`: Attribute's namespace.
     *- `key`: The key of the attribute.
     *
     *Emits `AttributeCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_attribute": Anonymize<I93r2effh7od84>;
    /**
     *Approve item's attributes to be changed by a delegated third-party account.
     *
     *Origin must be Signed and must be an owner of the `item`.
     *
     *- `collection`: A collection of the item.
     *- `item`: The item that holds attributes.
     *- `delegate`: The account to delegate permission to change attributes of the item.
     *
     *Emits `ItemAttributesApprovalAdded` on success.
     */
    "approve_item_attributes": Anonymize<Ib92t90p616grb>;
    /**
     *Cancel the previously provided approval to change item's attributes.
     *All the previously set attributes by the `delegate` will be removed.
     *
     *Origin must be Signed and must be an owner of the `item`.
     *
     *- `collection`: Collection that the item is contained within.
     *- `item`: The item that holds attributes.
     *- `delegate`: The previously approved account to remove.
     *
     *Emits `ItemAttributesApprovalRemoved` on success.
     */
    "cancel_item_attributes_approval": Anonymize<I6afd7fllr8otc>;
    /**
     *Set the metadata for an item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
     *`collection`.
     *
     *If the origin is Signed, then funds of signer are reserved according to the formula:
     *`MetadataDepositBase + DepositPerByte * data.len` taking into
     *account any already reserved funds.
     *
     *- `collection`: The identifier of the collection whose item's metadata to set.
     *- `item`: The identifier of the item whose metadata to set.
     *- `data`: The general information of this item. Limited in length by `StringLimit`.
     *
     *Emits `ItemMetadataSet`.
     *
     *Weight: `O(1)`
     */
    "set_metadata": Anonymize<Icrkms46uh8tpb>;
    /**
     *Clear the metadata for an item.
     *
     *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
     *`collection`.
     *
     *Any deposit is freed for the collection's owner.
     *
     *- `collection`: The identifier of the collection whose item's metadata to clear.
     *- `item`: The identifier of the item whose metadata to clear.
     *
     *Emits `ItemMetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_metadata": Anonymize<Iafkqus0ohh6l6>;
    /**
     *Set the metadata for a collection.
     *
     *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
     *the `collection`.
     *
     *If the origin is `Signed`, then funds of signer are reserved according to the formula:
     *`MetadataDepositBase + DepositPerByte * data.len` taking into
     *account any already reserved funds.
     *
     *- `collection`: The identifier of the item whose metadata to update.
     *- `data`: The general information of this item. Limited in length by `StringLimit`.
     *
     *Emits `CollectionMetadataSet`.
     *
     *Weight: `O(1)`
     */
    "set_collection_metadata": Anonymize<I78u60nqh0etah>;
    /**
     *Clear the metadata for a collection.
     *
     *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
     *the `collection`.
     *
     *Any deposit is freed for the collection's owner.
     *
     *- `collection`: The identifier of the collection whose metadata to clear.
     *
     *Emits `CollectionMetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>;
    /**
     *Set (or reset) the acceptance of ownership for a particular account.
     *
     *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
     *provider reference.
     *
     *- `maybe_collection`: The identifier of the collection whose ownership the signer is
     *  willing to accept, or if `None`, an indication that the signer is willing to accept no
     *  ownership transferal.
     *
     *Emits `OwnershipAcceptanceChanged`.
     */
    "set_accept_ownership": Anonymize<Ibqooroq6rr5kr>;
    /**
     *Set the maximum number of items a collection could have.
     *
     *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
     *the `collection`.
     *
     *- `collection`: The identifier of the collection to change.
     *- `max_supply`: The maximum number of items a collection could have.
     *
     *Emits `CollectionMaxSupplySet` event when successful.
     */
    "set_collection_max_supply": Anonymize<I6h88h8vba22v8>;
    /**
     *Update mint settings.
     *
     *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer
     *of the `collection`.
     *
     *- `collection`: The identifier of the collection to change.
     *- `mint_settings`: The new mint settings.
     *
     *Emits `CollectionMintSettingsUpdated` event when successful.
     */
    "update_mint_settings": Anonymize<I1lso3vlgherue>;
    /**
     *Set (or reset) the price for an item.
     *
     *Origin must be Signed and must be the owner of the `item`.
     *
     *- `collection`: The collection of the item.
     *- `item`: The item to set the price for.
     *- `price`: The price for the item. Pass `None`, to reset the price.
     *- `buyer`: Restricts the buy operation to a specific account.
     *
     *Emits `ItemPriceSet` on success if the price is not `None`.
     *Emits `ItemPriceRemoved` on success if the price is `None`.
     */
    "set_price": Anonymize<Ia9cd4jqb5eecb>;
    /**
     *Allows to buy an item if it's up for sale.
     *
     *Origin must be Signed and must not be the owner of the `item`.
     *
     *- `collection`: The collection of the item.
     *- `item`: The item the sender wants to buy.
     *- `bid_price`: The price the sender is willing to pay.
     *
     *Emits `ItemBought` on success.
     */
    "buy_item": Anonymize<I19jiel1ftbcce>;
    /**
     *Allows to pay the tips.
     *
     *Origin must be Signed.
     *
     *- `tips`: Tips array.
     *
     *Emits `TipSent` on every tip transfer.
     */
    "pay_tips": Anonymize<I26c8p47106toa>;
    /**
     *Register a new atomic swap, declaring an intention to send an `item` in exchange for
     *`desired_item` from origin to target on the current blockchain.
     *The target can execute the swap during the specified `duration` of blocks (if set).
     *Additionally, the price could be set for the desired `item`.
     *
     *Origin must be Signed and must be an owner of the `item`.
     *
     *- `collection`: The collection of the item.
     *- `item`: The item an owner wants to give.
     *- `desired_collection`: The collection of the desired item.
     *- `desired_item`: The desired item an owner wants to receive.
     *- `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.
     *- `duration`: A deadline for the swap. Specified by providing the number of blocks
     *	after which the swap will expire.
     *
     *Emits `SwapCreated` on success.
     */
    "create_swap": Anonymize<Iq82b3qvf20ne>;
    /**
     *Cancel an atomic swap.
     *
     *Origin must be Signed.
     *Origin must be an owner of the `item` if the deadline hasn't expired.
     *
     *- `collection`: The collection of the item.
     *- `item`: The item an owner wants to give.
     *
     *Emits `SwapCancelled` on success.
     */
    "cancel_swap": Anonymize<Ic3j8ku6mbsms4>;
    /**
     *Claim an atomic swap.
     *This method executes a pending swap, that was created by a counterpart before.
     *
     *Origin must be Signed and must be an owner of the `item`.
     *
     *- `send_collection`: The collection of the item to be sent.
     *- `send_item`: The item to be sent.
     *- `receive_collection`: The collection of the item to be received.
     *- `receive_item`: The item to be received.
     *- `witness_price`: A price that was previously agreed on.
     *
     *Emits `SwapClaimed` on success.
     */
    "claim_swap": Anonymize<I3nvoqsi8f05ph>;
    /**
     *Mint an item by providing the pre-signed approval.
     *
     *Origin must be Signed.
     *
     *- `mint_data`: The pre-signed approval that consists of the information about the item,
     *  its metadata, attributes, who can mint it (`None` for anyone) and until what block
     *  number.
     *- `signature`: The signature of the `data` object.
     *- `signer`: The `data` object's signer. Should be an Issuer of the collection.
     *
     *Emits `Issued` on success.
     *Emits `AttributeSet` if the attributes were provided.
     *Emits `ItemMetadataSet` if the metadata was not empty.
     */
    "mint_pre_signed": Anonymize<I3eoft5md071do>;
    /**
     *Set attributes for an item by providing the pre-signed approval.
     *
     *Origin must be Signed and must be an owner of the `data.item`.
     *
     *- `data`: The pre-signed approval that consists of the information about the item,
     *  attributes to update and until what block number.
     *- `signature`: The signature of the `data` object.
     *- `signer`: The `data` object's signer. Should be an Admin of the collection for the
     *  `CollectionOwner` namespace.
     *
     *Emits `AttributeSet` for each provided attribute.
     *Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.
     *Emits `PreSignedAttributesSet` on success.
     */
    "set_attributes_pre_signed": Anonymize<I923eug653ra0o>;
}>;
export type I43aobns89nbkh = {
    "admin": MultiAddress;
    "config": Anonymize<I72ndo6phms8ik>;
};
export type Iamd7rovec1hfb = {
    "owner": MultiAddress;
    "config": Anonymize<I72ndo6phms8ik>;
};
export type I77ie723ncd4co = {
    "collection": number;
    "witness": Anonymize<Idqhe2sslgfeu8>;
};
export type Idqhe2sslgfeu8 = {
    "item_metadatas": number;
    "item_configs": number;
    "attributes": number;
};
export type Ieebloeahma3ke = {
    "collection": number;
    "item": number;
    "mint_to": MultiAddress;
    "witness_data"?: Anonymize<Ib0113vv89gbic>;
};
export type Ib0113vv89gbic = (Anonymize<Ia2e23n2425vqn>) | undefined;
export type Ia2e23n2425vqn = {
    "owned_item"?: Anonymize<I4arjljr6dpflb>;
    "mint_price"?: Anonymize<I35p85j063s0il>;
};
export type I4mbtpf4pu3rec = {
    "collection": number;
    "item": number;
    "mint_to": MultiAddress;
    "item_config": bigint;
};
export type I1ahf3pvgsgbu = {
    "collection": number;
    "lock_settings": bigint;
};
export type I9uapdn16emsti = {
    "collection": number;
    "issuer"?: Anonymize<Ia0jlc0rcbskuk>;
    "admin"?: Anonymize<Ia0jlc0rcbskuk>;
    "freezer"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type Ie5i0q2glmr0md = {
    "collection": number;
    "owner": MultiAddress;
};
export type I97qcg6i3l8gee = {
    "collection": number;
    "config": Anonymize<I72ndo6phms8ik>;
};
export type Ib5udrahak005b = {
    "collection": number;
    "item": number;
    "delegate": MultiAddress;
    "maybe_deadline"?: Anonymize<I4arjljr6dpflb>;
};
export type Ic8b8561e6t9ie = {
    "set_as"?: Anonymize<Ihfphjolmsqq1>;
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "namespace": Anonymize<If3jjadhmug6qc>;
    "key": Binary;
    "value": Binary;
};
export type I6afd7fllr8otc = {
    "collection": number;
    "item": number;
    "delegate": MultiAddress;
    "witness": number;
};
export type I1lso3vlgherue = {
    "collection": number;
    "mint_settings": Anonymize<Ia3s8qquibn97v>;
};
export type I26c8p47106toa = {
    "tips": Anonymize<I73vqjhh9uvase>;
};
export type I73vqjhh9uvase = Array<Anonymize<I21hhoccptr6ko>>;
export type I21hhoccptr6ko = {
    "collection": number;
    "item": number;
    "receiver": SS58String;
    "amount": bigint;
};
export type Iq82b3qvf20ne = {
    "offered_collection": number;
    "offered_item": number;
    "desired_collection": number;
    "maybe_desired_item"?: Anonymize<I4arjljr6dpflb>;
    "maybe_price"?: Anonymize<I6oogc1jbmmi81>;
    "duration": number;
};
export type Ic3j8ku6mbsms4 = {
    "offered_collection": number;
    "offered_item": number;
};
export type I3nvoqsi8f05ph = {
    "send_collection": number;
    "send_item": number;
    "receive_collection": number;
    "receive_item": number;
    "witness_price"?: Anonymize<I6oogc1jbmmi81>;
};
export type I3eoft5md071do = {
    "mint_data": Anonymize<Icu0bim1kiuj19>;
    "signature": MultiSignature;
    "signer": SS58String;
};
export type Icu0bim1kiuj19 = {
    "collection": number;
    "item": number;
    "attributes": Anonymize<I6pi5ou8r1hblk>;
    "metadata": Binary;
    "only_account"?: Anonymize<Ihfphjolmsqq1>;
    "deadline": number;
    "mint_price"?: Anonymize<I35p85j063s0il>;
};
export type MultiSignature = Enum<{
    "Ed25519": FixedSizeBinary<64>;
    "Sr25519": FixedSizeBinary<64>;
    "Ecdsa": FixedSizeBinary<65>;
}>;
export declare const MultiSignature: GetEnum<MultiSignature>;
export type I923eug653ra0o = {
    "data": Anonymize<Id9tges27r8atl>;
    "signature": MultiSignature;
    "signer": SS58String;
};
export type Id9tges27r8atl = {
    "collection": number;
    "item": number;
    "attributes": Anonymize<I6pi5ou8r1hblk>;
    "namespace": Anonymize<If3jjadhmug6qc>;
    "deadline": number;
};
export type I1botoq1mmhfag = AnonymousEnum<{
    /**
     *Issue a new class of fungible assets from a public origin.
     *
     *This new asset class has no assets initially and its owner is the origin.
     *
     *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
     *
     *Funds of sender are reserved by `AssetDeposit`.
     *
     *Parameters:
     *- `id`: The identifier of the new asset. This must not be currently in use to identify
     *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
     *- `admin`: The admin of this class of assets. The admin is the initial address of each
     *member of the asset class's admin team.
     *- `min_balance`: The minimum balance of this new asset that any single account must
     *have. If an account's balance is reduced below this, then it collapses to zero.
     *
     *Emits `Created` event when successful.
     *
     *Weight: `O(1)`
     */
    "create": Anonymize<I7t2thek61ghou>;
    /**
     *Issue a new class of fungible assets from a privileged origin.
     *
     *This new asset class has no assets initially.
     *
     *The origin must conform to `ForceOrigin`.
     *
     *Unlike `create`, no funds are reserved.
     *
     *- `id`: The identifier of the new asset. This must not be currently in use to identify
     *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
     *- `owner`: The owner of this class of assets. The owner has full superuser permissions
     *over this asset, but may later change and configure the permissions using
     *`transfer_ownership` and `set_team`.
     *- `min_balance`: The minimum balance of this new asset that any single account must
     *have. If an account's balance is reduced below this, then it collapses to zero.
     *
     *Emits `ForceCreated` event when successful.
     *
     *Weight: `O(1)`
     */
    "force_create": Anonymize<I61tdrsafr1vf3>;
    /**
     *Start the process of destroying a fungible asset class.
     *
     *`start_destroy` is the first in a series of extrinsics that should be called, to allow
     *destruction of an asset class.
     *
     *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     */
    "start_destroy": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Destroy all accounts associated with a given asset.
     *
     *`destroy_accounts` should only be called after `start_destroy` has been called, and the
     *asset is in a `Destroying` state.
     *
     *Due to weight restrictions, this function may need to be called multiple times to fully
     *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     *
     *Each call emits the `Event::DestroyedAccounts` event.
     */
    "destroy_accounts": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
     *
     *`destroy_approvals` should only be called after `start_destroy` has been called, and the
     *asset is in a `Destroying` state.
     *
     *Due to weight restrictions, this function may need to be called multiple times to fully
     *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     *
     *Each call emits the `Event::DestroyedApprovals` event.
     */
    "destroy_approvals": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Complete destroying asset and unreserve currency.
     *
     *`finish_destroy` should only be called after `start_destroy` has been called, and the
     *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
     *hand.
     *
     *- `id`: The identifier of the asset to be destroyed. This must identify an existing
     *  asset.
     *
     *Each successful call emits the `Event::Destroyed` event.
     */
    "finish_destroy": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Mint assets of a particular class.
     *
     *The origin must be Signed and the sender must be the Issuer of the asset `id`.
     *
     *- `id`: The identifier of the asset to have some amount minted.
     *- `beneficiary`: The account to be credited with the minted assets.
     *- `amount`: The amount of the asset to be minted.
     *
     *Emits `Issued` event when successful.
     *
     *Weight: `O(1)`
     *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
     */
    "mint": Anonymize<Icfoe9q8d4vs8f>;
    /**
     *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
     *
     *Origin must be Signed and the sender should be the Manager of the asset `id`.
     *
     *Bails with `NoAccount` if the `who` is already dead.
     *
     *- `id`: The identifier of the asset to have some amount burned.
     *- `who`: The account to be debited from.
     *- `amount`: The maximum amount by which `who`'s balance should be reduced.
     *
     *Emits `Burned` with the actual amount burned. If this takes the balance to below the
     *minimum for the asset, then the amount burned is increased to take it to zero.
     *
     *Weight: `O(1)`
     *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
     */
    "burn": Anonymize<Ibrfmvjrg4trnb>;
    /**
     *Move some assets from the sender account to another.
     *
     *Origin must be Signed.
     *
     *- `id`: The identifier of the asset to have some amount transferred.
     *- `target`: The account to be credited.
     *- `amount`: The amount by which the sender's balance of assets should be reduced and
     *`target`'s balance increased. The amount actually transferred may be slightly greater in
     *the case that the transfer would otherwise take the sender balance above zero but below
     *the minimum balance. Must be greater than zero.
     *
     *Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *to below the minimum for the asset, then the amount transferred is increased to take it
     *to zero.
     *
     *Weight: `O(1)`
     *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
     *`target`.
     */
    "transfer": Anonymize<Iedih7t34maii9>;
    /**
     *Move some assets from the sender account to another, keeping the sender account alive.
     *
     *Origin must be Signed.
     *
     *- `id`: The identifier of the asset to have some amount transferred.
     *- `target`: The account to be credited.
     *- `amount`: The amount by which the sender's balance of assets should be reduced and
     *`target`'s balance increased. The amount actually transferred may be slightly greater in
     *the case that the transfer would otherwise take the sender balance above zero but below
     *the minimum balance. Must be greater than zero.
     *
     *Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *to below the minimum for the asset, then the amount transferred is increased to take it
     *to zero.
     *
     *Weight: `O(1)`
     *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
     *`target`.
     */
    "transfer_keep_alive": Anonymize<Iedih7t34maii9>;
    /**
     *Move some assets from one account to another.
     *
     *Origin must be Signed and the sender should be the Admin of the asset `id`.
     *
     *- `id`: The identifier of the asset to have some amount transferred.
     *- `source`: The account to be debited.
     *- `dest`: The account to be credited.
     *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
     *`dest`'s balance increased. The amount actually transferred may be slightly greater in
     *the case that the transfer would otherwise take the `source` balance above zero but
     *below the minimum balance. Must be greater than zero.
     *
     *Emits `Transferred` with the actual amount transferred. If this takes the source balance
     *to below the minimum for the asset, then the amount transferred is increased to take it
     *to zero.
     *
     *Weight: `O(1)`
     *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
     *`dest`.
     */
    "force_transfer": Anonymize<I4e902qbfel1f1>;
    /**
     *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
     *must already exist as an entry in `Account`s of the asset. If you want to freeze an
     *account that does not have an entry, use `touch_other` first.
     *
     *Origin must be Signed and the sender should be the Freezer of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *- `who`: The account to be frozen.
     *
     *Emits `Frozen`.
     *
     *Weight: `O(1)`
     */
    "freeze": Anonymize<Ie4met0joi8sv0>;
    /**
     *Allow unprivileged transfers to and from an account again.
     *
     *Origin must be Signed and the sender should be the Admin of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *- `who`: The account to be unfrozen.
     *
     *Emits `Thawed`.
     *
     *Weight: `O(1)`
     */
    "thaw": Anonymize<Ie4met0joi8sv0>;
    /**
     *Disallow further unprivileged transfers for the asset class.
     *
     *Origin must be Signed and the sender should be the Freezer of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *
     *Emits `Frozen`.
     *
     *Weight: `O(1)`
     */
    "freeze_asset": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Allow unprivileged transfers for the asset again.
     *
     *Origin must be Signed and the sender should be the Admin of the asset `id`.
     *
     *- `id`: The identifier of the asset to be thawed.
     *
     *Emits `Thawed`.
     *
     *Weight: `O(1)`
     */
    "thaw_asset": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Change the Owner of an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *- `id`: The identifier of the asset.
     *- `owner`: The new Owner of this asset.
     *
     *Emits `OwnerChanged`.
     *
     *Weight: `O(1)`
     */
    "transfer_ownership": Anonymize<I1t8vq6a06ohhu>;
    /**
     *Change the Issuer, Admin and Freezer of an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *- `id`: The identifier of the asset to be frozen.
     *- `issuer`: The new Issuer of this asset.
     *- `admin`: The new Admin of this asset.
     *- `freezer`: The new Freezer of this asset.
     *
     *Emits `TeamChanged`.
     *
     *Weight: `O(1)`
     */
    "set_team": Anonymize<Icvt3pdunbinm7>;
    /**
     *Set the metadata for an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *Funds of sender are reserved according to the formula:
     *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
     *account any already reserved funds.
     *
     *- `id`: The identifier of the asset to update.
     *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     *- `decimals`: The number of decimals this asset uses to represent one unit.
     *
     *Emits `MetadataSet`.
     *
     *Weight: `O(1)`
     */
    "set_metadata": Anonymize<I9ui3n41balr2q>;
    /**
     *Clear the metadata for an asset.
     *
     *Origin must be Signed and the sender should be the Owner of the asset `id`.
     *
     *Any deposit is freed for the asset owner.
     *
     *- `id`: The identifier of the asset to clear.
     *
     *Emits `MetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "clear_metadata": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Force the metadata for an asset to some value.
     *
     *Origin must be ForceOrigin.
     *
     *Any deposit is left alone.
     *
     *- `id`: The identifier of the asset to update.
     *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
     *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
     *- `decimals`: The number of decimals this asset uses to represent one unit.
     *
     *Emits `MetadataSet`.
     *
     *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
     */
    "force_set_metadata": Anonymize<I89sl7btgl24g2>;
    /**
     *Clear the metadata for an asset.
     *
     *Origin must be ForceOrigin.
     *
     *Any deposit is returned.
     *
     *- `id`: The identifier of the asset to clear.
     *
     *Emits `MetadataCleared`.
     *
     *Weight: `O(1)`
     */
    "force_clear_metadata": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Alter the attributes of a given asset.
     *
     *Origin must be `ForceOrigin`.
     *
     *- `id`: The identifier of the asset.
     *- `owner`: The new Owner of this asset.
     *- `issuer`: The new Issuer of this asset.
     *- `admin`: The new Admin of this asset.
     *- `freezer`: The new Freezer of this asset.
     *- `min_balance`: The minimum balance of this new asset that any single account must
     *have. If an account's balance is reduced below this, then it collapses to zero.
     *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
     *value to account for the state bloat associated with its balance storage. If set to
     *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
     *an ED in the Balances pallet or whatever else is used to control user-account state
     *growth).
     *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
     *instructions.
     *
     *Emits `AssetStatusChanged` with the identity of the asset.
     *
     *Weight: `O(1)`
     */
    "force_asset_status": Anonymize<I3u6g26k9kn96u>;
    /**
     *Approve an amount of asset for transfer by a delegated third-party account.
     *
     *Origin must be Signed.
     *
     *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
     *for the purpose of holding the approval. If some non-zero amount of assets is already
     *approved from signing account to `delegate`, then it is topped up or unreserved to
     *meet the right value.
     *
     *NOTE: The signing account does not need to own `amount` of assets at the point of
     *making this call.
     *
     *- `id`: The identifier of the asset.
     *- `delegate`: The account to delegate permission to transfer asset.
     *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
     *already an approval in place, then this acts additively.
     *
     *Emits `ApprovedTransfer` on success.
     *
     *Weight: `O(1)`
     */
    "approve_transfer": Anonymize<If1invp94rsjms>;
    /**
     *Cancel all of some asset approved for delegated transfer by a third-party account.
     *
     *Origin must be Signed and there must be an approval in place between signer and
     *`delegate`.
     *
     *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     *
     *- `id`: The identifier of the asset.
     *- `delegate`: The account delegated permission to transfer asset.
     *
     *Emits `ApprovalCancelled` on success.
     *
     *Weight: `O(1)`
     */
    "cancel_approval": Anonymize<Ie5nc19gtiv5sv>;
    /**
     *Cancel all of some asset approved for delegated transfer by a third-party account.
     *
     *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
     *account of the asset `id`.
     *
     *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
     *
     *- `id`: The identifier of the asset.
     *- `delegate`: The account delegated permission to transfer asset.
     *
     *Emits `ApprovalCancelled` on success.
     *
     *Weight: `O(1)`
     */
    "force_cancel_approval": Anonymize<Iald3dgvt1hjkb>;
    /**
     *Transfer some asset balance from a previously delegated account to some third-party
     *account.
     *
     *Origin must be Signed and there must be an approval in place by the `owner` to the
     *signer.
     *
     *If the entire amount approved for transfer is transferred, then any deposit previously
     *reserved by `approve_transfer` is unreserved.
     *
     *- `id`: The identifier of the asset.
     *- `owner`: The account which previously approved for a transfer of at least `amount` and
     *from which the asset balance will be withdrawn.
     *- `destination`: The account to which the asset balance of `amount` will be transferred.
     *- `amount`: The amount of assets to transfer.
     *
     *Emits `TransferredApproved` on success.
     *
     *Weight: `O(1)`
     */
    "transfer_approved": Anonymize<Iurrhahet4gno>;
    /**
     *Create an asset account for non-provider assets.
     *
     *A deposit will be taken from the signer account.
     *
     *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
     *  to be taken.
     *- `id`: The identifier of the asset for the account to be created.
     *
     *Emits `Touched` event when successful.
     */
    "touch": Anonymize<Ibsk5g3rhm45pu>;
    /**
     *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
     *account.
     *
     *The origin must be Signed.
     *
     *- `id`: The identifier of the asset for which the caller would like the deposit
     *  refunded.
     *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
     *
     *Emits `Refunded` event when successful.
     */
    "refund": Anonymize<I5tamv2nk8bj8o>;
    /**
     *Sets the minimum balance of an asset.
     *
     *Only works if there aren't any accounts that are holding the asset or if
     *the new value of `min_balance` is less than the old one.
     *
     *Origin must be Signed and the sender has to be the Owner of the
     *asset `id`.
     *
     *- `id`: The identifier of the asset.
     *- `min_balance`: The new value of `min_balance`.
     *
     *Emits `AssetMinBalanceChanged` event when successful.
     */
    "set_min_balance": Anonymize<I8apq8e7c7qcpp>;
    /**
     *Create an asset account for `who`.
     *
     *A deposit will be taken from the signer account.
     *
     *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
     *  must have sufficient funds for a deposit to be taken.
     *- `id`: The identifier of the asset for the account to be created.
     *- `who`: The account to be created.
     *
     *Emits `Touched` event when successful.
     */
    "touch_other": Anonymize<Ie4met0joi8sv0>;
    /**
     *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
     *
     *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
     *order to burn a non-zero balance of the asset, the caller must be the account and should
     *use `refund`.
     *
     *- `id`: The identifier of the asset for the account holding a deposit.
     *- `who`: The account to refund.
     *
     *Emits `Refunded` event when successful.
     */
    "refund_other": Anonymize<Ie4met0joi8sv0>;
    /**
     *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
     *
     *Origin must be Signed and the sender should be the Freezer of the asset `id`.
     *
     *- `id`: The identifier of the account's asset.
     *- `who`: The account to be unblocked.
     *
     *Emits `Blocked`.
     *
     *Weight: `O(1)`
     */
    "block": Anonymize<Ie4met0joi8sv0>;
    /**
     *Transfer the entire transferable balance from the caller asset account.
     *
     *NOTE: This function only attempts to transfer _transferable_ balances. This means that
     *any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
     *transferred by this function. To ensure that this function results in a killed account,
     *you might need to prepare the account by removing any reference counters, storage
     *deposits, etc...
     *
     *The dispatch origin of this call must be Signed.
     *
     *- `id`: The identifier of the asset for the account holding a deposit.
     *- `dest`: The recipient of the transfer.
     *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *  of the funds the asset account has, causing the sender asset account to be killed
     *  (false), or transfer everything except at least the minimum balance, which will
     *  guarantee to keep the sender asset account alive (true).
     */
    "transfer_all": Anonymize<Id1e31ij0c35fv>;
}>;
export type I7t2thek61ghou = {
    "id": Anonymize<If9iqq7i64mur8>;
    "admin": MultiAddress;
    "min_balance": bigint;
};
export type I61tdrsafr1vf3 = {
    "id": Anonymize<If9iqq7i64mur8>;
    "owner": MultiAddress;
    "is_sufficient": boolean;
    "min_balance": bigint;
};
export type Ibsk5g3rhm45pu = {
    "id": Anonymize<If9iqq7i64mur8>;
};
export type Icfoe9q8d4vs8f = {
    "id": Anonymize<If9iqq7i64mur8>;
    "beneficiary": MultiAddress;
    "amount": bigint;
};
export type Ibrfmvjrg4trnb = {
    "id": Anonymize<If9iqq7i64mur8>;
    "who": MultiAddress;
    "amount": bigint;
};
export type Iedih7t34maii9 = {
    "id": Anonymize<If9iqq7i64mur8>;
    "target": MultiAddress;
    "amount": bigint;
};
export type I4e902qbfel1f1 = {
    "id": Anonymize<If9iqq7i64mur8>;
    "source": MultiAddress;
    "dest": MultiAddress;
    "amount": bigint;
};
export type Ie4met0joi8sv0 = {
    "id": Anonymize<If9iqq7i64mur8>;
    "who": MultiAddress;
};
export type I1t8vq6a06ohhu = {
    "id": Anonymize<If9iqq7i64mur8>;
    "owner": MultiAddress;
};
export type Icvt3pdunbinm7 = {
    "id": Anonymize<If9iqq7i64mur8>;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
};
export type I9ui3n41balr2q = {
    "id": Anonymize<If9iqq7i64mur8>;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
};
export type I89sl7btgl24g2 = {
    "id": Anonymize<If9iqq7i64mur8>;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type I3u6g26k9kn96u = {
    "id": Anonymize<If9iqq7i64mur8>;
    "owner": MultiAddress;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
    "min_balance": bigint;
    "is_sufficient": boolean;
    "is_frozen": boolean;
};
export type If1invp94rsjms = {
    "id": Anonymize<If9iqq7i64mur8>;
    "delegate": MultiAddress;
    "amount": bigint;
};
export type Ie5nc19gtiv5sv = {
    "id": Anonymize<If9iqq7i64mur8>;
    "delegate": MultiAddress;
};
export type Iald3dgvt1hjkb = {
    "id": Anonymize<If9iqq7i64mur8>;
    "owner": MultiAddress;
    "delegate": MultiAddress;
};
export type Iurrhahet4gno = {
    "id": Anonymize<If9iqq7i64mur8>;
    "owner": MultiAddress;
    "destination": MultiAddress;
    "amount": bigint;
};
export type I5tamv2nk8bj8o = {
    "id": Anonymize<If9iqq7i64mur8>;
    "allow_burn": boolean;
};
export type I8apq8e7c7qcpp = {
    "id": Anonymize<If9iqq7i64mur8>;
    "min_balance": bigint;
};
export type Id1e31ij0c35fv = {
    "id": Anonymize<If9iqq7i64mur8>;
    "dest": MultiAddress;
    "keep_alive": boolean;
};
export type Ifrervtb291iin = AnonymousEnum<{
    /**
     *Lock the NFT and mint a new fungible asset.
     *
     *The dispatch origin for this call must be Signed.
     *The origin must be the owner of the NFT they are trying to lock.
     *
     *`Deposit` funds of sender are reserved.
     *
     *- `nft_collection_id`: The ID used to identify the collection of the NFT.
     *Is used within the context of `pallet_nfts`.
     *- `nft_id`: The ID used to identify the NFT within the given collection.
     *Is used within the context of `pallet_nfts`.
     *- `asset_id`: The ID of the new asset. It must not exist.
     *Is used within the context of `pallet_assets`.
     *- `beneficiary`: The account that will receive the newly created asset.
     *- `fractions`: The total issuance of the newly created asset class.
     *
     *Emits `NftFractionalized` event when successful.
     */
    "fractionalize": Anonymize<I9gf2bs80kgbnk>;
    /**
     *Burn the total issuance of the fungible asset and return (unlock) the locked NFT.
     *
     *The dispatch origin for this call must be Signed.
     *
     *`Deposit` funds will be returned to `asset_creator`.
     *
     *- `nft_collection_id`: The ID used to identify the collection of the NFT.
     *Is used within the context of `pallet_nfts`.
     *- `nft_id`: The ID used to identify the NFT within the given collection.
     *Is used within the context of `pallet_nfts`.
     *- `asset_id`: The ID of the asset being returned and destroyed. Must match
     *the original ID of the created asset, corresponding to the NFT.
     *Is used within the context of `pallet_assets`.
     *- `beneficiary`: The account that will receive the unified NFT.
     *
     *Emits `NftUnified` event when successful.
     */
    "unify": Anonymize<I5urb3tva4ave5>;
}>;
export type I9gf2bs80kgbnk = {
    "nft_collection_id": number;
    "nft_id": number;
    "asset_id": number;
    "beneficiary": MultiAddress;
    "fractions": bigint;
};
export type I5urb3tva4ave5 = {
    "nft_collection_id": number;
    "nft_id": number;
    "asset_id": number;
    "beneficiary": MultiAddress;
};
export type Ia06pia7pbkurh = AnonymousEnum<{
    /**
     *Creates an empty liquidity pool and an associated new `lp_token` asset
     *(the id of which is returned in the `Event::PoolCreated` event).
     *
     *Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
     */
    "create_pool": Anonymize<I3ip09dj7i1e8n>;
    /**
     *Provide liquidity into the pool of `asset1` and `asset2`.
     *NOTE: an optimal amount of asset1 and asset2 will be calculated and
     *might be different than the provided `amount1_desired`/`amount2_desired`
     *thus you should provide the min amount you're happy to provide.
     *Params `amount1_min`/`amount2_min` represent that.
     *`mint_to` will be sent the liquidity tokens that represent this share of the pool.
     *
     *NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,
     *batch an atomic call with [`Pallet::add_liquidity`] and
     *[`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]
     *calls to render the liquidity withdrawable and rectify the exchange rate.
     *
     *Once liquidity is added, someone may successfully call
     *[`Pallet::swap_exact_tokens_for_tokens`].
     */
    "add_liquidity": Anonymize<Ide34bfv94bvut>;
    /**
     *Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
     *burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
     *it's possible to control the min amount of returned tokens you're happy with.
     */
    "remove_liquidity": Anonymize<I6c7mabde89bp>;
    /**
     *Swap the exact amount of `asset1` into `asset2`.
     *`amount_out_min` param allows you to specify the min amount of the `asset2`
     *you're happy to receive.
     *
     *[`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
     *for a quote.
     */
    "swap_exact_tokens_for_tokens": Anonymize<I9sbpodgd8ilku>;
    /**
     *Swap any amount of `asset1` to get the exact amount of `asset2`.
     *`amount_in_max` param allows to specify the max amount of the `asset1`
     *you're happy to provide.
     *
     *[`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
     *for a quote.
     */
    "swap_tokens_for_exact_tokens": Anonymize<Ialnqi1f4kpb>;
    /**
     *Touch an existing pool to fulfill prerequisites before providing liquidity, such as
     *ensuring that the pool's accounts are in place. It is typically useful when a pool
     *creator removes the pool's accounts and does not provide a liquidity. This action may
     *involve holding assets from the caller as a deposit for creating the pool's accounts.
     *
     *The origin must be Signed.
     *
     *- `asset1`: The asset ID of an existing pool with a pair (asset1, asset2).
     *- `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).
     *
     *Emits `Touched` event when successful.
     */
    "touch": Anonymize<I3ip09dj7i1e8n>;
}>;
export type I3ip09dj7i1e8n = {
    "asset1": Anonymize<If9iqq7i64mur8>;
    "asset2": Anonymize<If9iqq7i64mur8>;
};
export type Ide34bfv94bvut = {
    "asset1": Anonymize<If9iqq7i64mur8>;
    "asset2": Anonymize<If9iqq7i64mur8>;
    "amount1_desired": bigint;
    "amount2_desired": bigint;
    "amount1_min": bigint;
    "amount2_min": bigint;
    "mint_to": SS58String;
};
export type I6c7mabde89bp = {
    "asset1": Anonymize<If9iqq7i64mur8>;
    "asset2": Anonymize<If9iqq7i64mur8>;
    "lp_token_burn": bigint;
    "amount1_min_receive": bigint;
    "amount2_min_receive": bigint;
    "withdraw_to": SS58String;
};
export type I9sbpodgd8ilku = {
    "path": Anonymize<I40r0k8147eovg>;
    "amount_in": bigint;
    "amount_out_min": bigint;
    "send_to": SS58String;
    "keep_alive": boolean;
};
export type I40r0k8147eovg = Array<Anonymize<If9iqq7i64mur8>>;
export type Ialnqi1f4kpb = {
    "path": Anonymize<I40r0k8147eovg>;
    "amount_out": bigint;
    "amount_in_max": bigint;
    "send_to": SS58String;
    "keep_alive": boolean;
};
export type I6fi4f21lfm4ir = AnonymousEnum<{
    /**
     *A raw EVM transaction, typically dispatched by an Ethereum JSON-RPC server.
     *
     *# Parameters
     *
     ** `payload`: The encoded [`crate::evm::TransactionSigned`].
     ** `gas_limit`: The gas limit enforced during contract execution.
     ** `storage_deposit_limit`: The maximum balance that can be charged to the caller for
     *  storage usage.
     *
     *# Note
     *
     *This call cannot be dispatched directly; attempting to do so will result in a failed
     *transaction. It serves as a wrapper for an Ethereum transaction. When submitted, the
     *runtime converts it into a [`sp_runtime::generic::CheckedExtrinsic`] by recovering the
     *signer and validating the transaction.
     */
    "eth_transact": Anonymize<Ida37oe44osb06>;
    /**
     *Makes a call to an account, optionally transferring some balance.
     *
     *# Parameters
     *
     ** `dest`: Address of the contract to call.
     ** `value`: The balance to transfer from the `origin` to `dest`.
     ** `gas_limit`: The gas limit enforced when executing the constructor.
     ** `storage_deposit_limit`: The maximum amount of balance that can be charged from the
     *  caller to pay for the storage consumed.
     ** `data`: The input data to pass to the contract.
     *
     ** If the account is a smart-contract account, the associated code will be
     *executed and any value will be transferred.
     ** If the account is a regular account, any value will be transferred.
     ** If no account exists and the call value is not less than `existential_deposit`,
     *a regular account will be created and any value will be transferred.
     */
    "call": Anonymize<Idsg8aod8e8fqn>;
    /**
     *Instantiates a contract from a previously deployed wasm binary.
     *
     *This function is identical to [`Self::instantiate_with_code`] but without the
     *code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
     *must be supplied.
     */
    "instantiate": Anonymize<I46nktn22m6hbi>;
    /**
     *Instantiates a new contract from the supplied `code` optionally transferring
     *some balance.
     *
     *This dispatchable has the same effect as calling [`Self::upload_code`] +
     *[`Self::instantiate`]. Bundling them together provides efficiency gains. Please
     *also check the documentation of [`Self::upload_code`].
     *
     *# Parameters
     *
     ** `value`: The balance to transfer from the `origin` to the newly created contract.
     ** `gas_limit`: The gas limit enforced when executing the constructor.
     ** `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
     *  from the caller to pay for the storage consumed.
     ** `code`: The contract code to deploy in raw bytes.
     ** `data`: The input data to pass to the contract constructor.
     ** `salt`: Used for the address derivation. If `Some` is supplied then `CREATE2`
     *	semantics are used. If `None` then `CRATE1` is used.
     *
     *
     *Instantiation is executed as follows:
     *
     *- The supplied `code` is deployed, and a `code_hash` is created for that code.
     *- If the `code_hash` already exists on the chain the underlying `code` will be shared.
     *- The destination address is computed based on the sender, code_hash and the salt.
     *- The smart-contract account is created at the computed address.
     *- The `value` is transferred to the new account.
     *- The `deploy` function is executed in the context of the newly-created account.
     */
    "instantiate_with_code": Anonymize<Ibgj1cthra7lte>;
    /**
     *Upload new `code` without instantiating a contract from it.
     *
     *If the code does not already exist a deposit is reserved from the caller
     *and unreserved only when [`Self::remove_code`] is called. The size of the reserve
     *depends on the size of the supplied `code`.
     *
     *# Note
     *
     *Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
     *To avoid this situation a constructor could employ access control so that it can
     *only be instantiated by permissioned entities. The same is true when uploading
     *through [`Self::instantiate_with_code`].
     */
    "upload_code": Anonymize<I10ra4g1rl6k2f>;
    /**
     *Remove the code stored under `code_hash` and refund the deposit to its owner.
     *
     *A code can only be removed by its original uploader (its owner) and only if it is
     *not used by any contract.
     */
    "remove_code": Anonymize<Ib51vk42m1po4n>;
    /**
     *Privileged function that changes the code of an existing contract.
     *
     *This takes care of updating refcounts and all other necessary operations. Returns
     *an error if either the `code_hash` or `dest` do not exist.
     *
     *# Note
     *
     *This does **not** change the address of the contract in question. This means
     *that the contract address is no longer derived from its code hash after calling
     *this dispatchable.
     */
    "set_code": Anonymize<I1uihehkdsggvp>;
    /**
     *Register the callers account id so that it can be used in contract interactions.
     *
     *This will error if the origin is already mapped or is a eth native `Address20`. It will
     *take a deposit that can be released by calling [`Self::unmap_account`].
     */
    "map_account": undefined;
    /**
     *Unregister the callers account id in order to free the deposit.
     *
     *There is no reason to ever call this function other than freeing up the deposit.
     *This is only useful when the account should no longer be used.
     */
    "unmap_account": undefined;
    /**
     *Dispatch an `call` with the origin set to the callers fallback address.
     *
     *Every `AccountId32` can control its corresponding fallback account. The fallback account
     *is the `AccountId20` with the last 12 bytes set to `0xEE`. This is essentially a
     *recovery function in case an `AccountId20` was used without creating a mapping first.
     */
    "dispatch_as_fallback_account": Anonymize<I2hssm8tv1s603>;
}>;
export type Ida37oe44osb06 = {
    "payload": Binary;
};
export type Idsg8aod8e8fqn = {
    "dest": FixedSizeBinary<20>;
    "value": bigint;
    "gas_limit": Anonymize<I4q39t5hn830vp>;
    "storage_deposit_limit": bigint;
    "data": Binary;
};
export type I46nktn22m6hbi = {
    "value": bigint;
    "gas_limit": Anonymize<I4q39t5hn830vp>;
    "storage_deposit_limit": bigint;
    "code_hash": FixedSizeBinary<32>;
    "data": Binary;
    "salt"?: Anonymize<I4s6vifaf8k998>;
};
export type Ibgj1cthra7lte = {
    "value": bigint;
    "gas_limit": Anonymize<I4q39t5hn830vp>;
    "storage_deposit_limit": bigint;
    "code": Binary;
    "data": Binary;
    "salt"?: Anonymize<I4s6vifaf8k998>;
};
export type I10ra4g1rl6k2f = {
    "code": Binary;
    "storage_deposit_limit": bigint;
};
export type I1uihehkdsggvp = {
    "dest": FixedSizeBinary<20>;
    "code_hash": FixedSizeBinary<32>;
};
export type I2hssm8tv1s603 = {
    "call": TxCallData;
};
export type I6i7hgo4s9982m = AnonymousEnum<{
    /**
     *Create a new reward pool.
     *
     *Parameters:
     *- `origin`: must be `Config::CreatePoolOrigin`;
     *- `staked_asset_id`: the asset to be staked in the pool;
     *- `reward_asset_id`: the asset to be distributed as rewards;
     *- `reward_rate_per_block`: the amount of reward tokens distributed per block;
     *- `expiry`: the block number at which the pool will cease to accumulate rewards. The
     *  [`DispatchTime::After`] variant evaluated at the execution time.
     *- `admin`: the account allowed to extend the pool expiration, increase the rewards rate
     *  and receive the unutilized reward tokens back after the pool completion. If `None`,
     *  the caller is set as an admin.
     */
    "create_pool": Anonymize<I74kb3a509j58b>;
    /**
     *Stake additional tokens in a pool.
     *
     *A freeze is placed on the staked tokens.
     */
    "stake": Anonymize<Ieg1oc56mamrl5>;
    /**
     *Unstake tokens from a pool.
     *
     *Removes the freeze on the staked tokens.
     *
     *Parameters:
     *- origin: must be the `staker` if the pool is still active. Otherwise, any account.
     *- pool_id: the pool to unstake from.
     *- amount: the amount of tokens to unstake.
     *- staker: the account to unstake from. If `None`, the caller is used.
     */
    "unstake": Anonymize<If4c254req52io>;
    /**
     *Harvest unclaimed pool rewards.
     *
     *Parameters:
     *- origin: must be the `staker` if the pool is still active. Otherwise, any account.
     *- pool_id: the pool to harvest from.
     *- staker: the account for which to harvest rewards. If `None`, the caller is used.
     */
    "harvest_rewards": Anonymize<Ifvms3ocl3df16>;
    /**
     *Modify a pool reward rate.
     *
     *Currently the reward rate can only be increased.
     *
     *Only the pool admin may perform this operation.
     */
    "set_pool_reward_rate_per_block": Anonymize<I3fl7kvh9tccu2>;
    /**
     *Modify a pool admin.
     *
     *Only the pool admin may perform this operation.
     */
    "set_pool_admin": Anonymize<I51711mrb372ih>;
    /**
     *Set when the pool should expire.
     *
     *Currently the expiry block can only be extended.
     *
     *Only the pool admin may perform this operation.
     */
    "set_pool_expiry_block": Anonymize<Iautv23q3c0gko>;
    /**
     *Convenience method to deposit reward tokens into a pool.
     *
     *This method is not strictly necessary (tokens could be transferred directly to the
     *pool pot address), but is provided for convenience so manual derivation of the
     *account id is not required.
     */
    "deposit_reward_tokens": Anonymize<Ieg1oc56mamrl5>;
    /**
     *Cleanup a pool.
     *
     *Origin must be the pool admin.
     *
     *Cleanup storage, release any associated storage cost and return the remaining reward
     *tokens to the admin.
     */
    "cleanup_pool": Anonymize<I931cottvong90>;
}>;
export type I74kb3a509j58b = {
    "staked_asset_id": Anonymize<If9iqq7i64mur8>;
    "reward_asset_id": Anonymize<If9iqq7i64mur8>;
    "reward_rate_per_block": bigint;
    "expiry": TraitsScheduleDispatchTime;
    "admin"?: Anonymize<Ihfphjolmsqq1>;
};
export type TraitsScheduleDispatchTime = Enum<{
    "At": number;
    "After": number;
}>;
export declare const TraitsScheduleDispatchTime: GetEnum<TraitsScheduleDispatchTime>;
export type Ieg1oc56mamrl5 = {
    "pool_id": number;
    "amount": bigint;
};
export type If4c254req52io = {
    "pool_id": number;
    "amount": bigint;
    "staker"?: Anonymize<Ihfphjolmsqq1>;
};
export type Ifvms3ocl3df16 = {
    "pool_id": number;
    "staker"?: Anonymize<Ihfphjolmsqq1>;
};
export type Iautv23q3c0gko = {
    "pool_id": number;
    "new_expiry": TraitsScheduleDispatchTime;
};
export type I39l72gdmkk30t = AnonymousEnum<{
    /**
     *Control the automatic migration.
     *
     *The dispatch origin of this call must be [`Config::ControlOrigin`].
     */
    "control_auto_migration": Anonymize<I7psec5e6ghc64>;
    /**
     *Continue the migration for the given `limits`.
     *
     *The dispatch origin of this call can be any signed account.
     *
     *This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
     *Upon successful execution, the transaction fee is returned.
     *
     *The (potentially over-estimated) of the byte length of all the data read must be
     *provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
     *that executing the current `MigrationTask` with the given `limits` will not exceed
     *`real_size_upper` bytes of read data.
     *
     *The `witness_task` is merely a helper to prevent the caller from being slashed or
     *generally trigger a migration that they do not intend. This parameter is just a message
     *from caller, saying that they believed `witness_task` was the last state of the
     *migration, and they only wish for their transaction to do anything, if this assumption
     *holds. In case `witness_task` does not match, the transaction fails.
     *
     *Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
     *recommended way of doing this is to pass a `limit` that only bounds `count`, as the
     *`size` limit can always be overwritten.
     */
    "continue_migrate": Anonymize<I2psb0sladd863>;
    /**
     *Migrate the list of top keys by iterating each of them one by one.
     *
     *This does not affect the global migration process tracker ([`MigrationProcess`]), and
     *should only be used in case any keys are leftover due to a bug.
     */
    "migrate_custom_top": Anonymize<I585tk8khua0gk>;
    /**
     *Migrate the list of child keys by iterating each of them one by one.
     *
     *All of the given child keys must be present under one `child_root`.
     *
     *This does not affect the global migration process tracker ([`MigrationProcess`]), and
     *should only be used in case any keys are leftover due to a bug.
     */
    "migrate_custom_child": Anonymize<I3ut99di214ru2>;
    /**
     *Set the maximum limit of the signed migration.
     */
    "set_signed_max_limits": Anonymize<Iemkp87d26vsbh>;
    /**
     *Forcefully set the progress the running migration.
     *
     *This is only useful in one case: the next key to migrate is too big to be migrated with
     *a signed account, in a parachain context, and we simply want to skip it. A reasonable
     *example of this would be `:code:`, which is both very expensive to migrate, and commonly
     *used, so probably it is already migrated.
     *
     *In case you mess things up, you can also, in principle, use this to reset the migration
     *process.
     */
    "force_set_progress": Anonymize<I4ahfrt5dscf6q>;
}>;
export type I7psec5e6ghc64 = {
    "maybe_config"?: Anonymize<Ib17t3992hb64n>;
};
export type I2psb0sladd863 = {
    "limits": Anonymize<I215mkl885p4da>;
    "real_size_upper": number;
    "witness_task": Anonymize<If354jrdedj0pj>;
};
export type I585tk8khua0gk = {
    "keys": Anonymize<Itom7fk49o0c9>;
    "witness_size": number;
};
export type I3ut99di214ru2 = {
    "root": Binary;
    "child_keys": Anonymize<Itom7fk49o0c9>;
    "total_size": number;
};
export type Iemkp87d26vsbh = {
    "limits": Anonymize<I215mkl885p4da>;
};
export type I4ahfrt5dscf6q = {
    "progress_top": Anonymize<I1ufmh6d8psvik>;
    "progress_child": Anonymize<I1ufmh6d8psvik>;
};
export type Ib85ihi0vt50bd = AnonymousEnum<{
    /**
     *Migrates an existing pool to a new account ID derivation method for a given asset pair.
     *If the migration is successful, transaction fees are refunded to the caller.
     *
     *Must be signed.
     */
    "migrate_to_new_account": Anonymize<I3ip09dj7i1e8n>;
}>;
export type Iaqet9jc3ihboe = {
    "header": Anonymize<Ic952bubvq4k7d>;
    "extrinsics": Anonymize<Itom7fk49o0c9>;
};
export type Ic952bubvq4k7d = {
    "parent_hash": FixedSizeBinary<32>;
    "number": number;
    "state_root": FixedSizeBinary<32>;
    "extrinsics_root": FixedSizeBinary<32>;
    "digest": Anonymize<I4mddgoa69c0a2>;
};
export type I2v50gu3s1aqk6 = AnonymousEnum<{
    "AllExtrinsics": undefined;
    "OnlyInherents": undefined;
}>;
export type Ieim11h0b9fnpr = ResultPayload<Anonymize<I1qbf7nguucccc>, Anonymize<I5nrjkj9qumobs>>;
export type I5nrjkj9qumobs = AnonymousEnum<{
    "Invalid": Anonymize<Ijr7mckqs242k>;
    "Unknown": TransactionValidityUnknownTransaction;
}>;
export type Ijr7mckqs242k = AnonymousEnum<{
    "Call": undefined;
    "Payment": undefined;
    "Future": undefined;
    "Stale": undefined;
    "BadProof": undefined;
    "AncientBirthBlock": undefined;
    "ExhaustsResources": undefined;
    "Custom": number;
    "BadMandatory": undefined;
    "MandatoryValidation": undefined;
    "BadSigner": undefined;
    "IndeterminateImplicit": undefined;
    "UnknownOrigin": undefined;
}>;
export type TransactionValidityUnknownTransaction = Enum<{
    "CannotLookup": undefined;
    "NoUnsignedValidator": undefined;
    "Custom": number;
}>;
export declare const TransactionValidityUnknownTransaction: GetEnum<TransactionValidityUnknownTransaction>;
export type If7uv525tdvv7a = Array<Anonymize<I76hdjk9qh40no>>;
export type I76hdjk9qh40no = [FixedSizeBinary<8>, Binary];
export type I2an1fs2eiebjp = {
    "okay": boolean;
    "fatal_error": boolean;
    "errors": Anonymize<If7uv525tdvv7a>;
};
export type TransactionValidityTransactionSource = Enum<{
    "InBlock": undefined;
    "Local": undefined;
    "External": undefined;
}>;
export declare const TransactionValidityTransactionSource: GetEnum<TransactionValidityTransactionSource>;
export type I9ask1o4tfvcvs = ResultPayload<Anonymize<I6g5lcd9vf2cr0>, Anonymize<I5nrjkj9qumobs>>;
export type I6g5lcd9vf2cr0 = {
    "priority": bigint;
    "requires": Anonymize<Itom7fk49o0c9>;
    "provides": Anonymize<Itom7fk49o0c9>;
    "longevity": bigint;
    "propagate": boolean;
};
export type Icerf8h8pdu8ss = (Anonymize<I66iuq7l8se39>) | undefined;
export type I66iuq7l8se39 = Array<Anonymize<I9tmff36km6vjg>>;
export type I9tmff36km6vjg = [Binary, FixedSizeBinary<4>];
export type I5vv5n03oo8gas = (Anonymize<I200n1ov5tbcvr>) | undefined;
export type I200n1ov5tbcvr = FixedSizeArray<2, bigint>;
export type I6spmpef2c7svf = {
    "weight": Anonymize<I4q39t5hn830vp>;
    "class": DispatchClass;
    "partial_fee": bigint;
};
export type Iei2mvq0mjvt81 = {
    "inclusion_fee"?: Anonymize<Id37fum600qfau>;
    "tip": bigint;
};
export type Id37fum600qfau = (Anonymize<I246faqtjrsnee>) | undefined;
export type I246faqtjrsnee = {
    "base_fee": bigint;
    "len_fee": bigint;
    "adjusted_weight_fee": bigint;
};
export type Iftvbctbo05fu4 = ResultPayload<Anonymize<I4lvocd376nkvl>, Anonymize<Iavct6f844hfju>>;
export type I4lvocd376nkvl = Array<XcmVersionedAssetId>;
export type Iavct6f844hfju = AnonymousEnum<{
    "Unimplemented": undefined;
    "VersionedConversionFailed": undefined;
    "WeightNotComputable": undefined;
    "UnhandledXcmVersion": undefined;
    "AssetNotFound": undefined;
    "Unroutable": undefined;
}>;
export type Ic0c3req3mlc1l = ResultPayload<Anonymize<I4q39t5hn830vp>, Anonymize<Iavct6f844hfju>>;
export type I7ocn4njqde3v5 = ResultPayload<bigint, Anonymize<Iavct6f844hfju>>;
export type Iek7ha36da9mf5 = ResultPayload<XcmVersionedAssets, Anonymize<Iavct6f844hfju>>;
export type If33vqn8ucfk4q = AnonymousEnum<{
    "System": Anonymize<Iekve0i6djpd9f>;
    "ParachainSystem": Anonymize<I5kev21p7u6ajb>;
    "Timestamp": Anonymize<I7d75gqfg6jh9c>;
    "ParachainInfo": undefined;
    "MultiBlockMigrations": Anonymize<I4oqb168b2d4er>;
    "Balances": Anonymize<I9svldsp29mh87>;
    "CollatorSelection": Anonymize<I9dpq5287dur8b>;
    "Session": Anonymize<I77dda7hps0u37>;
    "XcmpQueue": Anonymize<Ib7tahn20bvsep>;
    "PolkadotXcm": Anonymize<I4up31a3q8cjhp>;
    "CumulusXcm": undefined;
    "ToRococoXcmRouter": Anonymize<I6epb28bkd5aqn>;
    "MessageQueue": Anonymize<Ic2uoe7jdksosp>;
    "Utility": Anonymize<Ia75h4vs8idvmt>;
    "Multisig": Anonymize<Ifn2s8b3oob4np>;
    "Proxy": Anonymize<I15in8r1qc9ppk>;
    "Assets": Anonymize<I84851acvod2ic>;
    "Uniques": Anonymize<Icu49uv7rfej74>;
    "Nfts": Anonymize<I1k4il7i5elhc7>;
    "ForeignAssets": Anonymize<I1botoq1mmhfag>;
    "NftFractionalization": Anonymize<Ifrervtb291iin>;
    "PoolAssets": Anonymize<I84851acvod2ic>;
    "AssetConversion": Anonymize<Ia06pia7pbkurh>;
    "Revive": Anonymize<I6fi4f21lfm4ir>;
    "AssetRewards": Anonymize<I6i7hgo4s9982m>;
    "StateTrieMigration": Anonymize<I39l72gdmkk30t>;
    "AssetConversionMigration": Anonymize<Ib85ihi0vt50bd>;
}>;
export type Iachtn16ol50nu = ResultPayload<Anonymize<I7a4p5o7iuup7k>, Anonymize<I55ku9c5gk50hb>>;
export type I7a4p5o7iuup7k = {
    "execution_result": Anonymize<I2l0sef1pvfede>;
    "emitted_events": Anonymize<I419v598hg8gdv>;
    "local_xcm"?: Anonymize<Ieqgqma27vbupd>;
    "forwarded_xcms": Anonymize<Ialhmrpub9sefe>;
};
export type I2l0sef1pvfede = ResultPayload<Anonymize<Ia1u1r3n74r13c>, Anonymize<Icsd8gcdb0ei60>>;
export type Ia1u1r3n74r13c = {
    "actual_weight"?: Anonymize<Iasb8k6ash5mjn>;
    "pays_fee": Anonymize<Iehg04bj71rkd>;
};
export type Icsd8gcdb0ei60 = {
    "post_info": Anonymize<Ia1u1r3n74r13c>;
    "error": Anonymize<I2em38gdd5updn>;
};
export type I419v598hg8gdv = Array<Anonymize<I8nhgi0vpu3lov>>;
export type Ieqgqma27vbupd = (XcmVersionedXcm) | undefined;
export type Ialhmrpub9sefe = Array<Anonymize<I56d9gmmhnf5oa>>;
export type I56d9gmmhnf5oa = [XcmVersionedLocation, Anonymize<Ie1m9ii7jv2l7v>];
export type Ie1m9ii7jv2l7v = Array<XcmVersionedXcm>;
export type I55ku9c5gk50hb = AnonymousEnum<{
    "Unimplemented": undefined;
    "VersionedConversionFailed": undefined;
}>;
export type I9ah8pjfj1s2mq = ResultPayload<Anonymize<I50cpsj0e0li4r>, Anonymize<I55ku9c5gk50hb>>;
export type I50cpsj0e0li4r = {
    "execution_result": Anonymize<I6uq5gb4s805s7>;
    "emitted_events": Anonymize<I419v598hg8gdv>;
    "forwarded_xcms": Anonymize<Ialhmrpub9sefe>;
};
export type Ieh6nis3hdbtgi = ResultPayload<SS58String, Anonymize<Ibaohq34aedndv>>;
export type Ibaohq34aedndv = AnonymousEnum<{
    "Unsupported": undefined;
    "VersionedConversionFailed": undefined;
}>;
export type I8fk5filgollou = ResultPayload<XcmVersionedAssets, Anonymize<I5tspd7e422fr9>>;
export type I5tspd7e422fr9 = AnonymousEnum<{
    "AssetIdConversionFailed": undefined;
    "AmountToBalanceConversionFailed": undefined;
}>;
export type Ic1d4u2opv3fst = {
    "upward_messages": Anonymize<Itom7fk49o0c9>;
    "horizontal_messages": Anonymize<I6r5cbv8ttrb09>;
    "new_validation_code"?: Anonymize<Iabpgqcjikia83>;
    "processed_downward_messages": number;
    "hrmp_watermark": number;
    "head_data": Binary;
};
export type Ie9sr1iqcg3cgm = ResultPayload<undefined, string>;
export type I1mqgk2tmnn9i2 = (string) | undefined;
export type I6lr8sctk0bi4e = Array<string>;
export type XcmVersionedAsset = Enum<{
    "V3": Anonymize<Idcm24504c8bkk>;
    "V4": Anonymize<Ia5l7mu5a6v49o>;
    "V5": Anonymize<Iffh1nc5e1mod6>;
}>;
export declare const XcmVersionedAsset: GetEnum<XcmVersionedAsset>;
export type Icujp6hmv35vbn = ResultPayload<boolean, Anonymize<I3886purtlrjg1>>;
export type I3886purtlrjg1 = AnonymousEnum<{
    "VersionedAssetConversionFailed": undefined;
    "VersionedLocationConversionFailed": undefined;
}>;
export type I4totqt881mlti = FixedSizeArray<4, bigint>;
export type I83l6tli0njkpt = {
    "gas_consumed": Anonymize<I4q39t5hn830vp>;
    "gas_required": Anonymize<I4q39t5hn830vp>;
    "storage_deposit": Anonymize<If7bmpttbdmqu4>;
    "result": Anonymize<I4nhjpe4gmpp4v>;
};
export type If7bmpttbdmqu4 = AnonymousEnum<{
    "Refund": bigint;
    "Charge": bigint;
}>;
export type I4nhjpe4gmpp4v = ResultPayload<Anonymize<I620n7irgfspm4>, Anonymize<I2em38gdd5updn>>;
export type I620n7irgfspm4 = {
    "flags": number;
    "data": Binary;
};
export type I9sijb8gfrns29 = AnonymousEnum<{
    "Upload": Binary;
    "Existing": FixedSizeBinary<32>;
}>;
export type I39r1i8ia2rv5r = {
    "gas_consumed": Anonymize<I4q39t5hn830vp>;
    "gas_required": Anonymize<I4q39t5hn830vp>;
    "storage_deposit": Anonymize<If7bmpttbdmqu4>;
    "result": Anonymize<I9bs57vmdi0j91>;
};
export type I9bs57vmdi0j91 = ResultPayload<Anonymize<I6cm3omaniofs7>, Anonymize<I2em38gdd5updn>>;
export type I6cm3omaniofs7 = {
    "result": Anonymize<I620n7irgfspm4>;
    "addr": FixedSizeBinary<20>;
};
export type Iafjplr55l4f68 = {
    "access_list"?: Anonymize<I6n992ikreen29>;
    "blob_versioned_hashes": Anonymize<Ic5m5lp1oioo8r>;
    "blobs": Anonymize<Itom7fk49o0c9>;
    "chain_id"?: Anonymize<Ic4rgfgksgmm3e>;
    "from"?: Anonymize<If7b8240vgt2q5>;
    "gas"?: Anonymize<Ic4rgfgksgmm3e>;
    "gas_price"?: Anonymize<Ic4rgfgksgmm3e>;
    "input"?: Anonymize<Iabpgqcjikia83>;
    "max_fee_per_blob_gas"?: Anonymize<Ic4rgfgksgmm3e>;
    "max_fee_per_gas"?: Anonymize<Ic4rgfgksgmm3e>;
    "max_priority_fee_per_gas"?: Anonymize<Ic4rgfgksgmm3e>;
    "nonce"?: Anonymize<Ic4rgfgksgmm3e>;
    "to"?: Anonymize<If7b8240vgt2q5>;
    "r#type"?: Anonymize<I4arjljr6dpflb>;
    "value"?: Anonymize<Ic4rgfgksgmm3e>;
};
export type I6n992ikreen29 = (Anonymize<Ieap15h2pjii9u>) | undefined;
export type Ieap15h2pjii9u = Array<Anonymize<Ia1jste73q15go>>;
export type Ia1jste73q15go = {
    "address": FixedSizeBinary<20>;
    "storage_keys": Anonymize<Ic5m5lp1oioo8r>;
};
export type Ic4rgfgksgmm3e = (Anonymize<I4totqt881mlti>) | undefined;
export type If7b8240vgt2q5 = (FixedSizeBinary<20>) | undefined;
export type I8abab09ak4pi1 = ResultPayload<Anonymize<Ieasv39ek9fa65>, Anonymize<I8mb9f26m2cgi5>>;
export type Ieasv39ek9fa65 = {
    "gas_required": Anonymize<I4q39t5hn830vp>;
    "storage_deposit": bigint;
    "eth_gas": Anonymize<I4totqt881mlti>;
    "data": Binary;
};
export type I8mb9f26m2cgi5 = AnonymousEnum<{
    "Data": Binary;
    "Message": string;
}>;
export type I6mtrsoc9ittue = ResultPayload<Anonymize<Icjs1v5avc8kdj>, Anonymize<I2em38gdd5updn>>;
export type Icjs1v5avc8kdj = {
    "code_hash": FixedSizeBinary<32>;
    "deposit": bigint;
};
export type Iehnkjehe1oeva = ResultPayload<Anonymize<Iabpgqcjikia83>, Anonymize<Iflr0uqg4l065m>>;
export type Iflr0uqg4l065m = AnonymousEnum<{
    "DoesntExist": undefined;
    "KeyDecodingFailed": undefined;
}>;
export type Ifbmd9e2argcmg = AnonymousEnum<{
    "CallTracer": Anonymize<Ib5m8dj90ss8ds>;
}>;
export type Ib5m8dj90ss8ds = {
    "with_logs": boolean;
};
export type I3084efhqgo3jt = Array<Anonymize<I4vv0tsjt4mive>>;
export type I4vv0tsjt4mive = [number, Anonymize<Ibvkq0jsgjncn5>];
export type Ibvkq0jsgjncn5 = {
    "from": FixedSizeBinary<20>;
    "gas": Anonymize<I4totqt881mlti>;
    "gas_used": Anonymize<I4totqt881mlti>;
    "to": FixedSizeBinary<20>;
    "input": Binary;
    "output": Binary;
    "error"?: Anonymize<I1mqgk2tmnn9i2>;
    "revert_reason"?: Anonymize<I1mqgk2tmnn9i2>;
    "calls": Anonymize<Ifhmtputvdvm99>;
    "logs": Anonymize<I134j1i74vqi78>;
    "value": Anonymize<I4totqt881mlti>;
    "call_type": Anonymize<I4skhb96tel6ea>;
};
export type Ifhmtputvdvm99 = Array<Anonymize<Ibvkq0jsgjncn5>>;
export type I134j1i74vqi78 = Array<Anonymize<Ifsvhjhob72tgk>>;
export type Ifsvhjhob72tgk = {
    "address": FixedSizeBinary<20>;
    "topics": Anonymize<Ic5m5lp1oioo8r>;
    "data": Binary;
    "position": number;
};
export type I4skhb96tel6ea = AnonymousEnum<{
    "Call": undefined;
    "StaticCall": undefined;
    "DelegateCall": undefined;
}>;
export type Ifhkf7u37ati97 = (Anonymize<Ibvkq0jsgjncn5>) | undefined;
export type I85o101eggvfjq = ResultPayload<Anonymize<Ibvkq0jsgjncn5>, Anonymize<I8mb9f26m2cgi5>>;
export {};
