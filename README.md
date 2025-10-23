# Contact List Application

A modern, responsive contact list application built with React and Next.js. Manage, search, and organize your contacts with an intuitive user interface.

## Features

- **View Contacts**: Display all contacts in a beautiful grid layout with avatars, names, emails, and phone numbers
- **Search Functionality**: Real-time search that filters contacts by name, email, or phone number
- **Add New Contacts**: Easy-to-use modal dialog to add new contacts with form validation
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with smooth interactions and hover effects

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository** (after pushing to GitHub):
   \`\`\`bash
   git clone https://github.com/yourusername/contact-list.git
   cd contact-list
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser** and navigate to:
   \`\`\`
   http://localhost:3000
   \`\`\`

### Using shadcn CLI (Recommended)

If you want to set up this project from scratch:

\`\`\`bash
npx create-next-app@latest contact-list --typescript --tailwind --app
cd contact-list
npx shadcn@latest init
npx shadcn@latest add button card dialog input label
npm install lucide-react
\`\`\`

Then copy the component files from this repository.

## Project Structure

\`\`\`
contact-list/
├── app/
│   ├── page.tsx              # Main page with contact management logic
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles and theme
│   └── loading.tsx           # Loading state
├── components/
│   ├── contact-list.tsx      # Contact grid display
│   ├── contact-card.tsx      # Individual contact card
│   ├── search-bar.tsx        # Search input component
│   ├── add-contact-dialog.tsx # Add contact modal
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── README.md                 # This file
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
└── next.config.mjs           # Next.js config
\`\`\`

## Usage

### Viewing Contacts

The application displays all contacts in a responsive grid. Each contact card shows:
- Avatar (auto-generated based on name)
- Full name
- Email address (clickable mailto link)
- Phone number (clickable tel link)

### Searching Contacts

Use the search bar at the top to filter contacts by:
- Contact name
- Email address
- Phone number

The search is case-insensitive and updates in real-time as you type.

### Adding a New Contact

1. Click the "Add Contact" button in the top right
2. Fill in the contact details:
   - Name (required)
   - Email (required, must be valid)
   - Phone (required)
3. Click "Add Contact" to save
4. The new contact will appear in the list immediately

### Clearing Search

Click the X button in the search bar to clear your search query.

## Design Decisions

### Data Management
- **Mock Data**: The application uses hardcoded mock data for demonstration. In a production environment, this would be replaced with API calls to a backend service.
- **State Management**: React's `useState` and `useMemo` hooks are used for local state management, which is sufficient for this use case.

### UI/UX Choices
- **Card Layout**: Contacts are displayed in a responsive grid that adapts from 1 column on mobile to 3 columns on large screens
- **Search Filtering**: Real-time search provides immediate feedback without requiring a submit button
- **Form Validation**: Client-side validation ensures data quality before adding contacts
- **Avatar Generation**: Uses DiceBear API to generate unique avatars based on contact names

### Performance Optimizations
- **Memoization**: `useMemo` is used to prevent unnecessary re-renders when filtering contacts
- **Image Optimization**: Next.js Image component is used for avatar optimization
- **Responsive Images**: Tailwind CSS responsive classes ensure optimal layout on all screen sizes

## Assumptions Made

1. **No Backend Required**: The application works entirely on the client-side with mock data. To connect to a real API, modify the data fetching logic in `app/page.tsx`.

2. **Avatar Generation**: Avatars are auto-generated using the DiceBear API. In production, you might want to allow users to upload custom avatars.

3. **No Persistence**: Contact data is stored in component state and will be lost on page refresh. To persist data, integrate with a database (Supabase, Firebase, etc.).

4. **No Authentication**: The application has no user authentication. Add authentication if you need multi-user support.

5. **No Edit/Delete**: The current implementation only supports viewing and adding contacts. Edit and delete functionality can be added as needed.

## Future Enhancements

- Add edit and delete functionality for contacts
- Implement data persistence with a backend database
- Add user authentication and multi-user support
- Export contacts to CSV or vCard format
- Add contact categories or groups
- Implement contact favorites/starred contacts
- Add contact notes or additional fields
- Dark mode toggle
- Contact import from various formats

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/contact-list.git
   git push -u origin main
   \`\`\`

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your app will be live at a Vercel URL

### Deploy to Other Platforms

**Netlify**:
\`\`\`bash
npm run build
# Deploy the .next folder to Netlify
\`\`\`

**GitHub Pages**:
\`\`\`bash
npm run build
npm run export
# Deploy the out folder to GitHub Pages
\`\`\`

## Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the maintainer.

---

**Live Demo**: [Your Vercel URL will appear here after deployment]

**Repository**: [Your GitHub URL will appear here after pushing]
