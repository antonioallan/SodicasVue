import Vue from 'vue';
import message from '../../events/message/message'
Vue.directive('message', {
    bind(el, binding, vnode) {
        let current = 0;
        el.addEventListener('click', function () {

            if (binding.arg || binding.arg == 'show') {    
                show.$emit('show', { message : binding.value} )
            } 
            
            if (binding.arg == 'hide') {
                show.$emit('hide')
            }
        });
    }
})