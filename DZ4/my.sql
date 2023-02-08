-- create
CREATE TABLE class_gb (
  empId INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INT DEFAULT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO class_gb (name, age, address) VALUES ('Ира', '18', 'Москва');
INSERT INTO class_gb (name, age, address) VALUES ('Степан', '29', 'Казань');
INSERT INTO class_gb (name, age, address) VALUES ('Антон', '30', 'Москва');
INSERT INTO class_gb (name, age, address) VALUES ('Света', '45', 'Москва');
INSERT INTO class_gb (name, age, address) VALUES ('Ольга', '23', 'Москва');
INSERT INTO class_gb (name, age, address) VALUES ('Иван', '38', 'Брянск');

-- fetch 
SELECT name AS 'имя' FROM class_gb WHERE address = 'Москва' AND age >=18 AND age <30;