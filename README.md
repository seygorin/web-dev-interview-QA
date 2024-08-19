# Web Interview Q&A

Web Interview Q&A is a Next.js application designed to create and display a collection of web development interview questions and answers.

## Features

- Display a list of interviews on the home page
- Dynamic generation of pages for each interview
- Markdown support for interview content formatting
- Parsing interview data from .md files
- Built-in code editor (planned)

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- gray-matter for frontmatter parsing
- @uiw/react-markdown-preview for Markdown rendering

## Installation

1. Clone the repository:

```

git clone https://github.com/seygorin/web-interview-qa.git

```

2. Navigate to the project directory:

```

cd web-interview-qa

```

3. Install dependencies:

```

npm install

```

4. Run the project in development mode:

```

npm run dev

```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- `pages/`: Contains the main pages of the application
- `public/interview-data/`: Directory for storing .md files with interview data
- `app/components/`: React components
- `app/lib/`: Helper functions, including API for working with interview data

## Adding a New Interview

To add a new interview, create a new .md file in the `public/interview-data/` directory with the following structure:

```markdown
---
title: 'Interview Title'
---

Interview content in Markdown format
```
