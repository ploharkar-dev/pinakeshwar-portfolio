# Accessibility & WCAG 2.1 Compliance

## Overview
This portfolio is designed with accessibility in mind to ensure it's usable by everyone, including people with disabilities.

## WCAG 2.1 Compliance Level: AA

### Perceivable

#### 1.1 Text Alternatives
- ✅ All images have appropriate alt text
- ✅ Icons have aria-labels where needed
- ✅ Non-text content is properly described

#### 1.3 Adaptable
- ✅ Content uses semantic HTML (headings, navigation, sections)
- ✅ Meaningful sequence maintained when CSS disabled
- ✅ Instructions don't rely solely on shape, size, or visual location
- ✅ Responsive design adapts to all screen sizes

#### 1.4 Distinguishable
- ✅ Color contrast ratio meets WCAG AA standards
  - Normal text: 4.5:1 or higher
  - Large text (18pt+): 3:1 or higher
- ✅ Text can be resized up to 200% without loss of functionality
- ✅ No content is obscured by automatically playing media
- ✅ No flashing content (no risk of seizures)

### Operable

#### 2.1 Keyboard Accessible
- ✅ All functionality available via keyboard
- ✅ Navigation order is logical
- ✅ Focus visible on all interactive elements
- ✅ No keyboard trap (users can navigate away)

#### 2.2 Enough Time
- ✅ No time limits on reading content
- ✅ No auto-scrolling or auto-playing content
- ✅ Users can control all animations

#### 2.4 Navigable
- ✅ Purpose of links is clear from link text
- ✅ Navigation menu is easily accessible
- ✅ Headings describe section topics
- ✅ Landmark regions help with navigation

### Understandable

#### 3.1 Readable
- ✅ Page language declared (lang="en")
- ✅ Clear and simple language used
- ✅ No unexplained abbreviations or jargon

#### 3.2 Predictable
- ✅ Consistent navigation across pages
- ✅ Consistent styling of components
- ✅ No unexpected context changes

#### 3.3 Input Assistance
- ✅ Form errors identified clearly
- ✅ Forms are labeled appropriately
- ✅ Instructions provided for data entry

### Robust

#### 4.1 Compatible
- ✅ Valid HTML
- ✅ ARIA attributes used correctly
- ✅ Compatible with assistive technologies
- ✅ Name, role, value of UI components are programmatically determined

## Features for Users with Disabilities

### Vision Impairments
- **Screen Reader Compatible**: Full support for JAWS, NVDA, VoiceOver
- **Keyboard Navigation**: Navigate entire site without mouse
- **High Contrast**: Optional high-contrast mode (add to future releases)
- **Font Scaling**: Text resizable up to 200%

### Motor Impairments
- **Keyboard Accessible**: All features available via keyboard
- **Large Click Targets**: Buttons and links have minimum 44×44px touch target
- **No Mouse-Only Features**: No hover-only interactions
- **Sufficient Time**: No time limits or auto-advancing content

### Cognitive Impairments
- **Simple Navigation**: Clear, intuitive navigation structure
- **Clear Language**: Avoid jargon and complex terminology
- **Headings**: Proper heading hierarchy
- **Visual Chunking**: Content divided into logical sections

### Hearing Impairments
- **Audio Content**: No critical audio-only content
- **Video Captions**: Future videos will be captioned
- **Visual Feedback**: All interactions provide visual feedback

## Testing & Validation

### Automated Tools Used
- Lighthouse Accessibility Audit
- axe DevTools
- WAVE Web Accessibility Evaluation Tool
- Pa11y

### Manual Testing
- ✅ Keyboard navigation testing
- ✅ Screen reader testing (NVDA, JAWS)
- ✅ Color contrast verification
- ✅ Mobile accessibility (touch targets, zoom)
- ✅ Font scaling testing

### Test Results
Run accessibility tests:
```bash
# Install accessibility tools
npm install --save-dev @axe-core/puppeteer pa11y

# Run Lighthouse audit
ng build
lighthouse dist/myprofile/browser/index.html --view
```

## Accessibility Standards

### HTML Standards
```html
<!-- Proper semantic structure -->
<nav><!-- Navigation --></nav>
<main><!-- Main content --></main>
<footer><!-- Footer --></footer>

<!-- Meaningful headings -->
<h1>Page Title</h1>
<h2>Section Heading</h2>

<!-- Form labels -->
<label for="name">Name:</label>
<input id="name" type="text">

<!-- Image alt text -->
<img src="..." alt="Description of image">
```

### ARIA Attributes (Where Applicable)
```html
<!-- Current page indicator -->
<a href="#home" aria-current="page">Home</a>

<!-- Hidden labels -->
<button aria-label="Close menu">✕</button>

<!-- Status messages -->
<div role="status" aria-live="polite">Content saved</div>
```

## Style Accessibility

### Focus Indicators
- ✅ Visible focus outline on all interactive elements
- ✅ Focus color contrasts with background
- ✅ Custom focus styles match brand while maintaining visibility

### Color Usage
- ✅ Information not conveyed by color alone
- ✅ Color combinations meet contrast requirements
- ✅ Pattern, texture, or text used with color

### Animations
- ✅ Reduced motion respected (prefers-reduced-motion CSS media query)
- ✅ No auto-playing animations longer than 3 seconds
- ✅ Users can pause animations if needed

## Responsive Design

### Breakpoints
- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

### Mobile Accessibility
- ✅ Minimum touch target size: 44×44px
- ✅ Proper viewport settings
- ✅ Readable at 200% zoom
- ✅ No horizontal scrolling required

## Browser & Technology Support

### Browsers Tested
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

### Assistive Technologies Tested
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (Mac/iOS)
- TalkBack (Android)

## Keyboard Navigation Guide

### Without Tab Key
| Key | Action |
|-----|--------|
| `Tab` | Move to next interactive element |
| `Shift + Tab` | Move to previous interactive element |
| `Enter` | Activate link or button |
| `Space` | Activate button or checkbox |
| `Arrow Keys` | Navigate menu items or tab panels |
| `Escape` | Close modal or menu |

## Future Improvements

- [ ] Add high-contrast mode toggle
- [ ] Add text-to-speech functionality
- [ ] Add dark mode option
- [ ] Add language switching capability
- [ ] Add reading guide feature
- [ ] Implement skip-to-content link
- [ ] Add captions/transcripts for future video content

## Feedback & Issues

If you encounter any accessibility issues, please report them:
- **GitHub Issues**: https://github.com/ploharkar-dev/pinakeshwar-portfolio/issues
- **Email**: ploharkar21@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/omkarloharkar/

Your feedback helps us improve accessibility for everyone.

## Resources

### Learning
- [Web Accessibility by Google (Udacity)](https://www.udacity.com/course/web-accessibility--ud891)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [WebAIM](https://webaim.org/)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Pa11y](https://pa11y.org/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Standards
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [HTML Specification](https://html.spec.whatwg.org/)
