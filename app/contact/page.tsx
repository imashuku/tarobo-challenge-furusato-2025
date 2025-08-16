"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, Mail, Clock, MapPin, Info, Loader2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [baseUrl, setBaseUrl] = useState("")

  // クライアントサイドでのみbaseUrlを設定
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // Formspreeが処理を行うため、ここでは送信状態のみ管理
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">太郎坊チャレンジ2025</h1>
              <p className="text-red-100 text-sm">ふるさと納税 告知サイト</p>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="hover:text-red-200">
                参加したい！
              </Link>
              <Link href="/contact" className="hover:text-red-200 font-medium">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 戻るリンク */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              トップページに戻る
            </Link>
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-lg text-gray-600">
              太郎坊チャレンジ2025に関するご質問・ご相談はこちらからお気軽にお問い合わせください。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* お問い合わせフォーム */}
            <div className="lg:col-span-2">
              <Card className="border-red-200">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                  <CardTitle className="text-xl">お問い合わせフォーム</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* 送信先の説明 */}
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-800 font-medium mb-1">送信先について</p>
                        <p className="text-sm text-blue-700">
                          こちらのフォームから送信されたお問い合わせは、太郎坊チャレンジ実行委員会に送信されます。
                          通常1〜2営業日以内にご返信いたします。
                        </p>
                      </div>
                    </div>
                  </div>

                  <form
                    action="https://formspree.io/f/manjoyzp"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Formspree設定 */}
                    <input type="hidden" name="_subject" value="太郎坊チャレンジ2025 お問い合わせ" />
                    {baseUrl && <input type="hidden" name="_next" value={`${baseUrl}/contact/success`} />}
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">
                          お名前 <span className="text-red-500">*</span>
                        </Label>
                        <Input id="name" name="name" type="text" placeholder="例：山田太郎" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-medium">
                          メールアドレス <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="例：example@email.com"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">
                        電話番号
                      </Label>
                      <Input id="phone" name="phone" type="tel" placeholder="例：090-1234-5678" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-base font-medium">
                        お問い合わせ種別 <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="category"
                        name="category"
                        required
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">選択してください</option>
                        <option value="参加について">参加について</option>
                        <option value="ふるさと納税について">ふるさと納税について</option>
                        <option value="イベント内容について">イベント内容について</option>
                        <option value="アクセスについて">アクセスについて</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-base font-medium">
                        件名 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="例：参加申込みについて"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-medium">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="お問い合わせ内容をできるだけ詳しくご記入ください。"
                        required
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          送信中...
                        </>
                      ) : (
                        "送信する"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* 連絡先・よくある質問 */}
            <div className="space-y-6">
              {/* 連絡先 */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">連絡先</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">太郎坊チャレンジ実行委員会</h4>
                    <p className="text-sm text-gray-600 mb-3">担当者：今宿裕昭</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="font-medium">電話</div>
                        <div className="text-sm text-gray-600">080-3204-0317</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="font-medium">メール</div>
                        <div className="text-sm text-gray-600">information@step-out.jp</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-red-600 mt-1" />
                      <div>
                        <div className="font-medium">受付時間</div>
                        <div className="text-sm text-gray-600">
                          平日 9:00-18:00
                          <br />
                          ※土日祝日は対応できない場合があります
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-red-600 mt-1" />
                      <div>
                        <div className="font-medium">大会会場</div>
                        <div className="text-sm text-gray-600">
                          太郎坊・阿賀神社
                          <br />
                          〒527-0091
                          <br />
                          滋賀県東近江市小脇町2247
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* よくある質問 */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">よくある質問</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Q. ふるさと納税が初めてでも大丈夫ですか？</h5>
                    <p className="text-sm text-gray-600">
                      A.
                      はい、各プラットフォームで詳しい手順が案内されますので、初めての方でも安心してお申し込みいただけます。
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Q. 寄附後のキャンセルは可能ですか？</h5>
                    <p className="text-sm text-gray-600">
                      A.
                      申し訳ございませんが、ふるさと納税の性質上、寄附後のキャンセル・返金はできません。参加が困難になった場合は、代理参加者への変更は可能です。
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Q. 参加権はいつ頃届きますか？</h5>
                    <p className="text-sm text-gray-600">
                      A.
                      寄附の入金確認後、1〜2週間程度でメールにて参加情報をお送りいたします。大会の詳細スケジュールも併せてご案内いたします。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
