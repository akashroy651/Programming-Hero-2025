"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// const {  collections, dbConnect } = require("@/lib/dbConnect");
// const { ObjectId } = require("mongodb");



export const getProducts = async () => {
    const products = await dbConnect(collections.PRODUCTS).find().toArray();
    return products;
}


export const getSingleProduct = async (id) => {
    if (id.length != 24) {
    // if (!id || !ObjectId.isValid(id))
        return {}
    }

    const query = {_id: new ObjectId(id) };

    const product = await dbConnect(collections.PRODUCTS).findOne(query)

    return { ...product, _id: product._id.toString()} || {};




    //     return {
//     ...product,
//     _id: product._id.toString(), // ✅ plain object
//   };
}

