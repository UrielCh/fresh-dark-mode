import {
  GrActions,
  GrMoon,
  GrSystem,
} from "https://deno.land/x/react_icons@0.2.3/gr/mod.ts";

/**
 * pure browser side dark mode javascript switcher
 * @param props
 * @returns
 */
export default function DarkMode() {
  return (
    <div class="flex gap-12 w-full">
      <a href="javascript:global_dark('on');">
        <GrMoon />
        Force Dark
      </a>

      <a href="javascript:global_dark('auto');">
        <GrSystem />
        System
      </a>

      <a href="javascript:global_dark('off');">
        <GrActions />
        Force light
      </a>
    </div>
  );
}
