"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mountain,
  Trophy,
  Calendar,
  Users,
  Gift,
  ExternalLink,
  ChevronDown,
  Star,
  MapPin,
  Clock,
  Globe,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TaroboChallengeLP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                勝ち運をつかめ！
                <br />
                <span className="text-yellow-300">太郎坊チャレンジ</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100">
                ステアクライミングレース体験
                <br />
                ふるさと納税で参加権をゲット
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2025年10月12日開催</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4" />
                  <span>379段の石段</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>滋賀県東近江市</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg"
                onClick={() => {
                  document.getElementById("cta-section")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                今すぐ寄附して参加権を獲得
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/hero-image.png"
                  alt="太郎坊宮の石段を駆け上がる参加者"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-transparent mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black p-4 rounded-lg font-bold">
                <div className="text-2xl">¥12,000</div>
                <div className="text-sm">寄附額</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 太郎坊宮紹介セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">神聖なる太郎坊宮</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                巨大な岩山に建てられた太郎坊宮は、勝運の神様として1400年以上の歴史を持つ神聖な場所です。
              </p>
            </div>

            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-xl mb-8">
              <Image src="/images/tarobo-aerial.png" alt="太郎坊宮の全景" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">太郎坊宮</h3>
                <p className="text-lg">巨大な岩山に建てられた神聖な空間</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* イベント概要 */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">太郎坊チャレンジとは？</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              滋賀県東近江市の太郎坊宮で開催される、ステアクライミングレース。
              <br />
              379段の急峻な石段を駆け上がり、勝ち運のパワーを体感しよう！
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/stone-torii.jpeg"
                  alt="太郎坊宮の石の鳥居"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">379段への挑戦スタート</h3>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">石の鳥居をくぐる</h3>
                  <p className="text-gray-600">神聖な太郎坊宮の入口から、いよいよチャレンジの始まりです。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">379段を一気に駆け上がる</h3>
                  <p className="text-gray-600">急勾配の石段を一段一段、力強く駆け上がります。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">頂上で勝ち運を祈願</h3>
                  <p className="text-gray-600">完走の達成感と共に、勝運の神様にお参りします。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-red-200">
              <CardHeader>
                <Mountain className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-700">379段の挑戦</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">急勾配の石段379段を一気に駆け上がる、究極のチャレンジ</p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200">
              <CardHeader>
                <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-red-700">勝ち運スポット</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">勝運の神様として親しまれる太郎坊宮で、運気アップを祈願</p>
              </CardContent>
            </Card>

            <Card className="text-center border-red-200">
              <CardHeader>
                <Gift className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-700">特別な返礼品</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">参加権＋勝ち守り＋完走証明書で、一生の思い出に</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 返礼品詳細 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">返礼品詳細</h2>
              <Badge className="bg-red-600 text-white px-4 py-2 text-lg font-bold">寄附額 ¥12,000</Badge>
            </div>

            <Card className="border-2 border-red-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <CardTitle className="text-2xl text-center">太郎坊チャレンジ2025 参加権（大人1名）</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-700 mb-4">含まれるもの</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <span>太郎坊チャレンジ2025参加権（大人1名）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <span>勝ち守り（太郎坊宮特製）</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <span>完走証明書</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <span>参加記念品</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700 mb-4">開催概要</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-red-600" />
                        <span>
                          <strong>開催日：</strong>2025年10月12日（日）
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-600" />
                        <span>
                          <strong>受付：</strong>公式ホームページで確認
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-red-600" />
                        <span>
                          <strong>会場：</strong>太郎坊宮（滋賀県東近江市）
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-red-600" />
                        <span>
                          <strong>定員：</strong>270名（一般男子・女子）
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTAボタンセクション */}
      <section id="cta-section" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">今すぐ寄附して参加権を獲得</h2>
            <p className="text-lg text-gray-600 mb-8">お好みのプラットフォームからお申し込みください</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white h-16 text-lg font-bold">
              <Link href="https://item.rakuten.co.jp/f252131-higashiomi/a-b29/" target="_blank">
                楽天ふるさと納税
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-16 text-lg font-bold">
              <Link
                href="https://www.furusato-tax.jp/product/detail/25213/38411548?copy_key=5e3eccdaca81bc609f4c725b7da0a1ff346073f5"
                target="_blank"
              >
                ふるさとチョイス
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white h-16 text-lg font-bold">
              <Link href="https://furunavi.jp/product_detail.aspx?pid=1555235" target="_blank">
                ふるなび
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white h-16 text-lg font-bold">
              <Link href="https://furusato.ana.co.jp/donation/g/g25213-A-B29/" target="_blank">
                ANAふるさと納税
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white h-16 text-lg font-bold">
              <Link href="https://furusato.jreast.co.jp/furusato/products/detail/F529/F529-A-B29" target="_blank">
                JRE MALLふるさと納税
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ふるさと納税とは */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ふるさと納税とは？</h2>
              <p className="text-lg text-gray-600">実質2,000円の負担で返礼品がもらえる制度です</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <CardTitle>寄附する</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">お好みのプラットフォームから12,000円を寄附</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <CardTitle>返礼品を受取</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">メールにて大会への参加情報をお届け</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <CardTitle>税控除を受ける</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">確定申告で10,000円の税控除（実質負担2,000円）</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
                <Link href="/simulation">
                  控除上限額をシミュレーション
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">大会の詳細な日程を教えてください</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    2025年10月12日（日）開催予定です。受付時間、スタート時間など詳細なタイムスケジュールは参加者に別途ご連絡いたします。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">キャンセルは可能ですか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    申し訳ございませんが、ふるさと納税の性質上、寄附後のキャンセル・返金はできません。参加が困難になった場合は、代理参加者の変更は可能です。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">ワンストップ特例制度は利用できますか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    はい、ご利用いただけます。寄附申込み時にワンストップ特例制度の利用を選択してください。申請書は寄附受領証明書と一緒にお送りします。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">参加に年齢制限はありますか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    高校生以上の健康な方であれば、どなたでも参加可能です。ただし、心疾患等の持病がある方は事前に医師にご相談ください。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 参加者の声 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">参加者の声</h2>
            <p className="text-lg text-gray-600">過去の参加者から寄せられた感想をご紹介</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/winners-ceremony.png"
                alt="太郎坊チャレンジ表彰式の様子"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">第一回大会の勝ち男・勝ち女・勝ち組</h3>
                <p className="text-lg">特別な金の御幣を贈呈</p>
              </div>
            </div>

            <div className="grid gap-8">
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    「379段を一気に駆け上がるのは想像以上にハード！でも頂上からの景色と達成感は最高でした。勝ち守りも大切にしています。」
                  </p>
                  <div className="text-sm text-gray-500">田中さん（40代・男性）</div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    「ふるさと納税で参加できるなんて素晴らしい制度！地域貢献しながら貴重な体験ができて一石二鳥です。」
                  </p>
                  <div className="text-sm text-gray-500">佐藤さん（30代・女性）</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  「ステアクライミングレースということで参加しました。きつかったけど、完走した時の爽快感は忘れられません！」
                </p>
                <div className="text-sm text-gray-500">山田さん（50代・男性）</div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  「家族で参加しました。子供たちも最後まで頑張って、家族の絆が深まりました。来年もぜひ参加したいです。」
                </p>
                <div className="text-sm text-gray-500">鈴木さん（40代・女性）</div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  「普段運動不足でしたが、この大会をきっかけに健康への意識が変わりました。勝ち守りのご利益もありそうです！」
                </p>
                <div className="text-sm text-gray-500">高橋さん（60代・男性）</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400">太郎坊チャレンジ2024</h3>
              <p className="text-gray-300 mb-6">滋賀県東近江市の太郎坊宮で開催されるステアクライミングレース</p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-200">公式リンク</h4>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="https://tarobo-challenge.com"
                    target="_blank"
                    className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">公式サイト</div>
                      <div className="text-sm text-gray-400">tarobo-challenge.com</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/tarobo_challenge/"
                    target="_blank"
                    className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-colors">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">公式インスタ</div>
                      <div className="text-sm text-gray-400">@tarobo_challenge</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>

                  <Link
                    href="https://x.com/tarobochallenge"
                    target="_blank"
                    className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                      <Twitter className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">公式X</div>
                      <div className="text-sm text-gray-400">@tarobochallenge</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">主催・運営</h4>
              <div className="text-gray-300 space-y-2">
                <p>太郎坊チャレンジ実行委員会</p>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-5 rounded-md w-full flex items-center justify-center gap-2 shadow-lg transition-all hover:shadow-xl"
                >
                  <Link href="/contact">
                    <Mail className="w-5 h-5" />
                    お問い合わせフォーム
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">ふるさと納税に関するお問い合わせ</h4>
              <div className="text-gray-300 space-y-2">
                <p>東近江市役所 商工観光部観光物産課</p>
                <p>TEL: 0748-24-5662</p>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 東近江市. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-white">
                利用規約
              </Link>
              <Link href="/legal" className="hover:text-white">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
