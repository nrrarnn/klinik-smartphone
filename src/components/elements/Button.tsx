type Props = {
  children: React.ReactNode
}

const Button = (props: Props ) => {
  const { children } = props
  return (
    <button className="px-4 py-2 rounded-full bg-blue-400 text-white shadow-sm font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg">{children}</button>
  )
}

export default Button