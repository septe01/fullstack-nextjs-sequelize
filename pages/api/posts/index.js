// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }
// export default function handler(req, res) {
//   res.status(200).json({ name: "Septe" });
// }

import nextConnect from "next-connect";
const db = require("../db/models");
db.sequelize.sync();
const Users = db.users;
const Orders = db.orders;
const Trains = db.trains;
const Tickets = db.tickets;
const Tutorials = db.tutorial;
const Tags = db.tag;

// const models = require("../db/models");
// const Orders = models.orders;
// const Users = models.users;
// const Tickets = models.tickets;
// const Trains = models.trains;

const handler = nextConnect().get(async (req, res) => {
  const {
    query: { nextPage },
    method,
    body,
  } = req;

  // console.log("---db", db);
  // console.log("---Users", User);

  // const orders = await Orders.findAll({
  //   order: [["id", "DESC"]],
  //   attributes: [
  //     "id",
  //     "qty",
  //     "total_price",
  //     "status",
  //     "attachment",
  //     "createdAt",
  //     "updatedAt",
  //   ],
  //   include: [
  //     {
  //       model: Users,
  //       attributes: [
  //         "id",
  //         "name",
  //         "user_name",
  //         "email",
  //         "password",
  //         "gender",
  //         "phone",
  //         "address",
  //       ],
  //     },
  //     {
  //       model: Tickets,
  //       attributes: [
  //         "id",
  //         "name_train",
  //         "date_start",
  //         "start_station",
  //         "start_time",
  //         "destination_station",
  //         "arival_time",
  //         "price",
  //       ],
  //       include: [{ model: Trains, attributes: ["type_train"] }],
  //     },
  //   ],
  // });

  // console.log("---posts", posts);

  // console.log("await models.posts****", await models);

  res.json({
    status: "success",
    // orders,
    data: await Users.findAll({ limit: 10 }),
    // Tags: await Tags.findAll({
    //   include: [
    //     {
    //       model: Tutorials,
    //       as: "tutorials",
    //       attributes: ["id", "title", "description"],
    //       through: {
    //         attributes: [],
    //       },
    //     },
    //   ],
    // }),
    Orders: await Orders.findAll({
      include: [
        {
          model: Users,
          // as: "tutorials",
          // attributes: ["id", "title", "description"],
          // through: {
          //   attributes: [],
          // },
        },
      ],
    }),
    // total: posts.count,
    // nextPage: +nextPage + 5,
  });
});

export default handler;
