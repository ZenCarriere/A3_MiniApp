export default{
    model: "TheMiniCard",
    props: ["mini"],

    data: function(){
        return{
            myimage: this.mini.image,
            mymodel: this.mini.model,
            myprice: this.mini.price,
            mydesc: this.mini.description,
            currentCarData: {}
        }
    },

        template: `<li>
        <img :src="'images/' + mini.image" :alt='mini.model + "image" '>
        <p>{{ mini.model }}</p>
        <a href="" class="show-car" @click.prevent="showMiniData(mini)"">More info</a>
      </li> `,
    //   <a href="" class="remove-prof">Show {{prof.name}}'s info</a>

        created: function() {
            console.log(`created ${this.mini.model}'s card`);
        },

        methods: {

            showMiniData(target){
                console.log(`fired from inside ${this.mini.model}'s the component!`);

                this.mini.showCarData = this.mini.showCarData ? false:true;

                this.mini.currentCarData = target;
            }
        }
}