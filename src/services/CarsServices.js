import axios from 'axios'

export default class CarsServices{


    getAll(){

       return  axios.get('http://localhost:3000/api/cars')

    }


}




export const carsServices = new CarsServices();