import Main from "./components/Main";
import { serviceSchema } from "./lib/schema.js";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Main />
    </>
  );
}