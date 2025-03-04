module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended", // Prettier 규칙 활성화
        "next/core-web-vitals" // Next.js ESLint 설정 포함
    ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "@typescript-eslint/no-unused-vars": "warn", // unused-vars 경고로 변경
        "@typescript-eslint/no-explicit-any": "warn", // any 타입 허용 (경고)
        "prettier/prettier": "warn" // Prettier 오류를 경고로 변경 (빌드 실패 방지)
    }
};
