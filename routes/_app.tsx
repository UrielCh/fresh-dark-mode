import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
function global_dark(change) {
  if (change === 'auto') delete localStorage.theme; else if (change === 'on') localStorage.theme = 'dark'; else if (change === 'off') localStorage.theme = 'light';
  window.isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
}
global_dark();`,
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
