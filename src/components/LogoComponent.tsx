import logo from '@assets/logo.png'

const LogoComponent = () => {
  return (
    <div className="flex flex-col w-3/5 items-center flex-1 z-10">
      <div className="h-[120px] flex flex-col justify-center my-6">
        <img className="text-center text-8xl" src={logo} alt="SO" />
      </div>
      <div className="text-xs text-center tracking-[10px]">
        THE SNATT OMLOG GROUP
      </div>
    </div>
  )
}

export default LogoComponent
