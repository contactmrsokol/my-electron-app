import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YCharters — Luxury Yacht Charters";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  let fontData: ArrayBuffer | null = null;

  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }
    ).then((r) => r.text());

    const match = css.match(/src: url\(([^)]+)\) format\('woff2'\)/);
    if (match?.[1]) {
      fontData = await fetch(match[1]).then((r) => r.arrayBuffer());
    }
  } catch {
    // fall back to default serif
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background:
            "linear-gradient(145deg, #070e26 0%, #040b1e 55%, #020810 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Cormorant, Georgia, serif",
          position: "relative",
        }}
      >
        {/* Corner ornaments */}
        <div
          style={{
            position: "absolute",
            top: "36px",
            left: "36px",
            width: "44px",
            height: "44px",
            borderTop: "1px solid #3a4555",
            borderLeft: "1px solid #3a4555",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "36px",
            right: "36px",
            width: "44px",
            height: "44px",
            borderTop: "1px solid #3a4555",
            borderRight: "1px solid #3a4555",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "36px",
            width: "44px",
            height: "44px",
            borderBottom: "1px solid #3a4555",
            borderLeft: "1px solid #3a4555",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "36px",
            width: "44px",
            height: "44px",
            borderBottom: "1px solid #3a4555",
            borderRight: "1px solid #3a4555",
            display: "flex",
          }}
        />

        {/* Nautical Y logo mark */}
        <svg
          width={108}
          height={108}
          viewBox="0 0 120 120"
          style={{ marginBottom: "24px" }}
        >
          {/* Outer ring */}
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="#909090"
            strokeWidth="1.2"
          />
          {/* Inner ring */}
          <circle
            cx="60"
            cy="60"
            r="49"
            fill="none"
            stroke="#505060"
            strokeWidth="0.6"
          />
          {/* Y — two curved arms */}
          <path
            d="M36 24 Q48 42 60 55 Q72 42 84 24"
            stroke="#c4c4c4"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Y — stem */}
          <line
            x1="60"
            y1="55"
            x2="60"
            y2="95"
            stroke="#c4c4c4"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Small diamond at junction */}
          <polygon points="60,49 64.5,55 60,61 55.5,55" fill="#c4c4c4" />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 300,
            letterSpacing: "0.28em",
            color: "#c8c8c8",
            display: "flex",
            paddingLeft: "0.28em",
          }}
        >
          YCHARTERS
        </div>

        {/* Ornament rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "22px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "1px",
              background: "linear-gradient(to right, transparent, #6a7080)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "7px",
              height: "7px",
              background: "#808898",
              transform: "rotate(45deg)",
              margin: "0 14px",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "180px",
              height: "1px",
              background: "linear-gradient(to left, transparent, #6a7080)",
              display: "flex",
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "0.55em",
            color: "#5a6878",
            textTransform: "uppercase",
            display: "flex",
            paddingLeft: "0.55em",
          }}
        >
          luxury yacht charters
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Cormorant",
                data: fontData,
                style: "normal" as const,
                weight: 300,
              },
            ],
          }
        : {}),
    }
  );
}
