export const signup = async (req, res) => {

  const { fullName, email, password } = req.body;

  const name = typeof fullName === "string" ? fullName.trim() : "";
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  const pass = typeof password === "string" ? password : "";


  try {
    if (!name || !normalizedEmail || !pass) {
      return res.status(400).json({ message: "Please provide all the required fields" });
    }

    if (pass.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const existingUser = await User.findOne({ normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pass, salt);

    const newUser = await User.create({
      name,
      normalizedEmail,
      password: hashedPassword,
      profilePic: "",
    });

    generateToken(newUser._id, res);

    res.status(201).json({
      user: {
        _id: newUser._id,
        fullName: newUser.name,
        email: newUser.normalizedEmail,
        profilePic: newUser.profilePic,
      },
    });

      await sendWelcomeEmail(newUser.email, newUser.fullName, ENV.CLIENT_URL);
   
  } catch (error) {
    console.error("Error in signup controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }

};