"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Clock,
  Brain,
  MessageSquare,
  Mic,
  Play,
  Pause,
  SkipForward,
  Volume2,
  ThumbsUp,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function QuestionPreparationPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [phase, setPhase] = useState<"reading" | "thinking" | "answering" | "completed">("reading")
  const [timeRemaining, setTimeRemaining] = useState(10) // 초 단위
  const [isTimerActive, setIsTimerActive] = useState(true)
  const [readingComplete, setReadingComplete] = useState(false)

  const totalQuestions = 8

  const questions = [
    "자기소개를 간단히 해주세요.",
    "이 회사에 지원한 이유는 무엇인가요?",
    "본인의 가장 큰 강점은 무엇이라고 생각하시나요?",
    "팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하시나요?",
    "5년 후 본인의 모습을 어떻게 그리고 계시나요?",
    "실패했던 경험과 그로부터 배운 점을 말씀해주세요.",
    "스트레스를 받을 때 어떻게 관리하시나요?",
    "마지막으로 궁금한 점이나 하고 싶은 말씀이 있으신가요?",
  ]

  // 타이머 관리
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isTimerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      if (phase === "reading") {
        setReadingComplete(true)
        setPhase("thinking")
        setTimeRemaining(30) // 생각할 시간 30초
      } else if (phase === "thinking") {
        setPhase("answering")
        setIsTimerActive(false)
      }
    }

    return () => clearInterval(interval)
  }, [isTimerActive, timeRemaining, phase])

  const formatTime = (seconds: number) => {
    return `${seconds}초`
  }

  const handlePauseResume = () => {
    setIsTimerActive(!isTimerActive)
  }

  const handleSkip = () => {
    if (phase === "reading") {
      setReadingComplete(true)
      setPhase("thinking")
      setTimeRemaining(30) // 생각할 시간 30초
    } else if (phase === "thinking") {
      setPhase("answering")
      setIsTimerActive(false)
    }
  }

  const handleStartAnswering = () => {
    setPhase("answering")
    setIsTimerActive(false)
  }

  const handleCompleteAnswer = () => {
    setPhase("completed")
  }

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
      setPhase("reading")
      setTimeRemaining(10) // 질문 읽는 시간 10초
      setIsTimerActive(true)
      setReadingComplete(false)
    }
  }

  const progress = (currentQuestion / totalQuestions) * 100

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
            <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">면접 질문 준비</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-[#333333]">면접 질문 준비</h1>
            <span className="text-sm text-[#787486]">
              {currentQuestion}/{totalQuestions} 질문
            </span>
          </div>
          <Progress value={progress} className="h-2 mb-2" />
        </div>

        {/* Main Content */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader className="bg-gradient-to-r from-[#D1D4F8] to-[#A3AAF2]">
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-[#495AFF]" />
              <span className="text-[#333333]">질문 {currentQuestion}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-xl font-medium text-[#333333] mb-6">{questions[currentQuestion - 1]}</div>

              {/* Phase Indicator */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      phase === "reading" ? "bg-[#495AFF] animate-pulse" : "bg-[#D8D8D8]"
                    }`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      phase === "thinking" ? "bg-[#F55546] animate-pulse" : "bg-[#D8D8D8]"
                    }`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      phase === "answering" ? "bg-[#96E2D6] animate-pulse" : "bg-[#D8D8D8]"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Phase Content */}
              {phase === "reading" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-2 text-[#495AFF]">
                    <Volume2 className="w-5 h-5" />
                    <span className="font-medium">질문을 읽고 있습니다</span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D1D4F8] rounded-full mb-4">
                      <Clock className="w-8 h-8 text-[#495AFF]" />
                    </div>
                    <div className="text-2xl font-bold text-[#333333]">{formatTime(timeRemaining)}</div>
                    <p className="text-[#787486] mt-2">질문을 읽는 시간입니다</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" onClick={handlePauseResume} className="border-[#D8D8D8] text-[#787486]">
                      {isTimerActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      {isTimerActive ? "일시정지" : "계속하기"}
                    </Button>
                    <Button onClick={handleSkip} className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                      <SkipForward className="w-4 h-4 mr-2" />
                      다음 단계
                    </Button>
                  </div>
                </div>
              )}

              {phase === "thinking" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-2 text-[#F55546]">
                    <Brain className="w-5 h-5" />
                    <span className="font-medium">답변을 생각하는 중입니다</span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F55546]/20 rounded-full mb-4">
                      <Clock className="w-8 h-8 text-[#F55546]" />
                    </div>
                    <div className="text-2xl font-bold text-[#333333]">{formatTime(timeRemaining)}</div>
                    <p className="text-[#787486] mt-2">답변을 생각할 시간입니다</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" onClick={handlePauseResume} className="border-[#D8D8D8] text-[#787486]">
                      {isTimerActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      {isTimerActive ? "일시정지" : "계속하기"}
                    </Button>
                    <Button onClick={handleStartAnswering} className="bg-[#F55546] hover:bg-[#E04435] text-white">
                      <Mic className="w-4 h-4 mr-2" />
                      답변 시작하기
                    </Button>
                  </div>
                </div>
              )}

              {phase === "answering" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-2 text-[#96E2D6]">
                    <Mic className="w-5 h-5" />
                    <span className="font-medium">답변 중입니다</span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#96E2D6]/20 rounded-full mb-4">
                      <Mic className="w-8 h-8 text-[#96E2D6]" />
                    </div>
                    <div className="text-lg text-[#333333] max-w-md mx-auto">
                      질문에 대한 답변을 말씀해주세요. 답변이 끝나면 아래 버튼을 클릭해주세요.
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button onClick={handleCompleteAnswer} className="bg-[#96E2D6] hover:bg-[#7BC4B8] text-[#333333]">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      답변 완료
                    </Button>
                  </div>
                </div>
              )}

              {phase === "completed" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-2 text-[#495AFF]">
                    <ThumbsUp className="w-5 h-5" />
                    <span className="font-medium">답변 완료!</span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#495AFF]/20 rounded-full mb-4">
                      <ThumbsUp className="w-8 h-8 text-[#495AFF]" />
                    </div>
                    <div className="text-lg text-[#333333] max-w-md mx-auto">
                      답변이 완료되었습니다. 다음 질문으로 넘어가시겠습니까?
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button onClick={handleNextQuestion} className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                      <SkipForward className="w-4 h-4 mr-2" />
                      다음 질문
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="border-t border-[#D8D8D8] pt-6 mt-6">
              <h3 className="font-medium text-[#333333] mb-4 flex items-center">
                <AlertCircle className="w-4 h-4 text-[#495AFF] mr-2" />
                답변 팁
              </h3>
              <div className="bg-[#F8F9FA] rounded-lg p-4 text-sm text-[#787486]">
                {phase === "reading" && (
                  <p>질문을 주의 깊게 읽고 핵심 키워드를 파악하세요. 질문의 의도를 정확히 이해하는 것이 중요합니다.</p>
                )}
                {phase === "thinking" && (
                  <p>
                    STAR 기법(상황-과제-행동-결과)을 활용하여 답변 구조를 생각해보세요. 구체적인 경험과 수치를 포함하면
                    더 설득력 있는 답변이 됩니다.
                  </p>
                )}
                {phase === "answering" && (
                  <p>
                    자신감 있는 목소리와 적절한 속도로 답변하세요. 너무 빠르거나 느리지 않게, 명확하게 발음하는 것이
                    중요합니다.
                  </p>
                )}
                {phase === "completed" && (
                  <p>
                    답변 후에는 자신의 답변을 되돌아보고 개선점을 생각해보세요. 다음 질문에서는 더 나은 답변을 할 수
                    있습니다.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phase Description */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    phase === "reading" ? "bg-[#495AFF]" : "bg-[#D8D8D8]"
                  }`}
                >
                  <Volume2 className={`w-6 h-6 ${phase === "reading" ? "text-white" : "text-[#787486]"}`} />
                </div>
                <h3 className="font-medium text-[#333333] mb-1">질문 읽기</h3>
                <p className="text-sm text-[#787486]">질문을 읽고 이해하는 단계</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    phase === "thinking" ? "bg-[#F55546]" : "bg-[#D8D8D8]"
                  }`}
                >
                  <Brain className={`w-6 h-6 ${phase === "thinking" ? "text-white" : "text-[#787486]"}`} />
                </div>
                <h3 className="font-medium text-[#333333] mb-1">답변 생각하기</h3>
                <p className="text-sm text-[#787486]">답변 구조와 내용을 생각하는 단계</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    phase === "answering" || phase === "completed" ? "bg-[#96E2D6]" : "bg-[#D8D8D8]"
                  }`}
                >
                  <Mic
                    className={`w-6 h-6 ${
                      phase === "answering" || phase === "completed" ? "text-[#333333]" : "text-[#787486]"
                    }`}
                  />
                </div>
                <h3 className="font-medium text-[#333333] mb-1">답변하기</h3>
                <p className="text-sm text-[#787486]">준비한 답변을 말하는 단계</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
