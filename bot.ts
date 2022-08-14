import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';

const connection: Connection = new Connection(
	clusterApiUrl('mainnet-beta'),
	'confirmed'
);

const marketPlaces = [
	// @todo change to MagicEden marketplace publickey
	Keypair.generate().publicKey, // MagicEden
];

async function start(
	connection: Connection,
	marketPlaces: Array<PublicKey>,
	interval: number
) {
	console.log('BOT IS RUNNING');
}

start(connection, marketPlaces, 20_000);
