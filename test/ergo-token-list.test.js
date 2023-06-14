const {version} = require('../package.json')
const Ajv = require('ajv').default;
const addFormats = require('ajv-formats').default;
const schema = require('../src/schema/tokenlist.schema.json');
const { expect } = require('chai');
const buildList = require('../src/buildList.js');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv)

const validate = ajv.compile(schema);

const defaultTokenList = buildList();

describe('buildList', () => {
    it('The list matches the schema', () => {
        const isValidList = validate(defaultTokenList)
        if (!isValidList) {
            console.log(validate.errors);
        }
        expect(isValidList).to.equal(true);
    });

    it('The list contains no duplicate addresses', () => {
        const map = {};

        for (let token of defaultTokenList.tokens) {
            const key = `${token.network}-${token.address}`;
            expect(typeof map[key]).to.equal('undefined');
            map[key] = true;
        }
    })

    it('The list contains no duplicate tickers', () => {
        const map = {};

        for (let token of defaultTokenList.tokens) {
            let ticker = token.ticker.toLowerCase();
            const key = `${token.network}-${ticker}`;
            expect(typeof map[key]).to.equal('undefined');
            map[key] = true;
        }
    })

    it('version matches package.json', () => {
        expect(version).to.match(/^\d+\.\d+\.\d+$/);
        expect(version).to.equal(`${defaultTokenList.version.major}.${defaultTokenList.version.minor}.${defaultTokenList.version.patch}`);
    });
});
