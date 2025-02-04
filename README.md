# Dashxboard — @dashxboard/db

From ideas to actions. The **unofficial** platform designed for the **Stronghold (SHx)** community.

**[Website](https://dashxboard.com)** • **[Discord](https://discord.gg/eJhzDbKbdj)** • **[GitHub](https://github.com/dashxboard)**

## Overview

**@dashxboard/db** handles database connections and migrations for the **Dashxboard** platform.

## Installation

Include this package as a dependency in the `package.json` files for the `@dashxboard/web` and `@dashxboard/bot` repositories:

```bash
"dependencies": {
    "@dashxboard/db": "git+https://${GITHUB_TOKEN}:x-oauth-basic@github.com/dashxboard/dashxboard-db.git#main"
  }
```

## Usage

Import the database as a standalone package:

```typescript
import { db } from "@dashxboard/db";
```

## Scripts

- `npm run build` — Compiles the package.
- `npm run migrate` — Executes database migrations.
- `npm run migrate: down` — Rolls back the last migration.
- `npm run migrate:list` — Displays a list of all migrations.

## Contributing

Dashxboard is open-source, and contributions are welcome! You can help by:

- Submitting pull requests.
- Reporting bugs or suggesting features.
- Enhancing the documentation.
- Engaging with the community on Discord.

## License

This project is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
