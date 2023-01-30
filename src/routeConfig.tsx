import { Home } from "./routes/home";
import { Login } from "./routes/login";
import { PageOne } from "./routes/page-1";
import { Root } from "./routes/root";

export const routerConfig = [
  { path: "/", element: <Root /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/page-one", element: <PageOne /> },
];
