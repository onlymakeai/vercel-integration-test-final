# Vercel Integration Test Final

This is a Next.js project with TypeScript, showcasing modern web development practices and component architecture.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- ⭐ Customer testimonials section with ratings
- 🎯 Responsive design
- 🧪 Component testing with Jest and React Testing Library
- 🎭 Lucide React icons

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components

### Testimonials

The testimonials section displays customer reviews with:
- Star ratings (1-5 stars)
- Customer information (name, role, company)
- Review content
- Customer avatars
- Average rating display
- Responsive grid layout

## Testing

Run the test suite:

```bash
npm test
# or
yarn test
# or
pnpm test
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Main home page
│   └── layout.tsx        # Root layout
├── components/
│   ├── Testimonials.tsx      # Testimonials component
│   └── Testimonials.test.tsx # Tests
├── public/               # Static assets
└── styles/              # Global styles
```

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

MIT
