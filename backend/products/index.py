import os
import json
import psycopg2
import psycopg2.extras


def handler(event: dict, context) -> dict:
    """Возвращает список товаров из каталога (карты и модели Roblox)."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    category = (event.get('queryStringParameters') or {}).get('category', None)

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

    schema = 't_p95358707_data_insight_analyti'
    if category:
        cur.execute(
            f"SELECT id, name, description, category, price, image_url, buy_url FROM {schema}.products WHERE category = %s ORDER BY id",
            (category,)
        )
    else:
        cur.execute(f"SELECT id, name, description, category, price, image_url, buy_url FROM {schema}.products ORDER BY id")

    rows = cur.fetchall()
    cur.close()
    conn.close()

    products = []
    for row in rows:
        products.append({
            'id': row['id'],
            'name': row['name'],
            'description': row['description'],
            'category': row['category'],
            'price': float(row['price']),
            'image_url': row['image_url'],
            'buy_url': row['buy_url'],
        })

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'products': products}, ensure_ascii=False)
    }
