# PWA-QSWPL - React Progressive Web App with Authentication

## Overview

PWA-QSWPL is a Progressive Web App (PWA) built with React, featuring user authentication, protected dashboard, and Firebase integration. This app provides a modern, offline-capable experience with login functionality and a secure dashboard accessible only to authenticated users.

## Key Features
- **User Authentication**: Login system powered by Firebase Authentication.
- **Protected Routes**: Dashboard accessible only to logged-in users using ProtectedRoute component.
- **Dashboard**: User dashboard with responsive design (Dashboard.jsx + Dashboard.css).
- **Progressive Web App**: Service worker support, manifest.json for installability, offline functionality.
- **Responsive Design**: Styled with CSS modules and custom stylesheets.

## Tech Stack
- React (Create React App)
- Firebase (Authentication)
- React Router (for routing)
- Progressive Web App standards

## Folder Structure
```
pwa-qswpl/
├── public/
│   ├── index.html
│   ├── manifest.json      # PWA manifest
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── App.js            # Main App component with routing
│   ├── index.js          # Entry point
│   ├── login.jsx         # Login page
│   ├── login.css         # Login styles
│   ├── Dashboard.jsx     # Protected dashboard
│   ├── dashboard.css     # Dashboard styles
│   ├── ProtectedRoute.jsx # Route protection
│   ├── firebase.js       # Firebase config
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── README.md
└── ...
```

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Installation & Setup

1. **Clone the repository** (if applicable):
   ```
   git clone <repository-url>
   cd pwa-qswpl
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication (Email/Password)
   - Add your Firebase config to `src/firebase.js`
     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       // ... other config
     };
     ```

4. **Run the development server**:
   ```
   npm start
   ```
   Opens the app at `http://localhost:3000`

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production to the `build` folder. Optimized for PWA deployment.

## Testing Authentication Flow
1. Navigate to `/login`
2. Create an account or sign in
3. Access `/dashboard` (protected route)
4. Logout from dashboard

## Deployment

1. **Build for production**:
   ```
   npm run build
   ```

2. **Deploy as PWA**:
   - **Firebase Hosting**:
     ```
     npm install -g firebase-tools
     firebase init hosting
     firebase deploy
     ```
   - **Netlify/Vercel**: Drag `build` folder or connect GitHub repo
   - **GitHub Pages**: Use `gh-pages` package

3. **PWA Installation**: Users can install the app from browser after visiting the deployed URL.

## Making it a Full PWA
- Ensure HTTPS on production
- Register service worker (built-in with CRA)
- Test with Lighthouse (Chrome DevTools)

## Troubleshooting
- **Firebase errors**: Check `src/firebase.js` config and Authentication rules
- **Routing issues**: Verify React Router setup in `App.js`
- **PWA not installing**: Check manifest.json and service worker registration
- **Build fails**: Delete `node_modules` and `package-lock.json`, then `npm install`

## Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is open-source and available under the MIT License.

---

**Built with ❤️ using React + Firebase + PWA**


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
