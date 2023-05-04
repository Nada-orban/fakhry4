import '../styles/globals.css'
import { ThemeProvider, CssBaseline, } from '@mui/material';
import { ColorModeContext, useMode } from '../../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';


export default function App({ Component, pageProps }) {

  const [theme, colorMode] = useMode();
  // const router = useRouter();
  // const { Path } = router;


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Component {...pageProps} />
        <style jsx global>{`
              ${theme.palette.mode === 'dark' ? "body{background:#1c1d24} " : "body{background: #fff} "}`
        }</style>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
