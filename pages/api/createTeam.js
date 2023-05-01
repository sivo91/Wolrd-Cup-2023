
import db from "@/utils/db";
import Utulok from "@/modules/Team";


const handler = async (req, res) => {

  await db.connect();
  const newTeam = new Utulok({
     ...req.body,
  });

  const team = await newTeam.save();

  await db.disconnect();
  res.send({ message: 'Product created successfully', team });

};

export default handler