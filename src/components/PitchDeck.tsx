import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Users, Target, TrendingUp, Shield, Zap, DollarSign, Lightbulb, Award } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Olive AI",
    subtitle: "We See What You Don't",
    content: (
      <div className="text-center space-y-8">
        <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Olive AI
        </div>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
          Uncovering patterns, causes, and opportunities buried in your data—connecting them to the real world.
        </p>
        <div className="flex items-center justify-center gap-4 text-lg">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <span>From Reaction to Foresight</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "Data Chaos is Killing Business Intelligence",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-interactive border-destructive/20">
            <CardContent className="text-center p-8">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-semibold mb-4">Disconnected Data Silos</h3>
              <p>HR, finance, product, CRM, ops data live in isolation—no unified view</p>
            </CardContent>
          </Card>
          <Card className="card-interactive border-destructive/20">
            <CardContent className="text-center p-8">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-4">Manual, Delayed Insights</h3>
              <p>Weeks of SQL queries and dashboard building for basic answers</p>
            </CardContent>
          </Card>
          <Card className="card-interactive border-destructive/20">
            <CardContent className="text-center p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-4">Zero External Context</h3>
              <p>Tools ignore market trends, weather, news—missing the real drivers</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-xl text-muted-foreground">
            <strong>Result:</strong> Reactive decisions, missed opportunities, and expensive analyst teams
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "The Solution",
    subtitle: "Three Pillars of Intelligence",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-interactive border-primary/20">
            <CardContent className="text-center p-8">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Rich and Easy to Digest Insights</h3>
              <div className="space-y-3 text-sm text-left">
                <p>• Conversational insights and interactive visuals</p>
                <p>• Curated narratives for easy consumption</p>
                <p>• Always-on insight mining in the background</p>
              </div>
            </CardContent>
          </Card>
          <Card className="card-interactive border-primary/20">
            <CardContent className="text-center p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Focus on Outcomes and Answers</h3>
              <div className="space-y-3 text-sm text-left">
                <p>• Move from What → Why → What will happen → How to make it happen</p>
                <p>• Bespoke models built at speed for specific business outcomes</p>
              </div>
            </CardContent>
          </Card>
          <Card className="card-interactive border-primary/20">
            <CardContent className="text-center p-8">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Smart AI Readiness for Data</h3>
              <div className="space-y-3 text-sm text-left">
                <p>• Join disparate data sets through custom domains</p>
                <p>• Access data through virtual connections</p>
                <p>• Clean up data as you bring it in for insights</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Built for 2 Worlds",
    subtitle: "Dual Market Leadership Strategy",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="card-interactive border-primary/20 h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Live Services</h3>
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-lg mb-4">Real-time insights for gaming, apps, and platforms</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Instant player behavior analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Performance issue detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Market shift response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Revenue optimization</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-semibold">Target: Gaming companies, SaaS platforms, mobile apps</p>
              </div>
            </CardContent>
          </Card>
          <Card className="card-interactive border-primary/20 h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Enterprise Operations</h3>
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-lg mb-4">Self-serve analytics for business functions</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>HR workforce analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Finance performance insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Legal risk assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Operations optimization</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-semibold">Target: F500 companies, mid-market enterprises</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            <strong>Strategy:</strong> Dominate real-time analytics for live services, then expand into enterprise operations with proven ROI
          </p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "The Game Changer",
    subtitle: "Nuggets™ - Patented Insight Engine",
    content: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-primary mb-4">Nuggets™</div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our patented (pending) insight engine doesn't just analyze data—it understands intent, pulls external context, and delivers actionable narratives in seconds.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="card-interactive">
            <CardContent className="text-center p-6">
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="font-semibold mb-2">Natural Language</h3>
              <p className="text-sm">Ask questions like talking to a colleague</p>
            </CardContent>
          </Card>
          <Card className="card-interactive">
            <CardContent className="text-center p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold mb-2">Data Fusion</h3>
              <p className="text-sm">Internal + external data aligned in real-time</p>
            </CardContent>
          </Card>
          <Card className="card-interactive">
            <CardContent className="text-center p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-semibold mb-2">Pattern Recognition</h3>
              <p className="text-sm">AI finds hidden trends and drivers</p>
            </CardContent>
          </Card>
          <Card className="card-interactive">
            <CardContent className="text-center p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Narrative Output</h3>
              <p className="text-sm">Insight + Why + Action in every response</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Market Opportunity",
    subtitle: "Massive TAM in Enterprise Analytics",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$274B</div>
              <p className="text-lg text-muted-foreground">Global Analytics Market by 2030</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span>25% CAGR growth rate</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="h-6 w-6 text-primary" />
                <span>87% of enterprises struggle with data silos</span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-6 w-6 text-primary" />
                <span>Data scientist shortage: 2.7M unfilled roles</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Target Markets</h3>
            <div className="space-y-4">
              <Card className="card-interactive">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">Live Services</h4>
                  <p className="text-sm">Gaming, apps, platforms needing real-time insights</p>
                </CardContent>
              </Card>
              <Card className="card-interactive">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">Enterprise Operations</h4>
                  <p className="text-sm">HR, Finance, Legal teams needing self-serve analytics</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Competitive Advantage",
    subtitle: "What Others Can't Do",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-destructive">Traditional Tools</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm">✗</div>
                <span>Tell you WHAT happened</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm">✗</div>
                <span>Require manual dashboard building</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm">✗</div>
                <span>Ignore external factors</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm">✗</div>
                <span>Need technical expertise</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Olive AI</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</div>
                <span>Explains WHY and WHAT'S NEXT</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</div>
                <span>Automated insight generation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</div>
                <span>External data correlation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</div>
                <span>Natural language queries</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</div>
                <span>Narrative storytelling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Business Model",
    subtitle: "Scalable SaaS with Enterprise Focus",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-interactive border-primary/20">
            <CardContent className="text-center p-8">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Freemium + Enterprise</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Free:</strong> Basic queries, limited data sources</p>
                <p><strong>Pro:</strong> $99/user/month - Advanced features</p>
                <p><strong>Enterprise:</strong> $500K+ - Custom integrations</p>
              </div>
            </CardContent>
          </Card>
          <Card className="card-interactive border-primary/20">
            <CardContent className="text-center p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Land & Expand</h3>
              <div className="space-y-2 text-sm">
                <p>Start with single department</p>
                <p>Prove ROI quickly</p>
                <p>Expand across organization</p>
                <p>High retention through stickiness</p>
              </div>
            </CardContent>
          </Card>
          <Card className="card-interactive border-primary/20">
            <CardContent className="text-center p-8">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Revenue Projections</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Year 1:</strong> $2M ARR</p>
                <p><strong>Year 3:</strong> $25M ARR</p>
                <p><strong>Year 5:</strong> $100M ARR</p>
                <p>Target: 85% gross margins</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Security & Trust",
    subtitle: "Enterprise-Ready from Day One",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="card-interactive">
            <CardContent className="p-8">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">SOC 2 Type II</h3>
              <p>Certified security controls and compliance framework</p>
            </CardContent>
          </Card>
          <Card className="card-interactive">
            <CardContent className="p-8">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">GDPR Compliant</h3>
              <p>Full data privacy protection for global enterprise customers</p>
            </CardContent>
          </Card>
          <Card className="card-interactive">
            <CardContent className="p-8">
              <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Transparent AI</h3>
              <p>Explainable insights with role-based access controls</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for the most security-conscious enterprises with bank-level encryption, 
            audit trails, and complete data sovereignty options.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "IP & Innovation",
    subtitle: "Protected Competitive Moat",
    content: (
      <div className="space-y-8 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-3xl font-bold text-primary mb-4">Patent Portfolio</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proprietary Nuggets™ architecture combines intent understanding, 
            real-time data fusion, and contextual narrative generation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="card-interactive">
            <CardContent className="p-6">
              <h4 className="font-semibold text-primary mb-3">Patent Applications Filed</h4>
              <ul className="text-left space-y-2 text-sm">
                <li>• Natural language to insight mapping</li>
                <li>• External data correlation algorithms</li>
                <li>• Automated narrative generation</li>
                <li>• Context-aware data fusion</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="card-interactive">
            <CardContent className="p-6">
              <h4 className="font-semibold text-primary mb-3">Trade Secrets</h4>
              <ul className="text-left space-y-2 text-sm">
                <li>• Intent classification models</li>
                <li>• Real-time data integration layer</li>
                <li>• Narrative template engine</li>
                <li>• Contextual relevance scoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "The Ask",
    subtitle: "Series A: $15M to Scale & Dominate",
    content: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-primary mb-4">$15M Series A</div>
          <p className="text-xl text-muted-foreground">18-month runway to $25M ARR</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Use of Funds</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                <span>Engineering & Product</span>
                <span className="font-semibold">40% - $6M</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                <span>Sales & Marketing</span>
                <span className="font-semibold">35% - $5.25M</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                <span>Enterprise Security</span>
                <span className="font-semibold">15% - $2.25M</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                <span>Operations</span>
                <span className="font-semibold">10% - $1.5M</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Milestones</h3>
            <div className="space-y-4">
              <Card className="card-interactive">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">6 Months</h4>
                  <p className="text-sm">10 enterprise customers, $2M ARR</p>
                </CardContent>
              </Card>
              <Card className="card-interactive">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">12 Months</h4>
                  <p className="text-sm">50 enterprise customers, $10M ARR</p>
                </CardContent>
              </Card>
              <Card className="card-interactive">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">18 Months</h4>
                  <p className="text-sm">100+ customers, $25M ARR, Series B ready</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "Thank You",
    subtitle: "Questions & Discussion",
    content: (
      <div className="text-center space-y-8">
        <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Olive AI
        </div>
        <div className="space-y-4">
          <p className="text-2xl">Ready to transform how enterprises see their data?</p>
          <p className="text-xl text-muted-foreground">
            Your data already has the answers. Olive is how you hear them.
          </p>
        </div>
        <div className="space-y-4">
          <Button size="lg" className="mr-4">
            Schedule Follow-Up
          </Button>
          <Button variant="outline" size="lg">
            Request Demo
          </Button>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">
          <p>© 2025 Olive AI, Inc. • Nuggets™ Patent Pending</p>
        </div>
      </div>
    )
  }
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'Escape') {
        setIsPresenting(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      {!isPresenting && (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">Olive AI Pitch Deck</h1>
              <div className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} of {slides.length}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsPresenting(true)}>
                <Play className="h-4 w-4 mr-2" />
                Present
              </Button>
            </div>
          </div>
        </header>
      )}

      {/* Slide Navigation Dots */}
      {!isPresenting && (
        <div className="fixed left-1/2 bottom-8 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-2 bg-background/80 backdrop-blur px-4 py-2 rounded-full border">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Slide Content */}
      <main className={`${isPresenting ? 'min-h-screen' : 'min-h-[calc(100vh-4rem)]'} flex flex-col justify-center p-8`}>
        <div className="max-w-7xl mx-auto w-full">
          {/* Slide Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {currentSlideData.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {currentSlideData.subtitle}
            </p>
          </div>

          {/* Slide Content */}
          <div className="animate-fade-in" key={currentSlide}>
            {currentSlideData.content}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-8 right-8 flex justify-between items-center z-40">
        <Button
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`${isPresenting ? 'opacity-20 hover:opacity-100' : ''} transition-opacity`}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {isPresenting && (
          <Button
            variant="outline"
            onClick={() => setIsPresenting(false)}
            className="opacity-20 hover:opacity-100 transition-opacity"
          >
            Exit Presentation
          </Button>
        )}

        <Button
          variant="outline"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`${isPresenting ? 'opacity-20 hover:opacity-100' : ''} transition-opacity`}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}