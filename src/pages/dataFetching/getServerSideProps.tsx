import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 

export default function Page({
  number: number
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>getServerSideProps  입니다. </h1>
      <h1>number: {number} </h1>
    </>
  )
}


export const getServerSideProps = (async () => {
  // Fetch data from external API
  const num = await fetch('http://127.0.0.1:8000/utility_app/random/num/')
  const number: number = await num.json()
  // Pass data to the page via props
  return { props: { number } }
}) satisfies GetServerSideProps<{ number: number }>
 