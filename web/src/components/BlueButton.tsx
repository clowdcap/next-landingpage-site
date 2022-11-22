interface ButtonProps {
  title: string
  unline?: boolean
}

export const BlueButton = (props: ButtonProps) => {
  if (props.unline) {
    return (
      <button className="px-9 py-4 font-light rounded-xl text-base border border-base-1 text-base-1">{props.title}</button>
    )
  } else {
    return (
      <button className="px-9 py-4 font-light rounded-xl text-white bg-base-1 ">{props.title}</button>
    )
  }
}
