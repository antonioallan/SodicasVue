<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <router-link :to="{ name : 'home' }">
                        <div class="title">
                            <span class="icon has-text-primary">
                                <i class="fa fa-hashtag"></i>
                            </span>
                            SóDicas
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <router-link :to="{ name : 'login' }">
                    <span class="icon">
                        <i class="fa fa-user"></i>
                    </span>
                    Login
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
