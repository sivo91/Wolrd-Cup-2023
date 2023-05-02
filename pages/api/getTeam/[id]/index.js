import db from "@/utils/db";
import Team from '@/modules/Team'


const Handler = async (req, res) => {

  const id = req.body.id
  console.log(id)

  /* await db.connect();
  const team = await Team.findById(req.query.id);
  console.log(team)
  await db.disconnect(); */
  
  //res.status(200).send(team);
  res.status(200).send('ok')
};

export default Handler