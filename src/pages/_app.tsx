import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import {

  Container,

} from "../styles/pages/app";
import { CartContextProvider } from "../context/CartContext";
import { HeaderComponent } from "../components/Header";
import { CartPanel } from "../components/CartPanel";

globalStyles();

function App({ Component, pageProps }: AppProps) {
 
  return (
    <CartContextProvider>
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
        <CartPanel/>
      </Container>
    </CartContextProvider>
  );
}

export default App;
