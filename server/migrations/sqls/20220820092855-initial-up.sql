CREATE TABLE questions
(
    id SERIAL PRIMARY KEY,
    value text NOT NULL
);

CREATE TABLE answers
(
    id SERIAL PRIMARY KEY,
    value text NOT NULL,
	question_id INT REFERENCES questions (id) ON DELETE CASCADE
);

CREATE TABLE votes
(
    id SERIAL PRIMARY KEY,
    question_id INT REFERENCES questions (id) ON DELETE CASCADE,
	client_id TEXT NOT NULL
);

CREATE TABLE votes_answers
(
	id SERIAL PRIMARY KEY,
	vote_id INT REFERENCES votes (id),
	answer_id INT REFERENCES answers (id)
);
