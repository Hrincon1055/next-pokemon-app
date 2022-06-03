import { FC, ReactNode } from "react";
import Head from "next/head";

// MIS COMPONENTES
import { Navbar } from "../ui";
// INTERFACES
interface Props {
  children: ReactNode;
  title?: string;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;
// INICIO
export const Layout: FC<Props> = ({ children, title }) => {
  // RENDER
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Henry Rincon" />
        <meta
          name="description"
          content={`Informacion sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
