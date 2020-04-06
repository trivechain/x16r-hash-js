const x16rhash = require('./index');

const blockHeaderToBuffer = (blockHeader) => {
    const buf = Buffer.concat([
        Buffer.from(blockHeader.versionHex, 'hex').reverse(),
        Buffer.from(blockHeader.previousblockhash, 'hex').reverse(),
        Buffer.from(blockHeader.merkleroot, 'hex').reverse(),
        Buffer.from(blockHeader.time.toString('16'), 'hex').reverse(),
        Buffer.from(blockHeader.bits, 'hex').reverse(),
        Buffer.from(blockHeader.nonce.toString('16'), 'hex').reverse()
    ]);
    return buf;
}

test('Block 300,000 of Trivechain should return correct hash', () => {
    const blockHeader = blockHeaderToBuffer({
        "hash": "000000000776998e82a69a6db5758684f32f4d871169e9b109c2e58e8207e6b1",
        "confirmations": 398973,
        "height": 300000,
        "version": 536870912,
        "versionHex": "20000000",
        "merkleroot": "fcc80202165f618d7d71e8c2ebe80f4ee62790023898134ef39a0052d9dd563b",
        "time": 1560581059,
        "mediantime": 1560580555,
        "nonce": 1008798552,
        "bits": "1c11d6b7",
        "difficulty": 14.35057853233186,
        "chainwork": "000000000000000000000000000000000000000000000005f467af14692b488e",
        "previousblockhash": "000000000eeaa3c5b82f45c9f42d36fbdc7000edaabe79bc2290cbdea7d45b7e",
        "nextblockhash": "000000000fc9996ad582871701e04e76a9572e1d0fcd62681c682e6c99dace66",
        "chainlock": true
    })
    const hash = x16rhash.x16r(blockHeader);
    expect(hash.reverse().toString('hex')).toBe('000000000776998e82a69a6db5758684f32f4d871169e9b109c2e58e8207e6b1');
});

test('Block 400,000 of Trivechain should return correct hash', () => {
    const blockHeader = blockHeaderToBuffer({
        "hash": "00000000042c4196615cf262d798302acdee2248ac867e3020b0eb6a00b195f9",
        "confirmations": 298976,
        "height": 400000,
        "version": 536870912,
        "versionHex": "20000000",
        "merkleroot": "3d1e9c7f9d2a3139261c3fc39bb3734d27f45f0a84d58cfa394477d0f21fadc5",
        "time": 1566901726,
        "mediantime": 1566901334,
        "nonce": 4126313743,
        "bits": "1c0972ea",
        "difficulty": 27.09273595783232,
        "chainwork": "000000000000000000000000000000000000000000000005f48d5cd57756c41c",
        "previousblockhash": "0000000003775b318e8f573c8bc4910ca40d59be7ae973e90fa34067e5bc9b43",
        "nextblockhash": "000000000027ff3ac8b80ceb8f69b6b30892c72a3496517d8577f8f23075346e",
        "chainlock": true
    })
    const hash = x16rhash.x16r(blockHeader);
    expect(hash.reverse().toString('hex')).toBe('00000000042c4196615cf262d798302acdee2248ac867e3020b0eb6a00b195f9');
});