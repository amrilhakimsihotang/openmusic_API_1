
exports.up = pgm => {pgm.createTable('songs',{
    id: { type: 'VARCHAR(50)',primaryKey: true},
    title: { type: 'TEXT',notNull: true},
    year: {type: 'INT',notNull: true},
    performer: {type: 'TEXT',notNull: true},
    genre: {type: 'TEXT',notNull: true},
    duration: { type: 'INT',notNull: true},
    insertedat: {type: 'TEXT',notNull: true},
    updatedat: {type: 'TEXT',notNull: true}
});

};

exports.down = pgm => {
    pgm.dropTable('songs');
};