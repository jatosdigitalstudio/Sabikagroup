export default function Head() {
  const pageTitle = "Sabika Group - A Holding Company";
  const pageDescription = "A diversified holding company driving innovation, collaboration, and sustainable success across industries";
  const canonicalUrl = "https://www.sabikagroup.co.id";
  const keywords = "Sabika, Sabika Group, Businessess, Investment, Holding";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sabika Group" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://www.sabikagroup.co.id/images/logo-sabika.png" />
      <meta property="og:site_name" content="Sabika Group" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://www.sabikagroup.co.id/images/logo-sabika.png" />
      <meta name="twitter:site" content="@SabikaGroup" />
      <meta name="twitter:creator" content="@SabikaGroup" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Viewport for Responsive Design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Additional Meta Tags (Optional) */}
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}