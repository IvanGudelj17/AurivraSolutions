'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true, // animira samo prvi put (nema ponovljenih animacija)
      duration: 600, // brzina animacije u milisekundama
      easing: 'ease-out-cubic', // smooth izlaz
    });
  }, []);

  return null;
}
