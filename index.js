/* eslint-disable prefer-snakecase/prefer-snakecase */

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
    extends: [
        "next",
        "turbo",
        "prettier",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest-dom/recommended",
        "plugin:comment-length/recommended",
    ],
    env: {
        "jest/globals": true,
        es2020: true,
    },
    globals: {NodeJS: true},
    overrides: [
        {
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:typescript-sort-keys/recommended",
            ],
            files: ["*.{ts,tsx}"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint", "typescript-sort-keys"],
            rules: {
                "@typescript-eslint/no-unused-vars": "error",
                "@typescript-eslint/explicit-function-return-type": "error",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
            },
        },
    ],
    plugins: [
        "jest",
        "prefer-arrow-functions",
        "prefer-snakecase",
        "simple-import-sort",
        "sort-class-members",
        "no-literal-classnames",
    ],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "@next/next/no-img-element": "off",
        "no-unused-vars": "off",
        "prefer-arrow-callback": "warn",
        "prefer-arrow-functions/prefer-arrow-functions": [
            "warn",
            {
                classPropertiesAllowed: false,
                disallowPrototype: false,
                returnStyle: "implicit",
                singleReturnOnly: false,
            },
        ],
        "prefer-snakecase/prefer-snakecase": [
            "error",
            "always",
            {
                allowPascalCase: true,
                allowDestructuringPattern: true,
                whitelist: [
                    "serializeQueryArgs", // Redux
                    "endpointName",
                    "queryArgs",
                    "transformResponse",
                    "forceRefetch",
                    "currentArg",
                    "previousArg",
                    "invalidatesTags",
                    "providesTags",
                    "onQueryStarted",
                    "queryFulfilled",
                    "initialState",
                    "actionCreator",
                    "extraReducers",
                    "argTypes",
                    "reducerPath",
                    "delayMs", // Radix avatar fallback
                    "defaultValue", // Storybook
                    "defaultValues", // React hook form
                    "fieldState",
                    "shouldDirty",
                    "baseElement", // RTL
                    "queryByTestId",
                    "queryAllByTestId",
                    "queryByRole",
                    "getByLabelText",
                    "getByTestId",
                    "getAllByTestId",
                    "getByRole",
                    "componentDidMount", // React
                    "componentDidUpdate",
                    "componentWillUnmount",
                    "defaultProps",
                    "getDerivedStateFromProps",
                    "zIndex",
                    "viewBox",
                    "scaleX", // Fabric
                    "scaleY",
                    "originX",
                    "originY",
                    "objectCaching",
                    "hasControls",
                    "isDrawing",
                    "startArrowhead",
                    "endArrowhead",
                    "strokeStyle",
                    "strokeWidth",
                    "hachureGap",
                    "lockScalingX",
                    "lockScalingY",
                    "getType",
                    "fillStyle",
                    "fillWeight",
                    "penStyle",
                    "penWidth",
                    "cornerStrokeColor",
                    "cornerDashArray",
                    "cornerColor",
                    "onMouseDown",
                    "onMouseMove",
                    "onMouseUp",
                    "simulatePressure",
                    "preserveVertices",
                    "hasBorders",
                    "rootMargin", // Intersection observer
                    "enableOnContentEditable", // Hotkeys
                    "exportJSON", // Lexical
                    "importJSON",
                    "importDOM",
                    "createDOM",
                    "updateDOM",
                    "exportDOM",
                    "isInline",
                    "setFormat",
                    "canBeEmpty",
                    "canIndent",
                    "canInsertTextAfter",
                    "canInsertTextBefore",
                    "collapseAtStart",
                    "extractWithChild",
                    "insertNewAfter",
                    "isUnmergeable",
                    "publicRuntimeConfig", // Next.js
                    "generateMetadata",
                    "browserName", // Playwright
                    "toDOM", // Codemirror
                    "ignoreEvent",
                    "initialSpacer",
                    "lineMarker",
                ],
            },
        ],
        "no-literal-classnames/no-literal-classnames": [
            "error",
            "always",
            {
                whitelist: [
                    "force-dark-mode",
                    "force-light-mode",
                    "color-", // Used by Button and IconButton
                    "variant-",
                ],
            },
        ],
        "react/jsx-sort-props": "warn",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "off", // TODO: Enable once https://github.com/facebook/react/pull/27430 gets merged
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "turbo/no-undeclared-env-vars": "off",
        "sort-class-members/sort-class-members": [
            "error",
            {
                order: [
                    "constructor",
                    "[static-properties]",
                    "[static-methods]",
                    "[properties]",
                    "[conventional-private-properties]",
                    "[methods]",
                    "[conventional-private-methods]",
                ],
                accessorPairPositioning: "getThenSet",
            },
        ],
    },
};

export default [config];