import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LegalPage() {
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
            <h1 className="text-2xl font-bold text-red-700">特定商取引法に基づく表記</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              <CardTitle className="text-2xl">特定商取引法に基づく表記</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div>
                <p className="text-gray-700 mb-6">特定商取引法に基づき、以下のとおり表示いたします。</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-bold text-red-700 mb-3">事業者名</h2>
                  <p className="text-gray-700">東近江市</p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-red-700 mb-3">代表者</h2>
                  <p className="text-gray-700">東近江市長</p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-red-700 mb-3">所在地</h2>
                  <p className="text-gray-700">
                    〒527-8527
                    <br />
                    滋賀県東近江市八日市緑町10番5号
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-red-700 mb-3">電話番号</h2>
                  <p className="text-gray-700">0748-24-5662</p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-red-700 mb-3">受付時間</h2>
                  <p className="text-gray-700">
                    平日 8:30〜17:15
                    <br />
                    （土日祝日を除く）
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-red-700 mb-3">担当部署</h2>
                  <p className="text-gray-700">商工観光部観光物産課</p>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">販売価格</h2>
                <p className="text-gray-700">
                  太郎坊チャレンジ2025 参加権（大人1名）：12,000円
                  <br />
                  ※ふるさと納税による寄附金額です。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">支払方法</h2>
                <p className="text-gray-700 mb-4">
                  各ふるさと納税プラットフォームで指定された支払方法をご利用ください：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>クレジットカード決済</li>
                  <li>銀行振込</li>
                  <li>コンビニ決済</li>
                  <li>その他、各プラットフォームが提供する決済方法</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">商品の引渡時期</h2>
                <p className="text-gray-700">
                  寄附の入金確認後、1〜2週間程度でメールにて参加情報をお送りいたします。
                  勝ち守りなどの記念品は、大会開催日当日にお渡しいたします。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">返品・交換・キャンセル</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-gray-700 mb-2">
                    <strong>重要：</strong>ふるさと納税の性質上、以下の点にご注意ください。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>寄附申込み後のキャンセル・返金はできません</li>
                    <li>返礼品の返品・交換はできません</li>
                    <li>参加が困難になった場合は、代理参加者への変更が可能です</li>
                    <li>天災等により大会が中止となった場合は、別途ご案内いたします</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">その他の費用</h2>
                <p className="text-gray-700">寄附金額以外に、会場までの交通費、宿泊費等は寄附者の負担となります。</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">注意事項</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>参加には健康状態の確認が必要です</li>
                  <li>高校生以上の方が対象となります</li>
                  <li>大会当日は参加者の安全確保を最優先とします</li>
                  <li>気象条件等により大会内容が変更される場合があります</li>
                  <li>参加者は大会規則を遵守していただきます</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">お問い合わせ先</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>東近江市役所 商工観光部観光物産課</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>住所：</strong>〒527-8527 滋賀県東近江市八日市緑町10番5号
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>電話：</strong>0748-24-5662
                  </p>
                  <p className="text-gray-700">
                    <strong>受付時間：</strong>平日 8:30〜17:15（土日祝日を除く）
                  </p>
                </div>
              </div>

              <div className="text-right text-gray-600">
                <p>制定日：2025年1月1日</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
