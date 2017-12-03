<template>
    <li class="nav-item">
        <router-link class="nav-link" :to="{ name : to }">
            <i v-if="hasIcon" :class="icon"></i> {{ label }}
        </router-link>
    </li>
</template>
<script>
export default {
    props :{
        to: {
            required : true,
            type: String
        },
        hasIcon : {
            type: Boolean
        },
        icon : {
            type : String
        },
        label: {
            required : true,
            type: String
        }
        
    }
  
}
</script>

