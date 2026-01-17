Here’s a **clean, complete, submission-ready README** you can directly copy into your repo.
It’s written at the **right level for this assignment**: clear, professional, not overhyped.

---

```md
# CA Monk Blog Application

This project is a blog application built as part of the CA Monk frontend assignment.  
It demonstrates the use of React, TypeScript, TanStack Query, Tailwind CSS, and shadcn/ui to build a clean, responsive, and user-friendly interface.

---

## Features

- View list of blogs
- View detailed blog content
- Create a new blog post
- Delete an existing blog post
- Automatically open newly created blog after posting
- Skeleton loaders for better loading experience
- Responsive layout (desktop and mobile)
- Clean UI using Tailwind CSS and shadcn/ui

---

## 🛠 Tech Stack

- **React (Vite)**
- **TypeScript**
- **TanStack Query** – server state management
- **Tailwind CSS** – styling
- **shadcn/ui** – UI components
- **JSON Server** – mock backend
- **React Router DOM** – routing

---

## 📁 Project Structure

```

src/
├── api/              # API functions
├── components/       # Reusable UI components
├── page/  
├── router/           #navigation purpose
├── types/            # TypeScript types
├── App.tsx
└── main.tsx

````

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd camonk-blog-assignment
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the JSON Server

   ```bash
   npm run server
   ```

   Server runs at: `http://localhost:3001`

4. Start the development server

   ```bash
   npm run dev
   ```

   App runs at: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/blogs`     | Fetch all blogs   |
| GET    | `/blogs/:id` | Fetch blog by ID  |
| POST   | `/blogs`     | Create a new blog |
| DELETE | `/blogs/:id` | Delete a blog     |

---

## Key Implementation Details

### TanStack Query

* `useQuery` is used for fetching blogs and blog details
* `useMutation` is used for creating and deleting blogs
* Queries are invalidated after mutations to keep UI in sync

### Loading State

* Loading states are handled using **shadcn Skeleton components**
* No plain “Loading…” text is used, as per assignment requirements

### Navigation After Blog Creation

* After creating a blog, the app navigates back to the home page
* The newly created blog is automatically opened using the blog ID from the URL

### Validation

* Native HTML validation (`required` attribute) is used
* shadcn inputs forward native HTML props, so browser validation works normally

---

##  Styling

* Tailwind CSS is used for layout, spacing, and responsiveness
* shadcn/ui components are used for buttons, inputs, cards, skeletons, etc.
* No custom CSS files are used

---

## Responsiveness

* Mobile-first layout
* Sidebar and content stack on smaller screens
* Grid-based layout for larger screens

---

## Assignment Checklist

* [x] Uses TypeScript
* [x] Uses TanStack Query
* [x] Uses Tailwind CSS
* [x] Uses shadcn/ui components
* [x] Skeleton loaders for loading state
* [x] CRUD functionality
* [x] Responsive design
* [x] Clean and readable code structure

---

## Notes

* Blog IDs are treated as strings to avoid type coercion issues
* No over-engineering or unnecessary libraries are used
* Focus is on clarity, correctness, and maintainability

---

##  Submission

The project is pushed to the **main branch** of this repository.
The repository link has been shared via the Google Form as instructed.

---

## 👤 Author

**Debasmita Bhwomick**

```


