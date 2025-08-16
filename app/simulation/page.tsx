"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Calculator, ArrowLeft, AlertCircle, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SimulationPage() {
  const [income, setIncome] = useState("")
  const [familyType, setFamilyType] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateLimit = () => {
    const annualIncome = Number.parseInt(income)
    if (!annualIncome || !familyType) return

    let limit = 0

    // 簡易計算式（実際の計算はより複雑）
    switch (familyType) {
      case "single":
        if (annualIncome <= 2000000) limit = Math.floor(annualIncome * 0.23 - 2000)
        else if (annualIncome <= 4000000) limit = Math.floor(annualIncome * 0.25 - 2000)
        else if (annualIncome <= 8000000) limit = Math.floor(annualIncome * 0.28 - 2000)
        else limit = Math.floor(annualIncome * 0.3 - 2000)
        break
      case "married":
        if (annualIncome <= 2000000) limit = Math.floor(annualIncome * 0.19 - 2000)
        else if (annualIncome <= 4000000) limit = Math.floor(annualIncome * 0.21 - 2000)
        else if (annualIncome <= 8000000) limit = Math.floor(annualIncome * 0.24 - 2000)
        else limit = Math.floor(annualIncome * 0.26 - 2000)
        break
      case "married_child":
        if (annualIncome <= 2000000) limit = Math.floor(annualIncome * 0.15 - 2000)
        else if (annualIncome <= 4000000) limit = Math.floor(annualIncome * 0.17 - 2000)
        else if (annualIncome <= 8000000) limit = Math.floor(annualIncome * 0.2 - 2000)
        else limit = Math.floor(annualIncome * 0.22 - 2000)
        break
    }

    setResult(Math.max(0, limit))
  }

  const canParticipate = result && result >= 12000

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                戻る
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-red-700">ふるさと納税 控除上限額シミュレーション</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 説明セクション */}
          <Card className="mb-8 border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                控除上限額とは？
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                ふるさと納税では、年収や家族構成によって税控除を受けられる上限額が決まっています。
                この上限額内であれば、実質2,000円の負担で返礼品を受け取ることができます。
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800 font-medium mb-1">注意事項</p>
                    <p className="text-sm text-yellow-700">
                      こちらは簡易計算です。正確な金額は税理士や税務署にご相談ください。
                      住宅ローン控除や医療費控除などがある場合は、上限額が変わる可能性があります。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 入力フォーム */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">情報を入力してください</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="income" className="text-base font-medium">
                    年収（給与収入）
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="income"
                      type="number"
                      placeholder="例：5000000"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      className="pr-12"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">円</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">源泉徴収票の「支払金額」を入力してください</p>
                </div>

                <div>
                  <Label className="text-base font-medium">家族構成</Label>
                  <Select value={familyType} onValueChange={setFamilyType}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="家族構成を選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">独身・共働き</SelectItem>
                      <SelectItem value="married">夫婦（配偶者控除あり）</SelectItem>
                      <SelectItem value="married_child">夫婦＋子供（配偶者控除あり）</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculateLimit}
                  disabled={!income || !familyType}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  size="lg"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  控除上限額を計算する
                </Button>
              </CardContent>
            </Card>

            {/* 結果表示 */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">計算結果</CardTitle>
              </CardHeader>
              <CardContent>
                {result !== null ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">¥{result.toLocaleString()}</div>
                      <p className="text-gray-600">年間控除上限額（目安）</p>
                    </div>

                    <Separator />

                    <div
                      className={`p-4 rounded-lg ${canParticipate ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"}`}
                    >
                      <div className="flex items-start gap-3">
                        {canParticipate ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        )}
                        <div>
                          <p className={`font-medium mb-2 ${canParticipate ? "text-green-800" : "text-yellow-800"}`}>
                            {canParticipate ? "太郎坊チャレンジに参加可能です！" : "太郎坊チャレンジの参加について"}
                          </p>
                          <p className={`text-sm ${canParticipate ? "text-green-700" : "text-yellow-700"}`}>
                            {canParticipate
                              ? `寄附額12,000円は控除上限額内のため、実質2,000円の負担で参加できます。`
                              : `寄附額12,000円が控除上限額を超える可能性があります。超過分は控除されませんのでご注意ください。`}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">控除の内訳（12,000円寄附の場合）</h4>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>寄附金額</span>
                          <span>¥12,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>自己負担額</span>
                          <span>¥2,000</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium">
                          <span>税控除額</span>
                          <span>¥10,000</span>
                        </div>
                      </div>
                    </div>

                    {canParticipate && (
                      <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                        <Link href="/">太郎坊チャレンジに申し込む</Link>
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Calculator className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>
                      年収と家族構成を入力して
                      <br />
                      控除上限額を計算してください
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* 詳細説明 */}
          <Card className="mt-8 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700">控除の仕組みについて</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">所得税からの控除</h4>
                  <p className="text-sm text-gray-600">
                    寄附金額から2,000円を差し引いた額の一部が、所得税から控除されます。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">住民税からの控除</h4>
                  <p className="text-sm text-gray-600">残りの金額が住民税から控除され、翌年の住民税が減額されます。</p>
                </div>
              </div>

              <Separator />

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">より正確な計算をお求めの方へ</h4>
                <p className="text-sm text-blue-800 mb-3">
                  住宅ローン控除、医療費控除、扶養家族の詳細など、個別の状況を考慮した正確な計算は、
                  以下の公式サイトをご利用ください。
                </p>
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    <Link
                      href="https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/furusato/mechanism/deduction.html"
                      target="_blank"
                    >
                      総務省ふるさと納税ポータルサイト
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    <Link href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1150.htm" target="_blank">
                      国税庁タックスアンサー
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
