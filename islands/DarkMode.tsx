import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  GrActions,
  GrMoon,
  GrSystem,
} from "https://deno.land/x/react_icons@0.2.3/gr/mod.ts";

interface DarkModeProps {
  prev: "light" | "dark" | "system";
}

export default function DarkMode(props: DarkModeProps) {
  /**
   * Used to format mode as text in screen
   */
  function getMode(): "light" | "dark" | "system" {
    if (!IS_BROWSER) {
      return props.prev;
    }
    if (localStorage.theme === "dark") {
      return "dark";
    }
    if (localStorage.theme) {
      return "light";
    }
    return "system";
  }

  function updateMode() {
    const w = (window as unknown as { isDark: boolean });
    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
  }

  const [mode, setMode] = useState(getMode());

  const setDarkModeOn = () => {
    localStorage.theme = "dark";
    updateMode();
    setMode("dark");
  };

  const setDarkModeAuto = () => {
    delete localStorage.theme;
    updateMode();
    setMode("system");
  };

  const setDarkModeOff = () => {
    localStorage.theme = "light";
    updateMode();
    setMode("light");
  };

  return (
    <div class="flex gap-2 w-full">
      <Button onClick={setDarkModeOn}>
        <GrMoon />
        Force Dark
      </Button>

      <Button onClick={setDarkModeAuto}>
        <GrSystem />
        System
      </Button>

      <Button onClick={setDarkModeOff}>
        <GrActions />
        Force light
      </Button>
      <div>
        Current Mode: <b class="text-3xl">{mode}</b>
      </div>
    </div>
  );
}
