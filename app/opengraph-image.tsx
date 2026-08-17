import { ImageResponse } from "next/og";
import { site } from "./content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

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
          background: "#fbfaf7",
          color: "#1a1917",
          padding: "96px",
        }}
      >
        <div style={{ fontSize: 88, letterSpacing: "-0.03em" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#9c4221" }}>
          {site.role}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 30,
            color: "#6d6a63",
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          CMS infrastructure, backend systems and developer tooling.
        </div>
      </div>
    ),
    size,
  );
}
