UPDATE t_p95358707_data_insight_analyti.products
SET image_url = CASE id
  WHEN 1 THEN 'https://cdn.poehali.dev/projects/3b53f7f3-28c4-4fcf-ad2c-01d082db1775/files/906c0549-196c-406c-8c1c-1ae30d2d8dbf.jpg'
  WHEN 2 THEN 'https://cdn.poehali.dev/projects/3b53f7f3-28c4-4fcf-ad2c-01d082db1775/files/906c0549-196c-406c-8c1c-1ae30d2d8dbf.jpg'
  WHEN 3 THEN 'https://cdn.poehali.dev/projects/3b53f7f3-28c4-4fcf-ad2c-01d082db1775/files/906c0549-196c-406c-8c1c-1ae30d2d8dbf.jpg'
  WHEN 4 THEN 'https://cdn.poehali.dev/projects/3b53f7f3-28c4-4fcf-ad2c-01d082db1775/files/7f7b6bf3-76bb-4d7c-80b8-5ce3f5479262.jpg'
  WHEN 5 THEN 'https://cdn.poehali.dev/projects/3b53f7f3-28c4-4fcf-ad2c-01d082db1775/files/7f7b6bf3-76bb-4d7c-80b8-5ce3f5479262.jpg'
  WHEN 6 THEN 'https://cdn.poehali.dev/projects/3b53f7f3-28c4-4fcf-ad2c-01d082db1775/files/1dd9dbef-cabc-41d5-8814-99cefd37cded.jpg'
END;
