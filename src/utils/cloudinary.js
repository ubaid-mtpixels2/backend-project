import { v2 as cloudinary} from "cloudinary";
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file hogayi upload 
        console.log("File uploaded successfully on cloudinary", response);
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath) // incase of error uploading on clouydinary remove the file from the server
return null
    }
}

export {uploadOnCloudinary}