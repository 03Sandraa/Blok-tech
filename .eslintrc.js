module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4],
        "no-useless-escape": 0,
        "max-len": 0,
        "eqeqeq": 0,
        "no-console": 0,
        "no-cond-assign": 0,
        "import/newline-after-import": 0,
        "no-else-return": 0,
        "consistent-return": 0,
        "object-shorthand": 0,
        "prefer-destructuring": 0,
        "prefer-arrow-callback": 0,
        "arrow-parens": 0,
        "func-names": 0,
    }
}
