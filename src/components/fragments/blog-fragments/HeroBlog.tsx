type Props = {
  children: React.ReactNode
}

const HeroBlog = (props: Props) => {
  const { children } = props
  return(
    <div className="padding-x section-wrapper bg-[url('/img/img-bg.jpg')] bg-cover bg-center h-64 w-full">
      <div className="absolute inset-0 bg-blue-100 opacity-60 h-64"></div>
        <div className="relative text-slate-900 text-2xl font-bold p-4" data-aos="fade-down"
      data-aos-duration="1500">
          {children}
        </div>
    </div>
  )
}

export default HeroBlog