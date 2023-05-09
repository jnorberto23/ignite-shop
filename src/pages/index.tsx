import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";

import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";
import {
  AddToCartIconButton,
  HomeContainer,
  Product,
} from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { Fragment, useContext } from "react";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { CartContext } from "../context/CartContext";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    priceId: string
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.25,
      spacing: 15,
    },
  });

  const { addToCart } = useContext(CartContext);


  return (
    <Fragment>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
            const item = {
              id: product.priceId,
              amount: 1,
              price: product.price,
              image: product.imageUrl,
              name: product.name,
              count: 1,
            };
          
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <AddToCartIconButton onClick={ () => addToCart(item)}>
                    <Handbag weight="bold" />
                  </AddToCartIconButton>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount || 0) / 100),
      priceId: price.id
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  };
};
