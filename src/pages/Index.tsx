import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mountain, Users, MapPin, Calendar, Wallet, Heart, Compass } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";
import gameImage from "@/assets/game-section.jpg";

interface FormData {
  familySize: string;
  age: string;
  region: string;
  tripsPerYear: string;
  budget: string;
  destination: string;
  vacationType: string;
  interest: string;
}

const Index = () => {
  const [formData, setFormData] = useState<FormData>({
    familySize: "",
    age: "",
    region: "",
    tripsPerYear: "",
    budget: "",
    destination: "",
    vacationType: "",
    interest: "",
  });
  const [recommendation, setRecommendation] = useState<{ mountain: string; reason: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = generateRecommendation(formData);
    setRecommendation(result);
    
    // Smooth scroll to recommendation
    setTimeout(() => {
      document.getElementById('recommendation')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const generateRecommendation = (data: FormData): { mountain: string; reason: string } => {
    const familySize = parseInt(data.familySize) || 1;
    const budget = data.budget;
    const vacationType = data.vacationType;
    const interest = data.interest;

    // Shahdag Mountains - Modern resort, family-friendly
    if (familySize > 3 && budget === "high" && vacationType === "comfort") {
      return {
        mountain: "Shahdag Mountain Resort",
        reason: "Perfect for large families seeking comfort! Shahdag offers modern facilities, cable cars, family-friendly trails, and excellent accommodation. With your higher budget, you can enjoy the full resort experience including restaurants, activities for all ages, and stunning Caucasus views."
      };
    }

    // Tufandag - Adventure and sports
    if (interest === "adventure" && vacationType === "active") {
      return {
        mountain: "Tufandag Mountain Resort",
        reason: "Ideal for adventure seekers! Tufandag features the longest cable car in Azerbaijan, thrilling hiking trails, and year-round activities. The active vacation style matches perfectly with the challenging terrain and exciting sports opportunities available here."
      };
    }

    // Khinalug - Cultural and authentic
    if (interest === "cultural" || data.destination === "cultural") {
      return {
        mountain: "Khinalug Village & Mountains",
        reason: "A cultural treasure! Khinalug is one of Europe's highest and oldest continuously inhabited villages. You'll experience authentic Azerbaijani mountain culture, ancient traditions, stunning landscapes, and meet the warm local community. Perfect for those seeking meaningful cultural connections."
      };
    }

    // Gabala Mountains - Moderate budget, relaxation
    if (budget === "medium" && (vacationType === "relaxation" || vacationType === "comfort")) {
      return {
        mountain: "Gabala Mountain Region",
        reason: "Excellent value for relaxation! Gabala offers beautiful mountain scenery, comfortable mid-range accommodations, peaceful nature, and easy access to waterfalls and forests. It's perfect for unwinding without breaking the bank, with plenty of scenic spots for the whole family."
      };
    }

    // Lahij - Budget-conscious, cultural
    if (budget === "low" && (interest === "cultural" || vacationType === "budget")) {
      return {
        mountain: "Lahij Mountain Village",
        reason: "Authentic and affordable! Lahij is famous for its copper craftsmen and cobblestone streets nestled in the mountains. You'll experience genuine Azerbaijani culture, stay with locals, enjoy traditional cuisine, and explore beautiful mountain trails—all on a modest budget."
      };
    }

    // Quba Mountains - Nature lovers
    if (interest === "nature" || data.destination === "nature") {
      return {
        mountain: "Quba-Qusar Mountain Region",
        reason: "A nature lover's paradise! This region features diverse ecosystems, from lush forests to alpine meadows. You'll find excellent hiking, pristine nature, waterfalls, and opportunities to see local wildlife. The varied landscape offers something new around every corner."
      };
    }

    // Goyazan Mountains - Photography enthusiasts
    if (interest === "photography" || data.destination === "scenic") {
      return {
        mountain: "Goyazan Mountain (Candy Cane Mountains)",
        reason: "Unbelievably photogenic! Goyazan's unique striped rock formations create a surreal landscape unlike anywhere else. The colorful geological layers and dramatic mountain backdrop provide endless photography opportunities. A must-visit for Instagram-worthy shots!"
      };
    }

    // Default recommendation based on trips per year
    if (parseInt(data.tripsPerYear) > 3) {
      return {
        mountain: "Greater Caucasus Trail Network",
        reason: "For the frequent traveler! Since you take multiple trips per year, explore Azerbaijan's interconnected mountain trail network. Start with Shahdag, then Tufandag, and gradually discover hidden gems like Khinalug and Lahij. Each visit will reveal new perspectives of Azerbaijan's magnificent mountains."
      };
    }

    // Fallback recommendation
    return {
      mountain: "Shahdag National Park",
      reason: "The perfect introduction to Azerbaijan's mountains! Shahdag National Park offers diverse experiences for all travelers—beautiful landscapes, moderate hiking trails, rich biodiversity, and facilities for families. It's an excellent starting point to discover why Azerbaijan's mountains are so special."
    };
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            AMT Azerbaijan Modern Tourism
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Solving the domestic tourism challenge through mountain adventures
          </p>
          <Button 
            size="lg"
            className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6"
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <Mountain className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 bg-gradient-mountain">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Challenge we fight against
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-card hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Undiscovered Beauty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Azerbaijan's stunning mountain regions remain largely unexplored by local tourists, despite offering world-class natural beauty and unique experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="text-2xl">Limited Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many Azerbaijani families are unaware of accessible mountain destinations nearby, missing out on affordable, enriching experiences in their own backyard.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Economic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Low domestic tourism means reduced support for local mountain communities and missed opportunities for sustainable regional development.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-card border-2 border-primary/20">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Solution</h3>
            <p className="text-lg text-foreground leading-relaxed">
              We're introducing an engaging way to connect Azerbaijani families with their magnificent mountains through personalized recommendations and gamification. By making mountain tourism accessible, exciting, and tailored to each family's needs, we're building bridges between people and the natural wonders of Azerbaijan.
            </p>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                The Mountain Challenge Game
              </h2>
              <div className="w-24 h-1 bg-secondary mb-8" />
              
              <p className="text-lg text-foreground leading-relaxed">
                In our educational, promotional and engaging game we promote domestic tourism and mountain tourism. We believe that there is not enough interest to domestic mountain hiking/exploring in Azerbaijan, so we are here to promote and make people realize the stunning beauty of mountain exploration. In our game there are different modes that can people explore, first is Mountain adventure with gamified quizzes. The second game mode it a mountain runner mode, in that game mode people explore the beauty of mountains. The third, fourth and fifth game modes are Duolingo styled gamified lessons about mountains. Our sixth mode is the most engaging one. In sixth game mode people collect mountain points from answering questions, and by answering question people can get a chance to spin a wheel to get a discount on a real life mountain tour.
              </p>

              <Button 
                size="lg"
                variant="default"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-8"
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey
                <Compass className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={gameImage} 
                alt="Mountain adventure in Azerbaijan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 px-4 bg-gradient-mountain">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Find Your Perfect Mountain
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Answer a few questions and we'll recommend the ideal Azerbaijan mountain destination for your family
            </p>
          </div>

          <Card className="shadow-card border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Your Mountain Journey Starts Here</CardTitle>
              <CardDescription>Tell us about your travel preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="familySize" className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Family Members
                    </Label>
                    <Input
                      id="familySize"
                      type="number"
                      min="1"
                      placeholder="How many people?"
                      value={formData.familySize}
                      onChange={(e) => setFormData({ ...formData, familySize: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age Group</Label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({ ...formData, age: value })} required>
                      <SelectTrigger id="age">
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youth">18-30</SelectItem>
                        <SelectItem value="adult">31-50</SelectItem>
                        <SelectItem value="senior">51+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Your Region
                    </Label>
                    <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })} required>
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Where do you live?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baku">Baku</SelectItem>
                        <SelectItem value="ganja">Ganja</SelectItem>
                        <SelectItem value="sumgait">Sumgait</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trips" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      Trips Per Year
                    </Label>
                    <Input
                      id="trips"
                      type="number"
                      min="0"
                      placeholder="How many trips?"
                      value={formData.tripsPerYear}
                      onChange={(e) => setFormData({ ...formData, tripsPerYear: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-accent" />
                      Budget Level
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })} required>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Budget-Friendly</SelectItem>
                        <SelectItem value="medium">Moderate</SelectItem>
                        <SelectItem value="high">Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination">Favorite Destination Type</Label>
                    <Select value={formData.destination} onValueChange={(value) => setFormData({ ...formData, destination: value })} required>
                      <SelectTrigger id="destination">
                        <SelectValue placeholder="What do you prefer?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nature">Nature & Wilderness</SelectItem>
                        <SelectItem value="cultural">Cultural & Historical</SelectItem>
                        <SelectItem value="scenic">Scenic & Photography</SelectItem>
                        <SelectItem value="resort">Resort & Comfort</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vacationType">Vacation Style</Label>
                    <Select value={formData.vacationType} onValueChange={(value) => setFormData({ ...formData, vacationType: value })} required>
                      <SelectTrigger id="vacationType">
                        <SelectValue placeholder="How do you vacation?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active & Adventure</SelectItem>
                        <SelectItem value="relaxation">Relaxation</SelectItem>
                        <SelectItem value="comfort">Comfort & Luxury</SelectItem>
                        <SelectItem value="budget">Budget-Conscious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-secondary" />
                      Travel Interest
                    </Label>
                    <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })} required>
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="What interests you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adventure">Adventure Sports</SelectItem>
                        <SelectItem value="nature">Nature Exploration</SelectItem>
                        <SelectItem value="cultural">Cultural Experience</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="family">Family Activities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Get My Recommendation
                  <Mountain className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recommendation Result */}
          {recommendation && (
            <Card id="recommendation" className="mt-12 shadow-card border-4 border-primary/30 bg-card animate-fade-in">
              <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Mountain className="h-8 w-8" />
                  Your Perfect Match!
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg">
                  Based on your preferences, we recommend...
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <h3 className="text-4xl font-heading font-bold text-foreground mb-6">
                  {recommendation.mountain}
                </h3>
                <div className="bg-gradient-mountain rounded-lg p-6 border-2 border-primary/20">
                  <p className="text-lg text-foreground leading-relaxed">
                    {recommendation.reason}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={() => {
                      setRecommendation(null);
                      setFormData({
                        familySize: "",
                        age: "",
                        region: "",
                        tripsPerYear: "",
                        budget: "",
                        destination: "",
                        vacationType: "",
                        interest: "",
                      });
                      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Try Again
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Back to Top
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Discount Cards Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            size="lg" 
            className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity text-xl px-12 py-8"
          >
            Get Discount Cards for Tours
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Mountain className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold mb-2">Discover Azerbaijan's Mountains</h3>
          <p className="text-primary-foreground/80 mb-6">
            Connecting families with the natural beauty of their homeland
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Azerbaijan Mountain Tourism Initiative
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;