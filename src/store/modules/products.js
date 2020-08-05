const state={
    products:[
        {
            id:1,
            type:"Type2",
            name:"Product1",
            rate:"$3",
            stock:"In Stock",
            img:require("../../assets/mob1.jpeg")
        },
        {
            id:2,
            type:"Type1",
            name:"Product1",
            rate:"$4",
            stock:"Out of stock",
            img:require("../../assets/mob.jpg")
        },
        {
            id:3,
            type:"Type1",
            name:"Product2",
            rate:"$5",
            stock:"In stock",
            img:require("../../assets/mob3.jpeg")
        },
        {
            id:4,
            type:"Type2",
            name:"Product2",
            rate:"$4",
            stock:"New arrival",
            img:require("../../assets/mob1.jpeg")
        },
        {
            id:5,
            type:"Type2",
            name:"Product3",
            rate:"$3",
            stock:"In stock",
            img:require("../../assets/mob.jpg")
        },
        {
            id:6,
            type:"Type1",
            name:"Product3",
            rate:"$6",
            stock:"In stock",
            img:require("../../assets/mob2.webp")
        },
        {
            id:7,
            type:"Type2",
            name:"Product4",
            rate:"$2",
            stock:"In stock",
            img:require("../../assets/mob2.webp")
        },
        {
            id:8,
            type:"Type1",
            name:"Product4",
            rate:"$3",
            stock:"In stock",
            img:require("../../assets/mob.jpg")
        },
        {
            id:9,
            type:"Type8",
            name:"Product1",
            rate:"$5",
            stock:"In stock",
            img:require("../../assets/mob1.jpeg")
        },
        {
            id:10,
            type:"Type7",
            name:"Product1",
            rate:"$4",
            stock:"In stock",
            img:require("../../assets/mob.jpg")
        },
        {
            id:11,
            type:"Type2",
            name:"Product5",
            rate:"$4",
            stock:"Out of stock",
            img:require("../../assets/mob.jpg")
        },
        {
            id:12,
            type:"Type6",
            name:"Product1",
            rate:"$4",
            stock:"New arrival",
            img:require("../../assets/mob3.jpeg")
        },
        {
            id:13,
            type:"Type4",
            name:"Product1",
            rate:"$5",
            stock:"In Stock",
            img:require("../../assets/mob.jpg")
        },
        {
            id:14,
            type:"Type5",
            name:"Product1",
            rate:"$6",
            stock:"New arrival",
            img:require("../../assets/mob3.jpeg")
        },
        {
            id:15,
            type:"Type3",
            name:"Product1",
            rate:"$6",
            stock:"New arrival",
            img:require("../../assets/mob1.jpeg")

        }

    ]
}

const getters={
    allProducts:(state)=>state.products

}

const actions={
    async searchProductType({commit},type){
        commit('searchType',type)
    },
    
}

const mutations={
    searchType:(state,type)=>state.products=state.products.filter(product=>product.type==type)

}

export default{
    state,
    getters,
    actions,
    mutations
    

}
