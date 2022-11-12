import Image from "next/image"
import Logo from './../assets/logo.png'

import { SobreItem } from "../../components/sobreItem"
import { VideoItem } from "../../components/video"
import { CampoInputText } from "../../components/campo"
import { InputRadio, InputText } from "../../components/input"
import { ButtonComp } from "../../components/button"

export default function Home() {

  return (
    <div>
      <main className="flex flex-col items-center justify-center w-[900px] mx-auto mt-4 mb-10">
        
        <Image src={Logo} alt="Logo" className="" />

        <div className="flex flex-row gap-12">

          <div className="w-4/6">
            <h2 className="text-right text-2xl my-8 text-white font-bold">Planilha de Cadastro de Clientes e Fornecedores</h2>
            <div className="flex flex-row">
              <div className=" w-[75px]">
                <ul>
                  <li>Fb</li>
                  <li>Tw</li>
                  <li>In</li>
                </ul>
              </div>
              <div className="w-full mb-20">
               <VideoItem link="https://www.youtube.com/watch?v=gDRavPlWeqw" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-8 text-white">Sobre a Planilha de Cadastro de Clientes e<br /> Fornecedores</h2>
            <ul className="list-disc">
              <SobreItem 
                texth2="Saiba quem são seus clientes" 
                textp="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, deserunt?"/>
              <SobreItem 
                texth2="Campos personalizados" 
                textp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsa earum et expedita natus corporis esse maiores ab quis neque."/>
              <SobreItem 
                texth2="Use filtros para controlar os cadastros" 
                textp="Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus repellendus error tenetur et voluptates eos molestias itaque?"/>
            </ul>
          </div>

          <div className="w-2/6 flex flex-col bg-back-2 p-8 gap-4">
            <h2 className="text-center text-white text-2xl">Receba a planilha no seu e-mail</h2>
            <span className="text-white text-center text-sm italic mb-4">Preencha seus dados para receber o material</span>
            
            <form>
              <CampoInputText item="Nome*" />
              <InputText base="Digite aqui" />

              <CampoInputText item="Email*" />
              <InputText base="Digite aqui" />
          
              <p className="text-white text-base">Você ja tem empresa formalizada?*</p>
              <ul className="flex flex-col gap-2 mb-4 mt-2">
                <InputRadio base="SIM" />
                <InputRadio base="NÃO" />
                <InputRadio base="ESTOU ABRINDO EMPRESA" />
                <InputRadio base="SOU CONTADOR/CONSULTOR" />
              </ul>

              <CampoInputText item="Sua empresa é.*" />
              <InputText base="Digite aqui" />

              <CampoInputText item="Quantas pesosas têm na sua empresa?*" />
              <InputText base="Digite aqui" />

              <CampoInputText item="Onde você usará a planilha?*" />
              <InputText base="Digite aqui" />

              <CampoInputText item="4 + 3 = ?" />
              <InputText base="Digite aqui" />

              <ButtonComp title="Receber planilhas"/>

              <p className="text-white text-xs">Prometemos não utilizar suas 
              informações de contato para enviar qualquer tipo de SPAM</p>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
