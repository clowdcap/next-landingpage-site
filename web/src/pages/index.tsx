

import Image from "next/image"
import Logo from './../assets/logo.png'

export default function Home() {

  return (
    <div>
      <main></main>
      <Image src={Logo} alt="Logo" />
    </div>
  )
}
