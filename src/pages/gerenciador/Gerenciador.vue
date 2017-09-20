<template>
    <div class="columns">
        <div class="column is-3">
            <div class="box">
                <div class="content is-half">
                    <avatar :alterar="true" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from '../../componets/shared/avatar/Avatar.vue'
export default {
    components: {
        'avatar': Avatar
    }
}
</script>
