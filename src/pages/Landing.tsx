import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, Droplets, Plane, FileText, Factory, Settings, BarChart3, Moon, Sun, Globe } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-agriculture.jpg";
import sensorImage from "@/assets/feature-sensor.jpg";
import droneImage from "@/assets/feature-drone.jpg";
import schemesImage from "@/assets/feature-schemes.jpg";
import factoryImage from "@/assets/feature-factory.jpg";

const Landing = () => {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const translations = {
    en: {
      hero: "Smart Agriculture, Sustainable Future",
      heroDesc: "Monitor soil sensors, control irrigation, access government schemes, and connect with agricultural services - all in one platform",
      getStarted: "Get Started",
      learnMore: "Learn More",
      features: "Features",
      sensor: "Real-time Soil Monitoring",
      sensorDesc: "Monitor moisture and dryness levels with ESP32-powered sensors",
      pump: "Smart Irrigation Control",
      pumpDesc: "Control water pumps remotely based on real-time soil data",
      schemes: "Government Schemes",
      schemesDesc: "Stay updated with the latest agricultural schemes and subsidies",
      advisor: "Crop Advisory",
      advisorDesc: "Get personalized crop recommendations based on season and soil type",
      drone: "Drone Services",
      droneDesc: "Book pesticide spraying services from nearby drone operators",
      factory: "Factory Connect",
      factoryDesc: "Find and connect with factories and buyers for your crops",
      login: "Login",
      signup: "Sign Up"
    },
    hi: {
      hero: "स्मार्ट कृषि, सतत भविष्य",
      heroDesc: "मिट्टी सेंसर की निगरानी करें, सिंचाई नियंत्रित करें, सरकारी योजनाओं तक पहुंचें - सभी एक मंच पर",
      getStarted: "शुरू करें",
      learnMore: "और जानें",
      features: "विशेषताएं",
      sensor: "वास्तविक समय मिट्टी निगरानी",
      sensorDesc: "ESP32-संचालित सेंसर के साथ नमी और सूखापन स्तर की निगरानी करें",
      pump: "स्मार्ट सिंचाई नियंत्रण",
      pumpDesc: "वास्तविक समय मिट्टी डेटा के आधार पर पानी के पंप को दूर से नियंत्रित करें",
      schemes: "सरकारी योजनाएं",
      schemesDesc: "नवीनतम कृषि योजनाओं और सब्सिडी से अपडेट रहें",
      advisor: "फसल सलाहकार",
      advisorDesc: "मौसम और मिट्टी के प्रकार के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें",
      drone: "ड्रोन सेवाएं",
      droneDesc: "आस-पास के ड्रोन संचालकों से कीटनाशक छिड़काव सेवाएं बुक करें",
      factory: "फैक्टरी कनेक्ट",
      factoryDesc: "अपनी फसलों के लिए कारखानों और खरीदारों को खोजें और जुड़ें",
      login: "लॉग इन करें",
      signup: "साइन अप करें"
    },
    mr: {
      hero: "स्मार्ट शेती, शाश्वत भविष्य",
      heroDesc: "माती सेन्सर निरीक्षण करा, सिंचन नियंत्रित करा, सरकारी योजनांमध्ये प्रवेश मिळवा - सर्व एका व्यासपीठावर",
      getStarted: "सुरुवात करा",
      learnMore: "अधिक जाणून घ्या",
      features: "वैशिष्ट्ये",
      sensor: "रिअल-टाइम माती निरीक्षण",
      sensorDesc: "ESP32-संचालित सेन्सरसह ओलावा आणि कोरडेपणा पातळी तपासा",
      pump: "स्मार्ट सिंचन नियंत्रण",
      pumpDesc: "रिअल-टाइम माती डेटाच्या आधारे पाणी पंप दूरस्थपणे नियंत्रित करा",
      schemes: "सरकारी योजना",
      schemesDesc: "नवीनतम शेती योजना आणि अनुदानांची माहिती घ्या",
      advisor: "पीक सल्लागार",
      advisorDesc: "हंगाम आणि माती प्रकारावर आधारित वैयक्तिक पीक शिफारसी मिळवा",
      drone: "ड्रोन सेवा",
      droneDesc: "जवळच्या ड्रोन ऑपरेटरकडून कीटकनाशक फवारणी सेवा बुक करा",
      factory: "कारखाना कनेक्ट",
      factoryDesc: "आपल्या पिकांसाठी कारखाने आणि खरेदीदार शोधा आणि जोडा",
      login: "लॉगिन करा",
      signup: "साइन अप करा"
    },
    ta: {
      hero: "ஸ்மார்ட் விவசாயம், நிலையான எதிர்காலம்",
      heroDesc: "மண் சென்சார்களை கண்காணிக்கவும், நீர்ப்பாசனத்தை கட்டுப்படுத்தவும், அரசு திட்டங்களை அணுகவும் - அனைத்தும் ஒரே தளத்தில்",
      getStarted: "தொடங்குங்கள்",
      learnMore: "மேலும் அறிக",
      features: "அம்சங்கள்",
      sensor: "நேரடி மண் கண்காணிப்பு",
      sensorDesc: "ESP32-இயங்கும் சென்சார்களுடன் ஈரப்பதம் மற்றும் வறட்சி நிலைகளை கண்காணிக்கவும்",
      pump: "ஸ்மார்ட் நீர்ப்பாசன கட்டுப்பாடு",
      pumpDesc: "நேரடி மண் தரவின் அடிப்படையில் தண்ணீர் பம்புகளை தொலைவிலிருந்து கட்டுப்படுத்தவும்",
      schemes: "அரசு திட்டங்கள்",
      schemesDesc: "சமீபத்திய விவசாய திட்டங்கள் மற்றும் மானியங்களுடன் புதுப்பிக்கப்படுங்கள்",
      advisor: "பயிர் ஆலோசனை",
      advisorDesc: "பருவம் மற்றும் மண் வகையின் அடிப்படையில் தனிப்பயன் பயிர் பரிந்துரைகளைப் பெறுங்கள்",
      drone: "ட்ரோன் சேவைகள்",
      droneDesc: "அருகிலுள்ள ட்ரோன் இயக்குனர்களிடமிருந்து பூச்சிக்கொல்லி தெளிப்பு சேவைகளை முன்பதிவு செய்யுங்கள்",
      factory: "தொழிற்சாலை இணைப்பு",
      factoryDesc: "உங்கள் பயிர்களுக்கு தொழிற்சாலைகள் மற்றும் வாங்குபவர்களை கண்டறிந்து இணைக்கவும்",
      login: "உள்நுழைக",
      signup: "பதிவு செய்க"
    },
    te: {
      hero: "స్మార్ట్ వ్యవసాయం, స్థిరమైన భవిష్యత్తు",
      heroDesc: "నేల సెన్సార్లను పర్యవేక్షించండి, నీటిపారుదలను నియంత్రించండి, ప్రభుత్వ పథకాలను యాక్సెస్ చేయండి - అన్నీ ఒకే వేదికపై",
      getStarted: "ప్రారంభించండి",
      learnMore: "మరింత తెలుసుకోండి",
      features: "లక్షణాలు",
      sensor: "రియల్-టైమ్ నేల పర్యవేక్షణ",
      sensorDesc: "ESP32-శక్తితో పనిచేసే సెన్సార్లతో తేమ మరియు పొడి స్థాయిలను పర్యవేక్షించండి",
      pump: "స్మార్ట్ నీటిపారుదల నియంత్రణ",
      pumpDesc: "రియల్-టైమ్ నేల డేటా ఆధారంగా నీటి పంపులను రిమోట్‌గా నియంత్రించండి",
      schemes: "ప్రభుత్వ పథకాలు",
      schemesDesc: "తాజా వ్యవసాయ పథకాలు మరియు రాయితీలతో అప్‌డేట్‌గా ఉండండి",
      advisor: "పంట సలహాదారు",
      advisorDesc: "కాలం మరియు నేల రకం ఆధారంగా వ్యక్తిగత పంట సిఫార్సులను పొందండి",
      drone: "డ్రోన్ సేవలు",
      droneDesc: "సమీపంలోని డ్రోన్ ఆపరేటర్ల నుండి పురుగుమందు స్ప్రేయింగ్ సేవలను బుక్ చేయండి",
      factory: "ఫ్యాక్టరీ కనెక్ట్",
      factoryDesc: "మీ పంటల కోసం కర్మాగారాలు మరియు కొనుగోలుదారులను కనుగొనండి మరియు కనెక్ట్ చేయండి",
      login: "లాగిన్",
      signup: "సైన్ అప్"
    },
    kn: {
      hero: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ, ಸುಸ್ಥಿರ ಭವಿಷ್ಯ",
      heroDesc: "ಮಣ್ಣಿನ ಸಂವೇದಕಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ, ನೀರಾವರಿಯನ್ನು ನಿಯಂತ್ರಿಸಿ, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಪ್ರವೇಶಿಸಿ - ಎಲ್ಲವೂ ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ",
      getStarted: "ಪ್ರಾರಂಭಿಸಿ",
      learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
      features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
      sensor: "ನೈಜ-ಸಮಯದ ಮಣ್ಣಿನ ಮೇಲ್ವಿಚಾರಣೆ",
      sensorDesc: "ESP32-ಚಾಲಿತ ಸಂವೇದಕಗಳೊಂದಿಗೆ ತೇವಾಂಶ ಮತ್ತು ಶುಷ್ಕತೆಯ ಮಟ್ಟಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
      pump: "ಸ್ಮಾರ್ಟ್ ನೀರಾವರಿ ನಿಯಂತ್ರಣ",
      pumpDesc: "ನೈಜ-ಸಮಯದ ಮಣ್ಣಿನ ಡೇಟಾದ ಆಧಾರದ ಮೇಲೆ ನೀರಿನ ಪಂಪ್‌ಗಳನ್ನು ದೂರದಿಂದಲೇ ನಿಯಂತ್ರಿಸಿ",
      schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
      schemesDesc: "ಇತ್ತೀಚಿನ ಕೃಷಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳೊಂದಿಗೆ ನವೀಕರಿಸಿ",
      advisor: "ಬೆಳೆ ಸಲಹೆಗಾರ",
      advisorDesc: "ಋತು ಮತ್ತು ಮಣ್ಣಿನ ಪ್ರಕಾರದ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ",
      drone: "ಡ್ರೋನ್ ಸೇವೆಗಳು",
      droneDesc: "ಹತ್ತಿರದ ಡ್ರೋನ್ ನಿರ್ವಾಹಕರಿಂದ ಕೀಟನಾಶಕ ಸಿಂಪಡಣೆ ಸೇವೆಗಳನ್ನು ಬುಕ್ ಮಾಡಿ",
      factory: "ಕಾರ್ಖಾನೆ ಸಂಪರ್ಕ",
      factoryDesc: "ನಿಮ್ಮ ಬೆಳೆಗಳಿಗಾಗಿ ಕಾರ್ಖಾನೆಗಳು ಮತ್ತು ಖರೀದಿದಾರರನ್ನು ಹುಡುಕಿ ಮತ್ತು ಸಂಪರ್ಕಿಸಿ",
      login: "ಲಾಗಿನ್",
      signup: "ಸೈನ್ ಅಪ್"
    }
  };

  const t = translations[lang as keyof typeof translations];

  const features = [
    { icon: Droplets, title: t.sensor, desc: t.sensorDesc, image: sensorImage },
    { icon: BarChart3, title: t.pump, desc: t.pumpDesc, image: sensorImage },
    { icon: FileText, title: t.schemes, desc: t.schemesDesc, image: schemesImage },
    { icon: Settings, title: t.advisor, desc: t.advisorDesc, image: sensorImage },
    { icon: Plane, title: t.drone, desc: t.droneDesc, image: droneImage },
    { icon: Factory, title: t.factory, desc: t.factoryDesc, image: factoryImage },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Sprout className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">GreenPulse</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <select 
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="px-2 sm:px-3 py-1.5 rounded-lg bg-muted text-foreground border-0 text-sm"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
            
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Link to="/auth">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                {t.login}
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-gradient-primary text-white">
                {t.signup}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.hero}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {t.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/auth">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-primary text-white shadow-glow hover:scale-105 transition-transform">
                    {t.getStarted}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {t.learnMore}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Smart agriculture with drones" 
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-harvest rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.features}</h2>
            <div className="w-20 h-1 bg-gradient-harvest mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-all hover:-translate-y-1"
              >
                <div className="mb-4 relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 sm:p-12 text-center shadow-strong">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of farmers already using GreenPulse to make smarter decisions
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                {t.getStarted}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 GreenPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;