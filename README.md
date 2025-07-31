# 🏛️ OriginX Heritage Hub

A modern e-commerce platform dedicated to preserving and promoting India's authentic regional products and cultural heritage. Connect directly with verified sellers from across India to discover iconic products like Banarasi silk, Darjeeling tea, Coorg coffee, and Kashmir saffron.

## ✨ Features

- **🔍 Smart Search**: Find products by region, category, or seller
- **🏛️ Regional Discovery**: Explore products by their cultural origins
- **✅ Verified Sellers**: All sellers are authenticated and verified
- **📱 Mobile-First**: Responsive design optimized for all devices
- **💬 Live Chat**: Real-time customer support
- **🛒 Shopping Cart**: Seamless shopping experience
- **📦 Order Tracking**: Track your orders from purchase to delivery
- **🎨 Modern UI**: Beautiful interface with Tailwind CSS and ShadCN

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, ShadCN UI Components
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives
- **Deployment**: Vercel (optimized configuration)
- **SEO**: Structured data, sitemap, robots.txt, meta tags

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/originx-heritage-hub.git
   cd originx-heritage-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment with the following features:

- **Automatic HTTPS**: SSL certificates handled by Vercel
- **Global CDN**: Fast loading worldwide
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Performance**: Optimized headers and caching
- **Security**: Security headers configured

#### Quick Deploy

1. **Connect to Vercel**:

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy to Vercel
   vercel
   ```

2. **Environment Variables** (if needed):

   - Add any required environment variables in Vercel dashboard
   - Configure custom domain in Vercel settings

3. **Automatic Deployments**:
   - Connect your GitHub repository to Vercel
   - Automatic deployments on push to main branch
   - Preview deployments for pull requests

#### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### SEO Features

- ✅ **Meta Tags**: Open Graph, Twitter Cards, keywords
- ✅ **Structured Data**: JSON-LD for Organization and Person
- ✅ **Sitemap**: XML sitemap for search engines
- ✅ **Robots.txt**: Search engine crawling instructions
- ✅ **Canonical URLs**: Prevent duplicate content
- ✅ **Performance**: Optimized loading and caching
- ✅ **Mobile-First**: Responsive design with viewport optimization

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # ShadCN UI components
│   ├── Navigation.tsx # Main navigation
│   ├── Footer.tsx     # Footer component
│   └── ...
├── pages/             # Page components
│   ├── Index.tsx      # Homepage
│   ├── BrowseProducts.tsx
│   ├── Product.tsx    # Product details
│   ├── Cart.tsx       # Shopping cart
│   └── ...
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── main.tsx          # App entry point
```

## 🎨 Design System

The project uses a carefully crafted design system with:

- **Color Palette**: Saffron, Terracotta, and Orange gradients representing Indian heritage
- **Typography**: Modern, readable fonts optimized for all devices
- **Components**: Consistent UI components built with ShadCN
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 🌟 Key Features

### Regional Product Discovery

- Browse products by their cultural origins
- Discover authentic products from verified regional sellers
- Learn about the heritage and story behind each product

### Verified Seller Network

- All sellers are authenticated and verified
- Direct connection between buyers and regional producers
- Quality assurance and authenticity guarantees

### Modern Shopping Experience

- Intuitive product browsing and search
- Secure shopping cart and checkout
- Order tracking and management
- Customer support and chat

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ShadCN UI** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **React Router** for client-side routing
- **TanStack Query** for server state management

## 📞 Support

If you have any questions or need support, please:

- Open an issue on GitHub
- Contact us through the website
- Check our documentation

---

**Built with ❤️ for India's Cultural Heritage**

_Preserving traditions, connecting communities, and celebrating authenticity._
