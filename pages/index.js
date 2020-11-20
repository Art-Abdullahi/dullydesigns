import Head from "next/head";
import About from "../components/aboutsection/About";
import Hero from "../components/heosection/Hero";
import TestParticle from "../components/TestParticle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DullyDesigns - Web designer based in Nairobi, Kenya.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/tpl7rpa.css"
        ></link>
      </Head>

      <Hero />
      <About />
    </div>
  );
}
