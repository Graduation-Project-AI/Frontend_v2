"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  TrendingUp,
  Clock,
  Target,
  Brain,
  MessageSquare,
  BarChart3,
  Calendar,
  Award,
  Users,
  Star,
  ArrowRight,
  Plus,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week")

  const recentInterviews = [
    {
      id: 1,
      company: "네이버",
      position: "프론트엔드 개발자",
      score: 87,
      date: "2024-01-15",
      mode: "기본 면접",
      questions: 8,
      duration: "24분",
      status: "완료",
    },
    {
      id: 2,
      company: "카카오",
      position: "백엔드 개발자",
      score: 82,
      date: "2024-01-12",
      mode: "압박 면접",
      questions: 10,
      duration: "32분",
      status: "완료",
    },
    {
      id: 3,
      company: "삼성전자",
      position: "AI 엔지니어",
      score: 79,
      date: "2024-01-10",
      mode: "기본 면접",
      questions: 6,
      duration: "18분",
      status: "완료",
    },
  ]

  const stats = [
    { label: "총 면접 횟수", value: "12", icon: <MessageSquare className="w-5 h-5" />, color: "text-[#495AFF]" },
    { label: "평균 점수", value: "84", icon: <Target className="w-5 h-5" />, color: "text-[#96E2D6]" },
    { label: "총 연습 시간", value: "4시간 32분", icon: <Clock className="w-5 h-5" />, color: "text-[#A3AAF2]" },
    { label: "이번 주 연습", value: "3회", icon: <Calendar className="w-5 h-5" />, color: "text-[#F55546]" },
  ]

  const skillProgress = [
    { name: "답변 내용", current: 84, target: 90, color: "bg-[#495AFF]" },
    { name: "논리성", current: 78, target: 85, color: "bg-[#96E2D6]" },
    { name: "표현력", current: 81, target: 88, color: "bg-[#A3AAF2]" },
    { name: "시선 처리", current: 72, target: 80, color: "bg-[#F55546]" },
  ]

  const achievements = [
    { title: "첫 면접 완주", description: "첫 번째 AI 면접을 완료했습니다", earned: true },
    { title: "고득점자", description: "85점 이상 달성", earned: true },
    { title: "연습왕", description: "일주일에 5회 이상 연습", earned: false },
    { title: "STAR 마스터", description: "STAR 구조 완벽 활용", earned: true },
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
              <Link href="/interview/start">
                <Button className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                  <Plus className="w-4 h-4 mr-2" />새 면접 시작
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#333333] mb-2">안녕하세요! 👋</h1>
          <p className="text-lg text-[#787486]">오늘도 면접 연습으로 한 걸음 더 성장해보세요</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#787486] mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#333333]">{stat.value}</p>
                  </div>
                  <div className={`${stat.color}`}>{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Interviews */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6 text-[#495AFF]" />
                    <span className="text-[#333333]">최근 면접 기록</span>
                  </div>
                  <Link href="/interview/history">
                    <Button variant="outline" size="sm" className="border-[#495AFF] text-[#495AFF]">
                      전체 보기
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInterviews.map((interview) => (
                  <div
                    key={interview.id}
                    className="border border-[#D8D8D8] rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-[#333333]">{interview.company}</h3>
                        <p className="text-sm text-[#787486]">{interview.position}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#495AFF]">{interview.score}</div>
                        <div className="text-xs text-[#787486]">점</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#787486]">
                      <div className="flex items-center space-x-4">
                        <span>{interview.date}</span>
                        <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">{interview.mode}</Badge>
                        <span>{interview.questions}개 질문</span>
                        <span>{interview.duration}</span>
                      </div>
                      <Link href={`/interview/results/${interview.id}`}>
                        <Button variant="ghost" size="sm" className="text-[#495AFF] hover:text-[#3A4AE6]">
                          상세 보기
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="w-6 h-6 text-[#495AFF]" />
                  <span className="text-[#333333]">빠른 시작</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/interview/start">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow border-[#495AFF] bg-gradient-to-br from-[#D1D4F8] to-[#A3AAF2]">
                      <CardContent className="p-6 text-center">
                        <Brain className="w-12 h-12 text-[#495AFF] mx-auto mb-4" />
                        <h3 className="font-semibold text-[#333333] mb-2">기본 면접</h3>
                        <p className="text-sm text-[#787486]">일반적인 면접 환경으로 연습</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/interview/start">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow border-[#F55546] bg-gradient-to-br from-[#F55546] to-[#E04435]">
                      <CardContent className="p-6 text-center">
                        <Target className="w-12 h-12 text-white mx-auto mb-4" />
                        <h3 className="font-semibold text-white mb-2">압박 면접</h3>
                        <p className="text-sm text-white/80">실전과 같은 압박 환경으로 연습</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skill Progress */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-[#495AFF]" />
                  <span className="text-[#333333]">실력 향상 현황</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillProgress.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#333333]">{skill.name}</span>
                      <span className="text-sm text-[#787486]">
                        {skill.current}/{skill.target}
                      </span>
                    </div>
                    <Progress value={(skill.current / skill.target) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-[#495AFF]" />
                  <span className="text-[#333333]">성취 배지</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.earned ? "bg-[#96E2D6]" : "bg-[#D8D8D8]"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.earned ? "bg-[#495AFF]" : "bg-[#787486]"}`}
                    >
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium text-sm ${achievement.earned ? "text-[#333333]" : "text-[#787486]"}`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-xs ${achievement.earned ? "text-[#333333]" : "text-[#787486]"}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Activity */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#D1D4F8] to-[#A3AAF2]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#333333]">
                  <Users className="w-6 h-6" />
                  <span>커뮤니티</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#333333] mb-4">다른 사용자들과 면접 경험을 공유해보세요!</p>
                <Link href="/community">
                  <Button className="w-full bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                    커뮤니티 참여하기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
