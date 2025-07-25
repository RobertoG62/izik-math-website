import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            תחומי הלימוד
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            שיעורים פרטיים מותאמים אישית לכל רמה ומטרה
          </p>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* תיכון */}
          <Card className="p-8 shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105 border-0 bg-white group">
            <div className="text-center space-y-6">
              <div className="text-4xl mb-4 group-hover:animate-bounce">🎓</div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                שיעורים פרטיים למתמטיקה בתיכון
              </h3>
              
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  הכנה מקיפה לבחינות הבגרות בכל הרמות
                </p>
                
                <div className="bg-accent p-4 rounded-lg">
                  <div className="font-semibold text-primary mb-2">כולל:</div>
                  <ul className="text-sm space-y-1 text-right">
                    <li>• בגרויות 3 יחידות לימוד</li>
                    <li>• בגרויות 4 יחידות לימוד</li>
                    <li>• בגרויות 5 יחידות לימוד</li>
                    <li>• חיזוק החומר השוטף</li>
                    <li>• תרגול מעמיק</li>
                    <li>• הכנה מנטלית למבחן</li>
                  </ul>
                </div>

                <p className="text-secondary font-semibold">
                  בניית בסיס חזק להמשך הלימודים באקדמיה
                </p>
              </div>

              <Button 
                variant="hero" 
                onClick={scrollToContact}
                className="w-full"
              >
                בואו נתחיל להצליח
              </Button>
            </div>
          </Card>

          {/* אקדמיה */}
          <Card className="p-8 shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105 border-0 bg-white group">
            <div className="text-center space-y-6">
              <div className="text-4xl mb-4 group-hover:animate-bounce">📚</div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                שיעורים פרטיים למתמטיקה באקדמיה
              </h3>
              
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  ליווי סטודנטים בקורסים מאתגרים
                </p>
                
                <div className="bg-accent p-4 rounded-lg">
                  <div className="font-semibold text-primary mb-2">תחומי המומחיות:</div>
                  <ul className="text-sm space-y-1 text-right">
                    <li>• חדו"א / אינפי 1</li>
                    <li>• חדו"א / אינפי 2</li>
                    <li>• חדו"א / אינפי 3</li>
                    <li>• מתמטיקה דיסקרטית</li>
                    <li>• סטטיסטיקה והסתברות</li>
                    <li>• אלגברה לינארית</li>
                  </ul>
                </div>

                <p className="text-secondary font-semibold">
                  הצלחה בקורסים הקשים ביותר
                </p>
              </div>

              <Button 
                variant="hero" 
                onClick={scrollToContact}
                className="w-full"
              >
                צריך עזרה? ניקח אותך לגמר
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-subtle p-8 rounded-2xl shadow-soft">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            למה לבחור בי?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl">⏰</div>
              <div className="font-semibold text-primary">גמישות בזמנים</div>
              <div className="text-sm text-muted-foreground">תיאום שעות שמתאים לכם</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl">📍</div>
              <div className="font-semibold text-primary">מפגשים נוחים</div>
              <div className="text-sm text-muted-foreground">אצלכם בבית או מקום נוח אחר</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl">💯</div>
              <div className="font-semibold text-primary">תוצאות מוכחות</div>
              <div className="text-sm text-muted-foreground">שיפור ציונים משמעותי</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;