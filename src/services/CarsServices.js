import axios from 'axios'


export default class CarsServices{

    constructor(){

        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }


    getAll(){

       return  axios.get('cars')

    }

    add(value){

        value.numberOfDoors=parseInt(value.numberOfDoors)
        value.year=parseInt(value.year)
        value.maxSpeed=parseInt(value.maxSpeed)

        console.log(value)


        // console.log(value.id)


        return axios.post('cars',value)
    }


}




export const carsServices = new CarsServices();