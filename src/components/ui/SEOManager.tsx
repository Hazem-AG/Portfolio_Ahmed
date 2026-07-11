import { useEffect } from "react";

const SEOManager = () => {
  useEffect(() => {
    document.title = "Ahmed Hussein | Senior Performance Media Buyer";

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Portfolio of Ahmed Hussein, Senior Performance Media Buyer & Social Media Specialist helping brands scale through data-driven campaigns.";

    document.head.appendChild(metaDesc);

    return () => {
      document.head.removeChild(metaDesc);
    };
  }, []);

  return null;
};

export default SEOManager;