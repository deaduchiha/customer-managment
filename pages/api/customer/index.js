import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "Error in connecting to DB",
    });
    return;
  }

  //   method: POST
  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.firstName || !data.lastName || !data.email)
      return res.status(400).json({
        status: "failed",
        message: "invalid data",
      });
    try {
      const customer = await Customer.create(data);
      res.status(201).json({
        status: "success",
        message: "Data created ",
        data: customer,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in storing data in database ",
      });
    }
  }
  // End of POST
};

export default handler;
