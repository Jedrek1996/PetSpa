Deployed on: https://kkpetspa.netlify.app/
Work in Progress. Not optimized for smaller screens yet.

src/: This is where your application source code resides.

components/: Reusable UI components that are used across different parts of the application.
Example: Button.tsx, Header.tsx, Modal.tsx

pages/: Top-level components representing different pages or major sections of your application.
Example: Home.tsx, Dashboard.tsx, Profile.tsx

assets/: Static assets like images, fonts, and stylesheets.
utils/: Utility functions that can be used across the application.
Example: api.ts, helpers.ts

contexts/ (optional): React Context providers if using Context API for state management.
Example: ThemeContext.tsx, UserContext.tsx

hooks/ (optional): Custom React hooks used across components for sharing logic.
Example: useFetch.ts, useForm.ts

services/ (optional): Modules for interacting with external services or APIs.
Example: userService.ts, analyticsService.ts

styles/ (optional): Global styles or theme-related files.
Example: global.css, theme.ts

routes/ (optional): Configuration and management of application routing.
Example: AppRouter.tsx, routes.tsx

tests/ (optional): Test files for components, utilities, or other modules.
Example: Button.test.tsx, utils.test.ts

Color Palette

#91DDCF (Green)
#F7F9F2 (Light Beige)
#E8C5E5 (Light Pink)
#F19ED2 (Pink)

sm: - Small screens and up (min-width: 640px)
md: - Medium screens and up (min-width: 768px)
lg: - Large screens and up (min-width: 1024px)
xl: - Extra large screens and up (min-width: 1280px)
2xl: - 2x extra large screens and up (min-width: 1536px)
