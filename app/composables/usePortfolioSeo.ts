interface PortfolioSeoOptions {
  title: string
  description: string
  image: string
}

export const usePortfolioSeo = ({ title, description, image }: PortfolioSeoOptions) => {
  const requestUrl = useRequestURL()
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = (runtimeConfig.public.siteUrl || requestUrl.origin).replace(/\/+$/, '')
  const canonicalUrl = new URL(requestUrl.pathname, `${siteUrl}/`).toString()
  const imageUrl = new URL(image, `${siteUrl}/`).toString()

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonicalUrl,
    ogImage: imageUrl,
    ogLocale: 'fr_FR',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }]
  })
}
