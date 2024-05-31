import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  siteTitle: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, siteTitle }) => {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="header">
        <a id="skip-to-content" className="srOnly" href="#content">
          Pular para conteúdo
        </a>
      </header>
      <main id="content" role="main">
        {children}
      </main>
    </div>
  );
};
