
# Dynamic Porftolio 


https://github.com/kcne/portofolio/assets/76796906/8a62f093-1cff-48db-9cd0-b1aeba3a6bb0

[Live Demo](https://portofolio-beta-three.vercel.app/)


## Overview

This project is a dynamic open-source, beautiful online portfolio built using SWR, Sanity, Next.js, React Hook Form, and Resend. It's deployable with a single click on Vercel. Manage your portfolio content efficiently with Sanity Studio.

## Features

- **One-Click Deploy on Vercel**: Easy deployment process.
- **Content Management with Sanity Studio**: Edit information, experience, projects, and blog content.
- **Responsive Design**: Ensures a smooth experience on various devices.
- **Customizable**: Tailor the portfolio to your personal style.

## Getting Started

### Prerequisites

- A Vercel account.
- A Sanity.io account. 
- Resend account.

### Installation


1. **Go to sanity, make a new project and get your Project Id, Dataset and Read/Write API Token.**
2. **Go to Resend and get your API Key.**
3. **Fork the Repository**

4. **Clone it locally**
```bash
git clone [forked-repository-url]
```
5. **Install Dependencies**

   ```bash
   npm install
   ```

6. **Environment Setup**
   Rename `.env.example` to `.env` and update the values.

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=[Your Sanity Project ID]
   NEXT_PUBLIC_SANITY_DATASET=[Your Sanity Dataset]
   SANITY_API_TOKEN=[Your Sanity API Token]
   RESEND_KEY=[Your Resend Key]
   FORM_EMAIL_RECIPIENT=[Your Email]
   ```

7. **Start Development Server**
   ```bash
   npm run dev
   ```

## Deployment

Deploy your portfolio with a single click using Vercel. 

1. **Go to Vercel Dashboard.**
2. **Click on create new project.**
3. **In Environment Variables section add .env variables following given in .env.example with your keys.**
4. **Deploy**
5. **Go to your deployment link and navigate to: [your-url]/studio to add content**




## License

This project is licensed under the [MIT License](LICENSE.md) - see the LICENSE.md file for details.

