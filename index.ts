import { Metaplex } from "@metaplex-foundation/js-next";
import { clusterApiUrl, Connection } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl('mainnet-beta'));
const metaplex = new Metaplex(connection);