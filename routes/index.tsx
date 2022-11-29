import { Head } from "$fresh/runtime.ts";
import DarkMode from "../islands/DarkMode.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          This to `fresh` page show how to use Dark mode.
        </p>
        <p class="my-6">
          <a
            href="https://github.com/UrielCh/fresh-dark-mode"
            class="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <IconBrandGithub /> Source
          </a>
        </p>
        <DarkMode start={3} />
      </div>
    </>
  );
}
