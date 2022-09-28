<template>
<div>
    <AdminNav/>
    <router-view></router-view>

</div>
  
</template>

<script>


import AdminNav from '@/components/admin/AdminNav.vue';
export default {
    name: "Admin",
    components: { AdminNav }
}
</script>

<style>

</style>