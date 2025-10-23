# Contact Management App (TRIA Assignment)

This is a contact list management application built with **Next.js 16 (App Router)** and **React 19**. It uses **shadcn/ui** for components and **Tailwind CSS** for styling.

The application allows users to view and add contacts to a list through a dialog form.

---

## Project Structure

This project follows the standard structure for a Next.js App Router application.

```
/
|-- app/
|   |-- components/       # Project-specific React components (e.g., AddContactDialog.tsx)
|   |-- layout.tsx        # Root layout
|   |-- page.tsx          # Main page component
|-- components/
|   |-- ui/               # Auto-generated shadcn/ui components (Button, Dialog, Input, etc.)
|-- public/               # Static assets (images, fonts)
|-- .eslintrc.json        # ESLint configuration
|-- .gitignore
|-- next.config.mjs       # Next.js configuration
|-- package.json          # Project metadata and dependencies
|-- pnpm-lock.yaml        # pnpm lock file
|-- postcss.config.mjs    # PostCSS configuration
|-- tailwind.config.ts    # Tailwind CSS configuration
|-- tsconfig.json         # TypeScript configuration
```

---

## How to Run This Application

Follow these steps to get the project running on your local machine.

### 1. Prerequisites

You must have **Node.js** (v18 or later) and **pnpm** installed on your system.

### 2. Clone the Repository

Clone this repository to your local machine:

```bash
git clone [https://github.com/prithvi081103/TRIA_ASSIGNMENT_PRITHVI.git](https://github.com/prithvi081103/TRIA_ASSIGNMENT_PRITHVI.git)
cd TRIA_ASSIGNMENT_PRITHVI
```

### 3. Install Dependencies

This project uses `pnpm` as its package manager. Run the following command from the root of the project to install all the required dependencies:

```bash
pnpm install
```

### 4. Run the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
pnpm run dev
```

### 5. View the Application

Open your browser and navigate to **[http://localhost:3000](https://tria-assignment-prithvi-beige.vercel.app/)** to see the application running.
