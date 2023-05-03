/* import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  
  await db.connect();

  let team = await Team.findById(req.query.id).lean().exec();


  const vote = team.game1



 // await Team.findByIdAndUpdate(req.query.id, { $set: team }).exec();


  const x = await Team.findById(req.query.id);

  x.game1 = vote + 1

  console.log(x.game1)

  await x.save()


  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler */


import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  
  //console.log(req.body)

  await db.connect();


  const team = await Team.findById(req.query.id);

  console.log(team)
  
  team.vote += 1

  await team.save()

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler