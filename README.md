# Contact Management App (TRIA Assignment)

This is a simple contact list management application built as part of an assignment. The app is built with **Next.js 16 (App Router)** and **React 19**. It features a clean, responsive UI built with **shadcn/ui** and **Tailwind CSS**.

The application allows users to view a list of contacts and add new contacts via a form in a pop-up dialog.

---

## 🚀 Deployed Application

You can view the live, deployed application here:

**[https://tria-assignment-prithvi-beige.vercel.app/](https://tria-assignment-prithvi-beige.vercel.app/)**

*(Note: Replace the URL above with your actual Vercel deployment link.)*

---

## ✨ Features

* **View Contacts**: Displays a list of contacts.
* **Add New Contact**: A modal/dialog allows users to add a new contact to the list.
* **Form Validation**: The "Add Contact" form includes client-side validation to ensure all fields are filled out correctly.
* **Responsive Design**: The UI is fully responsive and works on mobile devices and desktops.

---

## 🛠️ Setup and Instructions

Follow these steps to get the project running on your local machine.

### 1. Prerequisites

You must have **Node.js** (v18 or later) and **pnpm** installed on your system.

* *(If you don't have `pnpm`, install it with: `npm install -g pnpm`)*

### 2. Clone the Repository

Clone this repository to your local machine:

```bash
git clone [https://github.com/prithvi081103/TRIA_ASSIGNMENT_PRITHVI.git](https://github.com/prithvi081103/TRIA_ASSIGNMENT_PRITHVI.git)
cd TRIA_ASSIGNMENT_PRITHVI
```

### 3. Install Dependencies

This project uses `pnpm` as its package manager. Run the following command from the root of the project to install all the required dependencies.

```bash
pnpm install
```

### 4. Run the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
pnpm run dev
```

### 5. View the Application

Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)** to see the application running.

---

## 💡 Assumptions & Design Choices

* **State Management**: For an application of this scale, React's built-in `useState` hook is sufficient for managing the contact list and form state. No external state management libraries (like Redux or Zustand) are needed.
* **Component Structure**: Components are split into two main areas:
    * `./app/components/`: Contains custom, project-specific components (like `AddContactDialog.tsx`).
    * `./components/ui/`: Contains the un-styled, primitive components provided by **shadcn/ui** (Button, Dialog, Input, etc.). This separation is standard for shadcn/ui projects.
* **Data Persistence**: The contact list is currently stored in local component state. It will **reset on page refresh**. A production-ready version would connect this to a database or a browser's `localStorage` for persistence.
* **Styling**: The project uses **Tailwind CSS** directly for most styling, leveraging `tailwind-merge` and `clsx` for managing conditional classes, as is standard with shadcn/ui.

---

## 📚 Libraries & Technologies

Here's a brief note on the key libraries used in this project:

* **[Next.js](https://nextjs.org/) (v16 w/ App Router)**: Chosen as the core framework. The App Router provides a modern, server-centric approach to building React applications, with features like server components and a file-based routing system.
* **[React](https://react.dev/) (v19)**: The latest version of React is used to take advantage of new features and to work seamlessly with Next.js 16.
* **[shadcn/ui](https://ui.shadcn.com/)**: This is **not a component library** but a *collection of reusable components* that you copy/paste into your project. It was chosen because it's built on Tailwind CSS, is highly customizable, and provides excellent accessibility (via Radix UI) out of the box. This allowed for building a polished UI very quickly.
* **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework used for all styling. It integrates perfectly with shadcn/ui and allows for rapid, responsive UI development without writing custom CSS files.
* **[pnpm](https://pnpm.io/)**: Chosen as the package manager. It's significantly faster than `npm` or `yarn` and more efficient with disk space by using a content-addressable store for `node_modules`.
