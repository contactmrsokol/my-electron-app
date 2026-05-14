import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YCharters — Luxury Yacht Charters";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#040b1e",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Subtle horizontal rule above */}
        <div
          style={{
            width: "320px",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #a0a0a0, transparent)",
            marginBottom: "40px",
          }}
        />

        {/* Main logo text */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: 300,
            letterSpacing: "0.25em",
            color: "#c8c8c8",
            display: "flex",
          }}
        >
          YCharters
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 300,
            letterSpacing: "0.35em",
            color: "#6a7a8a",
            marginTop: "20px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Luxury Yacht Charters
        </div>

        {/* Subtle horizontal rule below */}
        <div
          style={{
            width: "320px",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #a0a0a0, transparent)",
            marginTop: "40px",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
