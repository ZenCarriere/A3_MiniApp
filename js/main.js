const myVM =(() => {
    let vue_vm = new Vue({
        el: "#app",
        data:{
        },

        //this is the mounted lifecycle hook, vue is done creating itself and has attached to the app div
        mounted: function(){
            console.log("Vue is down to clown BABY");
        },

        updated: function(){
            console.log('vue just updated the DOM!')
        },

        methods: {
        }

    }).$mount("#app");
})();