import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Himanchal Kaushale is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="himanchal kaushale, himanchal, kaushale, web developer portfolio, himanchal web developer, himanchal developer, mern stack, himanchal kaushale portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Himanchal Kaushale's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://vscode-portfolio.vercel.app/og-image.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Himanchal Kaushale',
};
