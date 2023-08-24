export type EnlargeDisplayImageProps = {
  url: string
  text: string
  onClick: () => void
}

const EnlargeDisplayImage = (props: EnlargeDisplayImageProps) => {
  const { url, text, onClick } = props
  return (
    <div
      className="w-full h-[90%] flex flex-row justify-center items-center"
      onClick={() => onClick()}
    >
      <div className="w-4/5 h-full bg-black p-2 bg-opacity-50 flex flex-col">
        <div className="h-5/6 w-full  flex justify-center items-center">
          <img src={url} alt="" className="h-full w-full" />
        </div>
        <div className="text-xs text-center h-1/6 w-full bg-white text-black justify-center items-center flex">
          <div>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default EnlargeDisplayImage
