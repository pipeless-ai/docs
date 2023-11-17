import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { BsDiscord } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{display: "flex", alignItems: "center"}}><Image alt="logo" width={30} height={30} src="/docs/logo-400x400-rounded.png" />&nbsp;<b>Pipeless</b></span>,
  logoLink: 'https://pipeless.ai',
  primaryHue: 297, // Equivalent to #701a75
  project: {
    link: 'https://github.com/pipeless-ai/pipeless',
  },
  chat: {
    link: 'https://discord.gg/K2qxQ8uedG',
    icon: <BsDiscord size={25} />
  },
  docsRepositoryBase: 'https://github.com/pipeless-ai/docs/tree/main',
  footer: {
    text: <p>Pipeless Docs - Copyright &copy; 2023</p>,
  },
  search: {
    loading: "Loading...",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://www.pipeless.ai' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Pipeless Documentation'} />
        <meta
          property="og:description"
          content={frontMatter.description || "Documentation about Pipeless, the computer vision framework"}
        />
        <meta property="og:image" content="https://www.pipeless.ai/docs/logo-400x400-rounded.png" />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Pipeless'
    }
  },
  banner: {
    key: 'cloud',
    text: <a target="blank" href="https://lfkz9noht13.typeform.com/to/Mb4OsDK1"><p>🚀 &nbsp;&nbsp;<b>Pipeless Cloud private beta:</b>&nbsp;Deploy with a command, scale without limits! &nbsp;<span style={{ textDecoration: "underline" }}>Join the beta program</span></p></a>
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
