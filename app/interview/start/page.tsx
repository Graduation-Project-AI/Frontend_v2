"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Briefcase, FileText, MessageSquare, ArrowRight, CheckCircle, Brain } from "lucide-react"
import Link from "next/link"

export default function InterviewStartPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    personalStatement: "",
    questionCount: "",
    interviewMode: "",
  })

  const steps = [
    { id: 1, title: "기업 정보", icon: <Building2 className="w-5 h-5" /> },
    { id: 2, title: "직군 선택", icon: <Briefcase className="w-5 h-5" /> },
    { id: 3, title: "자기소개서", icon: <FileText className="w-5 h-5" /> },
    { id: 4, title: "면접 설정", icon: <MessageSquare className="w-5 h-5" /> },
  ]

  const companies = [
    "네이버",
    "카카오",
    "삼성전자",
    "LG전자",
    "SK하이닉스",
    "현대자동차",
    "포스코",
    "한화시스템",
    "NHN",
    "라인",
    "쿠팡",
    "배달의민족",
    "토스",
    "직접입력",
  ]

  const positions = [
    "프론트엔드 개발자",
    "백엔드 개발자",
    "풀스택 개발자",
    "모바일 개발자",
    "데이터 사이언티스트",
    "AI/ML 엔지니어",
    "DevOps 엔지니어",
    "QA 엔지니어",
    "기획자",
    "디자이너",
    "마케터",
    "직접입력",
  ]

  const questionCounts = [
    { value: "5", label: "5개", description: "빠른 연습 (15분)" },
    { value: "8", label: "8개", description: "표준 연습 (25분)" },
    { value: "12", label: "12개", description: "심화 연습 (35분)" },
    { value: "15", label: "15개", description: "실전 연습 (45분)" },
  ]

  const interviewModes = [
    {
      value: "basic",
      label: "기본 면접",
      description: "일반적인 면접 분위기로 진행됩니다",
      color: "bg-[#96E2D6]",
    },
    {
      value: "pressure",
      label: "압박 면접",
      description: "실제 압박 면접과 유사한 환경으로 진행됩니다",
      color: "bg-[#F55546]",
    },
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = (currentStep / 4) * 100

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
            <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">AI 면접 준비</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#333333]">AI 면접 시작하기</h1>
            <span className="text-sm text-[#787486]">{currentStep}/4 단계</span>
          </div>
          <Progress value={progress} className="h-2 mb-6" />

          <div className="flex items-center justify-between">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.id
                      ? "bg-[#495AFF] border-[#495AFF] text-white"
                      : "border-[#D8D8D8] text-[#787486]"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.icon}
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${currentStep >= step.id ? "text-[#333333]" : "text-[#787486]"}`}
                >
                  {step.title}
                </span>
                {step.id < 4 && (
                  <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? "bg-[#495AFF]" : "bg-[#D8D8D8]"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-[#D1D4F8] to-[#A3AAF2]">
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-[#495AFF]" />
              <span className="text-[#333333]">
                {currentStep === 1 && "지원하는 기업을 선택해주세요"}
                {currentStep === 2 && "지원하는 직군을 선택해주세요"}
                {currentStep === 3 && "자기소개서를 입력해주세요"}
                {currentStep === 4 && "면접 설정을 완료해주세요"}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Company Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="company" className="text-base font-medium text-[#333333] mb-4 block">
                    지원 기업을 선택하거나 직접 입력해주세요
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                    {companies.slice(0, -1).map((company) => (
                      <Button
                        key={company}
                        variant={formData.company === company ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, company })}
                        className={`h-12 ${
                          formData.company === company
                            ? "bg-[#495AFF] text-white"
                            : "border-[#D8D8D8] text-[#333333] hover:border-[#495AFF]"
                        }`}
                      >
                        {company}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Input
                      placeholder="기업명을 직접 입력해주세요"
                      value={formData.company.includes("직접입력") ? "" : formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-[#D8D8D8] focus:border-[#495AFF]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Position Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="position" className="text-base font-medium text-[#333333] mb-4 block">
                    지원 직군을 선택하거나 직접 입력해주세요
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {positions.slice(0, -1).map((position) => (
                      <Button
                        key={position}
                        variant={formData.position === position ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, position })}
                        className={`h-12 justify-start ${
                          formData.position === position
                            ? "bg-[#495AFF] text-white"
                            : "border-[#D8D8D8] text-[#333333] hover:border-[#495AFF]"
                        }`}
                      >
                        {position}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Input
                      placeholder="직군을 직접 입력해주세요"
                      value={formData.position.includes("직접입력") ? "" : formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="border-[#D8D8D8] focus:border-[#495AFF]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Statement */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="personalStatement" className="text-base font-medium text-[#333333] mb-4 block">
                    자기소개서를 입력해주세요
                  </Label>
                  <Textarea
                    id="personalStatement"
                    placeholder="자기소개서 내용을 입력해주세요. AI가 이를 바탕으로 맞춤형 질문을 생성합니다."
                    value={formData.personalStatement}
                    onChange={(e) => setFormData({ ...formData, personalStatement: e.target.value })}
                    className="min-h-[200px] border-[#D8D8D8] focus:border-[#495AFF] resize-none"
                  />
                  <div className="mt-2 text-sm text-[#787486]">{formData.personalStatement.length}/1000자</div>
                </div>
                <div className="bg-[#96E2D6] border border-[#96E2D6] rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#495AFF] rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333333]">AI 맞춤형 질문 생성</h4>
                      <p className="text-sm text-[#333333] mt-1">
                        입력하신 자기소개서를 바탕으로 AI가 실제 면접에서 나올 수 있는 맞춤형 질문을 생성합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Interview Settings */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <Label className="text-base font-medium mb-4 block text-[#333333]">면접 질문 개수</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {questionCounts.map((count) => (
                      <Card
                        key={count.value}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.questionCount === count.value
                            ? "ring-2 ring-[#495AFF] bg-[#D1D4F8]"
                            : "hover:bg-slate-50 border-[#D8D8D8]"
                        }`}
                        onClick={() => setFormData({ ...formData, questionCount: count.value })}
                      >
                        <CardContent className="p-4 text-center">
                          <MessageSquare className="w-6 h-6 mx-auto mb-2 text-[#787486]" />
                          <h3 className="font-medium text-[#333333]">{count.label}</h3>
                          <p className="text-xs text-[#787486] mt-1">{count.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium mb-4 block text-[#333333]">면접 모드</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interviewModes.map((mode) => (
                      <Card
                        key={mode.value}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.interviewMode === mode.value
                            ? "ring-2 ring-[#495AFF] bg-[#D1D4F8]"
                            : "hover:bg-slate-50 border-[#D8D8D8]"
                        }`}
                        onClick={() => setFormData({ ...formData, interviewMode: mode.value })}
                      >
                        <CardContent className="p-6">
                          <div className={`w-12 h-12 ${mode.color} rounded-lg flex items-center justify-center mb-4`}>
                            <Brain className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-medium text-[#333333] mb-2">{mode.label}</h3>
                          <p className="text-sm text-[#787486]">{mode.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="bg-[#D1D4F8] border border-[#495AFF] rounded-lg p-4">
                  <h4 className="font-medium text-[#333333] mb-2">선택한 설정</h4>
                  <div className="space-y-1 text-sm text-[#787486]">
                    <p>
                      <span className="font-medium">기업:</span> {formData.company || "미선택"}
                    </p>
                    <p>
                      <span className="font-medium">직군:</span> {formData.position || "미선택"}
                    </p>
                    <p>
                      <span className="font-medium">질문 수:</span>{" "}
                      {formData.questionCount ? `${formData.questionCount}개` : "미선택"}
                    </p>
                    <p>
                      <span className="font-medium">면접 모드:</span>{" "}
                      {formData.interviewMode === "basic"
                        ? "기본 면접"
                        : formData.interviewMode === "pressure"
                          ? "압박 면접"
                          : "미선택"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="border-[#D8D8D8] text-[#787486]"
          >
            이전
          </Button>
          <div className="flex space-x-4">
            {currentStep < 4 ? (
              <Button onClick={handleNext} className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                다음
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Link href="/interview/tutorial">
                <Button className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                  면접 시작하기
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
