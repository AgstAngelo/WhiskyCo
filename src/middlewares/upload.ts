// import dotenv from "dotenv";
// import { GridFsStorage } from "multer-gridfs-storage";

// dotenv.config();

// const mongoUrl = process.env.MONGO_URL ?? '';

// const storage = new GridFsStorage({
//     url: mongoUrl,
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (req, file) => {
//         const match = ["image/png", "image/jpeg"];
      
//         if (match.indexOf(file.mimetype) === -1) {
//           const filename = `${Date.now()}-any-name-${file.originalname}`;
//           return filename;
//         }

//         return {
//             bucketName: "picture",
//             filename: `${Date.now()}-any-name-${file.originalname}`,
//           };
//     },
// });

// export default storage;
