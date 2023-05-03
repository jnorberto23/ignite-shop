import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { CartIconButton, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import { CartContextProvider } from "../context/CartContext";
globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <CartIconButton>
            <Handbag />
          </CartIconButton>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}

export default App;
