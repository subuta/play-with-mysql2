import * as mysql from 'mysql2/promise'

const main = async () => {
  console.log('start')
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'password', database: 'mysql_local' });
  console.log(typeof connection)

  const res = await connection.ping()
  console.log('res ', res)

  const res2 = await connection.execute('SELECT 1')
  console.log('res2 ', res2)

  console.log('end')
}

main()
