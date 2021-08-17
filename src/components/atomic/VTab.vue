<template>
    <div v-show='isActive'>
        <slot></slot>
    </div>
<!--    <div style='border-bottom: 2px solid #eaeaea'>-->
<!--        <ul class='flex cursor-pointer'>-->
<!--            <li class='py-2 px-6 bg-white rounded-t-lg'>Personal</li>-->
<!--            <li class='py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200'>Akun</li>-->
<!--            <li class='py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200'>Pengaturan</li>-->
<!--        </ul>-->
<!--    </div>-->
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'VTab'
        }
    },
    data () {
        return {
            isActive: true
        }
    }
}
</script>

<style lang="css">

</style>
