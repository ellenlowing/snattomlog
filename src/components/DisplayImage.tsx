export type DisplayImageProps = {
  url: string
  onClick: (url: string) => void
}

const DisplayImage = (props: DisplayImageProps) => {
  const { url, onClick } = props
  return (
    <div
      className="flex-1 w-full h-full p-[5px]"
      onClick={() => {
        onClick(url)
      }}
    >
      <img src={url} alt="" className="h-full w-full" />
    </div>
  )
}

export default DisplayImage
