import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Naveen",
    lastName: "chandar",
    username: "naveenchandar",
    password: "naveen123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Nandhini",
    lastName: "devi",
    username: "cristi",
    password: "cr7123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Praveen",
    lastName: "Kumar",
    username: "praveenkumar",
    password: "praveen123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Naresh",
    lastName: "Kumar",
    username: "nareshkumar",
    password: "cr7123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
