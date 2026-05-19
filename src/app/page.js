import Main from "./components/Main";
import { organizationSchema } from "./lib/schema.js";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Main />
    </>
  );
}