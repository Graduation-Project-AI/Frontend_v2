"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  MessageSquare,
  BarChart3,
  Calendar,
  Clock,
  Target,
  Play,
  ChevronRight,
  User,
  Settings,
  LogOut,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("home")

  const interviewHistory = [
    {
      id: 1,
      date: "2024.1.15",
      company: "네이버",
      position: "프론트엔드 개발자",
      questions: [
        "Q1. 지원하신 직무에서 가장 기대하는 업무는 무엇인가요?",
        "Q2. 팀워크가 중요한 프로젝트에서 어떤 역할을 하시나요?",
        "Q3. 본인의 강점과 약점을 말씀해주세요.",
        "Q4. 5년 후 본인의 모습을 어떻게 그리고 계시나요?",
        "Q5. 우리 회사에 지원한 이유는 무엇인가요?",
      ],
      score: 85,
      duration: "24분",
      mode: "기본 면접",
    },
    {
      id: 2,
      date: "2024.1.12",
      company: "카카오",
      position: "백엔드 개발자",
      questions: [
        "Q1. 데이터베이스 설계 경험에 대해 말씀해주세요.",
        "Q2. API 성능 최적화 방법은?",
        "Q3. 마이크로서비스 아키텍처 경험이 있나요?",
        "Q4. 장애 대응 경험을 설명해주세요.",
      ],
      score: 78,
      duration: "32분",
      mode: "압박 면접",
    },
    {
      id: 3,
      date: "2024.1.10",
      company: "삼성전자",
      position: "AI 엔지니어",
      questions: [
        "Q1. 머신러닝 모델 최적화 경험이 있나요?",
        "Q2. 딥러닝 프레임워크 사용 경험은?",
        "Q3. 데이터 전처리 과정을 설명해주세요.",
      ],
      score: 72,
      duration: "18분",
      mode: "기본 면접",
    },
  ]

  const stats = [
    { label: "총 면접 횟수", value: "12", icon: <MessageSquare className="w-5 h-5" /> },
    { label: "평균 점수", value: "78", icon: <Target className="w-5 h-5" /> },
    { label: "이번 주 연습", value: "3회", icon: <Calendar className="w-5 h-5" /> },
    { label: "총 연습 시간", value: "4시간", icon: <Clock className="w-5 h-5" /> },
  ]

  const sidebarItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "interview", label: "Interview", icon: <MessageSquare className="w-5 h-5" /> },
    { id: "community", label: "Community", icon: <Users className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#495AFF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">IM</span>
            </div>
            <div className="text-xl font-bold text-[#333333]">InterviewMate</div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  selectedTab === item.id
                    ? "bg-[#495AFF] text-white"
                    : "text-[#787486] hover:bg-gray-100 hover:text-[#333333]"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-[#96E2D6] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-[#333333]" />
            </div>
            <div>
              <div className="font-medium text-[#333333]">사용자</div>
              <div className="text-sm text-[#787486]">user@example.com</div>
            </div>
          </div>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-[#787486]">
              <Settings className="w-4 h-4 mr-2" />
              설정
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-[#787486]">
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#333333]">
                {selectedTab === "home" && "홈"}
                {selectedTab === "interview" && "면접"}
                {selectedTab === "community" && "커뮤니티"}
              </h1>
              <p className="text-[#787486]">
                {selectedTab === "home" && "면접 연습 현황을 확인하세요"}
                {selectedTab === "interview" && "새로운 면접을 시작하세요"}
                {selectedTab === "community" && "다른 사용자들과 경험을 공유하세요"}
              </p>
            </div>
            <Link href="/interview/start">
              <Button className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                <Play className="w-4 h-4 mr-2" />
                AI 면접 시작하기
              </Button>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">
          {selectedTab === "home" && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-[#787486] mb-1">{stat.label}</p>
                          <p className="text-2xl font-bold text-[#333333]">{stat.value}</p>
                        </div>
                        <div className="text-[#495AFF]">{stat.icon}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Interview History */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6 text-[#495AFF]" />
                    <span className="text-[#333333]">면접 기록</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {interviewHistory.map((interview) => (
                    <div key={interview.id} className="border border-[#D8D8D8] rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">{interview.date}</Badge>
                            <Badge className="bg-[#96E2D6] text-[#333333] border-0">{interview.mode}</Badge>
                            <h3 className="font-bold text-[#333333]">
                              {interview.company} - {interview.position}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-[#787486] mb-4">
                            <span>질문 {interview.questions.length}개</span>
                            <span>소요시간 {interview.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-[#495AFF] mb-1">{interview.score}</div>
                          <div className="text-sm text-[#787486]">점</div>
                        </div>
                      </div>

                      {/* Questions List */}
                      <div className="mb-4">
                        <h4 className="font-medium text-[#333333] mb-3">면접 질문</h4>
                        <div className="space-y-2">
                          {interview.questions.map((question, qIndex) => (
                            <div key={qIndex} className="text-sm text-[#787486] py-1 pl-4 border-l-2 border-[#D8D8D8]">
                              {question}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Link href="/interview/ai-results">
                          <Button variant="ghost" size="sm" className="text-[#495AFF] hover:text-[#3A4AE6]">
                            상세 보기
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === "interview" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#333333] mb-4">새로운 면접 시작하기</h2>
                <p className="text-lg text-[#787486] mb-8">AI와 함께 실전 같은 면접 연습을 해보세요</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <Link href="/interview/start">
                    <Card className="cursor-pointer hover:shadow-xl transition-all border-[#495AFF] bg-gradient-to-br from-[#D1D4F8] to-[#A3AAF2]">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-[#495AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                          <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333333] mb-2">기본 면접</h3>
                        <p className="text-[#787486]">일반적인 면접 환경으로 연습</p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/interview/start">
                    <Card className="cursor-pointer hover:shadow-xl transition-all border-[#F55546] bg-gradient-to-br from-[#F55546] to-[#E04435]">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-8 h-8 text-[#F55546]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">압박 면접</h3>
                        <p className="text-white/80">실전과 같은 압박 환경으로 연습</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "community" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#333333] mb-4">면접 커뮤니티</h2>
                <p className="text-lg text-[#787486] mb-8">다른 사용자들과 면접 경험과 팁을 공유해보세요</p>

                <Link href="/community">
                  <Button size="lg" className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                    <Users className="w-5 h-5 mr-2" />
                    커뮤니티 바로가기
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#96E2D6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-[#333333]" />
                    </div>
                    <h3 className="font-semibold text-[#333333] mb-2">면접 후기</h3>
                    <p className="text-sm text-[#787486]">실제 면접 경험담을 공유하고 읽어보세요</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#A3AAF2] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#333333] mb-2">면접 팁</h3>
                    <p className="text-sm text-[#787486]">효과적인 면접 준비 방법을 공유해보세요</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#F55546] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#333333] mb-2">스터디 모집</h3>
                    <p className="text-sm text-[#787486]">함께 면접을 준비할 동료를 찾아보세요</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
