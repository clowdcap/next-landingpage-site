

import Image from "next/image"
import Logo from './../assets/logo.jpg'

export default function Home() {

  return (
    <div className="flex flex-auto items-center justify-center my-10">
      <main className="bg-back-1 rounded-lg px-3 py-5 w-[400px] flex flex-col">

        <Image src={Logo} alt="Logo" className="w-full"/>

        <h1 className="text-4xl font-bold text-center py-5">SORTEIO</h1>
        <p className="text-base text-center pb-8 px-5">Cadastre-se abaixo e concorra a um sorteio* de
        <b> R$ 300,00</b> em vale compras e + R$ 100,00 para cada 
        amiga que você marcou na nossa publicação oficial 
        no Instagram.</p>

        <form>
          <p className="text-sm text-gray-600 pb-1">Nome*</p>
          <input type="text" className="w-full border border-gray-400 rounded mb-3 p-1" />
          <p className="text-sm text-gray-600 pb-1">Email*</p>
          <input type="text" className="w-full border border-gray-400 rounded mb-3 p-1" />
          <p className="text-sm text-gray-600 pb-1">Whatsapp (com DDD)*</p>
          <input type="text" className="w-full border border-gray-400 rounded mb-3 p-1" />
          <p className="text-sm text-gray-600 pb-1">3+7 = ?*</p>
          <input type="text" className="w-full border border-gray-400 rounded mb-3 p-1" />

          <div className="flex flex-col justify-center items-center gap-6">
            <button className="py-3 px-6 mt-3  rounded font-bold text-2xl bg-[#685D49] tezt-center text-white m-auto">QUERO PARTICIPAR</button>
            <p className="text-center text-xs mx-9 leading-6">*Sorteio válido para cadastros realizados até 
              10/12/20 às 15h. Entraremos em contato com o 
              vencedor por direct / inbox.</p>

            <p className="text-center text-xs">Prometemos não utilizar suas informações de 
              contato para enviar qualquer tipo de SPAM</p>
          </div>
        </form>


      </main>
    </div>
  )
}
