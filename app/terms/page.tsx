import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            <h1 className="text-2xl font-bold text-red-700">利用規約</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              <CardTitle className="text-2xl">利用規約</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div>
                <p className="text-gray-700 mb-6">
                  この利用規約（以下「本規約」といいます。）は、東近江市（以下「当市」といいます。）が運営する
                  太郎坊チャレンジふるさと納税告知サイト（以下「本サイト」といいます。）の利用条件を定めるものです。
                  本サイトをご利用になる場合には、本規約にご同意いただいたものとみなします。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第1条（適用）</h2>
                <p className="text-gray-700">
                  本規約は、本サイトの利用に関して、当市と利用者との間に適用されるものとします。
                  当市が本サイト上で別途定める個別規定は、本規約の一部を構成するものとします。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第2条（利用資格）</h2>
                <p className="text-gray-700 mb-4">本サイトは、以下の条件を満たす方にご利用いただけます：</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>日本国内に住所を有する個人の方</li>
                  <li>ふるさと納税制度を理解し、適切に利用できる方</li>
                  <li>本規約に同意いただける方</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第3条（禁止事項）</h2>
                <p className="text-gray-700 mb-4">利用者は、本サイトの利用にあたり、以下の行為をしてはなりません：</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当市のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当市のサービスの運営を妨害するおそれのある行為</li>
                  <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                  <li>他の利用者に成りすます行為</li>
                  <li>当市のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>その他、当市が不適切と判断する行為</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第4条（本サービスの提供の停止等）</h2>
                <p className="text-gray-700 mb-4">
                  当市は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく
                  本サービスの全部または一部の提供を停止または中断することができるものとします：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当市が本サービスの提供が困難と判断した場合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第5条（著作権）</h2>
                <p className="text-gray-700">
                  本サイトに掲載されている情報（文章、写真、イラスト、音声、動画等）の著作権は、
                  当市または正当な権利者に帰属します。これらの情報は、著作権法により保護されており、
                  私的使用の範囲を超えて無断で複製、転載、配布等することを禁じます。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第6条（免責事項）</h2>
                <p className="text-gray-700 mb-4">当市は、本サイトに関して、以下について一切の責任を負いません：</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>本サイトの内容の正確性、完全性、有用性等</li>
                  <li>本サイトの利用により生じた損害</li>
                  <li>本サイトからリンクされた外部サイトの内容</li>
                  <li>システムの不具合、通信回線の障害等による損害</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第7条（サービス内容の変更等）</h2>
                <p className="text-gray-700">
                  当市は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、
                  これによって利用者に生じた損害について一切の責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第8条（利用規約の変更）</h2>
                <p className="text-gray-700">
                  当市は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
                  なお、本規約の変更後、本サービスの利用を開始した場合には、当該利用者は変更後の規約に同意したものとみなします。
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-700 mb-4">第9条（準拠法・裁判管轄）</h2>
                <p className="text-gray-700">
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、大津地方裁判所を専属的合意管轄とします。
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
