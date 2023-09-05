export type DisplayImageProps = {
  url: string
  isEnlargeImage: boolean
  onClick: (url: string) => void
}

const DisplayImage = (props: DisplayImageProps) => {
  const { url, onClick, isEnlargeImage } = props
  return (
    <div
      className="flex-1 w-full h-full p-[5px] hover:cursor-pointer"
      onClick={() => {
        onClick(url)
      }}
    >
      <img
        src={url}
        alt=""
        className={`h-full object-cover ${isEnlargeImage ? 'hidden' : ''}`}
      />
    </div>
  )
}

export default DisplayImage
