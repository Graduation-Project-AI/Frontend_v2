"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, ArrowLeft, Send, User } from "lucide-react"
import Link from "next/link"

interface Comment {
  id: number
  author: string
  content: string
  timeAgo: string
  replies?: Comment[]
}

export default function CommunityPostPage({ params }: { params: { id: string } }) {
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  // 실제로는 params.id를 사용해서 데이터를 가져올 것
  const post = {
    id: 1,
    title: "네이버 면접 후기 - 프론트엔드 개발자",
    content: `오늘 네이버 프론트엔드 개발자 면접을 봤습니다. 예상 질문과 실제 질문이 많이 달랐어요.

**면접 과정:**
1차: 코딩테스트 (해커랭크)
2차: 기술면접 (1시간)
3차: 임원면접 (30분)

**실제 질문들:**
- 자기소개를 해주세요
- React와 Vue의 차이점은 무엇인가요?
- 상태관리는 어떻게 하시나요?
- 성능 최적화 경험이 있나요?
- 팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하시나요?

**느낀 점:**
기술적인 질문보다는 경험과 문제해결 능력을 중점적으로 물어보더라구요. 
특히 실제 프로젝트 경험에 대해 깊이 있게 질문했습니다.

**준비 팁:**
- 포트폴리오의 모든 프로젝트에 대해 상세히 설명할 수 있어야 함
- 기술 선택 이유와 트레이드오프에 대해 생각해보기
- 팀워크 경험 준비하기

결과는 아직 안 나왔지만 최선을 다했다고 생각합니다!`,
    author: "익명",
    category: "면접후기",
    timeAgo: "2시간 전",
    tags: ["네이버", "프론트엔드", "면접후기"],
  }

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "면접준비생A",
      content: "정말 유용한 후기네요! 특히 실제 질문들이 도움이 많이 됩니다. 혹시 기술면접에서 코딩 문제도 나왔나요?",
      timeAgo: "1시간 전",
      replies: [
        {
          id: 2,
          author: "익명",
          content: "네, 간단한 알고리즘 문제 하나 나왔어요. 배열에서 특정 조건을 만족하는 요소 찾기 문제였습니다.",
          timeAgo: "50분 전",
        },
      ],
    },
    {
      id: 3,
      author: "개발자지망생",
      content: "포트폴리오 준비할 때 어떤 점을 가장 중요하게 생각하셨나요? 프로젝트 개수보다는 깊이가 중요할까요?",
      timeAgo: "45분 전",
    },
    {
      id: 4,
      author: "취준생123",
      content: "임원면접은 어떤 분위기였나요? 압박이 심했나요?",
      timeAgo: "30분 전",
    },
    {
      id: 5,
      author: "프론트개발자",
      content: "React 관련 질문이 많이 나왔나요? 저도 네이버 지원 예정인데 어떤 부분을 더 공부해야 할지 궁금합니다.",
      timeAgo: "20분 전",
    },
  ])

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: "현재사용자",
        content: newComment,
        timeAgo: "방금 전",
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  const handleSubmitReply = (parentId: number) => {
    if (replyContent.trim()) {
      const reply: Comment = {
        id: Date.now(),
        author: "현재사용자",
        content: replyContent,
        timeAgo: "방금 전",
      }

      setComments(
        comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), reply],
            }
          }
          return comment
        }),
      )

      setReplyContent("")
      setReplyTo(null)
    }
  }

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${isReply ? "ml-12 mt-4" : ""}`}>
      <div className="flex items-start space-x-3">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-[#96E2D6] text-[#333333]">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="bg-[#F8F9FA] rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-medium text-[#333333]">{comment.author}</span>
              <span className="text-sm text-[#787486]">{comment.timeAgo}</span>
            </div>
            <p className="text-[#333333] leading-relaxed">{comment.content}</p>
          </div>
          {!isReply && (
            <div className="mt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                className="text-[#787486] hover:text-[#495AFF] p-0 h-auto"
              >
                답글
              </Button>
            </div>
          )}

          {replyTo === comment.id && (
            <div className="mt-3 ml-4">
              <div className="flex space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-[#495AFF] text-white">
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="답글을 작성해주세요..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="min-h-[80px] border-[#D8D8D8] focus:border-[#495AFF] resize-none"
                  />
                  <div className="flex justify-end space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setReplyTo(null)}
                      className="border-[#D8D8D8] text-[#787486]"
                    >
                      취소
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleSubmitReply(comment.id)}
                      className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white"
                    >
                      답글 작성
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {comment.replies && comment.replies.map((reply) => renderComment(reply, true))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community" className="flex items-center space-x-2 text-[#787486] hover:text-[#495AFF]">
              <ArrowLeft className="w-5 h-5" />
              <span>커뮤니티로 돌아가기</span>
            </Link>
            <div className="text-xl font-bold">
              <span className="text-[#495AFF]">Interview</span>
              <span className="text-[#333333]">Mate</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Post Content */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-[#D1D4F8] text-[#495AFF] border-0">{post.category}</Badge>
              <span className="text-sm text-[#787486]">{post.timeAgo}</span>
            </div>
            <CardTitle className="text-2xl font-bold text-[#333333] leading-tight">{post.title}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-[#787486]">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{comments.length}개의 댓글</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="text-[#333333] leading-relaxed whitespace-pre-line">{post.content}</div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#D8D8D8]">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-[#A3AAF2] text-[#495AFF]">
                  #{tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-[#495AFF]" />
              <span className="text-[#333333]">댓글 {comments.length}개</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Comment Form */}
            <div className="border-b border-[#D8D8D8] pb-6">
              <div className="flex space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-[#495AFF] text-white">
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="댓글을 작성해주세요..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[100px] border-[#D8D8D8] focus:border-[#495AFF] resize-none"
                  />
                  <div className="flex justify-end mt-3">
                    <Button onClick={handleSubmitComment} className="bg-[#495AFF] hover:bg-[#3A4AE6] text-white">
                      <Send className="w-4 h-4 mr-2" />
                      댓글 작성
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">{comments.map((comment) => renderComment(comment))}</div>

            {comments.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-[#D8D8D8] mx-auto mb-4" />
                <p className="text-[#787486]">아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
