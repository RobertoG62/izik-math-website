import { Button } from "@/components/ui/button";
import itzikProfile from "@/assets/itzik-profile.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-right space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-hero">
              איציק גולדרר
              <span className="block text-secondary text-3xl md:text-4xl lg:text-5xl mt-2">
                מורה פרטי למתמטיקה
              </span>
              <span className="block text-white/90 text-2xl md:text-3xl lg:text-4xl mt-2">
                להצלחה בבגרויות ובאקדמיה
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              בוגר הטכניון, מתמחה בשיעורים פרטיים לתיכון (3-5 יח"ל) ולקורסים באקדמיה.
              <span className="block mt-2 text-secondary font-semibold">
                בניית בסיס חזק וביטחון עצמי להצלחה.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto"
              >
                לתיאום שיעור לחצו כאן
              </Button>
              
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="text-white/70 text-sm">
                  <div className="font-semibold">מענה מהיר</div>
                  <div>עד 24 שעות</div>
                </div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img 
                src={itzikProfile} 
                alt="איציק גולדרר - מורה פרטי למתמטיקה"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-elegant border-4 border-white/20 animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-gold font-semibold text-sm">
                🎓 בוגר הטכניון
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="text-center">
            <div className="text-sm mb-2">גלה עוד</div>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;