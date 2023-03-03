<template>
  <main>
    <div class="header">
      <h3>Categories</h3>
      <!-- <button class="btn btn-primary" @click="showModal = true">
        <i class="pi pi-plus me-1"></i>
        New Notification
      </button> -->
    </div>
    <div class="mt-3">
      <DataTable
        :value="categories"
        responsiveLayout="scroll"
        :paginator="true"
        :alwaysShowPaginator="false"
        :rows="numRows"
        :resizableColumns="true"
        v-model:filters="filters"
        columnResizeMode="expand"
        removableSort
        dataKey="id"
      >
        <template #header>
          <div class="row justify-content-between">
            <div class="col-3">
              <div class="d-flex align-items-center">
                <p class="text-start m-0 me-2">Show</p>
                <select class="form-select" v-model="numRows" style="width: 80px">
                  <option :value="10">10</option>
                  <option :value="20">20</option>
                  <option :value="50">50</option>
                </select>
                <p class="text-start m-0 ms-2">records</p>
              </div>
            </div>
            <div class="col-4">
              <input type="text" class="form-control" placeholder="Search" v-model="filters['global'].value" />
            </div>
          </div>
        </template>
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Category name" sortable></Column>
        <Column header="Created At" sortable>
          <template #body="{ data }">
            {{ formatDate(data.created_at) }}
          </template></Column>
      </DataTable>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue';
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { useDatatable } from '@/hooks/useDatatable';
import { categoryService } from '@/services/category.service';

export default {
  components: { DataTable, Column },
  setup() {
    const categories = ref([])
    const { numRows, filters } = useDatatable()
    
    onMounted(() => {
      fetchCategories()
    })

    const fetchCategories = async () => {
      categories.value = await categoryService.fetchAll()
    }

    const formatDate = (date) => {
      const newDate = new Date(date)
      const year = newDate.getFullYear()
      const month = newDate.getMonth() + 1 < 10 ? '0' + newDate.getMonth() + 1 : newDate.getMonth() + 1 
      const day = newDate.getDate() + 1 < 10 ? '0' + newDate.getDate() : newDate.getDate() 
      const hour = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()
      const minutes = newDate.getMinutes()

      return day + '/' + month + '/' + year + ' - ' + hour + ':' + minutes
    }

    return {
      formatDate,
      categories,
      numRows, filters
    }
  },
}

</script>