import { Sequelize } from "sequelize";

const ConectarBD = new Sequelize('bdcitas','root','',{

host:'localhost',
dialect:'mysql',
})

export default ConectarBD;