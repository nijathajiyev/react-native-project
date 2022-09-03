import {AxiosMockRequest, MockCreated} from "../Mock";
import data from "../Mock/Restaurants/restaurant.json"

MockCreated.onGet("/restaurant").reply(200,{
    restaurants:data
})

MockCreated.onDelete(/\/restaurant\/\d+/).reply(function (config) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve([200, {message: "success"}])
            }, 2000)
        })
    }
)

export const restaurantApi = AxiosMockRequest.get("/restaurant")
export const restaurantDeleteApi = (id) => AxiosMockRequest.delete(`/restaurant/${id}`)
