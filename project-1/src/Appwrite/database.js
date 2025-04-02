import config from "../config/config";
import { Client, Databases , Storage , ID, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwrite)
            .setProject(config.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    } 

    async createpost({title , slug , content ,  feauturdImage , status , userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title ,
                    content,
                    feauturdImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createpost :: error" , error);
        }
    }

    async updatepost(slug , {title ,content ,  feauturdImage , status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title ,
                    status,
                    feauturdImage,
                    status,
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error" , error);
        }
    }

    async deletepost(slug){
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletepost :: error" , error);
            return false
        }

    }

    async getpost(slug){
        try {
            await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getpost :: error" , error);
        }
    }

    

    // tto use the query make sure in database indexing must be done 
    async getposts(queries = [Query.equal("equal" , "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getposts :: error" , error);
        }
    }


    // file upload services 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucektId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error" , error);
        }
    }

    async deletefile(fileId){
        try {
            return await this.bucket.deletefile(
                config.appwriteBucektId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletefile :: error" , error);
            return false 
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucektId,
            fileId
        )
    }

}

const service = new Service();

export default service

