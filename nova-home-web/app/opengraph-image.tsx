import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nova Home — Your Personal AI-Powered Smart Home";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05070C",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 50% 20%, rgba(0,229,255,0.22), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            borderRadius: 999,
            border: "1.5px solid rgba(0,229,255,0.5)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            boxShadow: "0 0 60px rgba(0,229,255,0.35)",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 35% 30%, #C9F8FF, #00E5FF 45%, #6E56CF 90%)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#EAF0FB",
          }}
        >
          Nova&nbsp;<span style={{ color: "#00E5FF" }}>Home</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 30,
            color: "#8A93A8",
          }}
        >
          Your personal AI-powered smart home
        </div>
      </div>
    ),
    { ...size }
  );
}
