import Card from "../elements/Card"

type CardItem = {
  name: string
  description: string
}
const ServicesSection = () => {
  return (
    <div className="w-full py-10">
      <h1 className="text-3xl font-bold text-slate-800 text-center">Layanan Kami</h1>
      <div className="section-wrapper padding gap-5 pt-20">
          {
            cardItems.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name}
                  description={item.description}
                />
              )
            })
          }
      </div>
    </div>
  )
}

const cardItems: CardItem[] = [
  {
    name: "Layanan",
    description: "hello"
  },
  {
    name: "Layanan",
    description: "hello"
  },
  {
    name: "Layanan",
    description: "hello"
  },
]

export default ServicesSection