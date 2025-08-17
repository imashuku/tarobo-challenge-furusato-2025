import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { GoogleAnalytics } from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "太郎坊チャレンジ｜ふるさと納税で参加権をゲット",
  description:
    "滋賀県東近江市の太郎坊宮で開催される、日本唯一のステアクライミングレース。379段の急峻な石段を駆け上がり、勝ち運のパワーを体感しよう！",
  openGraph: {
    title: "太郎坊チャレンジ2025｜ふるさと納税で参加権をゲット",
    description:
      "滋賀県東近江市の太郎坊宮で開催される、日本唯一のステアクライミングレース。379段の急峻な石段を駆け上がり、勝ち運のパワーを体感しよう！",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "太郎坊チャレンジ2025",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
