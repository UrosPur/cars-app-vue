<template>
    <div>

        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">brand</th>
                <th scope="col">model</th>
                <th scope="col">engine</th>
                <th scope="col">is automatic</th>
                <th scope="col">max speed</th>
                <th scope="col">number of doors</th>
                <th scope="col">year of production</th>
                <th scope="col">action</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(car,key) in cars" :key="key">
                <th>{{ car.id }}</th>
                <th>{{ car.brand }}</th>
                <th>{{ car.model }}</th>
                <th>{{ car.engine }}</th>
                <th>{{ car.isAutomatic}}</th>
                <th>{{ car.maxSpeed }}</th>
                <th>{{ car.numberOfDoors}}</th>
                <th>{{ car.year}}</th>
                <th>
                    <router-link :to="{ name: 'edit', params: { id: car.id}}" class="btn btn-primary">Edit</router-link>
                </th>
                <th>
                    <button name="button" class="btn btn-danger" @click="removeCar(car.id)">delete</button>
                </th>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>

    import {carsServices} from '../services/CarsServices';


    export default {
        name: "AppCars",

        created() {

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

            },

            removeCar(id) {



                if (confirm('Are you sure')) {
                    alert('Thanks for confirming');
                    carsServices.remove(id)
                        .then((response) => {

                          this.getAll()

                        })

                } else {
                    alert('No Car has been deleted');
                    return
                }


            }

        },
    }
</script>

<style scoped>

</style>