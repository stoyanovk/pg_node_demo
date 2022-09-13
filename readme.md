exports.up = function (db) {
db.createTable('questions', {
id: idSettings,
value: 'text'
})

// db.createTable('answers', {
// id: idSettings,
// value: 'int',
// type: 'string'
// })

// db.createTable('question_answers', {
// id: idSettings,
// question_id: getForeignKey('questions'),
// answer_variant_id: getForeignKey('answers')
// })

// db.createTable('votes', {
// id: idSettings,
// question_id: getForeignKey('questions'),
// comment: 'string'
// })

// db.createTable('vote_answer', {
// id: idSettings,
// vote_id: getForeignKey('votes'),
// answer_variant_id: getForeignKey('answers')
// })
}

exports.down = function (db) {
db.dropTable('questions')
}

-- CREATE TABLE "Answer" (
-- id INT NOT NULL,
-- answer INT,
-- type VARCHAR,
-- PRIMARY KEY ("id"),
-- );

-- CREATE TABLE "Question_answer" (
-- id INT NOT NULL,
-- question_id INT NOT NULL,
-- answer_id INT NOT NULL,
-- FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE CASCADE,
-- FOREIGN KEY ("answer_id") REFERENCES "Answer"("id") ON DELETE CASCADE,
-- );

-- CREATE TABLE "Votes" (
-- id INT NOT NULL,
-- comment TEXT,
-- question_id INT NOT NULL,
-- PRIMARY KEY ("id"),
-- FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE CASCADE,
-- );

-- CREATE TABLE "Vote_answer" (
-- id INT NOT NULL,
-- answer_id INT NOT NULL,
-- vote_id INT NOT NULL,
-- PRIMARY KEY ("id"),
-- FOREIGN KEY ("answer_id") REFERENCES "Answer"("id") ON DELETE CASCADE,
-- FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE CASCADE,
-- );
