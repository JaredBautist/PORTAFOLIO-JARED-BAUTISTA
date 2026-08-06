import { ImageResponse } from "next/og";

export const alt = "Jared Bautista, Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generates the social preview used when the portfolio is shared. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#fbfaf7",
          color: "#172033",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ background: "#e9e7ff", borderRadius: 999, height: 300, position: "absolute", right: -80, top: -100, width: 300 }} />
        <div style={{ background: "#dff7ea", borderRadius: 999, bottom: -120, height: 320, left: 300, position: "absolute", width: 320 }} />
        <div style={{ alignItems: "center", display: "flex", fontSize: 24, fontWeight: 700, gap: 16 }}>
          <span style={{ alignItems: "center", background: "#5145b8", borderRadius: 16, color: "white", display: "flex", height: 56, justifyContent: "center", width: 56 }}>JB</span>
          Jared Bautista
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ color: "#5145b8", fontSize: 22, fontWeight: 700, letterSpacing: 2, marginBottom: 22, textTransform: "uppercase" }}>
            Full-Stack Software Engineer · Colombia
          </div>
          <div style={{ fontSize: 66, fontWeight: 700, letterSpacing: -3.5, lineHeight: 1.05 }}>
            Software claro para problemas reales.
          </div>
          <div style={{ color: "#536078", fontSize: 28, lineHeight: 1.45, marginTop: 26 }}>
            Productos web desplegados · Arquitectura limpia · Ingeniería asistida por IA
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, fontWeight: 600, gap: 16 }}>
          <span style={{ background: "#dff4ff", borderRadius: 999, padding: "12px 20px" }}>React + Next.js</span>
          <span style={{ background: "#ffe8d9", borderRadius: 999, padding: "12px 20px" }}>TypeScript</span>
          <span style={{ background: "#fff4c7", borderRadius: 999, padding: "12px 20px" }}>Spec-Driven</span>
        </div>
      </div>
    ),
    size,
  );
}
