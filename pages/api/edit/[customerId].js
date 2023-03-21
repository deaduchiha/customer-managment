import Customer from "@/models/Customer";
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
    return;
  }

  if (req.method === "PATCH") {
    const id = req.query.customerId; //take id from query
    const data = req.body.data; //take data from body (front)

    console.log(data);

    try {
      const customer = await Customer.findOne({ _id: id }); //find the one have same id as _id
      //   change all data
      customer.firstName = data.firstName;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();

      customer.save();

      res.status(200).json({
        status: "success",
        data: customer,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error retrieving data from DB ",
      });
    }
  }
};

export default handler;
