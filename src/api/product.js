import {AxiosMockRequest, MockCreated} from "../Mock";
import data from "../Mock/Product/product.json"

MockCreated.onGet("/product").reply(200,{
    products:data
})

MockCreated.onDelete(/\/product\/\d+/).reply(function (config) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve([200, {message: "success"}])
            }, 2000)
        })
    }
)

export const productApi = AxiosMockRequest.get("/product")
export const productDeleteApi = (id) => AxiosMockRequest.delete(`/product/${id}`)
