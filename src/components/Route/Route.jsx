import { useRouter } from "../../hooks";

export function Route({ path, component: Component }) {
  const { currentPath } = useRouter();

  if (path === "*") {
    const otherRoutes = ["/", "/search"];
    if (!otherRoutes.includes(currentPath)) {
      // return <Component />;
      return <Component />;
    }
    return null;
  }

  if (currentPath !== path) return null;
  return <Component />;
}
