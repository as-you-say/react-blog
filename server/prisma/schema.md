# Generator

```
generator client {
  provider = "prisma-client-js"
}
```

# Datasource

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

# Scheme - User

```
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String?
  name      String?
}
```
