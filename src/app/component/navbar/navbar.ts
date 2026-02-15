import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectionStrategy, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnInit, OnDestroy {
  activeSection = signal('home');
  menuOpen = signal(false);
  private isBrowser: boolean;
  private scrollListener: (() => void) | null = null;
  private scrollTimeout: number | null = null;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.detectActiveSection();
      this.setupScrollListener();
    }
  }

  ngOnDestroy() {
    this.removeScrollListener();
  }

  private setupScrollListener() {
    if (!this.isBrowser) return;
    
    this.scrollListener = () => {
      if (this.scrollTimeout !== null) {
        window.clearTimeout(this.scrollTimeout);
      }
      this.scrollTimeout = window.setTimeout(() => {
        this.detectActiveSection();
        this.cdr.markForCheck();
      }, 150);
    };
    
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  private removeScrollListener() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.scrollTimeout !== null) {
      window.clearTimeout(this.scrollTimeout);
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  setActive(section: string) {
    this.activeSection.set(section);
    this.menuOpen.set(false);
  }

  detectActiveSection() {
    const sections = ['introduction', 'experience', 'projects', 'education', 'awards', 'contact'];
    const sectionNames = ['home', 'experience', 'projects', 'education', 'awards', 'contact'];
    
    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection.set(sectionNames[i]);
          return;
        }
      }
    }
  }
}
