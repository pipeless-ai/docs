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
    text: <p>Copyright &copy; 2023 Pipeless, Inc.</p>,
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
    dismissible: false,
    key: 'agents',
    text: <a target="blank" href="https://agents.pipeless.ai"><p>🚀 &nbsp;&nbsp;<b>Pipeless Agents is live!</b>&nbsp;Create vision powered apps and automations effortlessly within seconds.&nbsp;<span style={{ textDecoration: "underline" }}>Click here to get started!</span></p></a>
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
