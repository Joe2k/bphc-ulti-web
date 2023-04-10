import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="m-auto max-w-4xl bg-slate-200 dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
