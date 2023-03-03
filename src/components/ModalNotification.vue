<template>
  <Dialog
    v-model:visible="show"
    :modal="true"
    position="center"
    :style="{width: '550px'}"
    @hide="closeModal"
    :header="'New Notification'"
  >
    <div class="modal-body">
      <form action="" @submit.prevent="() => {}">
        <div class="form-group">
          <label for="">Category</label>
          <Dropdown 
            :options="categories"
            v-model="notification.category" 
            optionLabel="name" 
            placeholder="Select a category" />
          <small v-if="showCategoryError">Category can't be empty</small>
        </div>
        <div class="form-group">
          <label for="">Message</label>
          <textarea class="form-control" v-model="notification.message"></textarea>
          <small v-if="showMessageError">Message can't be empty</small>
        </div>
      </form>
    </div>
    <template #footer>
      <button class="btn btn-primary" @click="sendNotification">
        <i class="pi pi-send"></i>
        <span class="ms-1">
          Send
        </span>
      </button>
    </template>
  </Dialog>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog'
import { onMounted, ref, watch } from 'vue';
import { categoryService } from '@/services/category.service'
import { notificationService } from '@/services/notification.service';

export default {
  components: {
    Dialog,
    Dropdown
  },
  props: {
    showModal: Boolean
  },
  emits: ['closeModal', 'notificationsSent'],
  setup ( props, {emit}) {
    const categories = ref()
    const notification = ref({
      category: null,
      message: null
    })
    const show = ref(false)
    const showCategoryError = ref(false)
    const showMessageError = ref(false)

    onMounted(() => {
      fetchCategories()
    })

    const fetchCategories = async () => {
      categories.value = await categoryService.fetchAll()
    }
    const sendNotification = async () => {
      if(!validateForm()){
        return
      }

      try {
        const resp = await notificationService.store(notification.value.category.id, { message: notification.value.message })
        closeModal()
        emit('notificationsSent', resp)
      } catch (error) {
        console.log(error);
      }
    }

    const validateForm = () => {
      if(notification.value.category !== null) {
        if(notification.value.message !== null && notification.value.message !== '') {
          showCategoryError.value = false
          showMessageError.value = false
          return true
        }else {
          showMessageError.value = true
        }
      }else {
        showCategoryError.value = true
      }
      return false
    }

    const closeModal = () => {
      emit('closeModal')
      show.value = false
    }

    watch(props, () => {
      show.value = props.showModal
    })

    return {
      sendNotification,
      closeModal,
      categories,
      notification,
      show,
      showCategoryError,
      showMessageError
    }
  }
}
</script>