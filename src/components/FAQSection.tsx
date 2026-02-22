import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "האם השיעורים מתקיימים אונליין או פרונטלית?",
    answer:
      "שניהם! אני מציע שיעורים פרונטליים אצלי בבית וגם שיעורים אונליין דרך זום או גוגל מיט — לפי מה שנוח לכם.",
  },
  {
    question: "לאילו רמות מתמטיקה אתה מלמד (בגרות/אקדמיה)?",
    answer:
      "אני מלמד תלמידי תיכון בכל הרמות (3, 4 ו-5 יחידות) וגם סטודנטים באקדמיה — חדו״א, אלגברה לינארית, הסתברות וסטטיסטיקה ועוד.",
  },
  {
    question: "איך מתאמים שיעור ראשון?",
    answer:
      "פשוט שלחו לי הודעה בוואטסאפ או מלאו את טופס יצירת הקשר בדף הזה. אחזור אליכם תוך מספר שעות לתיאום.",
  },
  {
    question: "כמה זמן נמשך כל שיעור?",
    answer:
      "שיעור סטנדרטי נמשך שעה וחצי (90 דקות). אפשר גם להתאים את משך השיעור לפי הצורך.",
  },
  {
    question: "האם יש אפשרות לשיעורים בקבוצות קטנות?",
    answer:
      "כן, אני מציע גם שיעורים בקבוצות של 2-3 תלמידים באותה רמה. זו אופציה משתלמת שמאפשרת למידה יעילה במחיר נגיש יותר.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            שאלות נפוצות
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-right text-base font-semibold text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
