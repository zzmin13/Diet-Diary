class ImageUploader {
  constructor() {
    this.CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    this.URL = `https://api.cloudinary.com/v1_1/${this.CLOUDNAME}/image/upload`;
  }
  async uploadImage(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "xbb9nwgu");
    const response = await fetch(this.URL, {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    return result.url;
  }
}
export default ImageUploader;
