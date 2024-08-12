# Cypress Testing with GitHub Actions and Cypress Dashboard

This project is configured to run end-to-end tests using Cypress, with the test results being recorded on the Cypress Dashboard. The pipeline is triggered by pushes to the `main` branch and by pull requests targeting `main`.

## Project Setup

### 1. Install Dependencies

Ensure you have Node.js installed, then install the project dependencies:

```bash
npm install
```

### 2. Cypress Dashboard Setup

1. **Create a Cypress Dashboard Account:**

   - Sign up at [Cypress Dashboard](https://dashboard.cypress.io/).

2. **Create a New Project:**

   - After logging in, create a new project and note the `Project ID`.

3. **Generate a Record Key:**
   - Navigate to the project settings in Cypress Dashboard and generate a `Record Key`. This will be used to upload test results from GitHub Actions.

### 3. GitHub Actions Setup

The project is preconfigured with a GitHub Actions workflow that runs Cypress tests and uploads results to the Cypress Dashboard.

#### 3.1 Secrets Configuration

1. **Add the `CYPRESS_RECORD_KEY` to GitHub Secrets:**
   - Go to your GitHub repository.
   - Navigate to `Settings > Secrets and variables > Actions`.
   - Add a new secret called `CYPRESS_RECORD_KEY` with the value of the record key you generated in Cypress Dashboard.

### 4. Cypress Configuration

The Cypress configuration is defined in `cypress.config.ts`:

```typescript
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Update this to your application's baseUrl
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      // Add event listeners or plugins here
    },
  },
  env: {
    // Add environment variables if needed
  },
});
```

### 5. Running Tests Locally

To run Cypress tests locally, use the following command:

```bash
npm run test
```

This will open the Cypress Test Runner, allowing you to run tests interactively.

To run tests in the terminal:

```bash
npm run test:terminal
```

### 6. Viewing Test Results

After the pipeline runs, you can view the test results:

1. **In GitHub Actions:**

   - Navigate to the "Actions" tab in your GitHub repository to view the workflow run details.

2. **On Cypress Dashboard:**
   - Visit your project on [Cypress Dashboard](https://dashboard.cypress.io/) to see detailed reports and video recordings of the test runs.
