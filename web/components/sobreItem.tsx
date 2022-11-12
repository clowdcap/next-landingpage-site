interface SobreProps {
  texth2: string
	textp: string
}

export function SobreItem(props: SobreProps) {
	return (
		<li className="mb-4">
			<h2 className="text-white text-2xl font-bold">{props.texth2}</h2>
			<p className="text-white text-base">{props.textp}</p>
		</li>
	)
}