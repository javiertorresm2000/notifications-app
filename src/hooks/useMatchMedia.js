import { onUnmounted, onMounted } from 'vue'

export function useMatchMedia(maxWidthInPixels, listener = isUnderSize => (isUnderSize)) {
  var x = window.matchMedia(`(max-width: ${maxWidthInPixels}px)`)
  function isMatch() {
    listener(x.matches)
  }
  isMatch()

  onMounted(() => x.addEventListener('change', isMatch))
  onUnmounted(() => x.removeEventListener('change', isMatch))
}
