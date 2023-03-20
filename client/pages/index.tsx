import Head from 'next/head'
import styles from "../styles/home.module.scss"


const videoProps = {
  children: <source src='/video/home.mp4' type='video/mp4' />,
  autoPlay: true,
  muted: true,
  loop: true
}

export default function Home() {


  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="description" content="world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="keywords" content="hello" />
        <meta property="og:title" content="hello" />
        <meta property="og:description" content="world" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:site_name" content="hello" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" /> */}
      </Head>

     <h1>Hello World</h1>
    </>
  )
}
