const mercadopago = require("mercadopago")
const {MPTOKEN}=process.env
mercadopago.configure({
    access_token:MPTOKEN
})

const getPay = async (req,res) =>{
    let hola = "hola"
   res.status(200).send({hola})
}
const createPay = async (req,res) =>{
    let preference = {
        items: [
            {
                title:"donación",
                description:"donación de caridad para multiples fines (Droga)",
                unit_price:200,
                quantity:1
            }
        ],
      
        binary_mode: true
    }
    try {
        mercadopago.preferences.create(preference)
        .then(function(response){
            res.status(200).send({init_point:response.response.init_point,id:response.body.id})
   
        }).catch(function(error){res.status(400).send({message:error})})
        
    } catch (error) {
        console.log({message: error})
    }
    console.log("post")


}


module.exports = {
    getPay,
    createPay
}