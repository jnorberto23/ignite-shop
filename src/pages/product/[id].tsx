import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import Head from "next/head";
import { CartContext } from "@/src/context/CartContext";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
    priceFormatted: string;
  };
}

type ItemType = {
  id: string;
  amount: number;
  price: number;
  image: string;
  name: string;
  count: number
};

export default function Product({ product }: ProductProps) {
  const { addToCart } = useContext(CartContext);

  // async function handleBuyButton() {
  //   try {
  //     setIsCreatingCheckoutSession(true);

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId,
  //     })

  //     const { checkoutUrl } = response.data;

  //     window.location.href = checkoutUrl;
  //   } catch (err) {
  //     setIsCreatingCheckoutSession(false);

  //     alert('Falha ao redirecionar ao checkout!')
  //   }
  // }

  async function handleAddToCart() {
    const item: ItemType = {
      id: product.defaultPriceId,
      amount: 1,
      price: product.price,
      image: product.imageUrl,
      name: product.name,
      count: 1,
    };
    addToCart(item);
  }

  return (
    <Fragment>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>

          <button
            onClick={handleAddToCart}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;
 
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        priceFormatted: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format((price.unit_amount || 0) / 100),
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
