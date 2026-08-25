import { useEffect } from "react";

const DEFAULT_URL = "https://eyevissioncare.in/";
const DEFAULT_IMAGE = "/fevicon.png";
const DEFAULT_BUSINESS_NAME = "Eye Vision Care";

const setMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

const removeJsonLd = () => {
  const existing = document.querySelector('script[data-seo="true"]');
  if (existing) existing.remove();
};

const buildDefaultSchema = ({
  title,
  description,
  url,
  image,
  name = DEFAULT_BUSINESS_NAME,
  areaServed = ["Surat", "unn", "Bhestan", "priyanka", "Ghod Dod Road", "Ghod Dod Rd", "Ghod Dod Rd, Surat", "Surat, Gujarat" ],
  telephone = "+91-9763534348",
  faq = [],
}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name,
    image,
    description,
    url,
    telephone,
    areaServed,
    medicalSpecialty: ["Eye Care", "Ophthalmology"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],
    openingHours: ["Mo-Sa 09:00-20:00"],
  };

  if (!faq || faq.length === 0) return baseSchema;

  return {
    "@graph": [
      baseSchema,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
};

const Seo = ({
  title,
  description,
  keywords,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  type = "website",
  schema,
  businessName = DEFAULT_BUSINESS_NAME,
  areaServed,
  telephone,
  faq = [],
}) => {
  useEffect(() => {
    if (!title) return;

    document.title = title;

    setMetaTag('meta[name="description"]', {
      name: "description",
      content: description || "",
    });

    setMetaTag('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    });

    setMetaTag('meta[name="theme-color"]', {
      name: "theme-color",
      content: "#0f766e",
    });

    setMetaTag('meta[name="author"]', {
      name: "author",
      content: businessName,
    });

    if (keywords) {
      setMetaTag('meta[name="keywords"]', {
        name: "keywords",
        content: keywords,
      });
    }

    setMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });

    setMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: description || "",
    });

    setMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });

    setMetaTag('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: businessName,
    });

    setMetaTag('meta[property="og:locale"]', {
      property: "og:locale",
      content: "en_IN",
    });

    setMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: url,
    });

    setMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });

    setMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    setMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });

    setMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description || "",
    });

    setMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });

    setMetaTag('meta[name="twitter:site"]', {
      name: "twitter:site",
      content: "@eyevissioncare",
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    const finalSchema = schema || buildDefaultSchema({
      title,
      description,
      url,
      image,
      name: businessName,
      areaServed,
      telephone,
      faq,
    });

    removeJsonLd();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "true");
    script.textContent = JSON.stringify(finalSchema);
    document.head.appendChild(script);
  }, [title, description, keywords, url, image, type, schema, businessName, areaServed, telephone, faq]);

  return null;
};

export default Seo;
