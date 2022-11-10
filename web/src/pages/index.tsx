import Image from "next/image"
import Logo from './../assets/logo.png'
import { HiOutlineShoppingBag } from 'react-icons/hi' 

export default function Home() {

  return (
    <div className=" flex flex-col items-center justify-center m-auto">
      <header className="flex flex-row justify-center items-center bg-black py-6 w-full">
        <Image className="w-fit h-16" src={Logo} alt="Logo Algodão Cru" />
      </header>
      <main className="w-full flex flex-col flex-wrap items-center justify-center bg-gray-800 ">
        <section className="w-3/4 h-full py-24 text-center flex flex-col gap-8 mx-10">
          <h1 className="text-7xl font-bold text-white">BLACK FRIDAY &#128561;</h1>
          <h2 className="text-5xl font-bold text-primary-1">Fique ligada (o) na única promoção que faço no ano!</h2>
          <h2 className="text-5xl font-bold text-primary-1">Vai valer a pena esperar por isso!</h2>

          <p className="text-xl text-white w-2/3 m-auto">Estou fazendo uma <b>pesquisa</b> para ver qual o curso devo colocar 
          em promoção no dia 23 de novembro na <b>Black Friday. </b>
          Ajude-me a escolher!</p>
          <h3 className="text-4xl font-bold text-white pb-24">Qual o curso você quer ver na Black Friday para aproveitar a única
          promoção do ano?</h3>
        </section>
      </main>

      <section className="w-2/3 h-full flex flex-row flex-wrap items-center justify-between relative">

        <div className="w-1/3 flex flex-col justify-center items-center gap-8 mt-8">
            <div className="line flex flex-row gap-5">
              <div className="icon"><HiOutlineShoppingBag className="text-primary-1 text-4xl"/></div>
              <div className="texts flex flex-col gap-2">
                <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque.</p>
                <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor voluptate fugit quo perferendis voluptatum quisquam officia fuga. Aut reiciendis mollitia quos nostrum eius beatae!</p>
              </div>
            </div>

            <div className="line flex flex-row gap-5">
              <div className="icon"><HiOutlineShoppingBag className="text-primary-1 text-4xl"/></div>
              <div className="texts flex flex-col gap-2">
                <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque.</p>
                <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor voluptate fugit quo perferendis voluptatum quisquam officia fuga. Aut reiciendis mollitia quos nostrum eius beatae!</p>
              </div>
            </div>
        </div>

        <div className="h-[750px] px-10 py-10 bg-black w-[30%] text-center absolute top-[-120px] left-[50%] translate-x-[-50%]">
          <form className="text-left mx-0">
            <p className="text-xl mb-4 text-white">Preencha:</p>
            <p className="text-white">Nome*</p>
            <input type="text" className="w-full p-1.5 mb-3 rounded-sm"/>
            <p className="text-white">Email*</p>
            <input type="text" className="w-full p-1.5 mb-3 rounded-sm"/>
            <p className="text-white">Telefone*</p>
            <input type="text" className="w-full p-1.5 mb-3 rounded-sm"/>
            <p className="text-white">Escolha um único curso:*</p>
            <ul className="my-2 flex flex-col gap-2">
              <li className="text-white"><input type="radio" className="mr-2"/>Como Modelar e Confeccionar Saias</li>
              <li className="text-white"><input type="radio" className="mr-2"/>Acabamentos Primorosos e Técnicas de Costura</li>
              <li className="text-white"><input type="radio" className="mr-2"/>Introdução ao Método de Corte Centesimal</li>
              <li className="text-white"><input type="radio" className="mr-2"/>Workshop de Jogos Americanos</li>
            </ul>
            <p className="text-white">10+5 = ?</p>
            <input type="text" className="w-full p-1.5 mb-3 rounded-sm"/>
            <br />
            <button className="text-white bg-primary-1 w-full py-3 mt-2 rounded-sm text-xl font-bold uppercase">Escolher esse curso</button>
            <p className="text-left text-white mt-8 text-xs">Prometemos não utilizar suas informações de contato para enviar
            qualuqer tipo de SPAM.</p>

          </form>
        </div>
          
        <div className="w-1/3 flex flex-col justify-center items-center gap-8 mt-8">
          <div className="line flex flex-row gap-5">
            <div className="icon"><HiOutlineShoppingBag className="text-primary-1 text-4xl"/></div>
            <div className="texts flex flex-col gap-2">
              <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque.</p>
              <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor voluptate fugit quo perferendis voluptatum quisquam officia fuga. Aut reiciendis mollitia quos nostrum eius beatae!</p>
            </div>
          </div>

          <div className="line flex flex-row gap-5">
            <div className="icon"><HiOutlineShoppingBag className="text-primary-1 text-4xl"/></div>
            <div className="texts flex flex-col gap-2">
              <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque.</p>
              <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor voluptate fugit quo perferendis voluptatum quisquam officia fuga. Aut reiciendis mollitia quos nostrum eius beatae!</p>
            </div>
          </div>
        </div>
      
      </section>

      <footer className="w-full mt-80 bg-black pt-12 pb-16">
        <p className="text-white text-center text-lg">Feito com :love: para te ajudar a crescer : Algodão Cru</p>
      </footer>
    </div>
  )
}
