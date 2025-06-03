"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Trophy,
  TrendingUp,
  Clock,
  Target,
  Brain,
  MessageSquare,
  BarChart3,
  Download,
  Share2,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function InterviewResultsPage() {
  const overallScore = 85
  const categories = [
    { name: "답변 내용", score: 88, color: "bg-[#96E2D6]" },
    { name: "말하기 속도", score: 82, color: "bg-[#495AFF]" },
    { name: "시선 처리", score: 79, color: "bg-[#F55546]" },
    { name: "자신감", score: 91, color: "bg-[#A3AAF2]" },
    { name: "논리성", score: 85, color: "bg-[#D1D4F8]" },
  ]

  const strengths = [
    "구체적인 경험 사례를 잘 활용했습니다",
    "자신감 있는 태도로 답변했습니다",
    "논리적인 구조로 답변을 구성했습니다",
  ]

  const improvements = [
    "시선을 카메라에 더 자주 맞춰보세요",
    "답변 시간을 조금 더 늘려보세요",
    "구체적인 수치나 결과를 더 포함해보세요",
  ]

  const questionAnalysis = [
    { question: "자기소개를 간단히 해주세요.", score: 92, feedback: "명확하고 간결한 자기소개였습니다." },
    { question: "이 회사에 지원한 이유는 무엇인가요?", score: 85, feedback: "회사에 대한 이해도가 높았습니다." },
    {
      question: "본인의 가장 큰 강점은 무엇이라고 생각하시나요?",
      score: 78,
      feedback: "구체적인 사례가 더 있으면 좋겠습니다.",
    },
    {
      question: "팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하시나요?",
      score: 88,
      feedback: "문제 해결 능력이 잘 드러났습니다.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-xl font-bold">
                <span className="text-[#495AFF]">Interview</span>
                <span className="text-[#333333]">Mate</span>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-[#495AFF] text-[#495AFF]">
                <Download className="w-4 h-4 mr-2" />
                리포트 다운로드
              </Button>
              <Button variant="outline" size="sm" className="border-[#495AFF] text-[#495AFF]">
                <Share2 className="w-4 h-4 mr-2" />
                공유하기
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#495AFF] to-[#A3AAF2] rounded-full mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">면접 결과 분석</h1>
          <p className="text-xl text-[#787486] max-w-2xl mx-auto">
            AI가 분석한 당신의 면접 성과와 개선점을 확인해보세요
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-[#D1D4F8] to-[#A3AAF2]">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-[#495AFF] to-[#A3AAF2] rounded-full mb-6">
                <span className="text-4xl font-bold text-white">{overallScore}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#333333] mb-2">전체 점수</h2>
              <p className="text-[#787486] mb-6">
                평균보다 높은 점수입니다! 몇 가지 개선점만 보완하면 더 좋은 결과를 얻을 수 있어요.
              </p>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">면접 시간</div>
                  <div className="font-semibold text-[#333333]">28분 30초</div>
                </div>
                <div className="text-center">
                  <MessageSquare className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">답변한 질문</div>
                  <div className="font-semibold text-[#333333]">8개</div>
                </div>
                <div className="text-center">
                  <Target className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">평균 답변 시간</div>
                  <div className="font-semibold text-[#333333]">3분 30초</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Scores */}
          <div className="lg:col-span-2 space-y-8">
            {/* Category Scores */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-[#495AFF]" />
                  <span className="text-[#333333]">세부 평가 항목</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {categories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-[#333333]">{category.name}</span>
                      <span className="font-semibold text-[#787486]">{category.score}점</span>
                    </div>
                    <Progress value={category.score} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Question Analysis */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-[#495AFF]" />
                  <span className="text-[#333333]">질문별 분석</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {questionAnalysis.map((item, index) => (
                  <div key={index} className="border border-[#D8D8D8] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-[#333333] text-sm">{item.question}</h4>
                      <Badge
                        variant={item.score >= 85 ? "default" : item.score >= 70 ? "secondary" : "destructive"}
                        className={
                          item.score >= 85
                            ? "bg-[#96E2D6] text-[#333333]"
                            : item.score >= 70
                              ? "bg-[#F55546] text-white"
                              : "bg-[#F55546] text-white"
                        }
                      >
                        {item.score}점
                      </Badge>
                    </div>
                    <p className="text-[#787486] text-sm">{item.feedback}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Feedback Panel */}
          <div className="space-y-6">
            {/* Strengths */}
            <Card className="border-0 shadow-xl bg-[#96E2D6] border-[#96E2D6]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#333333]">
                  <CheckCircle className="w-6 h-6" />
                  <span>잘한 점</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#495AFF] mt-0.5 flex-shrink-0" />
                    <span className="text-[#333333] text-sm">{strength}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Improvements */}
            <Card className="border-0 shadow-xl bg-[#F55546] border-[#F55546]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <AlertCircle className="w-6 h-6" />
                  <span>개선점</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {improvements.map((improvement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm">{improvement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#D1D4F8] to-[#A3AAF2] border-[#495AFF]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#333333]">
                  <Brain className="w-6 h-6" />
                  <span>AI 추천</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#333333] text-sm mb-4">다음 면접에서 더 좋은 결과를 위한 맞춤 추천사항입니다.</p>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3 border border-[#495AFF]">
                    <h4 className="font-medium text-[#333333] text-sm mb-1">연습 추천</h4>
                    <p className="text-[#787486] text-xs">시선 처리 연습을 위한 모의 면접을 더 진행해보세요.</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-[#495AFF]">
                    <h4 className="font-medium text-[#333333] text-sm mb-1">학습 자료</h4>
                    <p className="text-[#787486] text-xs">STAR 기법을 활용한 답변 구조화 가이드를 확인해보세요.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                <RefreshCw className="w-4 h-4 mr-2" />
                다시 면접 보기
              </Button>
              <Button variant="outline" className="w-full border-[#495AFF] text-[#495AFF]">
                <TrendingUp className="w-4 h-4 mr-2" />
                학습 자료 보기
              </Button>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="mt-12 border-0 shadow-xl bg-[#495AFF]">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">다음 단계로 나아가세요</h3>
            <p className="text-[#A3AAF2] mb-6 max-w-2xl mx-auto">
              분석 결과를 바탕으로 더 많은 연습을 통해 면접 실력을 향상시켜보세요. 개인 맞춤형 학습 계획을
              제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#495AFF] hover:bg-gray-50">
                맞춤 학습 계획 받기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/community">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#495AFF]"
                >
                  커뮤니티에서 팁 공유하기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
