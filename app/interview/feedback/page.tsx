"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star, CheckCircle, MessageSquare, Home, Brain } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function InterviewFeedbackPage() {
  const router = useRouter()
  const [questionSatisfaction, setQuestionSatisfaction] = useState(0)
  const [feedbackSatisfaction, setFeedbackSatisfaction] = useState(0)
  const [additionalFeedback, setAdditionalFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleStarClick = (rating: number, type: "question" | "feedback") => {
    if (type === "question") {
      setQuestionSatisfaction(rating)
    } else {
      setFeedbackSatisfaction(rating)
    }
  }

  const handleSubmit = async () => {
    if (questionSatisfaction === 0 || feedbackSatisfaction === 0) {
      alert("만족도를 모두 선택해주세요.")
      return
    }

    setIsSubmitting(true)

    // 실제로는 여기서 API 호출하여 피드백 저장
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // 홈페이지로 이동
    router.push("/home")
  }

  const renderStars = (currentRating: number, type: "question" | "feedback") => {
    return (
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleStarClick(star, type)}
            className="transition-all duration-200 hover:scale-110"
          >
            <Star
              className={`w-8 h-8 ${
                star <= currentRating
                  ? "fill-[#495AFF] text-[#495AFF]"
                  : "fill-[#D8D8D8] text-[#D8D8D8] hover:fill-[#A3AAF2] hover:text-[#A3AAF2]"
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  const getSatisfactionText = (rating: number) => {
    switch (rating) {
      case 1:
        return "매우 불만족"
      case 2:
        return "불만족"
      case 3:
        return "보통"
      case 4:
        return "만족"
      case 5:
        return "매우 만족"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#495AFF] rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-[#333333]">AI 면접 TUTOR</div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link href="/home">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-[#787486] hover:bg-gray-100 hover:text-[#333333] transition-colors">
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </button>
            </Link>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#495AFF] text-white">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Interview</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-2xl border-0 shadow-xl">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#495AFF] to-[#A3AAF2] rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#333333] mb-4">인터뷰가 종료되었습니다.</h1>
              <p className="text-lg text-[#787486]">아래 만족도 평가를 진행해 주세요.</p>
            </div>

            <div className="space-y-10">
              {/* 질문 만족도 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-6">질문 만족도를 선택하세요</h3>
                <div className="flex justify-center mb-4">{renderStars(questionSatisfaction, "question")}</div>
                {questionSatisfaction > 0 && (
                  <p className="text-[#495AFF] font-medium">{getSatisfactionText(questionSatisfaction)}</p>
                )}
              </div>

              {/* 답변 피드백 만족도 */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-6">답변에 대한 피드백 만족도를 선택하세요</h3>
                <div className="flex justify-center mb-4">{renderStars(feedbackSatisfaction, "feedback")}</div>
                {feedbackSatisfaction > 0 && (
                  <p className="text-[#495AFF] font-medium">{getSatisfactionText(feedbackSatisfaction)}</p>
                )}
              </div>

              {/* 추가 의견 */}
              <div>
                <h3 className="text-lg font-semibold text-[#333333] mb-4">추가 의견 (선택사항)</h3>
                <Textarea
                  placeholder="서비스 개선을 위한 의견이나 건의사항을 자유롭게 작성해주세요."
                  value={additionalFeedback}
                  onChange={(e) => setAdditionalFeedback(e.target.value)}
                  className="min-h-[120px] border-[#D8D8D8] focus:border-[#495AFF] resize-none"
                />
              </div>

              {/* 제출 버튼 */}
              <div className="text-center pt-6">
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting || questionSatisfaction === 0 || feedbackSatisfaction === 0}
                  className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white px-12 py-6 text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>제출 중...</span>
                    </div>
                  ) : (
                    "종료"
                  )}
                </Button>
              </div>
            </div>

            {/* 안내 메시지 */}
            <div className="mt-8 p-4 bg-[#F8F9FA] rounded-lg border border-[#D8D8D8]">
              <p className="text-sm text-[#787486] text-center">
                소중한 피드백 감사합니다. 더 나은 서비스 제공을 위해 활용하겠습니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
