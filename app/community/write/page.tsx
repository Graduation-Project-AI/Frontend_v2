"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, X, Hash } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CommunityWritePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  })
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")

  const categories = [
    { value: "interview", label: "면접후기" },
    { value: "tips", label: "팁공유" },
    { value: "success", label: "합격후기" },
    { value: "question", label: "질문" },
    { value: "study", label: "스터디" },
    { value: "general", label: "자유게시판" },
  ]

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      addTag()
    }
  }

  const addTag = () => {
    const tag = tagInput.trim().replace(/^#/, "") // # 제거
    if (tag && !tags.includes(tag) && tags.length < 10) {
      setTags([...tags, tag])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    // #이 없으면 자동으로 추가
    if (value && !value.startsWith("#")) {
      value = "#" + value
    }
    setTagInput(value)
  }

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.content.trim() || !formData.category) {
      alert("제목, 내용, 카테고리를 모두 입력해주세요.")
      return
    }

    // 실제로는 여기서 API 호출하여 글을 저장
    console.log("글 저장:", {
      ...formData,
      tags,
    })

    // 커뮤니티 메인으로 이동
    router.push("/community")
  }

  const handleCancel = () => {
    if (formData.title || formData.content || tags.length > 0) {
      if (confirm("작성 중인 내용이 있습니다. 정말 취소하시겠습니까?")) {
        router.push("/community")
      }
    } else {
      router.push("/community")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 text-[#787486] hover:text-[#495AFF] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>커뮤니티로 돌아가기</span>
            </button>
            <div className="text-xl font-bold">
              <span className="text-[#495AFF]">Interview</span>
              <span className="text-[#333333]">Mate</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#333333] mb-4">새 글 작성</h1>
          <p className="text-lg text-[#787486]">면접 경험이나 유용한 정보를 공유해보세요</p>
        </div>

        {/* Write Form */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-[#333333]">글 작성</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Category Selection */}
            <div>
              <Label htmlFor="category" className="text-base font-medium text-[#333333] mb-3 block">
                카테고리 <span className="text-[#F55546]">*</span>
              </Label>
              <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger className="border-[#D8D8D8] focus:border-[#495AFF]">
                  <SelectValue placeholder="카테고리를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Title Input */}
            <div>
              <Label htmlFor="title" className="text-base font-medium text-[#333333] mb-3 block">
                제목 <span className="text-[#F55546]">*</span>
              </Label>
              <Input
                id="title"
                placeholder="제목을 입력해주세요"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="border-[#D8D8D8] focus:border-[#495AFF] text-lg"
              />
              <div className="mt-1 text-sm text-[#787486]">{formData.title.length}/100자</div>
            </div>

            {/* Content Input */}
            <div>
              <Label htmlFor="content" className="text-base font-medium text-[#333333] mb-3 block">
                내용 <span className="text-[#F55546]">*</span>
              </Label>
              <Textarea
                id="content"
                placeholder="내용을 입력해주세요. 마크다운 문법을 사용할 수 있습니다."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="min-h-[300px] border-[#D8D8D8] focus:border-[#495AFF] resize-none"
              />
              <div className="mt-1 text-sm text-[#787486]">{formData.content.length}/5000자</div>
            </div>

            {/* Tags Input */}
            <div>
              <Label htmlFor="tags" className="text-base font-medium text-[#333333] mb-3 block">
                태그
              </Label>
              <div className="space-y-3">
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#787486] w-4 h-4" />
                  <Input
                    id="tags"
                    placeholder="#태그를 입력하고 Enter 또는 Space를 눌러주세요"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagInput}
                    onBlur={addTag}
                    className="pl-10 border-[#D8D8D8] focus:border-[#495AFF]"
                  />
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#D1D4F8] text-[#495AFF] border-0 px-3 py-1 flex items-center space-x-1"
                      >
                        <span>#{tag}</span>
                        <button
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:bg-[#495AFF] hover:text-white rounded-full p-0.5 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="text-sm text-[#787486]">
                  태그는 최대 10개까지 추가할 수 있습니다. ({tags.length}/10)
                </div>
              </div>
            </div>

            {/* Preview Section */}
            {(formData.title || formData.content) && (
              <div className="border-t border-[#D8D8D8] pt-6">
                <Label className="text-base font-medium text-[#333333] mb-3 block">미리보기</Label>
                <div className="bg-[#F8F9FA] rounded-lg p-6 border border-[#D8D8D8]">
                  <div className="flex items-center space-x-2 mb-3">
                    {formData.category && (
                      <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">
                        {categories.find((cat) => cat.value === formData.category)?.label}
                      </Badge>
                    )}
                    <span className="text-sm text-[#787486]">방금 전</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-3">
                    {formData.title || "제목을 입력해주세요"}
                  </h3>
                  <p className="text-[#787486] leading-relaxed whitespace-pre-line">
                    {formData.content || "내용을 입력해주세요"}
                  </p>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#D8D8D8]">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-[#A3AAF2] text-[#495AFF]">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-[#D8D8D8]">
              <Button variant="outline" onClick={handleCancel} className="border-[#D8D8D8] text-[#787486]">
                취소
              </Button>
              <Button onClick={handleSubmit} className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                <Send className="w-4 h-4 mr-2" />글 등록
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Writing Tips */}
        <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-[#D1D4F8] to-[#A3AAF2]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#333333] mb-3">✍️ 글쓰기 팁</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#333333]">
              <div>
                <h4 className="font-medium mb-2">좋은 제목 작성법</h4>
                <ul className="space-y-1 text-xs">
                  <li>• 구체적이고 명확한 제목</li>
                  <li>• 회사명과 직군 포함</li>
                  <li>• 감정 표현 활용 (🎉, 😊 등)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">유용한 내용 작성법</h4>
                <ul className="space-y-1 text-xs">
                  <li>• 구체적인 경험과 사례</li>
                  <li>• 실제 질문과 답변</li>
                  <li>• 준비 과정과 팁 공유</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
