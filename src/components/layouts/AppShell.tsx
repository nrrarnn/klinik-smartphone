import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode
}

const AppShell = (props: Props ) => {
  const { children } = props;
  return (
    <main>
      <Navbar/>
        {children}
    </main>
  )
}

export default AppShell;