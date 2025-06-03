"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Clock, Target, Brain, MessageSquare, BarChart3, ArrowRight, Eye, Mic } from "lucide-react"
import Link from "next/link"

export default function AIInterviewResultsPage() {
  const overallScore = 87
  const categories = [
    { name: "답변 내용", score: 89, color: "bg-[#96E2D6]", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "논리성", score: 85, color: "bg-[#495AFF]", icon: <Brain className="w-4 h-4" /> },
    { name: "표현력", score: 82, color: "bg-[#A3AAF2]", icon: <Mic className="w-4 h-4" /> },
    { name: "시선 처리", score: 78, color: "bg-[#F55546]", icon: <Eye className="w-4 h-4" /> },
    { name: "유사도", score: 23, color: "bg-[#96E2D6]", icon: <Target className="w-4 h-4" /> },
  ]

  const questionAnalysis = [
    {
      question: "간단한 자기소개를 부탁드립니다.",
      score: 94,
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
    },
    {
      question: "우리 회사에 지원하게 된 동기는 무엇인가요?",
      score: 87,
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
    },
    {
      question: "본인의 가장 큰 강점은 무엇이라고 생각하시나요?",
      score: 81,
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
    },
    {
      question: "팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하시나요?",
      score: 90,
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
    },
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
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#495AFF] to-[#A3AAF2] rounded-full mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">AI 면접 결과 분석</h1>
          <p className="text-xl text-[#787486] max-w-2xl mx-auto">
            AI가 분석한 당신의 면접 성과와 개선점을 확인해보세요
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-[#D1D4F8] to-[#A3AAF2]">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-[#495AFF] to-[#A3AAF2] rounded-full mb-6">
                <span className="text-4xl font-bold text-white">{overallScore}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#333333] mb-2">전체 점수</h2>
              <p className="text-[#787486] mb-6">우수한 점수입니다! STAR 구조 활용과 논리적 답변이 인상적이었습니다.</p>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">면접 시간</div>
                  <div className="font-semibold text-[#333333]">24분 15초</div>
                </div>
                <div className="text-center">
                  <MessageSquare className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">답변한 질문</div>
                  <div className="font-semibold text-[#333333]">8개</div>
                </div>
                <div className="text-center">
                  <Target className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">평균 답변 시간</div>
                  <div className="font-semibold text-[#333333]">3분 2초</div>
                </div>
                <div className="text-center">
                  <Eye className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">평균 시선 처리</div>
                  <div className="font-semibold text-[#333333]">78%</div>
                </div>
                <div className="text-center">
                  <Target className="w-6 h-6 text-[#787486] mx-auto mb-2" />
                  <div className="text-sm text-[#787486]">답변 유사도</div>
                  <div className="font-semibold text-[#333333]">23%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Scores */}
          <div className="lg:col-span-2 space-y-8">
            {/* Category Scores */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-[#495AFF]" />
                  <span className="text-[#333333]">세부 평가 항목</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {categories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-[#495AFF]">{category.icon}</div>
                        <span className="font-medium text-[#333333]">{category.name}</span>
                      </div>
                      <span className="font-semibold text-[#787486]">{category.score}점</span>
                    </div>
                    <Progress value={category.score} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Question Analysis */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-[#495AFF]" />
                  <span className="text-[#333333]">질문별 분석</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {questionAnalysis.map((item, index) => (
                  <div key={index} className="border border-[#D8D8D8] rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-[#333333] text-lg">{item.question}</h4>
                      <Badge
                        className={
                          item.score >= 85
                            ? "bg-[#96E2D6] text-[#333333]"
                            : item.score >= 70
                              ? "bg-[#A3AAF2] text-[#333333]"
                              : "bg-[#F55546] text-white"
                        }
                      >
                        {item.score}점
                      </Badge>
                    </div>

                    {/* 나의 답변 */}
                    <div className="mb-6">
                      <h5 className="font-medium text-[#333333] mb-3 flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-[#495AFF]" />
                        <span>나의 답변</span>
                      </h5>
                      <div className="bg-[#F8F9FA] rounded-lg p-4 border-l-4 border-[#495AFF]">
                        <p className="text-[#333333] leading-relaxed whitespace-pre-line text-sm">{item.userAnswer}</p>
                      </div>
                    </div>

                    {/* 개선 방향 */}
                    <div className="mb-6">
                      <h5 className="font-medium text-[#333333] mb-3 flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-[#F55546]" />
                        <span>개선 방향</span>
                      </h5>
                      <div className="space-y-2">
                        {item.improvements.map((improvement, improvementIndex) => (
                          <div
                            key={improvementIndex}
                            className="flex items-start space-x-3 p-3 bg-[#FFF5F5] border-l-4 border-[#F55546] rounded"
                          >
                            <div className="w-5 h-5 bg-[#F55546] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                              {improvementIndex + 1}
                            </div>
                            <p className="text-[#333333] text-sm leading-relaxed">{improvement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 개선 답안 */}
                    <div>
                      <h5 className="font-medium text-[#333333] mb-3 flex items-center space-x-2">
                        <Target className="w-4 h-4 text-[#96E2D6]" />
                        <span>개선 답안</span>
                      </h5>
                      <div className="bg-[#96E2D6] rounded-lg p-4 border-l-4 border-[#495AFF]">
                        <p className="text-[#333333] leading-relaxed whitespace-pre-line text-sm">
                          {item.improvedAnswer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="mt-12 border-0 shadow-xl bg-[#495AFF]">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">다음 단계로 나아가세요</h3>
            <p className="text-[#A3AAF2] mb-6 max-w-2xl mx-auto">
              우수한 결과를 바탕으로 더 도전적인 면접에 도전하거나, 다른 직군의 면접도 연습해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/interview/start">
                <Button size="lg" className="bg-white text-[#495AFF] hover:bg-gray-50">
                  다시 면접 도전하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
