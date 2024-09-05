type PropsCard = {
  children: React.ReactNode
}

const Card = (props:PropsCard ) => {
  const { children } = props
  return(
    <div className="w-[300px] rounded-lg shadow-lg">
      <div>Icon</div>
      <div>{children}</div>
    </div>
  )
}

export default Card