import logo from '@assets/logo.png'

const LogoComponent = () => {
  return (
    <div className="flex flex-col w-full items-center flex-1 z-10">
      <div className="h-[80px] flex flex-col justify-center my-10">
        <img
          className="text-center text-8xl object-cover h-full"
          src={logo}
          alt="SO"
        />
      </div>
      <div className="text-xs text-center tracking-[10px]">
        THE SNATT OMLOG GROUP
      </div>
    </div>
  )
}

export default LogoComponent
