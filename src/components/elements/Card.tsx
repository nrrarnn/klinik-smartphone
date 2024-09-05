type PropsCard = {
  name : string
  description: string
}

const Card = (props:PropsCard ) => {
  const { name, description } = props
  return(
    <div className="w-[300px] rounded-lg shadow-lg">
      <div>Icon</div>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  )
}

export default Card