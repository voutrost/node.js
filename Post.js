import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    pageCount: {type: Number},
    publishedDate: {type: String},
    thumbnailUrl: {type: String},
    shortDescription: {type: String},
    longDescription: {type: String},
    status: {type: String},
    authors: {type: Array}
})

export default mongoose.model('Post', Post)