import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  console.log("_document 파일입니다.")
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
