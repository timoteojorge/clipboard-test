const crypto = require("crypto");

const hash = (data) => {
    return crypto.createHash("sha3-512").update(data).digest("hex")
}

const randomString = (size) => {
    return crypto.randomBytes(size).toString('hex').substring(0, size)
}
module.exports = {
    hash,
    randomString
}