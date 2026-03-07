import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // فرض السكرول لأعلى فوراً بدون أنيميشن لمنع أي تأخير
    window.scrollTo(0, 0);
    
    // حل احتياطي: التأكد من أن الجسم (body) والـ html مفيش عليهم scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
