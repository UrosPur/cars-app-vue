<template>
    <div>

        <form @submit.prevent="addCar">
            <div class="form-group row">
                <label for="text" class="col-4 col-form-label">Car Brand</label>
                <div class="col-8">
                    <input v-model="newCar.brand" id="text" name="text" placeholder="Car brand" type="text" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="carmodel" class="col-4 col-form-label">Car Model</label>
                <div class="col-8">
                    <input v-model="newCar.model" id="carmodel" name="carmodel" placeholder="car model" type="text" class="form-control here">
                </div>
            </div>

            <div class="form-group row">
                <label for="select" class="col-4 col-form-label">Year Manufactured</label>
                <div class="col-8">
                    <select v-model="newCar.year"  id="select" name="select" class="custom-select" aria-describedby="selectHelpBlock">
                        <option v-for="(year,key) in years" :key="key" selected>{{ year}}.</option>
                    </select>
                    <span id="selectHelpBlock" class="form-text text-muted">Select year of production</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="maxspeed" class="col-4 col-form-label">Max Speed</label>
                <div class="col-8">
                    <input v-model="newCar.maxSpeed" id="maxspeed" name="maxspeed" placeholder="max speed" type="text" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="numberofdoors" class="col-4 col-form-label">Number of doors</label>
                <div class="col-8">
                    <input v-model="newCar.numberOfDoors" id="numberofdoors" name="maxspeed" placeholder="number of doors" type="number" class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Is the car automatic</label>
                <div class="col-8">
                    <label class="custom-control custom-checkbox">
                        <input v-model="newCar.isAutomatic" name="checkbox" type="checkbox" class="custom-control-input" value="true">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"></span>
                    </label>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4">Select type of engine</label>
                <div class="col-8">
                    <label class="custom-control custom-radio">
                        <input v-model="newCar.engine" name="radio" type="radio" class="custom-control-input" value="electric">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">electric</span>
                    </label>
                    <label class="custom-control custom-radio">
                        <input v-model="newCar.engine" name="radio" type="radio" class="custom-control-input" value="diesel">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">diesel</span>
                    </label>
                    <label class="custom-control custom-radio">
                        <input v-model="newCar.engine" name="radio" type="radio" class="custom-control-input" value="petrol">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">petrol</span>
                    </label>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                    <button name="reset" type="reset" class="btn btn-danger">Reset</button>
                    <button name="button" @click="alert" class="btn btn-secondary">alert</button>
                </div>
            </div>
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

                years: Array(29).fill(1990).map((n, i) => n + i),

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


                if(this.$route.params.id){


                    carsServices.edit(this.newCar)
                this.$router.push('/cars');

                }else{

                carsServices.add(this.newCar)

                this.$router.push('/cars');


                }


            },

            alert() {


                alert(JSON.stringify(this.newCar))


            }


        }

    }
</script>

<style scoped>

</style>