'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_blogs', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.TEXT,
      },
      sub_tilte: {
        type: Sequelize.TEXT,
      },
      slug: {
        type: Sequelize.STRING,
      },
      meta: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
      },
      upVote: {
        type: Sequelize.INT,
      },
      downVote: {
        type: Sequelize.INT,
      },
      averageVote: {
        type: Sequelize.float,
      },
      readCount: {
        type: Sequelize.INT,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_blogs');
  }
};
