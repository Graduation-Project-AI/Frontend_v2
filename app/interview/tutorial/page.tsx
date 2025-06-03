"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Mic, Eye, Clock, Brain, Play, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function InterviewTutorialPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const tutorialSlides = [
    {
      title: "AI 면접관과의 만남",
      description: "AI 면접관이 실제 면접관처럼 질문을 읽어드립니다",
      icon: <Brain className="w-12 h-12 text-[#495AFF]" />,
      content: (
        <div className="text-center">
          <div className="w-64 h-48 bg-gradient-to-br from-[#495AFF] to-[#A3AAF2] rounded-lg mx-auto mb-6 flex items-center justify-center">
            <Brain className="w-16 h-16 text-white" />
          </div>
          <p className="text-[#787486]">AI 면접관이 자연스러운 음성으로 질문을 읽어드립니다</p>
        </div>
      ),
    },
    {
      title: "웹캠으로 실시간 분석",
      description: "카메라를 통해 시선 처리와 표정을 실시간으로 분석합니다",
      icon: <Video className="w-12 h-12 text-[#96E2D6]" />,
      content: (
        <div className="text-center">
          <div className="w-64 h-48 bg-[#D8D8D8] rounded-lg mx-auto mb-6 flex items-center justify-center">
            <Video className="w-16 h-16 text-[#787486]" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-[#495AFF]" />
              <span>시선 추적</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#495AFF]" />
              <span>침묵 시간 분석</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "음성 답변 녹음",
      description: "마이크를 통해 답변을 녹음하고 AI가 분석합니다",
      icon: <Mic className="w-12 h-12 text-[#F55546]" />,
      content: (
        <div className="text-center">
          <div className="w-64 h-48 bg-[#F55546] rounded-lg mx-auto mb-6 flex items-center justify-center">
            <Mic className="w-16 h-16 text-white" />
          </div>
          <div className="space-y-2 text-sm text-[#787486]">
            <p>• 논리성과 표현력 분석</p>
            <p>• STAR 구조 분석</p>
            <p>• 답변 유사도 평가</p>
          </div>
        </div>
      ),
    },
    {
      title: "상세한 피드백 제공",
      description: "면접 종료 후 상세한 분석 결과를 확인할 수 있습니다",
      icon: <CheckCircle className="w-12 h-12 text-[#96E2D6]" />,
      content: (
        <div className="text-center">
          <div className="w-64 h-48 bg-gradient-to-br from-[#96E2D6] to-[#A3AAF2] rounded-lg mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <div className="space-y-2 text-sm text-[#787486]">
            <p>• 질문별 상세 분석</p>
            <p>• 개선점 및 강점 분석</p>
            <p>• 맞춤형 학습 가이드</p>
          </div>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentSlide < tutorialSlides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-xl font-bold">
                <span className="text-[#495AFF]">Interview</span>
                <span className="text-[#333333]">Mate</span>
              </div>
            </Link>
            <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">면접 가이드</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#333333] mb-4">AI 면접 진행 방법</h1>
          <p className="text-lg text-[#787486]">면접을 시작하기 전에 진행 방법을 확인해보세요</p>
        </div>

        {/* Tutorial Content */}
        <Card className="border-0 shadow-xl mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">{tutorialSlides[currentSlide].icon}</div>
              <h2 className="text-2xl font-bold text-[#333333] mb-4">{tutorialSlides[currentSlide].title}</h2>
              <p className="text-lg text-[#787486] mb-8">{tutorialSlides[currentSlide].description}</p>
            </div>

            <div className="mb-8">{tutorialSlides[currentSlide].content}</div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {tutorialSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#495AFF]" : "bg-[#D8D8D8]"
                  }`}
                />
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSlide === 0}
                className="border-[#D8D8D8] text-[#787486]"
              >
                이전
              </Button>
              <div className="flex space-x-4">
                {currentSlide < tutorialSlides.length - 1 ? (
                  <Button onClick={handleNext} className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                    다음
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Link href="/interview/ai-session">
                    <Button className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                      <Play className="w-4 h-4 mr-2" />
                      면접 시작하기
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-[#96E2D6]">
            <CardContent className="p-6">
              <h3 className="font-semibold text-[#333333] mb-3">면접 전 체크리스트</h3>
              <ul className="space-y-2 text-sm text-[#333333]">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#495AFF]" />
                  <span>카메라와 마이크 권한 허용</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#495AFF]" />
                  <span>조용한 환경에서 진행</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#495AFF]" />
                  <span>정면을 바라보고 앉기</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-[#D1D4F8]">
            <CardContent className="p-6">
              <h3 className="font-semibold text-[#333333] mb-3">좋은 답변 팁</h3>
              <ul className="space-y-2 text-sm text-[#333333]">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#495AFF]" />
                  <span>STAR 구조로 답변하기</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#495AFF]" />
                  <span>구체적인 경험과 수치 포함</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#495AFF]" />
                  <span>자신감 있는 목소리로 답변</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
