# Headless WordPress with Next.js

A modern, responsive headless WordPress website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🚀 Next.js 14 with App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ⚡ Fast page loads with static generation
- 🔍 SEO optimized
- 📝 WordPress REST API integration
- 📊 ACF (Advanced Custom Fields) support
- 📋 WPForms integration
- 🎭 Framer Motion animations
- 🎯 Cross-browser compatible

## Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later
- WordPress site with REST API enabled
- ACF Pro plugin installed
- WPForms Pro plugin installed

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
WORDPRESS_AUTH_TOKEN=your_auth_token_here
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── layout/        # Layout components
│   └── ui/            # UI components
├── config/            # Configuration files
├── lib/               # Utility functions
└── types/             # TypeScript types
```

## WordPress Setup

1. Install and activate required plugins:

   - Advanced Custom Fields Pro
   - WPForms Pro
   - REST API

2. Configure ACF fields for your content types

3. Create WPForms for contact forms

4. Set up REST API authentication

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

- Static page generation where possible
- Image optimization with next/image
- Code splitting
- Lazy loading
- Responsive images
- Font optimization

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
