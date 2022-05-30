import Link from 'next/link'
import { ReactNode } from 'react'
import { Button } from '../Button'
import {HeaderBar} from '../HeaderBar'
import { signOut } from "next-auth/react"


export  function Layout({ children } : { children: ReactNode}) {
  return (
    <>
      <HeaderBar 
        links={<><Link href="/videos">All videos</Link><Link href="/upload">Upload</Link></>}
        auth={<Button variant={"secondary"} onClick={() => signOut()}>Sign out</Button>}
      />
      <main>{children}</main>
    </>
  )
}