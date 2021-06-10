<template>
    <div>
        <h1>Categories </h1>
        <h4>Select a category below to start</h4>
        <CategoryList/>
    </div>
</template>
<script>
import CategoryList from '@/components/CategoryList'

export default {
    name: 'categories',
    components: {
        CategoryList
    }
}
</script>