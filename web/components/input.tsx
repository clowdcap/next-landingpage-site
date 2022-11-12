interface InputProps {
  base: string
}

export function InputText(props:InputProps) {
  return (
    <input type='text' className="w-full mb-4 text-black" placeholder={props.base}/>
  )
}

export function InputRadio(props:InputProps) {
  return (
    <li className="flex items-center text-sm gap-2 text-white">
      <input type="radio"/>
      {props.base}
    </li>
  )
}
