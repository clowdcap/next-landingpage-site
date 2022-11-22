import Image from "next/image"

import Logo from './../assets/logo.svg'
import Iamge from './../assets/Iamge.svg'
import ImageA from './../assets/Image_sec.svg'
import ImageB from './../assets/Image_sec-1.svg'
import ImageC from './../assets/Image_sec-2.svg'


import { Menu } from './../components/Menu'
import { BlueButton } from "../components/BlueButton"
import { Search } from "../components/Search"
import { CardBox } from "../components/Card"
import { CardItem } from "../components/CardItem"

export default function Home() {

  return (
    <div className="flex flex-col overflow-hidden">
      
      {/* Conteudos
        Topo e Capa 
      */}
      <div className="bg-gradient-to-t from-base-2">
            
            <header className="w-5/6 m-auto flex flex-row items-center justify-between h-[87px]">
              <div className="flex flex-row gap-24 items-center">
                <Image src={Logo} alt="Logo" />
                <Menu />
              </div>
              <div className="flex flex-row gap-8 items-center">
                <Search />
                <BlueButton title="Log in"/>
              </div>
            </header>

            <hr />

            <main className="w-5/6 m-auto pt-6 pb-12 flex flex-row items-center">
              <div className="flex flex-col w-2/4 gap-2">
                <span className="text-base-1 px-8 py-3 bg-base-2 w-fit rounded-xl">Netbook community</span>
                <h1 className="text-[3.5rem] font-bold">Your Solutions For Community!</h1>
                <p className="text-base w-4/6">More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                <div className="my-8 flex flex-row gap-6">
                  <BlueButton title="About More" />
                  <BlueButton title="Invite Friend" unline />
                </div>
              </div>
              <div className="flex flex-col w-2/4">
              <Image src={Iamge} alt="Iamge" />
              </div>
            </main>
      </div>

      {/* Conteudos 
        Sobre, Conquistas e Comunidade 
      */}
      <div className="bg-gradient-to-t from-base-5">
        <section className="w-5/6 m-auto mt-24 gap-12 flex flex-row items-center justify-between mb-12 ">
        
          <div className="w-3/6 flex flex-col gap-4">
            <p className="text-base-1 font-medium text-lg">Whats Netboks?</p>
            <h2 className="text-4xl font-bold text-base-4" >Why Join to Netbook Social Network?</h2>
            <p className="font-light text-xl w-[80%] text-base-3">Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
            <ul className="my-8 flex flex-col gap-2 list-disc ml-4">
              <li className="before: text-base-1">
                <p className="text-black font-medium text-lg">Groups</p>
              </li> 
              <li className="before: text-base-1">
                <p className="text-black font-medium text-lg">Messages</p>
              </li>
              <li className="before: text-base-1">
                <p className="text-black font-medium text-lg">Share</p>
              </li>
            </ul>
          </div>


          <div className="w-3/6 text-right h-[75vh] max-h-[75vh] justify-center flex flex-row items-center gap-4">
            <div className="w-[40%]">
              <Image className="w-full h-fit" src={ImageA} alt="Image A" />
            </div>
            <div className="w-[40%] flex flex-col items-center gap-4">
              <Image className="w-full h-fit" src={ImageB} alt="Image B" />
              <Image className="w-full h-fit" src={ImageC} alt="Image C" />
            </div>
          </div>
        </section>

        <section className="w-5/6 m-auto flex flex-row items-center gap-8">
          <div className="flex flex-row gap-4 w-3/5">
            <CardBox active/> 
            <CardBox /> 
          </div>
          <div className="flex flex-col gap-4 w-2/5">
            <p className="text-base-1 font-medium text-lg">Whats Netboks?</p>
            <h2 className="text-4xl font-bold text-base-4" >Why Join to Netbook Social Network?</h2>
            <p className="font-light text-xl leading-7 w-[80%] text-base-3">
              The scope the Social Media becomes crucial Is helps 
              the business to directly engage with their needs and wants.
            </p>
            <div className="my-4">
              <BlueButton title="Discorver me  ->" />
            </div>
          </div>
        </section>

        <section className="w-5/6 m-auto flex flex-col justify-center text-center my-36 gap-2">

          <span className="font-medium text-base-1 text-lg">Our Community</span>
          <h2 className="font-bold text-4xl" >Community Main Feature</h2>
          <p className="py-4 text-base text-base-3 w-3/4 m-auto">The wise man therefore always holds in these matters to this principle of selection.</p>

          <div className="flex flex-row items-center gap-12 justify-center ">

            <div className="flex flex-col items-end gap-8" >
              <CardItem 
                title="Members, Friends"
                text="Members, Friends Connection ( like followers ), Private Message"
              />

              <CardItem 
                title="Forum"
                text="Forum is ready by BBPress. Your users can make topics and talk."
              />

              <CardItem 
                title="List Builder"
                text="Members, Groups list can be modified by drag & drop live builder."
              />
        
    
            </div>

            <div className="flex flex-col items-start gap-8" >
              <CardItem 
                title="Groups"
                text="Your users can create groups to let other users to join and talk"
              />

              <CardItem 
                title="Custom Module"
                text="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."
              />

              <CardItem 
                title="List Scroll Effects"
                text="8 different scroll effects are ready.
                You can always change by your tastes."
              />
        
    
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
