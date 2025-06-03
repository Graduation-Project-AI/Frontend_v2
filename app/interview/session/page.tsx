"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
  Pause,
  Play,
  SkipForward,
  Clock,
  Brain,
  MessageSquare,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function InterviewSessionPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalQuestions = 8
  const totalTime = 30 * 60 // 30 minutes in seconds

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

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (!isPaused) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPaused])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progress = (currentQuestion / totalQuestions) * 100
  const timeProgress = (timeElapsed / totalTime) * 100

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="min-h-screen bg-[#333333]">
      {/* Header */}
      <header className="bg-[#333333]/90 backdrop-blur-md border-b border-[#787486]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-xl font-bold">
                <span className="text-[#495AFF]">Interview</span>
                <span className="text-white">Mate</span>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">AI 면접 진행 중</Badge>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeElapsed)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">AI 면접 세션</h1>
            <span className="text-[#D8D8D8]">
              {currentQuestion}/{totalQuestions} 질문
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#D8D8D8]">진행률</span>
                <span className="text-sm text-[#D8D8D8]">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#D8D8D8]">시간</span>
                <span className="text-sm text-[#D8D8D8]">{Math.round(timeProgress)}%</span>
              </div>
              <Progress value={timeProgress} className="h-2" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Section */}
          <div className="lg:col-span-2">
            <Card className="bg-[#787486] border-[#787486]">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-[#000000] rounded-t-lg overflow-hidden">
                  {/* AI Interviewer */}
                  <div className="absolute top-4 left-4 w-48 h-36 bg-[#787486] rounded-lg overflow-hidden border-2 border-[#D8D8D8]">
                    <div className="w-full h-full bg-gradient-to-br from-[#495AFF] to-[#A3AAF2] flex items-center justify-center">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-[#000000]/80 px-2 py-1 rounded text-xs text-white">
                      AI 면접관
                    </div>
                  </div>

                  {/* User Video */}
                  <div className="absolute bottom-4 right-4 w-64 h-48 bg-[#787486] rounded-lg overflow-hidden border-2 border-[#495AFF]">
                    {isVideoOn ? (
                      <div className="w-full h-full bg-[#D8D8D8] flex items-center justify-center">
                        <div className="text-[#787486]">카메라 화면</div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-[#333333] flex items-center justify-center">
                        <VideoOff className="w-8 h-8 text-[#787486]" />
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 bg-[#000000]/80 px-2 py-1 rounded text-xs text-white">
                      나
                    </div>
                  </div>

                  {/* Recording Indicator */}
                  {isRecording && (
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-[#F55546] px-3 py-2 rounded-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-sm font-medium">녹화 중</span>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="p-6 bg-[#787486]">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant={isMuted ? "destructive" : "secondary"}
                      size="lg"
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-12 h-12 rounded-full"
                    >
                      {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant={!isVideoOn ? "destructive" : "secondary"}
                      size="lg"
                      onClick={() => setIsVideoOn(!isVideoOn)}
                      className="w-12 h-12 rounded-full"
                    >
                      {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant={isPaused ? "default" : "secondary"}
                      size="lg"
                      onClick={() => setIsPaused(!isPaused)}
                      className="w-12 h-12 rounded-full"
                    >
                      {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant={!isSoundOn ? "destructive" : "secondary"}
                      size="lg"
                      onClick={() => setIsSoundOn(!isSoundOn)}
                      className="w-12 h-12 rounded-full"
                    >
                      {isSoundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleNextQuestion}
                      disabled={currentQuestion >= totalQuestions}
                      className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white border-[#495AFF]"
                    >
                      <SkipForward className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Question & Info Panel */}
          <div className="space-y-6">
            {/* Current Question */}
            <Card className="bg-[#787486] border-[#787486]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-[#A3AAF2]" />
                  <h3 className="font-semibold text-white">현재 질문</h3>
                  <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">
                    {currentQuestion}/{totalQuestions}
                  </Badge>
                </div>
                <p className="text-[#D8D8D8] text-lg leading-relaxed">{questions[currentQuestion - 1]}</p>
              </CardContent>
            </Card>

            {/* AI Feedback */}
            <Card className="bg-[#787486] border-[#787486]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-[#96E2D6]" />
                  <h3 className="font-semibold text-white">실시간 피드백</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#D8D8D8]">말하기 속도</span>
                    <Badge className="bg-[#96E2D6] text-[#333333] border-0">적절</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D8D8D8]">시선 처리</span>
                    <Badge className="bg-[#F55546] text-white border-0">보통</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D8D8D8]">답변 길이</span>
                    <Badge className="bg-[#96E2D6] text-[#333333] border-0">좋음</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-[#495AFF]/20 to-[#A3AAF2]/20 border-[#495AFF]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Brain className="w-5 h-5 text-[#A3AAF2]" />
                  <h3 className="font-semibold text-white">AI 팁</h3>
                </div>
                <p className="text-[#A3AAF2] text-sm">
                  구체적인 경험과 수치를 포함하여 답변하면 더 좋은 평가를 받을 수 있습니다.
                </p>
              </CardContent>
            </Card>

            {/* End Interview */}
            <Link href="/interview/results">
              <Button variant="destructive" className="w-full bg-[#F55546] hover:bg-[#E04435] text-white">
                면접 종료하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
