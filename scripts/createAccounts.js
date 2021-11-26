const fs = require("fs")
const Stellar = require("stellar-sdk")

const fileName = "account.json";
fs.writeFileSync(
    fileName,
    JSON.stringify(
        ["Alice", "Bob"].map(
            (name) => {
                const pair = Stellar.Keypair.random()
                return {
                    name,
                    secret: pair.secret(),
                    publicKey: pair.publicKey()
                };
            }
        )
    )
);