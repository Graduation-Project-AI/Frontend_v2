"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MessageCircle, Search, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5
  const totalPages = 8

  const posts = [
    {
      id: 1,
      title: "네이버 면접 후기 - 프론트엔드 개발자",
      content: "오늘 네이버 프론트엔드 개발자 면접을 봤습니다. 예상 질문과 실제 질문이 많이 달랐어요...",
      author: "익명",
      category: "면접후기",
      comments: 8,
      timeAgo: "2시간 전",
      tags: ["네이버", "프론트엔드", "면접후기"],
    },
    {
      id: 2,
      title: "STAR 기법으로 답변 구조화하는 방법",
      content:
        "면접에서 경험을 효과적으로 전달하는 STAR 기법에 대해 정리해봤습니다. Situation, Task, Action, Result...",
      author: "익명",
      category: "팁공유",
      comments: 12,
      timeAgo: "5시간 전",
      tags: ["STAR기법", "면접팁", "답변구조"],
    },
    {
      id: 3,
      title: "카카오 최종 면접 합격했습니다! 🎉",
      content:
        "드디어 카카오 최종 면접에 합격했습니다! InterviewMate로 연습한 덕분에 InterviewMate로 연습한 덕분에 자신감 있게 답변할 수 있었어요.",
      author: "익명",
      category: "합격후기",
      comments: 23,
      timeAgo: "1일 전",
      tags: ["카카오", "합격후기", "최종면접"],
    },
    {
      id: 4,
      title: "면접 때 긴장 안 하는 방법 있나요?",
      content: "면접만 가면 너무 긴장돼서 평소 실력을 발휘하지 못하겠어요. 긴장 완화 방법 공유해주세요!",
      author: "익명",
      category: "질문",
      comments: 15,
      timeAgo: "3일 전",
      tags: ["긴장완화", "면접팁", "질문"],
    },
    {
      id: 5,
      title: "삼성전자 SW 직군 면접 준비 팁",
      content: "삼성전자 SW 직군 면접을 준비하면서 도움이 되었던 자료들과 경험을 공유합니다.",
      author: "익명",
      category: "팁공유",
      comments: 7,
      timeAgo: "5일 전",
      tags: ["삼성전자", "SW직군", "면접준비"],
    },
  ]

  const categories = [
    { name: "전체", value: "all", count: 156 },
    { name: "면접후기", value: "interview", count: 45 },
    { name: "팁공유", value: "tips", count: 38 },
    { name: "합격후기", value: "success", count: 29 },
    { name: "질문", value: "question", count: 44 },
  ]

  const popularTags = [
    "네이버",
    "카카오",
    "삼성",
    "LG",
    "프론트엔드",
    "백엔드",
    "STAR기법",
    "면접팁",
    "긴장완화",
    "자기소개",
  ]

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const renderPagination = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 text-sm rounded-md ${
            currentPage === i ? "bg-[#495AFF] text-white" : "text-[#787486] hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      )
    }

    return (
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 text-[#787486] hover:bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {pages}
        <button
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 text-[#787486] hover:bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

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
              <Link href="/community/write">
                <Button className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  글쓰기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#333333] mb-4">면접 커뮤니티</h1>
          <p className="text-lg text-[#787486] max-w-2xl mx-auto">
            면접 경험을 공유하고, 서로의 성장을 도와주는 공간입니다
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#787486] w-4 h-4" />
              <Input
                placeholder="검색어를 입력하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-[#D8D8D8] focus:border-[#495AFF]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#333333]">
                  <Filter className="w-5 h-5 text-[#495AFF]" />
                  <span>카테고리</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.value}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#D1D4F8] cursor-pointer transition-colors"
                  >
                    <span className="text-[#333333]">{category.name}</span>
                    <Badge className="bg-[#A3AAF2] text-[#333333] border-0">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#333333]">인기 태그</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-[#495AFF] hover:text-white border-[#495AFF] text-[#495AFF]"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {posts.map((post) => (
              <Link key={post.id} href={`/community/${post.id}`}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">{post.category}</Badge>
                          <span className="text-sm text-[#787486]">{post.timeAgo}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#333333] mb-2 hover:text-[#495AFF] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#787486] mb-4 line-clamp-2">{post.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-[#A3AAF2] text-[#495AFF]">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[#787486]">
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-[#787486]">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}

            {/* Pagination */}
            <div className="mt-8">{renderPagination()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
