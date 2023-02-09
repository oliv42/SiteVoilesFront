module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "max-len": [
            "error",
            {
                code: 110,
                ignoreUrls: true,
            },
        ],
        "import/extensions": ["ignorePackages"],
    },
};
