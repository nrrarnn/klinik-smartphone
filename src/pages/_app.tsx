import type { AppProps } from "next/app";
import '../styles/globals.css'
import Navbar from "@/components/layouts/Navbar";
import AppShell from "@/components/layouts/AppShell";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>  
      <Component {...pageProps} />
    </AppShell>
  )
}
