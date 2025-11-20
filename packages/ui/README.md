# l3ui

A modern, accessible React component library with TypeScript support.

[![npm version](https://img.shields.io/npm/v/l3ui.svg)](https://www.npmjs.com/package/l3ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 **Modern**: Built with React 18+ and TypeScript.
- 🎨 **Beautiful**: Pre-styled components with a premium feel.
- 🌙 **Dark Mode**: Native dark mode support.
- 📦 **Zero Config**: Styles are injected automatically - no extra CSS imports needed.
- 🧩 **Tree Shakeable**: Import only what you need.

## Installation

```bash
npm install l3ui
# or
pnpm add l3ui
# or
yarn add l3ui
```

## Usage

### Basic Example

```tsx
import { Button } from "l3ui";

function App() {
  return (
    <Button variant="primary" onClick={() => alert("Clicked!")}>
      Hello World
    </Button>
  );
}
```

### Using Hooks

```tsx
import { useCopyToClipboard, Button } from "l3ui";

function CopyButton() {
  const { copy, isCopied } = useCopyToClipboard();

  return (
    <Button onClick={() => copy("Hello!")}>
      {isCopied ? "Copied!" : "Copy Text"}
    </Button>
  );
}
```

## Documentation

For full documentation, component examples, and API references, visit our [Documentation Site](https://3ui.vercel.app).

## License

MIT © [Bishal Babu Bohara](https://github.com/BabuBishal)
