<template>
    <div>
        <form @submit.prevent="addCar">
            <div class="form-row">
                <div class="col">
                    <input v-model="newCar.brand" type="text" class="form-control" placeholder="Car Brand"
                           pattern=".{2,}" required title="2 characters minimum">
                </div>
                <div class="col">
                    <input v-model="newCar.model" type="text" class="form-control" placeholder="Car Model"
                           pattern=".{2,}" required title="2 characters minimum">
                </div>
                <div class="col">
                    <label>Year</label>
                    <select v-model="newCar.year" class="form-control" required>
                        <option v-for="(year,key) in years" :key="key" selected>{{ year}}.</option>
                    </select>
                </div>
                <div class="col">
                    <input v-model="newCar.maxSpeed" type="number" class="form-control" placeholder="max speed">
                </div>
                <div class="col">
                    <input v-model="newCar.numberOfDoors" type="number" class="form-control"
                           placeholder="Number of doors" required>
                </div>

                <div class="col">
                    <input v-model="newCar.isAutomatic" class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                        is the shifter automatic
                    </label>
                </div>

                <h5>Select type of engine</h5>
                <div class="col">
                    <input v-model="newCar.engine" class="form-check-input" type="radio" name="exampleRadios"
                           value="diesel">
                    <label class="form-check-label">
                        diesel
                    </label>
                    <div class="col">
                        <input v-model="newCar.engine" class="form-check-input" type="radio" name="exampleRadios"
                               value="electric">
                        <label class="form-check-label">
                            electric
                        </label>
                    </div>
                    <div class="col">
                        <input v-model="newCar.engine" class="form-check-input" type="radio" name="exampleRadios"
                               value="petrol">
                        <label class="form-check-label">
                            petrol
                        </label>
                    </div>

                </div>
            </div>

            <button type="submit">Submit the pritties form in the world</button>
            <button type="reset">reset</button>
            <button type="button" @click="alert">alert</button>
        </form>
    </div>
</template>

<script>

    import {carsServices} from '../services/CarsServices';

    export default {
        name: "AddCar",

        created() {
            if (this.$route.params.id) {

                carsServices.get(this.$route.params.id)
                    .then((response) => {

                        this.newCar = response.data

                    })

            }

        },


        data() {

            return {

                years: [1990, 1991, 1992, 1993],

                newCar: {


                    brand: '',
                    engine: '',
                    isAutomatic: '',
                    maxSpeed: '',
                    model: '',
                    numberOfDoors: '',
                    year: '',
                }


            }


        },

        methods: {

            addCar() {


                carsServices.add(this.newCar)

                this.$router.push('cars');

            },

            alert() {


                alert(JSON.stringify(this.newCar))


            }


        }

    }
</script>

<style scoped>

</style>