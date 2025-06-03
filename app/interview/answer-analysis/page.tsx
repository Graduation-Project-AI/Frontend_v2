"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  MessageSquare,
  User,
  Clock,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Brain,
  Target,
  Eye,
  Mic,
} from "lucide-react"
import Link from "next/link"

export default function AnswerAnalysisPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const totalQuestions = 5

  const questionData = [
    {
      id: 1,
      question: "간단한 자기소개를 부탁드립니다.",
      userAnswer: `안녕하세요. 저는 프론트엔드 개발자를 꿈꾸는 이진희입니다. 
      
컴퓨터공학을 전공하며 React와 TypeScript를 주로 사용해 웹 애플리케이션을 개발해왔습니다. 특히 사용자 경험을 중시하며, 직관적이고 접근성이 좋은 인터페이스를 만드는 것에 관심이 많습니다.

최근에는 개인 프로젝트로 Todo 앱을 만들면서 상태 관리와 성능 최적화에 대해 깊이 공부했고, 이를 통해 실무에서도 효율적인 코드를 작성할 수 있는 역량을 기를 수 있었습니다.`,
      improvedAnswer: `안녕하세요. 저는 3년간 프론트엔드 개발 경험을 쌓아온 이진희입니다.

컴퓨터공학을 전공하며 React와 TypeScript 기반의 웹 애플리케이션 개발에 전문성을 갖추었습니다. 특히 사용자 중심의 UI/UX 설계와 성능 최적화에 강점을 가지고 있습니다.

최근 개인 프로젝트에서 React Query와 Zustand를 활용해 상태 관리를 개선하여 렌더링 성능을 30% 향상시킨 경험이 있습니다. 네이버에서도 이러한 기술적 역량과 사용자 경험에 대한 깊은 이해를 바탕으로 더 나은 서비스를 만드는 데 기여하고 싶습니다.`,
      improvements: [
        "지원 회사(네이버)에 대한 언급을 추가하여 지원 의지를 명확히 표현하세요.",
        "구체적인 성과나 수치(30% 성능 향상 등)를 포함하여 임팩트를 강조하세요.",
        "답변 시간을 1분 30초 내외로 간결하게 정리하여 핵심만 전달하세요.",
        "기술 스택을 나열하기보다는 그것으로 달성한 결과에 초점을 맞추세요.",
      ],
      answerTime: 126,
      silenceTime: 8,
      score: 85,
      detailScores: {
        content: 88,
        logic: 82,
        expression: 85,
        eyeContact: 78,
        similarity: 25,
      },
    },
    {
      id: 2,
      question: "우리 회사에 지원하게 된 동기는 무엇인가요?",
      userAnswer: `네이버는 국내 최고의 IT 기업 중 하나로, 혁신적인 기술과 서비스로 많은 사람들의 일상을 변화시키고 있다고 생각합니다.

특히 네이버의 검색 기술과 AI 기술에 대한 투자, 그리고 사용자 중심의 서비스 개발 철학이 저와 잘 맞는다고 느꼈습니다. 저 역시 사용자 경험을 최우선으로 생각하며 개발하는 것을 중요하게 여기기 때문입니다.

또한 네이버 클라우드 플랫폼과 같은 B2B 서비스 영역에서도 성장하고 있는 모습을 보며, 다양한 도메인에서 기술적 도전을 할 수 있을 것이라 기대됩니다.`,
      improvedAnswer: `네이버에 지원한 가장 큰 이유는 '사용자의 일상을 기술로 연결한다'는 비전에 깊이 공감했기 때문입니다.

특히 네이버 검색의 개인화 기술과 하이퍼클로바X 같은 AI 서비스를 보며, 단순한 정보 제공을 넘어 사용자에게 진정한 가치를 제공하는 기술력에 감명받았습니다. 제가 개발한 개인화 추천 시스템 프로젝트 경험을 바탕으로, 네이버의 검색 및 콘텐츠 서비스 개선에 기여할 수 있다고 확신합니다.

또한 네이버 클라우드 플랫폼의 글로벌 확장 전략을 보며, 국내를 넘어 세계 시장에서 경쟁할 수 있는 기술을 함께 만들어가고 싶다는 목표가 생겼습니다.`,
      improvements: [
        "회사의 구체적인 비전이나 가치관을 언급하여 깊이 있는 이해를 보여주세요.",
        "본인의 경험과 회사 사업 영역을 연결하여 기여 방안을 구체적으로 제시하세요.",
        "단순한 칭찬보다는 회사의 특정 기술이나 서비스에 대한 구체적인 관심을 표현하세요.",
        "개인적 성장과 회사 발전이 어떻게 연결될 수 있는지 설명하세요.",
      ],
      answerTime: 98,
      silenceTime: 5,
      score: 92,
      detailScores: {
        content: 94,
        logic: 90,
        expression: 92,
        eyeContact: 85,
        similarity: 25,
      },
    },
    {
      id: 3,
      question: "본인의 가장 큰 강점은 무엇이라고 생각하시나요?",
      userAnswer: `제 가장 큰 강점은 문제 해결 능력과 끈기라고 생각합니다.

개발을 하다 보면 예상치 못한 버그나 기술적 난제를 마주하게 되는데, 저는 이런 상황에서 포기하지 않고 다양한 방법을 시도해보며 해결책을 찾아내는 편입니다.

예를 들어, 최근 프로젝트에서 성능 이슈가 발생했을 때, 단순히 라이브러리를 바꾸는 것이 아니라 근본적인 원인을 파악하기 위해 프로파일링 도구를 사용하고, 코드를 분석해서 결국 메모리 누수 문제를 해결할 수 있었습니다.`,
      improvedAnswer: `제 가장 큰 강점은 체계적인 문제 해결 능력입니다.

최근 팀 프로젝트에서 페이지 로딩 속도가 5초 이상 걸리는 심각한 성능 문제가 발생했습니다. 저는 먼저 Chrome DevTools와 Lighthouse를 활용해 병목 지점을 분석했고, 불필요한 리렌더링과 메모리 누수가 주요 원인임을 파악했습니다.

React.memo와 useMemo를 적절히 활용하고, 이미지 lazy loading을 구현한 결과, 로딩 속도를 2초 이내로 단축시켜 사용자 만족도를 크게 개선했습니다. 이러한 체계적 접근 방식을 통해 네이버의 대용량 트래픽 환경에서도 안정적이고 빠른 서비스를 제공하는 데 기여하고 싶습니다.`,
      improvements: [
        "STAR 구조(상황-과제-행동-결과)를 더 명확하게 적용하여 답변을 구조화하세요.",
        "정량적인 성과(로딩 속도 개선, 성능 향상 등)를 구체적으로 제시하세요.",
        "강점이 지원 직무나 회사에서 어떻게 활용될 수 있는지 연결하여 설명하세요.",
        "단순한 문제 해결을 넘어 그 과정에서 사용한 구체적인 방법론을 언급하세요.",
      ],
      answerTime: 89,
      silenceTime: 12,
      score: 88,
      detailScores: {
        content: 85,
        logic: 90,
        expression: 88,
        eyeContact: 82,
        similarity: 25,
      },
    },
    {
      id: 4,
      question: "팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하시나요?",
      userAnswer: `팀 프로젝트에서 갈등이 생겼을 때는 먼저 상대방의 입장을 이해하려고 노력합니다.

학교 프로젝트에서 팀원들 간에 기술 스택 선택으로 의견이 나뉜 적이 있었습니다. 저는 각자의 의견을 정리해서 장단점을 비교 분석하고, 프로젝트 목표와 일정을 고려해서 최적의 선택을 할 수 있도록 중재 역할을 했습니다.

결과적으로 모든 팀원이 납득할 수 있는 결정을 내릴 수 있었고, 프로젝트도 성공적으로 완료할 수 있었습니다.`,
      improvedAnswer: `팀 갈등 상황에서는 감정보다는 데이터와 논리를 바탕으로 해결책을 찾는 것이 중요하다고 생각합니다.

4명으로 구성된 웹 개발 팀에서 React vs Vue 기술 스택 선택으로 의견이 양분되어 프로젝트 진행이 2주간 지연된 상황이 있었습니다. 저는 각 기술의 학습 곡선, 프로젝트 요구사항, 팀원들의 숙련도를 객관적으로 분석한 비교표를 만들어 팀 회의에서 공유했습니다.

또한 프로토타입을 각각 제작해 실제 성능과 개발 효율성을 테스트한 결과를 제시했고, 최종적으로 팀 전체가 동의하는 기술 스택을 선정할 수 있었습니다. 이후 프로젝트는 예정보다 1주 빠르게 완료되었고, 팀워크도 더욱 단단해졌습니다.`,
      improvements: [
        "갈등 해결 과정에서 사용한 구체적인 방법론이나 도구를 언급하세요.",
        "갈등 해결 후의 정량적 결과(일정 단축, 성과 개선 등)를 제시하세요.",
        "개인의 역할과 기여도를 명확히 하되, 팀워크의 중요성도 강조하세요.",
        "이 경험에서 배운 점과 향후 적용 방안을 구체적으로 설명하세요.",
      ],
      answerTime: 95,
      silenceTime: 7,
      score: 90,
      detailScores: {
        content: 92,
        logic: 88,
        expression: 90,
        eyeContact: 85,
        similarity: 25,
      },
    },
    {
      id: 5,
      question: "5년 후 본인의 모습을 어떻게 그리고 계시나요?",
      userAnswer: `5년 후에는 프론트엔드 분야의 전문가로 성장해 있을 것이라고 생각합니다.

기술적으로는 React, Vue 등 다양한 프레임워크를 능숙하게 다루고, 성능 최적화와 접근성까지 고려한 고품질의 웹 애플리케이션을 개발할 수 있는 개발자가 되고 싶습니다.

또한 단순히 개발만 하는 것이 아니라, 주니어 개발자들을 멘토링하고 팀을 이끌어갈 수 있는 리더십도 갖추고 싶습니다. 궁극적으로는 사용자에게 진정한 가치를 제공하는 서비스를 만드는 데 기여하고 싶습니다.`,
      improvedAnswer: `5년 후에는 네이버의 핵심 프론트엔드 아키텍트로서 대규모 서비스의 기술적 방향성을 제시하는 역할을 하고 싶습니다.

단기적으로는 2-3년 내에 네이버 검색이나 웨일 브라우저 같은 주요 서비스의 프론트엔드 개발을 담당하며, 월 1억 이상의 사용자가 이용하는 서비스의 성능과 사용성을 개선하는 경험을 쌓고 싶습니다.

장기적으로는 팀 리드로서 주니어 개발자들의 성장을 돕고, 새로운 프론트엔드 기술 도입과 개발 문화 개선을 주도하고 싶습니다. 특히 웹 접근성과 성능 최적화 분야에서 네이버의 기술 표준을 만들어가는 전문가가 되어, 더 많은 사용자가 편리하게 이용할 수 있는 서비스를 만드는 데 기여하고 싶습니다.`,
      improvements: [
        "회사의 구체적인 서비스나 조직과 연결된 목표를 제시하세요.",
        "단계별 성장 계획을 구체적인 시간 프레임과 함께 설명하세요.",
        "개인 성장과 회사 기여가 어떻게 연결되는지 명확히 보여주세요.",
        "추상적인 목표보다는 측정 가능한 구체적인 성과 지표를 포함하세요.",
      ],
      answerTime: 102,
      silenceTime: 9,
      score: 87,
      detailScores: {
        content: 85,
        logic: 88,
        expression: 87,
        eyeContact: 80,
        similarity: 25,
      },
    },
  ]

  const currentData = questionData[currentQuestion - 1]
  const averageAnswerTime = 102
  const averageSilenceTime = 8
  const totalInterviewTime = "17분 48초"
  const eyeContactScore = 78
  const eyeStabilityScore = 85

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold">
              <span className="text-[#495AFF]">Interview</span>
              <div className="text-[#333333]">Mate</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2 mb-6">
            <Link href="/home">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-[#787486] hover:bg-gray-100 hover:text-[#333333] transition-colors">
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </button>
            </Link>
            <Link href="/interview/start">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-[#787486] hover:bg-gray-100 hover:text-[#333333] transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">면접 시작하기</span>
              </button>
            </Link>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#495AFF] text-white">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">과거 내역</span>
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#96E2D6] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-[#333333]" />
              </div>
              <div>
                <div className="font-medium text-[#333333]">이진희</div>
                <div className="text-sm text-[#787486]">취업준비생</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-medium text-[#787486] mb-3">카테고리 선택</div>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-[#787486] hover:bg-gray-100 rounded">
                전체
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-[#787486] hover:bg-gray-100 rounded">
                기술면접
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-[#787486] hover:bg-gray-100 rounded">
                인성면접
              </button>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Button className="w-full bg-[#495AFF] hover:bg-[#3A4AE6] text-white">글 작성하기</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#333333]">답변 분석 Report</h1>
              <p className="text-[#787486]">문항별 상세 분석 결과를 확인하세요</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-[#495AFF] text-[#495AFF]">
                <Download className="w-4 h-4 mr-2" />
                다운로드
              </Button>
              <Button variant="outline" size="sm" className="border-[#495AFF] text-[#495AFF]">
                <Share2 className="w-4 h-4 mr-2" />
                공유하기
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Report Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Question Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setCurrentQuestion(num)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                        currentQuestion === num
                          ? "bg-[#495AFF] text-white"
                          : "bg-gray-200 text-[#787486] hover:bg-gray-300"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 1}
                    className="border-[#D8D8D8]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNext}
                    disabled={currentQuestion === totalQuestions}
                    className="border-[#D8D8D8]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Question */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-[#495AFF] text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span>질문 {currentQuestion}</span>
                    <Badge className="bg-white text-[#495AFF]">{currentData.score}점</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#333333] mb-4">{currentData.question}</p>
                  <div className="flex items-center space-x-4 text-sm text-[#787486]">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>
                        답변 시간: {Math.floor(currentData.answerTime / 60)}분 {currentData.answerTime % 60}초
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>침묵 시간: {currentData.silenceTime}초</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Answer */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#333333]">나의 답변</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#F8F9FA] rounded-lg p-6 border-l-4 border-[#495AFF]">
                    <p className="text-[#333333] leading-relaxed whitespace-pre-line">{currentData.userAnswer}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Improved Answer */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#333333]">
                    <Target className="w-5 h-5 text-[#96E2D6]" />
                    <span>개선 답변</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#96E2D6] rounded-lg p-6 border-l-4 border-[#495AFF]">
                    <p className="text-[#333333] leading-relaxed whitespace-pre-line">{currentData.improvedAnswer}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Improvements */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#333333]">
                    <Brain className="w-5 h-5 text-[#F55546]" />
                    <span>개선 방향</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentData.improvements.map((improvement, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-[#FFF5F5] border-l-4 border-[#F55546] rounded-lg"
                      >
                        <div className="w-6 h-6 bg-[#F55546] rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-[#333333] leading-relaxed">{improvement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Analytics */}
            <div className="space-y-6">
              {/* Detail Scores */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm text-[#333333]">세부 평가 항목</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-[#495AFF]" />
                        <span className="text-sm text-[#787486]">답변 내용</span>
                      </div>
                      <span className="text-sm font-medium text-[#333333]">{currentData.detailScores.content}점</span>
                    </div>
                    <Progress value={currentData.detailScores.content} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-[#495AFF]" />
                        <span className="text-sm text-[#787486]">논리성</span>
                      </div>
                      <span className="text-sm font-medium text-[#333333]">{currentData.detailScores.logic}점</span>
                    </div>
                    <Progress value={currentData.detailScores.logic} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Mic className="w-4 h-4 text-[#495AFF]" />
                        <span className="text-sm text-[#787486]">표현력</span>
                      </div>
                      <span className="text-sm font-medium text-[#333333]">
                        {currentData.detailScores.expression}점
                      </span>
                    </div>
                    <Progress value={currentData.detailScores.expression} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-[#495AFF]" />
                        <span className="text-sm text-[#787486]">시선 처리</span>
                      </div>
                      <span className="text-sm font-medium text-[#333333]">
                        {currentData.detailScores.eyeContact}점
                      </span>
                    </div>
                    <Progress value={currentData.detailScores.eyeContact} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-[#495AFF]" />
                        <span className="text-sm text-[#787486]">유사도</span>
                      </div>
                      <span className="text-sm font-medium text-[#333333]">
                        {currentData.detailScores.similarity}점
                      </span>
                    </div>
                    <Progress value={currentData.detailScores.similarity} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Answer Time */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm text-[#333333]">문항 별 평균 답변 시간</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#787486]">현재</span>
                      <span className="text-sm font-medium text-[#333333]">
                        {Math.floor(currentData.answerTime / 60)}분 {currentData.answerTime % 60}초
                      </span>
                    </div>
                    <Progress value={(currentData.answerTime / 180) * 100} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#787486]">평균</span>
                      <span className="text-sm font-medium text-[#333333]">
                        {Math.floor(averageAnswerTime / 60)}분 {averageAnswerTime % 60}초
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Silence Time */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm text-[#333333]">문항 별 평균 침묵 시간</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#787486]">현재</span>
                      <span className="text-sm font-medium text-[#333333]">{currentData.silenceTime}초</span>
                    </div>
                    <Progress value={(currentData.silenceTime / 30) * 100} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#787486]">평균</span>
                      <span className="text-sm font-medium text-[#333333]">{averageSilenceTime}초</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Total Interview Time */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm text-[#333333]">면접 총 소요 시간</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                        className="opacity-20"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#495AFF"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(17.8 / 30) * 251.2} 251.2`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#333333]">{totalInterviewTime}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eye Contact Analysis */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-sm text-[#333333]">시선 분석 결과</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#787486]">시선 집중도</span>
                      <span className="text-sm font-medium text-[#333333]">{eyeContactScore}%</span>
                    </div>
                    <Progress value={eyeContactScore} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#787486]">시선 안정성</span>
                      <span className="text-sm font-medium text-[#333333]">{eyeStabilityScore}%</span>
                    </div>
                    <Progress value={eyeStabilityScore} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
