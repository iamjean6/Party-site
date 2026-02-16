# LDP Kenya Website

This is the official website application for LDP (Liberal Democratic Party) Kenya, built with React and Vite. It serves as a platform to share the party's agenda, events, gallery, and allow for member registration and contributions.

## Features

-   **Home**: Landing page with key information.
-   **Agenda**: Outlines the party's manifesto and goals.
-   **Members**: Information about party members and leadership.
-   **Events**: Upcoming events and calendar.
-   **Gallery**: Photo and media gallery.
-   **Contacts**: Contact information and inquiry forms.
-   **Contribution**: Platform for donations or contributions.
-   **Registration**: New member registration form.
-   **President**: Message from the party president.
-   **Animations**: Engaging UI with GSAP and Lottie animations.

## Tech Stack

-   **Frontend**: [React](https://react.dev/), [Vite](https://vitejs.dev/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [GSAP](https://gsap.com/), [Lottie React](https://github.com/Gamote/lottie-react)
-   **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
-   **Data/State**: React Hooks

## Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/ldp.git
    cd ldp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Deployment

### cPanel Deployment

This project includes a `.cpanel.yml` file configured for automated deployment via cPanel's Git Version Control.

1.  **Push changes**: Ensure your latest changes (including `.cpanel.yml`) are pushed to the repository connected to cPanel.
2.  **Configuration**: The `.cpanel.yml` file is set to copy the built assets to `public_html`.
    -   *Note*: Ensure the `DEPLOYPATH` in `.cpanel.yml` matches your server's directory (currently set to `/home3/ldpkenya/repositories/Party-site`).
3.  **Deploy**: Go to **Git Version Control** in cPanel, manage the repository, and click **Deploy HEAD**.

## Project Structure

```
src/
├── components/     # Page components (Home, Agenda, Members, etc.)
├── ui/             # Reusable UI components (Layout, etc.)
├── assets/         # Static assets (Images, icons)
├── App.jsx         # Main application routing
└── main.jsx        # Entry point
```

## License

ISC
