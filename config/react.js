import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            react: reactPlugin,
            "react-hooks": hooksPlugin,
        },
        rules: {
            ...reactPlugin.configs["jsx-runtime"].rules,
            ...hooksPlugin.configs.recommended.rules,
            "react/no-array-index-key": "error",
            "react/jsx-no-bind": [
                "error",
                {
                    ignoreRefs: true,
                    allowArrowFunctions: true,
                    allowFunctions: false,
                    allowBind: false,
                    ignoreDOMComponents: true,
                },
            ]
        },
        languageOptions: {
            globals: {
                React: "writable",
            },
        },
    },
];