# Hanul Drone Company Website — Claude Project Guide

## Project Overview

A modern **one-page** company homepage for Hanul Drone, inspired by [manna.aero](https://www.manna.aero/).
The site focuses on clear service/solution presentation, easy administrator maintenance, responsive and accessible design, and smooth single-page navigation with anchor links.

## Reference Site Analysis

- **Reference**: [https://www.manna.aero/](https://www.manna.aero/)
- **Key Sections to Replicate**:
  - Hero section with compelling brand message and CTA
  - Services/Solutions overview with visual elements
  - Use cases/Applications with real-world examples
  - Company story/About section
  - News/Press releases (latest updates)
  - Contact/Inquiry form with clear CTA
- **Design Principles**:
  - Strong visual hierarchy with large, clear typography
  - Generous whitespace and clean layout
  - High-quality images and videos (drone footage)
  - Smooth scroll navigation with sticky header
  - Interactive hover effects and micro-animations
  - Mobile-first responsive design
  - Fast loading times despite rich media

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: TailwindCSS 3, Shadcn UI
- **Form Handling**: React Hook Form + Zod validation
- **Email Service**: Resend API
- **Analytics**: Vercel Analytics
- **Utilities**: usehooks-ts, date-fns, zod
- **Development**: Biome v2 (formatting/linting)
- **Testing**: Jest (unit testing)
- **Deployment**: Vercel
- **Aliases**: `@/components`, `@/lib`, `@/types`

## Architecture & Structure

- **Single Page Application**: All content sections on one scrollable page
- **Navigation**: Sticky header with smooth-scroll anchor links
- **App Router**: Next.js 15 app directory structure
- **Components**: `components/` - Organized by domain and reusability
- **Utils**: `lib/` - Utility functions and configurations
- **Types**: `types/` - TypeScript definitions
- **Assets**: `public/` - Images, videos, and static files

## Coding Style Guidelines

### React Components

- **Always use arrow functions**: `const ComponentName = () => {}`
- **Use consts instead of functions** with proper TypeScript types
- **Early returns** for conditional rendering
- **Descriptive naming** with semantic meaning

```tsx
const ServiceCard = ({ service }: { service: Service }) => {
  if (!service) return null

  const handleCardClick = () => {
    // Handle service details
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCardClick()
    }
  }

  return (
    <div
      className='group cursor-pointer rounded-lg border p-6 transition-all hover:shadow-lg'
      tabIndex={0}
      aria-label={`${service.title} 서비스 자세히 보기`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <h3 className='text-xl font-semibold'>{service.title}</h3>
      <p className='mt-2 text-gray-600'>{service.description}</p>
    </div>
  )
}
```

### Naming Conventions

- **Event handlers**: `handle` prefix (handleClick, handleSubmit)
- **Components**: PascalCase, descriptive names
- **Props/Variables**: camelCase, descriptive
- **Files**: Match component names
- **Sections**: Clear semantic names (HeroSection, ServicesSection)

### Code Quality

- **DRY principle** - Create reusable components
- **Type safety** - Define interfaces for all props
- **Performance** - Optimize images and lazy load content
- **Accessibility-first** - WCAG 2.1 AA compliance

### HTML & Accessibility

- **Semantic HTML** elements always
- **ARIA attributes** for screen readers
- **Keyboard navigation** support
- **Focus management** for single-page navigation
- **Alt text** for all images
- **Proper heading hierarchy** (h1 → h2 → h3)

### Styling Guidelines

- **TailwindCSS only** - No CSS files or inline styles
- **Responsive design** - Mobile-first approach
- **Consistent spacing** - Use Tailwind's spacing scale
- **Color system** - Define custom colors in Tailwind config
- **Typography** - Consistent font sizes and line heights

```tsx
// Good: Responsive, accessible, semantic
const ContactSection = () => (
  <section className='bg-gray-50 py-16 md:py-24'>
    <div className='container mx-auto px-4'>
      <h2 className='mb-8 text-center text-3xl font-bold md:text-4xl'>
        문의하기
      </h2>
      <div className='mx-auto max-w-2xl'>{/* Contact form */}</div>
    </div>
  </section>
)
```

## Development Workflow

### Code Quality

- **Biome v2** for formatting and linting
- **Pre-commit hooks** for code quality
- **TypeScript strict mode** enabled
- **ESLint rules** for React best practices

### Performance Optimization

- **Image optimization** with Next.js Image component
- **Lazy loading** for below-fold content
- **Code splitting** for optimal bundle size
- **Web Vitals** monitoring and optimization

### Testing Strategy

- **Unit tests** for utility functions
- **Component tests** for complex interactions
- **Accessibility tests** with jest-axe
- **Performance tests** for Core Web Vitals

## File Organization

```
app/                    # Next.js app router
├── globals.css        # Global styles and Tailwind imports
├── layout.tsx         # Root layout
├── page.tsx           # Main homepage
└── api/               # API routes (contact form)
components/
├── ui/                # Shadcn UI components
├── layout/            # Layout components
│   ├── Header.tsx     # Sticky navigation
│   ├── Footer.tsx     # Site footer
│   └── ScrollToTop.tsx # Smooth scroll utility
└── sections/          # Homepage sections
    ├── HeroSection.tsx
    ├── ServicesSection.tsx
    ├── UseCasesSection.tsx
    ├── AboutSection.tsx
    ├── NewsSection.tsx
    └── ContactSection.tsx
lib/
├── utils.ts           # General utilities
├── constants.ts       # Site configuration
├── animations.ts      # Framer Motion configurations
└── validations.ts     # Zod schemas
types/
├── index.ts           # Common types
├── services.ts        # Service-related types
└── api.ts             # API response types
public/
├── images/            # Optimized images
├── videos/            # Drone footage
└── icons/             # SVG icons
```

## Content Management Strategy

### Data Structure

- **Static content** in TypeScript constants for easy maintenance
- **Structured data** for services, use cases, and news
- **Multilingual support** consideration (Korean focus)
- **SEO metadata** for each section

```tsx
// lib/constants.ts
export const SERVICES = [
  {
    id: 'inspection',
    title: '드론 검사',
    description: '안전하고 정확한 드론 검사 서비스 제공',
    image: '/images/services/inspection.jpg',
    features: ['고해상도 촬영', '안전 검사', '실시간 모니터링'],
  },
  {
    id: 'delivery',
    title: '드론 배송',
    description: '빠르고 효율적인 드론 배송 솔루션',
    image: '/images/services/delivery.jpg',
    features: ['자동 비행', '실시간 추적', '안전 배송'],
  },
  // ... more services
] as const
```

### Admin-Friendly Updates

- **Centralized content** in constants files
- **Type-safe content** updates
- **Clear documentation** for content modifications
- **Version control** for content changes

## Animation & Interaction Patterns

### Smooth Scrolling

- **Intersection Observer** for section visibility
- **Smooth scroll behavior** for anchor navigation
- **Progress indicators** for page scroll
- **Parallax effects** for hero section

### Micro-Interactions

- **Hover effects** on cards and buttons
- **Loading states** for forms
- **Fade-in animations** for sections
- **Stagger animations** for lists

```tsx
// Example: Intersection Observer for animations
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}
```

## Form Handling

### Contact Form Requirements

- **Zod validation** for all inputs
- **Real-time validation** feedback
- **Accessible error messages**
- **Success/Loading states**
- **Email integration** (next steps)

```tsx
const contactFormSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상 입력해주세요'),
  email: z.string().email('올바른 이메일 형식을 입력해주세요'),
  company: z.string().optional(),
  message: z.string().min(10, '메시지는 10자 이상 입력해주세요'),
  service: z.enum(['inspection', 'delivery']),
})
```

## SEO & Performance

### Meta Tags

- **Dynamic meta tags** for better SEO
- **Open Graph** tags for social sharing
- **Structured data** for rich snippets
- **Korean language** optimization

### Performance Targets

- **Lighthouse score** > 90 for all metrics
- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1

## Common Tasks

### Adding New Sections

1. Create component in `components/sections/`
2. Add to main page with proper anchor ID
3. Update navigation links
4. Add content to constants
5. Implement responsive design
6. Add intersection observer for animations

### Updating Content

1. Modify constants in `lib/constants.ts`
2. Update TypeScript types if needed
3. Test responsive behavior
4. Update meta tags if necessary

### Adding New Services

1. Add to `SERVICES` constant
2. Update service types
3. Add corresponding images
4. Update navigation if needed

## API Routes

### Contact Form Endpoint

- **POST /api/contact** - Handle form submissions
- **Zod validation** for request body
- **Rate limiting** implementation
- **Email notification** setup

## Don't Modify Without Discussion

- Next.js and Tailwind configurations
- Biome configuration
- TypeScript strict settings
- Core accessibility patterns
- Performance optimization settings

## Git Commit Guidelines

**IMPORTANT: NEVER include "Claude Code" references in commit messages**

- **NO "🤖 Generated with [Claude Code]" footers**
- **NO "Co-Authored-By: Claude" signatures**
- **NO Claude-related branding in any commit messages**
- Use clean, professional commit messages focused on the actual changes
- Follow conventional commit format: `feat:`, `fix:`, `chore:`, etc.

Example of CORRECT commit message:

```
feat: 협력 파트너 섹션 추가

- 우측에서 좌측으로 흘러가는 무한 스크롤 애니메이션 구현
- 한서대학교, 국토교통부, 서산시, 태안군, 국방기술진흥연구소 로고 추가
- 각 로고별 최적화된 크기 설정 및 반응형 디자인
```

## Questions to Ask When Uncertain

### Content & Business Logic

- 서비스명, 제품명, 회사 소개 내용의 최신 정보
- 타겟 고객층과 주요 메시지
- 문의 폼 처리 방식 (이메일, 데이터베이스 저장 등)
- 관리자 업데이트 주기와 방식

### Technical Decisions

- 외부 서비스 연동 (분석 도구)
- 이미지/비디오 최적화 요구사항
- 성능 최적화 우선순위

### Design & UX

- 브랜드 컬러와 디자인 가이드라인
- 모바일 우선순위와 반응형 요구사항
- 애니메이션과 상호작용 수준

### Deployment & Maintenance

- 배포 환경과 도메인 설정
- 관리자 교육 필요성
- 컨텐츠 업데이트 워크플로우
- 모니터링과 분석 도구 설정

## Content Management System

### Site Configuration

모든 사이트 텍스트 컨텐츠는 루트의 `siteConfig.ts`에서 중앙 관리됩니다:

```typescript
// siteConfig.ts
export const siteConfig = {
  company: {
    name: "한울드론",
    name: "(주)한울드론"
  },
  sections: {
    hero: { title: "...", subtitle: "..." },
    services: { title: "...", items: [...] },
    company: { title: "...", achievements: {...} },
    history: { title: "...", data: [...] },
    values: { title: "...", items: [...] },
    contact: { title: "...", form: {...} }
  }
}
```

**장점:**

- 모든 텍스트가 한 곳에서 관리됨
- 컨텐츠 수정 시 코드 변경 없이 config만 수정
- 타입 안전성 보장
- 다국어 지원 기반 마련

## Contact System

### Modal + Section Hybrid Approach

문의하기 시스템은 두 가지 방식으로 접근 가능:

1. **Header 문의하기 버튼** → Shadcn Dialog 모달 (빠른 문의)
2. **페이지 하단 Contact Section** → 상세한 문의 폼 (향후 구현)

### Technical Implementation

**Dependencies:**

```bash
pnpm add react-hook-form @hookform/resolvers zod resend
```

**Core Components:**

- `ContactModal.tsx` - Shadcn Dialog 기반 모달
- `app/api/contact/route.ts` - Resend API 이메일 전송
- Form validation with Zod schema

**Form Fields:**

- 이름 (필수)
- 회사명 (선택)
- 이메일 (필수)
- 연락처 (선택)
- 문의 내용 (필수, 최소 10자)

### Email Integration

Resend API를 통한 이메일 전송:

```typescript
// API Route: app/api/contact/route.ts
const { data, error } = await resend.emails.send({
  from: 'hanuldrone@hanuldrone.com',
  to: ['hanuldrone3@hanuldrone.com'],
  subject: `[한울드론 문의] ${name}님의 문의`,
  html: emailContent,
  replyTo: email,
})
```

**Environment Variables Required:**

```env
RESEND_API_KEY=your_resend_api_key
```

## Analytics Integration

### Vercel Analytics

간단한 설정으로 페이지 뷰 및 사용자 행동 분석:

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**수집 데이터:**

- 페이지 뷰
- 사용자 세션
- 성능 메트릭 (Core Web Vitals)
- 지역별 사용자 분포

## Performance Optimizations

### Hydration Issues

Hero 섹션의 video 태그에서 hydration mismatch 해결:

```typescript
// components/sections/Hero.tsx
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

return (
  <div>
    {mounted && (
      <video autoPlay loop muted playsInline>
        <source src="/video/..." type="video/mp4" />
      </video>
    )}
  </div>
)
```

### Package Management

프로젝트는 **pnpm**을 사용합니다:

```bash
# 올바른 방법
pnpm add package-name

# 잘못된 방법 (사용 금지)
npm install package-name
```
