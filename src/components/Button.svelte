<script lang="ts">
  import type { ButtonVariants } from "./button.css";
  import { button as buttonClasses } from "./button.css";
  import { createEventDispatcher } from "svelte";
  /**
   * Is this the principal call to action on the page?
   */
  // export let primary = false;

  export let rounded = false;

  /**
   * What background color to use
   */
  export let backgroundColor: ButtonVariants["color"] = "accent";
  /**
   * How large should the button be?
   */
  export let size: ButtonVariants["size"] = "medium";
  /**
   * Button contents
   */
  export let label = "";

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<button
  type="button"
  class="${buttonClasses({
    color: backgroundColor,
    size,
    rounded,
  })}"
  on:click={onClick}
>
  {label}
</button>
