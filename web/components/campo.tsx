interface CampoProps {
  item: string
}

export function CampoInputText(props:CampoProps) {
  return (
    <p className="text-white text-base">{props.item}</p>
  )
}