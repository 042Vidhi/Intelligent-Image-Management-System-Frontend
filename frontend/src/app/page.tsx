"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
/*eslint-disable*/
export default function Home() {
  const Router = useRouter()
  useEffect(() => {
    Router.push("/pages/upload")
  }, [])

  return (
    <>
      Hello World!
    </>
  )
}