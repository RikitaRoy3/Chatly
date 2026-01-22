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


export const getMessagesByUserId = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: loggedInUserId, receiverId: userId },
        { senderId: userId, receiverId: loggedInUserId },
      ],
    });
    res.status(200).json(messages);
  }
  catch (error) {
    console.log("Error in getMessagesByUserId controller:", error);
    res.status(500).json({ message: " Error in getMessagesByUserId controller only.." });
  }
}


export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("getUserById error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

