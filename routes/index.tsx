import { Head } from "$fresh/runtime.ts";
import DarkMode from "../islands/DarkMode.tsx";

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
        <DarkMode start={3} />
      </div>
    </>
  );
}
