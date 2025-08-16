import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-2xl font-bold text-red-700">プライバシーポリシー</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              <CardTitle className="text-2xl">プライバシーポリシー</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div>
                <p className="text-gray-700 mb-6">
                  東近江市（以下「当市」といいます。）は、太郎坊チャレンジふるさと納税告知サイト（以下「本サイト」といいます。）において、
                  利用者の個人情報の保護に関して、以下のとおりプライバシーポリシーを定めます。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">1. 個人情報の収集について</h2>
                <p className="text-gray-700 mb-4">本サイトでは、以下の場合に個人情報を収集することがあります：</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>ふるさと納税の申込み時</li>
                  <li>お問い合わせフォームの利用時</li>
                  <li>メールマガジンの購読申込み時</li>
                  <li>アンケートへの回答時</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">2. 収集する個人情報の種類</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>氏名</li>
                  <li>住所</li>
                  <li>電話番号</li>
                  <li>メールアドレス</li>
                  <li>生年月日</li>
                  <li>その他、サービス提供に必要な情報</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">3. 個人情報の利用目的</h2>
                <p className="text-gray-700 mb-4">収集した個人情報は、以下の目的で利用いたします：</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>ふるさと納税に関する手続きの実施</li>
                  <li>返礼品の発送</li>
                  <li>太郎坊チャレンジに関する連絡</li>
                  <li>お問い合わせへの対応</li>
                  <li>統計データの作成（個人を特定できない形式）</li>
                  <li>サービスの改善・向上</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">4. 個人情報の第三者提供</h2>
                <p className="text-gray-700 mb-4">
                  当市は、以下の場合を除き、個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>本人の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">5. 個人情報の管理</h2>
                <p className="text-gray-700">
                  当市は、個人情報の正確性を保ち、これを安全に管理いたします。
                  個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、必要かつ適切な安全管理措置を実施いたします。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">6. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-700">
                  本人から個人情報の開示・訂正・削除等の申し出があった場合には、
                  本人確認を行った上で、法令に従って対応いたします。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">7. Cookieについて</h2>
                <p className="text-gray-700">
                  本サイトでは、サービスの向上のためCookieを使用する場合があります。
                  Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができます。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">8. プライバシーポリシーの変更</h2>
                <p className="text-gray-700">
                  当市は、必要に応じて本プライバシーポリシーを変更することがあります。
                  変更後のプライバシーポリシーは、本サイトに掲載した時点から効力を生じるものとします。
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">お問い合わせ先</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>東近江市役所 商工観光部観光物産課</strong>
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
