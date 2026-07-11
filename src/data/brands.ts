const images = import.meta.glob("../assets/brand/*.jpeg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const BRAND_LOGOS = Array.from({ length: 51 }, (_, i) => ({
  name: `logo${i + 1}`,
  logo: images[`../assets/brand/${i + 1}.jpeg`],
}));