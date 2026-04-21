CREATE TABLE t_p95358707_data_insight_analyti.products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  image_url TEXT,
  buy_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO t_p95358707_data_insight_analyti.products (name, description, category, price, image_url, buy_url) VALUES
('Городская карта — Мегаполис', 'Огромный современный город с небоскрёбами, дорогами и деталями. Идеально для RP-игр.', 'map', 299, NULL, '#'),
('Карта «Остров выживания»', 'Тропический остров с джунглями, пещерами и секретными зонами для survival-игр.', 'map', 249, NULL, '#'),
('Карта «Военная база»', 'Детализированная военная база с бункерами, техникой и укреплениями.', 'map', 349, NULL, '#'),
('Пак машин (20 моделей)', 'Спорткары, внедорожники, грузовики — полностью готовые к использованию модели.', 'model', 199, NULL, '#'),
('Персонажи — Воины (10 шт)', 'Набор боевых персонажей с анимациями и кастомизацией.', 'model', 279, NULL, '#'),
('Пак зданий — Средневековье', 'Замки, башни, домики и крепостные стены для фэнтези-миров.', 'model', 229, NULL, '#');
