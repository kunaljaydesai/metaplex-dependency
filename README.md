# How to reproduce the issue
1) Run `yarn install`
2) Run `yarn build`

`yarn build` will fail with an error that looks like this:

```
node_modules/@metaplex-foundation/js-next/dist/types/utils/TransactionBuilder.d.ts:1:34 - error TS2305: Module '"@solana/web3.js"' has no exported member 'TransactionCtorFields'.

1 import { PublicKey, Transaction, TransactionCtorFields, TransactionInstruction } from '@solana/web3.js';
                                   ~~~~~~~~~~~~~~~~~~~~~

node_modules/@metaplex-foundation/mpl-core/dist/src/Transaction.d.ts:1:44 - error TS2305: Module '"@solana/web3.js"' has no exported member 'TransactionCtorFields'.

1 import { Transaction as SolanaTransaction, TransactionCtorFields } from '@solana/web3.js';
                                             ~~~~~~~~~~~~~~~~~~~~~


Found 2 errors in 2 files.
```

I believe the errors occur because `@metaplex-foundation/js-next` supports `@solana/web3.js` ^1.37.0, but that's not true. `@solana/web3.js` deprecated the `TransactionCtorFields` type between [1.37.0](https://github.com/solana-labs/solana-web3.js/blob/d93efdfe8dd51a91e254a800be63c9157a9fe7cc/src/transaction.ts#L110) and [now](https://github.com/solana-labs/solana-web3.js/blob/master/src/transaction.ts#L134).

