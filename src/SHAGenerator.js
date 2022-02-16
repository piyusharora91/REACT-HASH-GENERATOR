import { sha1, sha256, sha512 } from 'crypto-hash';


export default async function generateHash(hash_input, sha_type) {
    let result;
    // let hash_output;
    if (hash_input === '') {
        return null
    }
    else if (sha_type === 'SHA-1') {
        result = sha1(hash_input);
    }
    else if (sha_type === 'SHA-256') {
        result = sha256(hash_input);
    }
    else if (sha_type === 'SHA-512') {
        result = sha512(hash_input);
    }

    return await result;
}
