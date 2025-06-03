"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, Briefcase, Clock, Target, ArrowRight, CheckCircle, Brain } from "lucide-react"
import Link from "next/link"

export default function InterviewSetupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    experience: "",
    resume: null,
    interviewType: "",
    duration: "",
    difficulty: "",
  })

  const steps = [
    { id: 1, title: "기본 정보", icon: <Briefcase className="w-5 h-5" /> },
    { id: 2, title: "이력서 업로드", icon: <FileText className="w-5 h-5" /> },
    { id: 3, title: "면접 설정", icon: <Target className="w-5 h-5" /> },
  ]

  const interviewTypes = [
    { value: "technical", label: "기술 면접", description: "개발, 엔지니어링 관련 질문" },
    { value: "behavioral", label: "인성 면접", description: "경험과 성격 관련 질문" },
    { value: "case", label: "케이스 면접", description: "문제 해결 능력 평가" },
    { value: "mixed", label: "종합 면접", description: "기술 + 인성 통합 면접" },
  ]

  const difficulties = [
    { value: "beginner", label: "초급", color: "bg-[#96E2D6] text-[#333333]" },
    { value: "intermediate", label: "중급", color: "bg-[#F55546] text-white" },
    { value: "advanced", label: "고급", color: "bg-[#495AFF] text-white" },
  ]

  const durations = [
    { value: "15", label: "15분", description: "빠른 연습" },
    { value: "30", label: "30분", description: "표준 연습" },
    { value: "45", label: "45분", description: "심화 연습" },
    { value: "60", label: "60분", description: "실전 연습" },
  ]

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = (currentStep / 3) * 100

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
            <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">면접 설정</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#333333]">면접 준비 설정</h1>
            <span className="text-sm text-[#787486]">{currentStep}/3 단계</span>
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
                {step.id < 3 && (
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
                {currentStep === 1 && "기본 정보를 입력해주세요"}
                {currentStep === 2 && "이력서를 업로드해주세요"}
                {currentStep === 3 && "면접 설정을 완료해주세요"}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="position" className="text-base font-medium text-[#333333]">
                      지원 직무
                    </Label>
                    <Input
                      id="position"
                      placeholder="예: 프론트엔드 개발자"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="mt-2 border-[#D8D8D8] focus:border-[#495AFF]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-base font-medium text-[#333333]">
                      지원 회사
                    </Label>
                    <Input
                      id="company"
                      placeholder="예: 네이버"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2 border-[#D8D8D8] focus:border-[#495AFF]"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="experience" className="text-base font-medium text-[#333333]">
                    경력 사항
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                    <SelectTrigger className="mt-2 border-[#D8D8D8] focus:border-[#495AFF]">
                      <SelectValue placeholder="경력을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fresh">신입</SelectItem>
                      <SelectItem value="1-3">1-3년</SelectItem>
                      <SelectItem value="3-5">3-5년</SelectItem>
                      <SelectItem value="5-10">5-10년</SelectItem>
                      <SelectItem value="10+">10년 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Resume Upload */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-[#D8D8D8] rounded-lg p-8 text-center hover:border-[#495AFF] transition-colors">
                  <Upload className="w-12 h-12 text-[#787486] mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-[#333333] mb-2">이력서를 업로드해주세요</h3>
                  <p className="text-[#787486] mb-4">PDF, DOC, DOCX 파일을 지원합니다 (최대 10MB)</p>
                  <Button variant="outline" className="mb-4 border-[#495AFF] text-[#495AFF]">
                    파일 선택하기
                  </Button>
                  <p className="text-sm text-[#787486]">또는 파일을 여기로 드래그하세요</p>
                </div>
                <div className="bg-[#96E2D6] border border-[#96E2D6] rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#495AFF] rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333333]">개인정보 보호</h4>
                      <p className="text-sm text-[#333333] mt-1">
                        업로드된 이력서는 면접 질문 생성에만 사용되며, 안전하게 암호화되어 저장됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Interview Settings */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <Label className="text-base font-medium mb-4 block text-[#333333]">면접 유형</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interviewTypes.map((type) => (
                      <Card
                        key={type.value}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.interviewType === type.value
                            ? "ring-2 ring-[#495AFF] bg-[#D1D4F8]"
                            : "hover:bg-slate-50 border-[#D8D8D8]"
                        }`}
                        onClick={() => setFormData({ ...formData, interviewType: type.value })}
                      >
                        <CardContent className="p-4">
                          <h3 className="font-medium text-[#333333]">{type.label}</h3>
                          <p className="text-sm text-[#787486] mt-1">{type.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium mb-4 block text-[#333333]">면접 시간</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {durations.map((duration) => (
                      <Card
                        key={duration.value}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.duration === duration.value
                            ? "ring-2 ring-[#495AFF] bg-[#D1D4F8]"
                            : "hover:bg-slate-50 border-[#D8D8D8]"
                        }`}
                        onClick={() => setFormData({ ...formData, duration: duration.value })}
                      >
                        <CardContent className="p-4 text-center">
                          <Clock className="w-6 h-6 mx-auto mb-2 text-[#787486]" />
                          <h3 className="font-medium text-[#333333]">{duration.label}</h3>
                          <p className="text-xs text-[#787486] mt-1">{duration.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium mb-4 block text-[#333333]">난이도</Label>
                  <div className="flex space-x-4">
                    {difficulties.map((difficulty) => (
                      <Badge
                        key={difficulty.value}
                        variant={formData.difficulty === difficulty.value ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-2 ${
                          formData.difficulty === difficulty.value
                            ? "bg-[#495AFF] hover:bg-[#3A4AE6] text-white"
                            : difficulty.color
                        }`}
                        onClick={() => setFormData({ ...formData, difficulty: difficulty.value })}
                      >
                        {difficulty.label}
                      </Badge>
                    ))}
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
            {currentStep < 3 ? (
              <Button onClick={handleNext} className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                다음
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Link href="/interview/session">
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
