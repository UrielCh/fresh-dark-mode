import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

/**
 * Darkmode function in typescript, will be transpile as js for the browser
 * @param change pass the new mode as on off or autu
 */
const darkModefnc = function global_dark(change?: "on" | "off" | "auto") {
  if (change === "auto") delete localStorage.theme;
  else if (change === "on") localStorage.theme = "dark";
  else if (change === "off") localStorage.theme = "light";
  const isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && globalThis.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  document.dispatchEvent(new Event("dark"));
  document.cookie = `dark=${isDark ? 1 : 0}; path=/`;
};
const codeDark = (darkModefnc.toString() + "global_dark();").replace(";\n", "\n");

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: codeDark,
          }}
        />
      </Head>
      <body class={`bg(gray-100 dark:gray-800) dark:text-gray-100`}>
        <main class="container mx-auto p-4">
          <Component />
        </main>
      </body>
    </html>
  );
}
