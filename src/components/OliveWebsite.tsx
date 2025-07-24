
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { AnimationPlaceholder } from "@/components/AnimationPlaceholder";
import { Eye, Brain, Zap, Shield, Play, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

export default function OliveWebsite() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("Component mounted, checking video element");
    if (videoRef.current) {
      console.log("Video element found, attempting to load");
      videoRef.current.load();
    }
  }, []);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log("Video failed to load:", e.currentTarget.error);
    setVideoError(true);
    setVideoLoaded(false);
  };

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
    setVideoError(false);
    const video = e.currentTarget;
    video.play().catch(err => console.log("Autoplay failed:", err));
  };

  const handleCanPlay = () => {
    console.log("Video can play");
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Manual play failed:", err));
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <Header />

      {/* Hero Section - Content First, Video Below */}
      <section className="min-h-screen flex flex-col pt-24 pb-20">
        {/* Hero Content at Top */}
        <div className="flex-shrink-0 flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10">
          <div className="hero-title">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pink-300">
              We See What You Don't.
            </h1>
          </div>
          
          <div className="hero-subtitle">
            <p className="text-xl mb-6 max-w-2xl">
              Olive uncovers patterns, causes, and opportunities buried in your data—and connects them to the real world. So you can move from reaction to foresight.
            </p>
          </div>
          
          <div className="hero-buttons flex gap-4 flex-wrap justify-center">
            <Button variant="default" size="lg" className="gradient-olive border-0 hover:scale-105 transition-spring gap-2">
              <Play className="w-4 h-4" />
              See Nuggets in Action
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-spring gap-2">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Video Section Below */}
        <div className="flex-grow relative overflow-hidden">
          {!videoError ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onError={handleVideoError}
              onLoadedData={handleVideoLoad}
              onCanPlay={handleCanPlay}
              style={{ display: videoLoaded ? 'block' : 'none' }}
            >
              <source src="/hero-background.mp4" type="video/mp4" />
            </video>
          ) : null}
          
          {/* Fallback background for video area */}
          <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 ${videoLoaded && !videoError ? 'opacity-30' : 'opacity-100'} transition-opacity duration-1000`} />
          
          {/* Show video placeholder if there's an error */}
          {videoError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <VideoPlaceholder 
                title="Hero Background Video"
                description="Background video placeholder"
                aspectRatio="16:9"
                size="xl"
                showControls={false}
              />
            </div>
          )}
        </div>
      </section>

      {/* Why Olive Section */}
      <section className="min-h-screen bg-white text-black py-20 px-10 relative flex flex-col justify-center">
        <div className="absolute top-10 right-10">
          <AnimationPlaceholder 
            type="sparkles" 
            title="Data Visualization"
            description="Animated data connections"
            size="md"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Traditional Tools Stop at What. Olive Shows You Why—and What's Next.
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
          Most tools can tell you what happened. Few can tell you why. None can tell you what to do about it. Olive changes that—with always-on insight mining that explains your metrics, connects them to real-world factors, and guides your next move.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Card className="card-interactive border-primary/20 hover:border-primary/40">
            <CardContent className="p-6">
              <div className="mb-4">
                <AnimationPlaceholder 
                  type="target" 
                  title="Data Silos Animation"
                  description="Connecting disconnected sources"
                  size="sm"
                />
              </div>
              <h3 className="font-semibold mb-2">🧩 Disconnected Data Sources</h3>
              <p>Your data lives in silos—HR, finance, product, CRM, ops. Olive unifies it, no replatforming needed.</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive border-primary/20 hover:border-primary/40">
            <CardContent className="p-6">
              <div className="mb-4">
                <AnimationPlaceholder 
                  type="zap" 
                  title="Real-time Processing"
                  description="Lightning-fast insights"
                  size="sm"
                />
              </div>
              <h3 className="font-semibold mb-2">⏱️ Manual, Delayed Insights</h3>
              <p>Insights shouldn't take weeks of SQL and dashboards. Olive mines them in real time, automatically.</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive border-primary/20 hover:border-primary/40">
            <CardContent className="p-6">
              <div className="mb-4">
                <AnimationPlaceholder 
                  type="pulse" 
                  title="External Context"
                  description="World events integration"
                  size="sm"
                />
              </div>
              <h3 className="font-semibold mb-2">🌍 Zero Context from the Outside World</h3>
              <p>Most tools ignore market trends, weather, news, and events. Olive brings them in to explain what's really driving change.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nuggets Section with Demo Video */}
      <section className="min-h-screen py-20 px-10 bg-gray-900 relative flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Nuggets™: From Chaos to Clarity
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
            Nuggets™ is Olive's patented (pending) insight engine. It doesn't just analyze data—it understands your intent, pulls in context from the outside world, and delivers fully-formed, actionable narratives in seconds.
          </p>
          
          {/* Demo Video */}
          <div className="mb-12">
            <video
              className="w-full aspect-video rounded-lg shadow-2xl"
              controls
              poster="/nuggets-demo-thumbnail.jpg"
            >
              <source src="/nuggets-demo.mp4" type="video/mp4" />
              <div className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Your browser doesn't support video playback</p>
              </div>
            </video>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🗣️", title: "Natural Language Input", desc: "Ask Olive a question—just like you would ask a colleague." },
              { icon: "🔗", title: "Data Fusion", desc: "Internal + external data pulled and aligned in real time." },
              { icon: "🧠", title: "Pattern Recognition", desc: "Behind the scenes, Olive finds trends and drivers." },
              { icon: "📊", title: "Narrative Output", desc: "Each Nugget includes Insight, Why, and Action." }
            ].map((item, index) => (
              <Card key={index} className="card-interactive bg-gray-800 border-primary/20 hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2 text-white">{index + 1}️⃣ {item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="min-h-screen py-20 px-10 bg-white text-black flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for Two Worlds</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card className="card-interactive border-primary/20 hover:border-primary/40">
            <CardContent className="p-8">
              <div className="mb-6">
                <AnimationPlaceholder 
                  type="zap" 
                  title="Live Services Animation"
                  description="Real-time gaming analytics"
                  size="md"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Live Services</h3>
              <p className="text-lg">Real-time insights for gaming, apps, platforms. Respond instantly to player behavior, performance issues, or market shifts.</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive border-primary/20 hover:border-primary/40">
            <CardContent className="p-8">
              <div className="mb-6">
                <AnimationPlaceholder 
                  type="target" 
                  title="Enterprise Dashboard"
                  description="Self-serve analytics"
                  size="md"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Enterprise Operations</h3>
              <p className="text-lg">Self-serve analytics for HR, Finance, Legal, and beyond—no analysts required.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="min-h-screen py-20 px-10 bg-gray-100 text-black flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Olive Can Do That Other Tools Can't
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
          {[
            "Automated Insight Generation",
            "External Data Correlation", 
            "Narrative Storytelling (Insight / Why / Action)",
            "Functional Personalization by Role",
            "Real-Time Natural Language Queries",
            "Contextual Pattern Recognition"
          ].map((feature, index) => (
            <Card key={index} className="card-interactive border-primary/20 hover:border-primary/40 hover:bg-primary/5">
              <CardContent className="p-6 flex items-center justify-center">
                <span className="text-primary mr-2">✅</span>
                <span className="font-medium">{feature}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="min-h-screen py-20 px-10 bg-white text-black flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">From Question to Clarity in Seconds</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[
            { icon: "🗣️", title: "Ask", desc: "Use natural language—Olive interprets your intent with no code." },
            { icon: "🧠", title: "Analyze", desc: "Fuses internal and external data contextually, in real time." },
            { icon: "🚀", title: "Act", desc: "Delivers a Nugget with Insight, Why, and Action—all explainable." }
          ].map((step, index) => (
            <Card key={index} className="card-interactive border-primary/20 hover:border-primary/40">
              <CardContent className="p-8">
                <div className="text-6xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-lg">{step.desc}</p>
                <div className="mt-6">
                  <AnimationPlaceholder 
                    type={index === 0 ? "sparkles" : index === 1 ? "zap" : "target"}
                    title={`${step.title} Process`}
                    description="Interactive workflow animation"
                    size="sm"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="min-h-screen py-20 px-10 bg-gray-900 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for Trust from Day One</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[
            "SOC 2 Type II Certified",
            "GDPR Compliant", 
            "Transparent AI + Role-Based Access"
          ].map((cert, index) => (
            <Card key={index} className="card-interactive bg-gray-800 border-primary/20 hover:border-primary/40 h-48 flex">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center w-full">
                <div className="flex flex-col items-center justify-center flex-1 space-y-4">
                  <Shield className="w-16 h-16 text-primary flex-shrink-0" />
                  <div className="w-full border-t border-primary/20"></div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-primary text-lg">✅</span>
                    <span className="font-semibold text-base text-white leading-tight max-w-[180px]">{cert}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patent Section */}
      <section className="min-h-screen py-20 px-10 bg-white text-black text-center flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <AnimationPlaceholder 
              type="sparkles" 
              title="Innovation Engine"
              description="Proprietary Nuggets™ technology"
              size="lg"
              className="mx-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation You Can Trust</h2>
          <p className="max-w-2xl mx-auto text-lg">
            At the heart of Olive is a new way of thinking about insights—powered by our proprietary engine: Nuggets™. We've begun the patent process to protect the unique architecture that makes this possible.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="min-h-screen py-20 px-10 bg-black text-white text-center relative overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 gradient-olive-dark opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See Olive in Action</h2>
          <p className="mb-8 text-xl">Your data already has the answers. Olive is how you hear them.</p>
          <Button size="lg" className="gradient-olive border-0 hover:scale-105 transition-spring text-lg px-8 py-4">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 text-center text-sm">
        <div>© 2025 Olive AI, Inc. • Product • Solutions • Security • Privacy</div>
        <div className="mt-2">Olive™ and Nuggets™ are trademarks of Olive AI, Inc.</div>
      </footer>
    </div>
  );
}
