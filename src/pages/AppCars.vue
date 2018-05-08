<template>
    <div>

        <ul v-for="(car,key) in cars" :key="key">

                <li>{{ car.id }}</li>
                <li>{{ car.brand }}</li>
                <li>{{ car.engine }}</li>
                <li>{{ car.isAutomatic}}</li>
                <li>{{ car.maxSpeed }}</li>
                <li>{{ car.model }}</li>
                <li>{{ car.numberOfDoors}}</li>
                <li>{{ car.year}}</li>

        </ul>



    </div>
</template>

<script>

    import {carsServices} from '../services/CarsServices';


    export default {
        name: "AppCars",

        created(){

            this.getAll()

        },


        data() {
            return {

                cars: []

            }


        },

        methods: {

            getAll() {


                carsServices.getAll()

                    .then((response) => {



                       this.cars = response.data

                    })


                //
                //
                // }


            }


        },
        // created() {
        //
        //     carsServices.getAll()
        //         .then((response) => {
        //
        //
        //             console.log(response)
        //
        //         })
        // },
    }
</script>

<style scoped>

</style>