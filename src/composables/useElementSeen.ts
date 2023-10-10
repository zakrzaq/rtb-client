import { ref, onMounted, onUnmounted, Ref } from "vue";

export const useElementSeen = (targetElement: Ref<HTMLElement | null>) => {
  const elementSeen = ref(false)

  const handleScroll = () => {
    if (targetElement.value) {
      const rect = targetElement.value.getBoundingClientRect();

      if (
        rect.top >= 0 &&
        rect.top <= window.innerHeight
      ) {
        elementSeen.value = true;
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { elementSeen }
}
