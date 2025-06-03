"use client"

import { useState, useEffect, useRef } from "react"
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
  Pause,
  SkipForward,
  Clock,
  Brain,
  MessageSquare,
  BarChart3,
  Eye,
  Zap,
  VolumeX,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function AIInterviewSessionPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAISpeaking, setIsAISpeaking] = useState(true)
  const [eyeContact, setEyeContact] = useState(85)
  const [silenceTime, setSilenceTime] = useState(2)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [phase, setPhase] = useState<"question" | "thinking" | "answering" | "completed">("question")
  const [thinkingTime, setThinkingTime] = useState(30) // 생각할 시간 30초
  const [answeringTime, setAnsweringTime] = useState(120) // 답변 시간 2분
  const [activeTimer, setActiveTimer] = useState<"thinking" | "answering" | null>("thinking")

  const totalQuestions = 8
  const totalTime = 25 * 60 // 25 minutes in seconds

  const questions = [
    "안녕하세요. 먼저 간단한 자기소개를 부탁드립니다.",
    "우리 회사에 지원하게 된 동기는 무엇인가요?",
    "본인의 가장 큰 강점은 무엇이라고 생각하시나요?",
    "팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하시나요?",
    "실패했던 경험과 그로부터 배운 점을 말씀해주세요.",
    "5년 후 본인의 모습을 어떻게 그리고 계시나요?",
    "스트레스를 받을 때 어떻게 관리하시나요?",
    "마지막으로 궁금한 점이나 하고 싶은 말씀이 있으신가요?",
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isPaused) {
      if (activeTimer === "thinking" && thinkingTime > 0) {
        interval = setInterval(() => {
          setThinkingTime((prev) => prev - 1)
        }, 1000)
      } else if (activeTimer === "thinking" && thinkingTime === 0) {
        // 생각 시간이 끝나면 답변 단계로 전환
        setPhase("answering")
        setActiveTimer("answering")
      } else if (activeTimer === "answering") {
        interval = setInterval(() => {
          setTimeElapsed((prev) => prev + 1)
          if (answeringTime > 0) {
            setAnsweringTime((prev) => prev - 1)
          }
        }, 1000)
      }
    }

    return () => clearInterval(interval)
  }, [isPaused, activeTimer, thinkingTime, answeringTime])

  useEffect(() => {
    // 웹캠 스트림 시작
    if (isVideoOn && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err) => console.error("웹캠 접근 오류:", err))
    }
  }, [isVideoOn])

  useEffect(() => {
    // AI 음성 시뮬레이션
    if (isAISpeaking) {
      const timer = setTimeout(() => {
        setIsAISpeaking(false)
        setPhase("thinking") // AI 질문 읽기가 끝나면 생각 단계로 전환
        setActiveTimer("thinking")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentQuestion, isAISpeaking])

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
      setIsAISpeaking(true)
      setPhase("question")
      setThinkingTime(30) // 생각 시간 초기화
      setAnsweringTime(120) // 답변 시간 초기화
      setActiveTimer("thinking")
    }
  }

  const handleStartRecording = () => {
    setIsRecording(true)
    setIsAISpeaking(false)
    setPhase("answering")
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    setPhase("completed")
    setActiveTimer(null)
  }

  const handleEndInterview = () => {
    // 면접 종료 시 피드백 페이지로 이동
    window.location.href = "/interview/feedback"
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
                    <div className="w-full h-full bg-gradient-to-br from-[#495AFF] to-[#A3AAF2] flex items-center justify-center relative">
                      <Brain className="w-12 h-12 text-white" />
                      {/* AI Speaking Animation */}
                      {isAISpeaking && (
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-white rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-white rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-[#000000]/80 px-2 py-1 rounded text-xs text-white">
                      AI 면접관
                    </div>
                  </div>

                  {/* User Video */}
                  <div className="absolute bottom-4 right-4 w-64 h-48 bg-[#787486] rounded-lg overflow-hidden border-2 border-[#495AFF]">
                    {isVideoOn ? (
                      <video ref={videoRef} autoPlay muted className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-[#333333] flex items-center justify-center">
                        <VideoOff className="w-8 h-8 text-[#787486]" />
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 bg-[#000000]/80 px-2 py-1 rounded text-xs text-white">
                      나
                    </div>
                    {/* Eye Contact Indicator */}
                    <div className="absolute top-2 right-2">
                      <div
                        className={`w-3 h-3 rounded-full ${eyeContact > 80 ? "bg-[#96E2D6]" : eyeContact > 60 ? "bg-[#F55546]" : "bg-[#F55546]"}`}
                      ></div>
                    </div>
                  </div>

                  {/* Recording Indicator */}
                  {isRecording && (
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-[#F55546] px-3 py-2 rounded-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-sm font-medium">답변 녹음 중</span>
                    </div>
                  )}

                  {/* AI Speaking Indicator */}
                  {isAISpeaking && (
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-[#495AFF] px-3 py-2 rounded-lg">
                      <Volume2 className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">AI 질문 중</span>
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

                    {phase === "thinking" && (
                      <Button
                        size="lg"
                        onClick={handleStartRecording}
                        className="bg-[#F55546] hover:bg-[#E04435] text-white px-6"
                      >
                        <Mic className="w-5 h-5 mr-2" />
                        답변 시작
                      </Button>
                    )}

                    {phase === "answering" && isRecording && (
                      <Button
                        size="lg"
                        onClick={handleStopRecording}
                        className="bg-[#96E2D6] hover:bg-[#7BC4B8] text-[#333333] px-6"
                      >
                        <Pause className="w-5 h-5 mr-2" />
                        답변 완료
                      </Button>
                    )}

                    {phase === "completed" && currentQuestion < totalQuestions && (
                      <Button
                        size="lg"
                        onClick={handleNextQuestion}
                        className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white px-6"
                      >
                        <SkipForward className="w-5 h-5 mr-2" />
                        다음 질문
                      </Button>
                    )}

                    {phase === "completed" && currentQuestion >= totalQuestions && (
                      <Button
                        size="lg"
                        onClick={handleEndInterview}
                        className="bg-[#96E2D6] hover:bg-[#7BC4B8] text-[#333333] px-6"
                      >
                        면접 완료
                      </Button>
                    )}

                    <Button
                      variant={!isSoundOn ? "destructive" : "secondary"}
                      size="lg"
                      onClick={() => setIsSoundOn(!isSoundOn)}
                      className="w-12 h-12 rounded-full"
                    >
                      {isSoundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </Button>

                    {phase !== "completed" && (
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setIsPaused(!isPaused)}
                        className="w-12 h-12 rounded-full border-[#D8D8D8]"
                      >
                        {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                      </Button>
                    )}
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

                {/* 단계별 상태 표시 */}
                {phase === "question" && isAISpeaking && (
                  <div className="mt-4 flex items-center space-x-2 text-[#A3AAF2]">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-sm">AI가 질문을 읽고 있습니다...</span>
                  </div>
                )}

                {phase === "thinking" && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#A3AAF2]">생각할 시간</span>
                      <span className="text-sm text-[#A3AAF2]">{thinkingTime}초</span>
                    </div>
                    <div className="w-full bg-[#787486]/30 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#F55546] h-full transition-all duration-1000"
                        style={{ width: `${(thinkingTime / 30) * 100}%` }}
                      ></div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-[#A3AAF2] text-sm">자기소개를 1분 내외로 준비하세요</p>
                    </div>
                  </div>
                )}

                {phase === "answering" && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#A3AAF2]">답변 시간</span>
                      <span className="text-sm text-[#A3AAF2]">
                        {Math.floor(answeringTime / 60)}:{(answeringTime % 60).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="w-full bg-[#787486]/30 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#96E2D6] h-full transition-all duration-1000"
                        style={{ width: `${(answeringTime / 120) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Real-time Analysis */}
            <Card className="bg-[#787486] border-[#787486]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-[#96E2D6]" />
                  <h3 className="font-semibold text-white">실시간 분석</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-[#A3AAF2]" />
                      <span className="text-[#D8D8D8]">시선 처리</span>
                    </div>
                    <Badge
                      className={`${eyeContact > 80 ? "bg-[#96E2D6] text-[#333333]" : "bg-[#F55546] text-white"} border-0`}
                    >
                      {eyeContact}%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#A3AAF2]" />
                      <span className="text-[#D8D8D8]">침묵 시간</span>
                    </div>
                    <Badge className="bg-[#96E2D6] text-[#333333] border-0">{silenceTime}초</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-[#A3AAF2]" />
                      <span className="text-[#D8D8D8]">답변 상태</span>
                    </div>
                    <Badge className={`${isRecording ? "bg-[#F55546]" : "bg-[#787486]"} text-white border-0`}>
                      {isRecording ? "답변 중" : "대기 중"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Tips */}
            <Card className="bg-gradient-to-br from-[#495AFF]/20 to-[#A3AAF2]/20 border-[#495AFF]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Brain className="w-5 h-5 text-[#A3AAF2]" />
                  <h3 className="font-semibold text-white">AI 팁</h3>
                </div>
                <p className="text-[#A3AAF2] text-sm">
                  {isRecording
                    ? "STAR 구조(상황-과제-행동-결과)로 답변해보세요."
                    : "카메라를 직접 보며 자신감 있게 답변해주세요."}
                </p>
              </CardContent>
            </Card>

            {/* End Interview */}
            <Button
              onClick={handleEndInterview}
              variant="destructive"
              className="w-full bg-[#F55546] hover:bg-[#E04435] text-white"
            >
              면접 종료하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
