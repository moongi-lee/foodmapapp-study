import {useState} from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useSession, signOut} from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const {data, status} = useSession()
  console.log(data)

  return (
      <>
        <div className="navbar">
          <Link href="/" className="navbar__logo">nextmap</Link>
          <div className="navbar__list">
            <Link href="/stores/" className="navbar__list--item">맛집 목록</Link>
            <Link href="/stores/infinite" className="navbar__list--item">맛집 목록 - 무한</Link>
            <Link href="/stores/new" className="navbar__list--item">맛집 등록</Link>
            <Link href="/users/likes" className="navbar__list--item">찜한 가게</Link>
            {status === 'authenticated' ? <button type="button" onClick={()=>signOut()}>로그아웃</button> : <Link href="/api/auth/signin" className="navbar__list--item">로그인</Link>}
          </div>
          {/* mobile button */}
          <div role="presentation" onClick={()=> setIsOpen((val)=>!val)} className="navbar__button">{isOpen ? <IoMdClose/> : <AiOutlineMenu/>}</div>
        </div>
      {/*  mobile navbar  */}
        {isOpen && (
            <div className="navbar--mobile">
              <div className="navbar__list--mobile">
                <Link href="/stores/" className="navbar__list--item--mobile">맛집 목록</Link>
                <Link href="/stores/new" className="navbar__list--item--mobile">맛집 등록</Link>
                <Link href="/users/likes" className="navbar__list--item--mobile">찜한 가게</Link>
                <Link href="/api/auth/signin" className="navbar__list--item--mobile">로그인</Link>
              </div>
            </div>
        )}
      </>
  )
}