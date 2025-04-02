import React, { useEffect } from "react";

const AdComponent = ({ adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="YOUR_ADSENSE_CLIENT_ID"
        data-ad-slot={adSlot}
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdComponent;
