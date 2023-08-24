export type DotProps = {
  size: number
}

const Dot = (props: DotProps) => {
  const { size } = props
  return (
    <div
      className="bg-white aspect-square rounded-full"
      style={{ height: size }}
    ></div>
  )
}

export default Dot
