import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              אודות איציק גולדרר
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div className="text-lg md:text-xl leading-relaxed text-foreground space-y-4">
                <p>
                  כבוגר תואר ראשון בהוראת המתמטיקה מהטכניון, אני מביא איתי שנים של ניסיון וידע עמוק במתמטיקה ובדרכי הוראה מתקדמות.
                </p>
                
                <p>
                  <span className="text-primary font-semibold">הגישה האישית שלי</span> מתאימה עצמה לכל תלמיד ולצרכיו הייחודיים. 
                  המטרה שלי היא לא רק להצליח במבחן, אלא לבנות הבנה אמיתית וביטחון עצמי בחומר.
                </p>

                <p>
                  אני מאמין שכל תלמיד יכול להצליח במתמטיקה כשהוא מקבל את הכלים הנכונים והגישה המתאימה לו. 
                  עבורי, <span className="text-secondary font-semibold">הוראה היא אמנות</span> - היכולת להסביר מושגים מורכבים בצורה פשוטה וברורה.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">🎓</div>
                  <div className="font-semibold text-primary">בוגר הטכניון</div>
                  <div className="text-sm text-muted-foreground">תואר ראשון בהוראת מתמטיקה</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">👨‍🏫</div>
                  <div className="font-semibold text-primary">גישה אישית</div>
                  <div className="text-sm text-muted-foreground">התאמה לכל תלמיד</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">🎯</div>
                  <div className="font-semibold text-primary">מוכוון תוצאות</div>
                  <div className="text-sm text-muted-foreground">הצלחה אמיתית וארוכת טווח</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;