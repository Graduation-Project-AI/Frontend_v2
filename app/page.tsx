"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Brain, Target, Zap, Play, MessageSquare, User, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  const whyChooseFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI 기반 맞춤 질문",
      description: "자기소개서와 지원 분야를 분석해서 실제 면접에서 나올 수 있는 질문을 생성합니다.",
      color: "border-purple-300 bg-purple-50",
      iconBg: "bg-purple-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "실시간 피드백",
      description: "답변 내용, 말하기 속도, 시선 처리 등을 실시간으로 분석하여 개선점을 제공합니다.",
      color: "border-blue-300 bg-blue-50",
      iconBg: "bg-blue-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "즉시 결과 분석",
      description: "면접 종료 후 즉시 상세한 분석 결과와 함께 개선 방향을 제시합니다.",
      color: "border-green-300 bg-green-50",
      iconBg: "bg-green-500",
    },
  ]

  const processSteps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "정보 입력",
      description: "지원 분야와 이력서를 업로드하여 맞춤 질문을 생성합니다.",
      color: "bg-purple-500",
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "면접 연습",
      description: "실제 면접과 같은 환경에서 AI 면접관과 연습합니다.",
      color: "bg-blue-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "결과 분석",
      description: "상세한 피드백과 개선점을 확인하여 실력을 향상시킵니다.",
      color: "bg-green-500",
    },
  ]

  const handleStartInterview = () => {
    setShowLoginModal(true)
  }

  const handleKakaoLogin = () => {
    // 실제로는 카카오 로그인 API 호출
    // 여기서는 시뮬레이션으로 홈으로 이동
    window.location.href = "/home"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold text-[#495AFF]">InterviewMate</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              
              <Button variant="outline" size="sm" className="border-[#495AFF] text-[#495AFF]">
                로그인
              </Button>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#495AFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#96E2D6]/20 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-6 leading-tight">
              면접 준비, <span className="text-[#495AFF]">이제 혼자가 아니에요</span>
            </h1>
            <p className="text-xl text-[#787486] mb-12 max-w-3xl mx-auto leading-relaxed">
              AI가 당신의 면접 파트너가 되어 실제와 같은 환경에서 연습하고, 개인 맞춤형 피드백으로 면접 실력을 향상시켜보세요
            </p>
            <Button
              size="lg"
              onClick={handleStartInterview}
              className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              면접 시작하기
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">왜 InterviewMate를 선택해야 할까요?</h2>
            <p className="text-lg text-[#787486] max-w-2xl mx-auto">
              단순한 질문 연습이 아닌, 실제 면접관과 대화하는 것 같은 경험을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <Card key={index} className={`${feature.color} border-2 p-6 hover:shadow-lg transition-shadow`}>
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3">{feature.title}</h3>
                  <p className="text-[#787486] leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">3단계로 완성하는 면접 준비</h2>
          <p className="text-lg text-[#787486] mb-16 max-w-2xl mx-auto">복잡한 설정 없이 바로 시작할 수 있어요</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#495AFF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-3">{step.title}</h3>
                <p className="text-[#787486] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#495AFF] to-[#A3AAF2]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">이제 면접이 두렵지 않아요</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            수많은 구직자들이 InterviewMate로 꿈의 직장에 합격했습니다. 당신도 지금 시작해보세요
          </p>
          <Button
            size="lg"
            onClick={handleStartInterview}
            className="bg-white text-[#495AFF] hover:bg-gray-50 text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            면접 시작하기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xl font-bold mb-6 text-[#495AFF]">InterviewMate</div>
            <p className="text-[#D8D8D8]">&copy; 2025 InterviewMate. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-[#333333]">면접 시작하기</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#495AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <p className="text-[#787486] mb-6">면접 연습을 시작하려면 로그인이 필요합니다</p>
            </div>

            <Button
              onClick={handleKakaoLogin}
              className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-[#333333] py-6 text-lg font-semibold rounded-xl"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
              </svg>
              카카오로 시작하기
            </Button>

            <div className="text-center">
              <p className="text-sm text-[#787486]">
                로그인하면 <span className="text-[#495AFF] font-medium">이용약관</span> 및{" "}
                <span className="text-[#495AFF] font-medium">개인정보처리방침</span>에 동의하게 됩니다
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
