import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";



export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const senderId = req.user._id;
    const { userId: receiverId } = req.params;

    if (!text && !image) {
      return res.status(400).json({ message: "Text or image is required." });
    }

    let img_url;
    if (image) {
      const upload = await cloudinary.uploader.upload(image);
      img_url = upload.secure_url;
    }

    const message = await Message.create({
      senderId,
      receiverId,
      text,
      image: img_url,
    });

    res.status(201).json(message);
  } catch (error) {
    console.error("sendMessage error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};

