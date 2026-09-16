import ImageKit from "@imagekit/nodejs";
const ImagekitClient = new ImageKit({
  privateKey: process.env.PRIVATE_KEY, // This is the default and can be omitted
});
async function uploadFile(file) {
  const result = await ImagekitClient.files.upload({
    file,

    fileName: "musci_" + Date.now(),
    folder: "yt-complete backend /musci",
  });
return result  
}
export default uploadFile