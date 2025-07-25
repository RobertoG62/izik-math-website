const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">פרטי קשר</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📱 0543910339</p>
              <p>📧 mathforpros@gmail.com</p>
              <p>📍 אזור המרכז</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">קישורים מהירים</h3>
            <div className="space-y-2">
              <div>
                <a 
                  href="#about" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  אודות
                </a>
              </div>
              <div>
                <a 
                  href="#services" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  השירותים שלי
                </a>
              </div>
              <div>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  יצירת קשר
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">מצאו אותי ברשת</h3>
            <div className="flex justify-center md:justify-end space-x-4 rtl:space-x-reverse">
              <a 
                href="https://www.facebook.com/profile.php?id=61550731899986" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://hakita.co.il/profile/index.html?user=%D7%90%D7%99%D7%A6%D7%99%D7%A7+%D7%92%D7%95%D7%9C%D7%93%D7%A8%D7%A8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-all duration-300 hover:scale-110"
                aria-label="הכיתה"
              >
                <div className="w-6 h-6 bg-current rounded text-xs flex items-center justify-center font-bold">
                  כ
                </div>
              </a>
              
              <a 
                href="https://mathforpros.com/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-all duration-300 hover:scale-110"
                aria-label="Math for Pros"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <div className="space-y-2">
            <p className="text-secondary font-semibold text-lg">
              איציק גולדרר - מורה פרטי למתמטיקה
            </p>
            <p className="text-primary-foreground/60 text-sm">
              בוגר הטכניון | מתמחה בהצלחות בבגרויות ובאקדמיה
            </p>
            <p className="text-primary-foreground/40 text-xs mt-4">
              © {new Date().getFullYear()} כל הזכויות שמורות. פותח על ידי Lovable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;