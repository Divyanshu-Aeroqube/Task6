import { ThemeProvider } from "./components/ui/theme-provider"
import Layout from "@/Layout"
import Loader from "./components/loader/Loader"
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Loader show={false}/>
      <Layout/>
    </ThemeProvider>
  )
}

export default App
