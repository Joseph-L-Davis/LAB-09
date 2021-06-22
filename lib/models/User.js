import pool from '../utils/pool';

export default class User {
    id;
    name;
    email;

    constructor(row) {
      this.id = row.id;
      this.name = row.name;
      this.email = row.email;
    }

    static async insert({ name, email }) {
      const { rows } = await pool.query(
        `INSERT INTO users (name, email)
            VALUES ($1, $2)
            RETURNING *`,
        [name, email]
      );
      return new User(rows[0]);
    }

    static async findById(id) {
      const { rows } = await pool.query(
        `SELECT * FROM users
            WHERE id = $1`,
        [id]
      );
      return new User(rows[0]);
    }

    static async findAllUsers() {
      const { rows } = await pool.query(
        'SELECT * FROM users'
      );
      return rows.map(user => new User(user));
    }

    static async updateUser(id, { name, email }) {
      const { rows } = await pool.query(
        `UPDATE users
            SET name = $1, email = $2
            WHERE id =$3
            RETURNING *`,
        [name, email, id]
      );
      return new User(rows[0]);
    }

    static async deleteUser(id) {
      const { rows } = await pool.query(
        `DELETE FROM users
        WHERE id = $1
        RETURNING *`,
        [id]
      );
      return new User(rows[0]);
    }
}
