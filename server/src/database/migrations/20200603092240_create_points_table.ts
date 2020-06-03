import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('whatsapp', 255).notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city', 255).notNullable();
        table.string('uf', 2).notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('points');
}

