import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "error in connecting to DB",
    });
  }
};

export default handler;
