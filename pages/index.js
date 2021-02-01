import Head from "next/head";

import About from "../components/aboutsection/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/heosection/Hero";
import Navigation from "../components/navigation/Navigation";
import Newnav from "../components/navigation/Newnav";
import Projects from "../components/projectsection/Projects";

export default function Home({ articles }) {
  console.log(articles);
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

      <Navigation />

      <Hero />
      <About />
      <Projects articles={articles} />
      <Contact />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
