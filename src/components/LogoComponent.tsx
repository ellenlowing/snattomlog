import logo from '@assets/logo.png'

const LogoComponent = () => {
  return (
    <div className="flex flex-col w-full items-center flex-1 z-10">
      <div className="flex flex-col justify-start my-10">
        <img
          className="text-center text-8xl object-cover h-[65px] "
          src={logo}
          alt="SO"
        />
      </div>
      <div className="text-xs text-center tracking-[7px] semplicita">
        THE SNATT OMLOG GROUP
      </div>
    </div>
  )
}

export default LogoComponent
