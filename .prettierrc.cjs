/**
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/prettier/index.d.ts#L77
 * @type {import("prettier").Config}
 */
module.exports = {
    arrowParens: "avoid",
    bracketSpacing: true,
    semi: true,
    trailingComma: "all",
    useTabs: false,

    endOfLine: "lf",
    printWidth: 120,
    tabWidth: 4,
    singleQuote: false,
    overrides: [
        {
            files: "*.{yml,yaml,md,toml,json,html}",
            options: {
                tabWidth: 2,
            },
        },
    ],
};
