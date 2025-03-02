import { ThemeProvider } from "./components/ui/theme-provider"
import Layout from "@/Layout"
import Loader from "./components/loader/Loader"
import { LoadingProvider } from "./context/LoadingProvider"
const App = () => {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LoadingProvider>
        <Loader/>
      <Layout/>
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App
