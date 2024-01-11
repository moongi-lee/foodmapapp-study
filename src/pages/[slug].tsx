import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Page() {
  const router = useRouter()

  return (
      <>
        <h1>Router</h1>
        <h3>Page: {router.query.slug} </h3>
        <div>
          <button type="button" onClick={()=>{router.push("/test")}} >PUSH</button>
          <button type="button" onClick={()=>{router.push({pathname:"/[slug]", query:{slug:"push"}})}} >PUSH</button>
          <button type="button" onClick={()=>{router.replace({pathname:"/[slug]", query:{slug:"push"}})}} >REPLACE</button>
          <button type="button" onClick={()=>{router.reload()}} >RELOAD</button>
          <Link href="/hello">HELLO</Link>
          <Link href="/bye">BYE</Link>
        </div>
      </>
  )
}