CREATE TABLE questions
(
    id bigint NOT NULL,
    value text NOT NULL,
    CONSTRAINT questions_pkey PRIMARY KEY (id)
);

CREATE TABLE answers
(
    id INT NOT NULL,
    answer INT,
    type VARCHAR,
    CONSTRAINT answers_pkey PRIMARY KEY (id)
);

CREATE TABLE question_answer
(
    id INT NOT NULL,
    question_id INT NOT NULL,
    answer_id INT NOT NULL,
    CONSTRAINT question_id_fk FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE,
    CONSTRAINT answer_id_fk FOREIGN KEY (answer_id) REFERENCES answers(id) ON DELETE CASCADE
);

CREATE TABLE votes
(
    id INT NOT NULL,
    question_id INT NOT NULL,
    CONSTRAINT votes_pkey PRIMARY KEY (id)
);

CREATE TABLE votes_answer
(
    id INT NOT NULL,
    vote_id INT NOT NULL,
    answer_id INT NOT NULL,
    CONSTRAINT vote_id_fk FOREIGN KEY (vote_id) REFERENCES votes (id) ON DELETE CASCADE,
    CONSTRAINT answer_id_fk FOREIGN KEY (answer_id) REFERENCES answers(id) ON DELETE CASCADE
);
