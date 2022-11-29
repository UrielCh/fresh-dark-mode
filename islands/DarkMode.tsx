import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import IconSun from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/sun.tsx";
import IconSunglasses from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/sunglasses.tsx";
import IconMoon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/moon.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  start: number;
}

export default function DarkMode(props: CounterProps) {
  function getMode(): "light" | "dark" | "auto" {
    if (!IS_BROWSER) {
      return "auto";
    }
    if (localStorage.theme === "dark") {
      return "dark";
    }
    if (localStorage.theme) {
      return "light";
    }
    return "auto";
  }

  function updateMode() {
    (window as unknown as { isDark: boolean }).isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList
      [(window as unknown as { isDark: boolean }).isDark ? "add" : "remove"](
        "dark",
      );
  }

  const [mode, setMode] = useState(getMode());

  return (
    <div class="flex gap-2 w-full">
      <Button
        onClick={() => {
          localStorage.theme = "dark";
          updateMode();
          setMode("dark");
        }}
      >
        <IconMoon />
        Force Dark
      </Button>

      <Button
        onClick={() => {
          delete localStorage.theme;
          updateMode();
          setMode("auto");
        }}
      >
        <IconSunglasses />
        Auto
      </Button>

      <Button
        onClick={() => {
          localStorage.theme = "light";
          updateMode();
          setMode("light");
        }}
      >
        <IconSun />
        Force light
      </Button>
      <div>
        Current Mode: <b class="text-3xl">{mode}</b>
      </div>
    </div>
  );
}
