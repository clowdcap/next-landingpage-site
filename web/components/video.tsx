interface VideoProps {
  link: string
}
export function VideoItem(props: VideoProps) {
	return (
    <video className="w-full" src={props.link} controls={true}></video>
	)
}