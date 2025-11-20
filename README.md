# l3ui Monorepo

The development repository for the **l3ui** component library.

**Live Documentation:** [https://3ui.vercel.app](https://3ui.vercel.app)

## Project Structure

This monorepo is managed with [pnpm](https://pnpm.io/) and contains:

- **`packages/ui`**: The source code for the `l3ui` npm package.
- **`app/docs`**: The documentation website (built with React 19 + Vite).

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Run the documentation site locally:**

   ```bash
   pnpm dev
   ```

   This will start the docs app at `http://localhost:5173`.
   Changes made to `packages/ui` will be reflected instantly thanks to Vite aliases.

3. **Build the package:**
   ```bash
   pnpm build
   ```

## Contributing

1. Make changes in `packages/ui`.
2. Test your changes in the `app/docs` playground.
3. Ensure the build passes before committing.
