import { useEffect } from "react";

const META_PIXEL_ID = "1324436552960880";

export const useMetaPixel = () => {
  useEffect(() => {
    // Avoid double-init
    if ((window as any).fbq) {
      (window as any).fbq("track", "PageView");
      return;
    }

    const fbq: any = function (...args: any[]) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    (window as any).fbq = fbq;
    (window as any)._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");

    return () => {
      script.remove();
    };
  }, []);

  return META_PIXEL_ID;
};

export const MetaPixelNoscript = () => {
  const id = META_PIXEL_ID;
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};