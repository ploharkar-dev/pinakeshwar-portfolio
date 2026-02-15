# Deployment Guide

## Prerequisites
- Node.js 20.x or higher
- npm 11.x or higher
- Git

## Local Development

```bash
# Clone the repository
git clone https://github.com/ploharkar-dev/pinakeshwar-portfolio.git
cd pinakeshwar-portfolio

# Install dependencies
npm install

# Start development server
npm start

# Navigate to http://localhost:4200/
```

## Production Build

### Build for Production
```bash
# Create optimized production build
npm run build:prod

# Output files will be in: dist/myprofile/browser/
```

### Local Testing of Production Build
```bash
# Build production version
npm run build:prod

# Serve production build locally (requires Node server)
npm run serve:ssr
```

## Deployment Options

### Option 1: Vercel (Recommended)

**Advantages:**
- Automatic deployments on git push
- Free tier available
- CDN included
- Automatic HTTPS
- Environment variables support

**Steps:**
1. Push code to GitHub
2. Connect GitHub repo to Vercel (vercel.com)
3. Set build command: `ng build --configuration=production`
4. Set output directory: `dist/myprofile/browser`
5. Click Deploy

**Environment Variables:**
```
NODE_ENV=production
COMPRESSION_ENABLED=true
```

### Option 2: GitHub Pages

**Steps:**
1. Add `"homepage": "https://username.github.io"` to package.json
2. Run: `npm run build:prod`
3. Deploy via GitHub Actions or manually upload dist folder
4. Enable GitHub Pages in repository settings

### Option 3: Docker

**Create Dockerfile:**
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod

FROM node:20-alpine
RUN npm install -g http-server
WORKDIR /app
COPY --from=build /app/dist/myprofile/browser ./dist

EXPOSE 8080
CMD ["http-server", "dist", "-p", "8080"]
```

**Build and run:**
```bash
docker build -t pinakeshwar-portfolio .
docker run -p 8080:8080 pinakeshwar-portfolio
```

### Option 4: AWS Amplify

1. Connect GitHub repository
2. Build settings:
   - Build command: `ng build --configuration=production`
   - Build output directory: `dist/myprofile/browser`
3. Deploy

### Option 5: Netlify

1. Connect GitHub repository
2. Build settings:
   - Build command: `ng build --configuration=production`
   - Publish directory: `dist/myprofile/browser`
3. Deploy

## Production Checklist

### Pre-Deployment
- [ ] Run linter: `npm run lint`
- [ ] Run tests: `npm run test`
- [ ] Check bundle size: `npm run build:prod`
- [ ] Verify all links and assets load correctly
- [ ] Test on multiple devices and browsers
- [ ] Check Core Web Vitals
- [ ] Verify SEO meta tags
- [ ] Check security headers
- [ ] Test form submissions
- [ ] Verify robots.txt and sitemap.xml

### Post-Deployment
- [ ] Test all links on live site
- [ ] Verify analytics integration
- [ ] Monitor error logs
- [ ] Check Google Search Console
- [ ] Verify SSL certificate
- [ ] Test page load speed
- [ ] Verify responsive design
- [ ] Check accessibility (WCAG 2.1 AA)
- [ ] Monitor performance metrics

## Performance Optimization

### Bundle Analysis
```bash
ng build --configuration=production --stats-json
npm install webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/myprofile/browser/stats.json
```

### Monitoring

**Recommended Tools:**
- Google Analytics 4
- Google Search Console
- PageSpeed Insights
- Lighthouse CI
- Sentry (error tracking)
- Vercel Analytics

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build:prod
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Environment Variables

### Production (.env.production)
```
NODE_ENV=production
COMPRESSION_ENABLED=true
```

### Development (.env.development)
```
NODE_ENV=development
COMPRESSION_ENABLED=false
```

## Security

### HTTPS
- Automatically enforced on Vercel
- Use Let's Encrypt for other hosts

### Security Headers (Configured in vercel.json)
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### CORS
Currently configured for same-origin. Update if needed for APIs.

## Monitoring & Logging

### Essential Metrics
- Page load time
- Core Web Vitals (LCP, FID, CLS)
- Error rate
- User engagement
- Conversion rates

### Tools
- Vercel Analytics (built-in)
- Google Analytics 4
- Sentry for error tracking

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build:prod
```

### High Bundle Size
```bash
# Analyze bundle
ng build --configuration=production --stats-json
```

### Performance Issues
- Enable Gzip compression
- Optimize images (use WebP)
- Implement lazy loading
- Use CDN for static assets
- Minimize CSS/JS

## Support

For issues and questions:
- GitHub: https://github.com/ploharkar-dev/
- Email: ploharkar21@gmail.com
- LinkedIn: https://www.linkedin.com/in/omkarloharkar/
