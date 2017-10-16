import Vue from 'vue';
import show from '../../events/modal/show'
Vue.directive('modal', {
    bind(el, binding, vnode) {
        let current = 0;
        el.addEventListener('click', function () {
            if (binding.arg || binding.arg == 'show') {
                show.$emit('showModal', binding.value.modal)
            } 
            
            if (binding.arg == 'hide') {
                show.$emit('hideModal', binding.value.modal)
            }
        });
    }
})