"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Home, MessageSquare, User, Clock, BarChart3, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function AIReportPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const totalQuestions = 5

  const questionData = [
    {
      id: 1,
      question: "간단한 자기소개를 부탁드립니다.",
      userAnswer: `안녕하세요. 저는 프론트엔드 개발자를 꿈꾸는 이진희입니다. 
      
컴퓨터공학을 전공하며 React와 TypeScript를 주로 사용해 웹 애플리케이션을 개발해왔습니다. 특히 사용자 경험을 중시하며, 직관적이고 접근성이 좋은 인터페이스를 만드는 것에 관심이 많습니다.

최근에는 개인 프로젝트로 Todo 앱을 만들면서 상태 관리와 성능 최적화에 대해 깊이 공부했고, 이를 통해 실무에서도 효율적인 코드를 작성할 수 있는 역량을 기를 수 있었습니다.`,
      aiAnswer: `안녕하세요. 저는 [이름]입니다. 
      
[전공/학교]에서 [전공명]을 전공하며 [관련 기술/경험]을 쌓아왔습니다. 특히 [구체적인 관심 분야나 강점]에 대한 깊은 관심을 가지고 있으며, [구체적인 프로젝트나 경험 사례]를 통해 실무 역량을 기를 수 있었습니다.

[회사명]에 지원한 이유는 [구체적인 지원 동기]이며, 제가 가진 [구체적인 기술이나 경험]을 바탕으로 팀에 기여하고 싶습니다.`,
      improvements: [
        "지원 회사에 대한 언급이 없어 아쉽습니다. 회사 지원 동기를 간략히 포함해보세요.",
        "구체적인 성과나 수치를 포함하면 더 임팩트 있는 자기소개가 될 것입니다.",
        "답변 시간이 다소 길었습니다. 1분 30초 내외로 간결하게 정리해보세요.",
      ],
      answerTime: 126, // seconds
      silenceTime: 8, // seconds
      score: 85,
    },
    {
      id: 2,
      question: "우리 회사에 지원하게 된 동기는 무엇인가요?",
      userAnswer: `네이버는 국내 최고의 IT 기업 중 하나로, 혁신적인 기술과 서비스로 많은 사람들의 일상을 변화시키고 있다고 생각합니다.

특히 네이버의 검색 기술과 AI 기술에 대한 투자, 그리고 사용자 중심의 서비스 개발 철학이 저와 잘 맞는다고 느꼈습니다. 저 역시 사용자 경험을 최우선으로 생각하며 개발하는 것을 중요하게 여기기 때문입니다.

또한 네이버 클라우드 플랫폼과 같은 B2B 서비스 영역에서도 성장하고 있는 모습을 보며, 다양한 도메인에서 기술적 도전을 할 수 있을 것이라 기대됩니다.`,
      aiAnswer: `[회사명]에 지원하게 된 주된 이유는 [구체적인 회사의 강점이나 비전]에 깊이 공감했기 때문입니다.

특히 [회사의 구체적인 사업 영역이나 기술]에 대한 관심이 많았는데, [관련된 개인 경험이나 프로젝트]를 통해 이 분야에서 성장하고 싶다는 확신을 갖게 되었습니다.

또한 [회사 문화나 가치관]이 제가 추구하는 방향과 일치한다고 생각하며, [구체적인 기여 방안]을 통해 회사와 함께 성장하고 싶습니다.`,
      improvements: [
        "회사에 대한 이해도가 높아 좋습니다. 더 구체적인 사업 영역을 언급하면 더욱 좋겠습니다.",
        "본인이 어떻게 기여할 수 있는지에 대한 내용을 추가하면 완성도가 높아질 것입니다.",
      ],
      answerTime: 98,
      silenceTime: 5,
      score: 92,
    },
    {
      id: 3,
      question: "본인의 가장 큰 강점은 무엇이라고 생각하시나요?",
      userAnswer: `제 가장 큰 강점은 문제 해결 능력과 끈기라고 생각합니다.

개발을 하다 보면 예상치 못한 버그나 기술적 난제를 마주하게 되는데, 저는 이런 상황에서 포기하지 않고 다양한 방법을 시도해보며 해결책을 찾아내는 편입니다.

예를 들어, 최근 프로젝트에서 성능 이슈가 발생했을 때, 단순히 라이브러리를 바꾸는 것이 아니라 근본적인 원인을 파악하기 위해 프로파일링 도구를 사용하고, 코드를 분석해서 결국 메모리 누수 문제를 해결할 수 있었습니다.`,
      aiAnswer: `제 가장 큰 강점은 [구체적인 강점]입니다.

[강점을 뒷받침하는 구체적인 사례나 경험]을 통해 이 강점을 발휘할 수 있었습니다. 예를 들어, [STAR 기법을 활용한 구체적인 상황 설명]에서 [본인의 행동과 결과]를 통해 [정량적인 성과]를 달성할 수 있었습니다.

이러한 강점을 바탕으로 [지원 직무]에서도 [구체적인 기여 방안]을 통해 팀과 회사에 도움이 되고 싶습니다.`,
      improvements: [
        "STAR 구조가 잘 적용된 좋은 답변입니다.",
        "정량적인 성과나 결과를 더 구체적으로 제시하면 더욱 설득력이 있을 것입니다.",
        "이 강점이 지원 직무에서 어떻게 활용될 수 있는지 연결해보세요.",
      ],
      answerTime: 89,
      silenceTime: 12,
      score: 88,
    },
    {
      id: 4,
      question: "팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하시나요?",
      userAnswer: `팀 프로젝트에서 갈등이 생겼을 때는 먼저 상대방의 입장을 이해하려고 노력합니다.

학교 프로젝트에서 팀원들 간에 기술 스택 선택으로 의견이 나뉜 적이 있었습니다. 저는 각자의 의견을 정리해서 장단점을 비교 분석하고, 프로젝트 목표와 일정을 고려해서 최적의 선택을 할 수 있도록 중재 역할을 했습니다.

결과적으로 모든 팀원이 납득할 수 있는 결정을 내릴 수 있었고, 프로젝트도 성공적으로 완료할 수 있었습니다.`,
      aiAnswer: `팀 프로젝트에서 갈등이 발생했을 때는 [갈등 해결 접근 방식]을 통해 해결합니다.

[구체적인 갈등 상황]에서 [본인이 취한 구체적인 행동들]을 통해 문제를 해결했습니다. 특히 [의사소통 방법이나 중재 과정]을 거쳐 [모든 팀원이 만족할 수 있는 해결책]을 도출할 수 있었습니다.

이 경험을 통해 [배운 점이나 성장한 부분]을 얻을 수 있었고, 향후 유사한 상황에서도 [적용할 수 있는 원칙이나 방법]을 활용할 수 있을 것입니다.`,
      improvements: [
        "갈등 해결 과정이 체계적으로 잘 설명되었습니다.",
        "구체적인 결과나 성과를 수치로 제시하면 더욱 좋겠습니다.",
        "이 경험에서 배운 점을 명확히 언급해보세요.",
      ],
      answerTime: 95,
      silenceTime: 7,
      score: 90,
    },
    {
      id: 5,
      question: "5년 후 본인의 모습을 어떻게 그리고 계시나요?",
      userAnswer: `5년 후에는 프론트엔드 분야의 전문가로 성장해 있을 것이라고 생각합니다.

기술적으로는 React, Vue 등 다양한 프레임워크를 능숙하게 다루고, 성능 최적화와 접근성까지 고려한 고품질의 웹 애플리케이션을 개발할 수 있는 개발자가 되고 싶습니다.

또한 단순히 개발만 하는 것이 아니라, 주니어 개발자들을 멘토링하고 팀을 이끌어갈 수 있는 리더십도 갖추고 싶습니다. 궁극적으로는 사용자에게 진정한 가치를 제공하는 서비스를 만드는 데 기여하고 싶습니다.`,
      aiAnswer: `5년 후에는 [구체적인 직책이나 역할]에서 [구체적인 전문성이나 역량]을 갖춘 전문가로 성장해 있을 것입니다.

기술적으로는 [구체적인 기술 스택이나 전문 분야]에서 깊이 있는 전문성을 쌓고, [팀이나 조직에서의 역할]을 통해 더 큰 임팩트를 만들어내고 싶습니다.

또한 [개인적 성장 목표]와 [회사 기여 방안]을 통해 개인과 조직이 함께 성장할 수 있는 선순환 구조를 만들어가고 싶습니다.`,
      improvements: [
        "구체적이고 현실적인 목표 설정이 좋습니다.",
        "회사의 비전과 연결된 목표를 제시하면 더욱 좋겠습니다.",
        "단계별 성장 계획을 더 구체적으로 설명해보세요.",
      ],
      answerTime: 102,
      silenceTime: 9,
      score: 87,
    },
  ]

  const currentData = questionData[currentQuestion - 1]
  const averageAnswerTime = 102 // seconds
  const averageSilenceTime = 8 // seconds
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
              <h1 className="text-2xl font-bold text-[#333333]">AI 결과 Report</h1>
              <p className="text-[#787486]">면접 분석 결과를 확인하세요</p>
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
                  <div className="bg-[#F8F9FA] rounded-lg p-6">
                    <p className="text-[#333333] leading-relaxed whitespace-pre-line">{currentData.userAnswer}</p>
                  </div>
                </CardContent>
              </Card>

              {/* AI Model Answer */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#333333]">AI가 생성한 모범 답안</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#D1D4F8] rounded-lg p-6">
                    <p className="text-[#333333] leading-relaxed whitespace-pre-line">{currentData.aiAnswer}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Improvements */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#333333]">개선 방향</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentData.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-[#96E2D6] rounded-lg">
                        <div className="w-6 h-6 bg-[#495AFF] rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
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
