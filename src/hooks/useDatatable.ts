import { ref } from 'vue'
import { FilterMatchMode } from 'primevue/api'

export function useDatatable() {
  const loading = ref(false)
  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })
  const dt = ref()
  const numRows = ref(10)
  const empty = ref(false)

  return { loading, filters, numRows, dt, empty }
}
