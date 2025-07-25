import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.subject) {
      toast.error("אנא מלאו את כל השדות הנדרשים");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `שלום איציק,\n\nשמי ${formData.name}\nטלפון: ${formData.phone}\nנושא לימוד: ${formData.subject}\n\n${formData.message || 'מעוניין/ת לקבל פרטים על שיעורים פרטיים'}\n\nתודה!`
    );
    
    // Open WhatsApp
    window.open(`https://wa.me/972500000000?text=${whatsappMessage}`, '_blank');
    
    toast.success("הודעה נשלחה בהצלחה! נחזור אליכם בהקדם");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            רוצים להתחיל להצליח?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            שריינו שיעור בהקדם, מספר המקומות מוגבל! 
            <span className="block mt-2 text-secondary font-semibold">
              מלאו את הפרטים בטופס או צרו קשר ישירות בוואטסאפ ונחזור אליכם לתיאום.
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                טופס יצירת קשר
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">שם מלא *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="השם שלכם"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-semibold">טלפון *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="050-123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-semibold">נושא הלימוד המבוקש *</Label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                    <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="בחרו נושא לימוד" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="תיכון-3">מתמטיקה תיכון - 3 יח"ל</SelectItem>
                      <SelectItem value="תיכון-4">מתמטיקה תיכון - 4 יח"ל</SelectItem>
                      <SelectItem value="תיכון-5">מתמטיקה תיכון - 5 יח"ל</SelectItem>
                      <SelectItem value="חדווא-1">חדו"א / אינפי 1</SelectItem>
                      <SelectItem value="חדווא-2">חדו"א / אינפי 2</SelectItem>
                      <SelectItem value="חדווא-3">חדו"א / אינפי 3</SelectItem>
                      <SelectItem value="דיסקרטית">מתמטיקה דיסקרטית</SelectItem>
                      <SelectItem value="סטטיסטיקה">סטטיסטיקה והסתברות</SelectItem>
                      <SelectItem value="אלגברה">אלגברה לינארית</SelectItem>
                      <SelectItem value="אחר">אחר</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-semibold">הודעה נוספת (אופציונלי)</Label>
                  <Textarea
                    id="message"
                    placeholder="כתבו כאן על הצרכים שלכם, מטרות, רמה נוכחית וכל מידע נוסף שחשוב לכם"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[100px]"
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full">
                  שלחו הודעה
                </Button>
              </form>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <Card className="p-6 shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  קשר מהיר
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="secondary" 
                    className="w-full text-lg py-4"
                    onClick={() => window.open('https://wa.me/972500000000?text=שלום איציק, מעוניין/ת לקבל פרטים על שיעורים פרטיים', '_blank')}
                  >
                    <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp - תגובה מיידית
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-lg py-4"
                    onClick={() => window.open('tel:0500000000')}
                  >
                    📞 התקשרו ישירות
                  </Button>
                </div>
              </Card>

              <Card className="p-6 shadow-elegant border-0 bg-white/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  מידע חשוב
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">זמן תגובה:</span>
                    <span className="font-semibold text-secondary">עד 24 שעות</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">שעות פעילות:</span>
                    <span className="font-semibold">א'-ה' 8:00-22:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">שיעור ניסיון:</span>
                    <span className="font-semibold text-secondary">זמין</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">מקום:</span>
                    <span className="font-semibold">בבית הלקוח או מקום נוח</span>
                  </div>
                </div>
              </Card>

              <div className="text-center">
                <p className="text-white/80 text-sm">
                  💡 <span className="font-semibold">טיפ:</span> ככל שתספקו יותר פרטים על הצרכים שלכם, 
                  כך נוכל להתאים עבורכם את התוכנית המושלמת
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;