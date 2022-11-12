interface ButtonProps {
  title: string
}
export function ButtonComp(props: ButtonProps) {
  return (
    <button className="text-white text-xl font-bold text-center w-full py-2 bg-back-3 mb-6">
      {props.title}
    </button>
  )
}