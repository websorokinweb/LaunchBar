<template>
  <div class="admin-actions">
    <router-link class="admin-actions__btn btn btn--yellow btn-clear"
    v-if="!isAddProjectPage"
    to="/admin/add"
    >
      Add
    </router-link>
    <router-link class="admin-actions__btn btn btn--blue btn-clear"
    v-if="isProjectPage"
    :to='{name: "ProjectEdit", params:{ project: $router.currentRoute.value.params.project }}'
    >
      Edit
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    isProjectPage() {
      return this.$router.currentRoute.value.name === 'Project'
    },
    isAddProjectPage(){
      return this.$router.currentRoute.value.name === 'ProjectEdit'
    }
  },
}
</script>