// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props

// https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain

import type { InferGetStaticPropsType, GetStaticProps } from 'next'




export default function Page({
  number: number
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      <>
        <h1>ISR</h1>
        <h3>number: {number}</h3>
      </>
  )
}

export const getStaticProps = (async () => {
  const num = await fetch('http://127.0.0.1:8000/utility_app/random/num/'
  )
  const number = await num.json()
  return { props: { number }, revalidate: 5 }
}) satisfies GetStaticProps<{
  number: number
}>