import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactSuccessPage() {
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              </div>
              <CardTitle className="text-2xl text-center text-green-800">お問い合わせを受け付けました</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <p className="text-gray-700 mb-8">
                お問い合わせいただき、ありがとうございます。
                <br />
                内容を確認の上、担当者より折り返しご連絡いたします。
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-8 text-left">
                <h3 className="font-medium text-gray-900 mb-2">お問い合わせ内容の確認</h3>
                <p className="text-sm text-gray-600">
                  お問い合わせ内容の確認が必要な場合は、ご登録いただいたメールアドレスに自動返信メールをお送りしております。
                  メールが届かない場合は、お手数ですが再度お問い合わせいただくか、お電話にてご連絡ください。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  <Link href="/contact">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    お問い合わせに戻る
                  </Link>
                </Button>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/">トップページへ</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
