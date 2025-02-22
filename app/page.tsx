import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code, Flag, Trophy, Users, ChevronDown, Timer, Award, Target } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // const companyLogos = [
  //   { name: "Intel", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/200px-Intel_logo_%282006-2020%29.svg.png" },
  //   { name: "AMD", url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_logo_%282006-2020%29.svg" },
  //   { name: "JP Morgan", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/JPMorgan_Chase_logo.svg/200px-JPMorgan_Chase_logo.svg.png" },
  //   { name: "GitLab", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/200px-GitLab_logo.svg.png" },
  //   { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png" },
  //   { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png" },
  //   { name: "NVIDIA", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/200px-Nvidia_logo.svg.png" },
  //   { name: "Nasdaq", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/NASDAQ_Logo.svg/200px-NASDAQ_Logo.svg.png" }
  // ];

  return (
    <main className="snap-container bg-background">
      {/* Hero Section */}
      <section className="snap-section hero-pattern relative">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-8xl font-bold gradient-text mb-6">ZENITH</h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A 36-hour Point Blank contest featuring CTF, a Kaggle competition, 
              Hackathon, and CP, where the top scorer will be crowned 
              Programmer of the Year!
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Register Now
            </Button>
          </div>
          
          {/* Company Logos */}
          <div className="mt-20">
          <h2 className="text-center text-2xl font-semibold mb-8">Hosted by Point Blank with members working at</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {['Intel', 'AMD', 'JP Morgan', 'GitLab', 'Zeta', 'Amazon', 'Microsoft', 'NVIDIA', 'Meesho', 'Nasdaq']
              .map((sponsor) => (
                <div key={sponsor} className="text-muted-foreground font-semibold">
                  {sponsor}
                </div>
              ))}
          </div>
        </div>

          <ChevronDown className="absolute bottom-8 animate-bounce text-primary w-8 h-8" />
        </div>
      </section>

      {/* CP/DSA Contest Section */}
      <section className="snap-section competition-bg" style={{"--bg-image": "url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070')" } as any}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <Card className="p-8 bg-card/90 backdrop-blur">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">CP/DSA Contest</h2>
              </div>
              <div className="grid gap-6">
                <p className="text-xl text-muted-foreground">
                  Push your algorithmic problem-solving skills to the limit with our competitive programming challenges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Timer className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">6 Hours</h3>
                      <p className="text-muted-foreground">Of intense coding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">8 Problems</h3>
                      <p className="text-muted-foreground">Varying difficulty</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">₹50,000</h3>
                      <p className="text-muted-foreground">Prize pool</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">What to Expect</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Dynamic Programming challenges</li>
                    <li>Graph Algorithm problems</li>
                    <li>Data Structure optimization puzzles</li>
                    <li>Real-world optimization scenarios</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Kaggle Competition Section */}
      <section className="snap-section competition-bg" style={{"--bg-image": "url('https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1974')" } as any}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-end">
          <div className="max-w-4xl">
            <Card className="p-8 bg-card/90 backdrop-blur">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Kaggle Competition</h2>
              </div>
              <div className="grid gap-6">
                <p className="text-xl text-muted-foreground">
                  Dive into real-world datasets and develop machine learning solutions that make a difference.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Timer className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">24 Hours</h3>
                      <p className="text-muted-foreground">For model development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Real Dataset</h3>
                      <p className="text-muted-foreground">Industry problems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">₹75,000</h3>
                      <p className="text-muted-foreground">Prize pool</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">Competition Focus</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Computer Vision challenges</li>
                    <li>Natural Language Processing tasks</li>
                    <li>Time Series predictions</li>
                    <li>Feature engineering opportunities</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTF Section */}
      <section className="snap-section competition-bg" style={{"--bg-image": "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070')" } as any}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <Card className="p-8 bg-card/90 backdrop-blur">
              <div className="flex items-center gap-4 mb-6">
                <Flag className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Capture The Flag</h2>
              </div>
              <div className="grid gap-6">
                <p className="text-xl text-muted-foreground">
                  Test your cybersecurity skills with our challenging CTF competition featuring various security domains.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Timer className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">12 Hours</h3>
                      <p className="text-muted-foreground">Of hacking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Flag className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">15 Challenges</h3>
                      <p className="text-muted-foreground">Multiple categories</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">₹60,000</h3>
                      <p className="text-muted-foreground">Prize pool</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">Challenge Categories</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Web Exploitation</li>
                    <li>Reverse Engineering</li>
                    <li>Cryptography</li>
                    <li>Binary Exploitation</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Hackathon Section */}
      <section className="snap-section competition-bg" style={{"--bg-image": "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1974')" } as any}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-end">
          <div className="max-w-4xl">
            <Card className="p-8 bg-card/90 backdrop-blur">
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-12 h-12 text-primary" />
                <h2 className="text-4xl font-bold">Hackathon</h2>
              </div>
              <div className="grid gap-6">
                <p className="text-xl text-muted-foreground">
                  Build innovative solutions to real-world problems in this intense 36-hour hackathon.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Timer className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">36 Hours</h3>
                      <p className="text-muted-foreground">Non-stop innovation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Team Size: 4</h3>
                      <p className="text-muted-foreground">Collaborative coding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">₹1,00,000</h3>
                      <p className="text-muted-foreground">Prize pool</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">Themes</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>FinTech Innovation</li>
                    <li>Healthcare Solutions</li>
                    <li>Sustainability Tech</li>
                    <li>EdTech Platforms</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="snap-section hero-pattern">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to reach your ZENITH?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Join us for an unforgettable 36-hour journey of coding, learning, and innovation. 
            Compete with the best minds in tech and showcase your skills across multiple domains.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Register Now
          </Button>
        </div>
      </section>
    </main>
  );
}