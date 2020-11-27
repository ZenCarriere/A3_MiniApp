import { fetchData } from "./components/DataMiner.js";


const myVM =(() => {

    let vue_vm = new Vue({
        data:{
            removeAformat: true,
            showCarData: false,
            minis: [],
            currentCarData: {}
        },

        mounted: function(){
            console.log("Vue is ready to go");

            fetchData("./includes/index.php")
            .then(data => {
                data.forEach(mini => this.minis.push(mini));
                })
            .catch(err => console.log(err));
        },

        updated: function(){
            console.log('vue just updated the DOM!')
        },

        methods: {

            showMiniData(target){
                console.log('clicked to see data from', target, target.model);

                this.showCarData = this.showCarData ? false:true;

                this.currentCarData = target;
            }
        }

    }).$mount("#app");
})();