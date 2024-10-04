# Cut Short URL Shortener

A URL shortener application built with Vite, ReactJS, Node.js, Express.js, and Supabase. Cut Short allows users to create shortened links for their long URLs, track the number of clicks on each link, and manage their URLs efficiently.

## Features

- **Shorten URLs**: Convert long URLs into short, manageable links.
- **Custom Short Links**: Users can create custom short links.
- **QR Code Generation**: Automatically generate a QR code for each shortened link.
- **Click Tracking**: Monitor the number of clicks for each short URL.
- **User Authentication**: Users can create an account to manage their links.

## Tech Stack

- **Frontend**: Vite, ReactJS
- **Backend**: Node.js, Express.js
- **Database**: Supabase
- **Styling**: Tailwind CSS, Shadcn/UI (Beautifully designed components you can copy and paste into your apps.)
  
## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cut-short-url-shortener.git
2. Navigate to the project directory:
   ```bash
   cd cut-short-url-shortener
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root of your project and add the necessary environment variables. You can reference the .env.example file for guidance.

5. Start the development server:
   ```bash
   npm run dev
### Environment Variables
To configure the application, you will need to set the following environment variables in your .env file:
      VITE_BASE_URL=<your_base_url>
      SUPABASE_URL=<your_supabase_url>
      SUPABASE_ANON_KEY=<your_supabase_anon_key>


### Deployment
This project can be deployed on Vercel. After pushing your code to GitHub, follow these steps:

1. Go to Vercel.
2. Sign in with your GitHub account.
3. Click on "New Project."
4. Import your repository.
5. Set up the environment variables in Vercel:
      VITE_BASE_URL
      SUPABASE_URL
      SUPABASE_ANON_KEY
6. Click "Deploy."
7. Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

### License
This project is licensed under the MIT License.

### Acknowledgments
Supabase is responsible for providing the backend as a service.
Vite for fast front-end development.
