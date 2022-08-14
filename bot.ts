import { BN } from '@project-serum/anchor';
import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';
import * as dotenv from 'dotenv';

dotenv.config();

const { DESIRE_PRICE, COLLECTION_PUBKEY_STR } = process.env;
// const COLLECTION_PUBKEY = new PublicKey(COLLECTION_PUBKEY_STR!);

const connection: Connection = new Connection(
	clusterApiUrl('mainnet-beta'),
	'confirmed'
);

const marketPlaces = [
	// @todo change to MagicEden marketplace publickey
	Keypair.generate().publicKey, // MagicEden
];

function isBelowOrEqualDesirePrice(
	marketPrice: number,
	desirePrice: number
): boolean {
	return marketPrice <= desirePrice;
}

async function runBot(
	connection: Connection,
	marketPlaces: Array<PublicKey>,
	interval: number
) {
	setInterval(async () => {
		console.log('RUN BOT HERE');
	}, interval);
}

async function start(
	connection: Connection,
	marketPlaces: Array<PublicKey>,
	interval: number
) {
	await runBot(connection, marketPlaces, interval);
}

start(connection, marketPlaces, 20_000);
