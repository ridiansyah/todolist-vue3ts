import { computed, onMounted, onUnmounted, ref } from "vue";

const useBreakpoints = () => {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const breakpoint = computed(() => {
    if (windowWidth.value < 425) {
      return "sm";
    }
    if (windowWidth.value < 992) {
      return "md";
    }
    return "lg";
  });

  const width = computed(() => windowWidth.value);

  return { width, breakpoint };
};

export default useBreakpoints;
