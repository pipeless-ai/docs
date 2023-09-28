import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { BsDiscord } from 'react-icons/bs';

const config: DocsThemeConfig = {
  logo: <span style={{display: "flex", alignItems: "center"}}><Image alt="logo" width={30} height={30} src="/docs/logo-400x400-rounded.png" />&nbsp;<b>Pipeless</b></span>,
  logoLink: 'https://pipeless.ai',
  primaryHue: 297, // Equivalent to #701a75
  project: {
    link: 'https://github.com/miguelaeh/pipeless',
  },
  chat: {
    link: 'https://discord.gg/K2qxQ8uedG',
    icon: <BsDiscord size={25} />
  },
  docsRepositoryBase: 'https://github.com/pipeless/docs',
  footer: {
    text: <p>Pipeless Docs - Copyright &copy; 2023</p>,
  },
  search: {
    loading: "Loading...",
  },
  head: (
    <>
      <meta property="og:image" content="https://www.pipeless.ai/docs/logo-400x400-rounded.png" />
      <meta property="og:title" content="Pipeless Documentation" />
      <meta property="og:description" content="Documentation about the Pipeless computer vision framework" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Pipeless'
    }
  },
  banner: {
    key: 'cloud',
    text: <a target="blank" href="https://lfkz9noht13.typeform.com/to/Mb4OsDK1"><p>🚀 &nbsp;&nbsp;<b>Pipeless Cloud private beta:</b>&nbsp;Deploy with a command, scale without limits! &nbsp;<span style={{ textDecoration: "underline" }}>Join the beta program</span></p></a>
  }
}

export default config
