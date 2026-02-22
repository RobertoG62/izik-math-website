const testimonials = [
  {
    quote: "איציק הפך את המתמטיקה ממקצוע מפחיד למקצוע שאני אוהב. עליתי מ-60 ל-90 בבגרות!",
    name: "י.כ.",
    detail: "תלמיד תיכון, 5 יחידות",
  },
  {
    quote: "בזכות איציק עברתי אינפי 2 בציון 85. הוא יודע להסביר דברים מורכבים בצורה פשוטה.",
    name: "מ.ר.",
    detail: "סטודנטית להנדסה",
  },
  {
    quote: "הבן שלי לא האמין שהוא יכול להצליח במתמטיקה. איציק שינה לו את הגישה ואת הציונים.",
    name: "ד.ל.",
    detail: "הורה לתלמיד תיכון",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            מה התלמידים אומרים
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-soft border border-border text-center"
            >
              <div className="text-secondary text-3xl mb-4">"</div>
              <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
              <div className="font-semibold text-primary">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
