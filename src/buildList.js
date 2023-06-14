const {version} = require("../package.json");
const ergo = require("./tokens.json");
const fs = require("fs");
const path = require("path");

function sortList(list) {
    return list.sort(function(t1, t2) {
        if (t1.ticker && t2.ticker) {
            return t1.ticker.toLowerCase() < t2.ticker.toLowerCase() ? -1 : 1
        }

        return true;
    });
}

function makeErgoList(list) {
    return Object.keys(list).map((key) => {
        return {
            address: key,
            ...list[key]
        }
    })
}

module.exports = function buildTokenList() {
    const parsedVersion = version.split('.');

    return {
        name: 'Spectrum Finance Token List',
        timestamp: new Date().toISOString(),
        version: {
            major: +parsedVersion[0],
            minor: +parsedVersion[1],
            patch: +parsedVersion[2],
        },
        tags: {},
        keywords: ['spectrum finance', 'tokens', 'ergo tokens'],
        tokens: sortList(makeErgoList(ergo))
    };
}