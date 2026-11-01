import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

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
          justifyContent: "center",
          padding: "80px",
          background: "#FFFDF6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              border: "2px solid #303C45",
              background: "#F18B43",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            AG
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#64748B" }}>
            {profile.location}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#303C45",
            lineHeight: 1.1,
            maxWidth: 950,
          }}
        >
          {profile.headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "#176C8D",
            fontWeight: 600,
          }}
        >
          {profile.name} · {profile.role}
        </div>
      </div>
    ),
    { ...size },
  );
}