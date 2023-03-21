import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "Error to storing DB",
    });
  }
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({
        status: "201",
        message: "Delete successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error to deleting",
      });
    }
  }
};

export default handler;
