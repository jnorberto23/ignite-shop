import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import {
  ImageContainer,
  ImageContainerRow,
  SuccessContainer,
} from "../styles/pages/success";
import { Fragment } from "react";
import Head from "next/head";

interface SuccessProps {
  costumerName: string;
  product: [
    {
      name: string;
      imageUrl: string;
    }
  ];
}

export default function Success({ costumerName, product }: SuccessProps) {
  console.log("king for a day", product);
  return (
    <Fragment>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainerRow>
          {product.map((element) => {
            return (
              <ImageContainer key={element.name}>
                <Image src={element.imageUrl} width={120} height={110} alt="" />
              </ImageContainer>
            );
          })}
        </ImageContainerRow>

        <p>
          Ihaaaaa <strong>{costumerName}</strong>
          <br />
          <strong>{product.length}</strong> camisetas tá indo para a sua casa :)
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session && session.customer_details!.name;

  const LineItem = session && (session.line_items!.data as Stripe.LineItem[]);

  const products = LineItem.map((element) => {
    if (element.price) {
      const product = element.price.product as Stripe.Product;
      return {
        name: product.name,
        imageUrl: product.images[0],
      };
    }
  });

  return {
    props: {
      costumerName,
      product: products,
    },
  };
};
