import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "#FAFAF7",
          color: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#595955", marginBottom: "1.5rem" }}>
          404
        </p>
        <h1 style={{ fontSize: "2rem", fontWeight: 400, marginBottom: "1.5rem" }}>
          Page not found.
        </h1>
        <Link
          href="/en"
          style={{ fontSize: "0.875rem", color: "#1A3A2E", textDecoration: "underline" }}
        >
          Back to home →
        </Link>
      </body>
    </html>
  );
}
