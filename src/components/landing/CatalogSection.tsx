import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface Product {
  id: number
  name: string
  description: string
  category: string
  price: number
  image_url: string | null
  buy_url: string | null
}

interface CatalogSectionProps {
  isActive: boolean
}

const PRODUCTS_URL = 'https://functions.poehali.dev/d063174b-42b7-40f3-8f61-3239220fbe79'

export default function CatalogSection({ isActive }: CatalogSectionProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [filter, setFilter] = useState<'all' | 'map' | 'model'>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then(r => r.json())
      .then(data => {
        const parsed = typeof data === 'string' ? JSON.parse(data) : data
        setProducts(parsed.products || [])
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter)

  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Каталог</h2>
        <div className="flex gap-3 mt-4">
          {(['all', 'map', 'model'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filter === f
                  ? 'bg-[#FF4D00] border-[#FF4D00] text-black'
                  : 'border-gray-600 text-gray-400 hover:border-[#FF4D00] hover:text-[#FF4D00]'
              }`}
            >
              {f === 'all' ? 'Все' : f === 'map' ? 'Карты' : 'Модели'}
            </button>
          ))}
        </div>
      </motion.div>

      {loading ? (
        <div className="flex items-center gap-2 text-gray-400">
          <Icon name="Loader2" size={20} className="animate-spin" />
          <span>Загружаем каталог...</span>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[55vh] pr-2"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#FF4D00]/50 transition-colors group"
            >
              {product.image_url && (
                <div className="h-36 overflow-hidden">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-white font-semibold text-sm leading-tight">{product.name}</span>
                  <Badge variant="outline" className="text-[#FF4D00] border-[#FF4D00]/50 text-xs shrink-0">
                    {product.category === 'map' ? 'Карта' : 'Модель'}
                  </Badge>
                </div>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{product.price} ₽</span>
                  <Button
                    size="sm"
                    className="bg-[#FF4D00] hover:bg-[#ff6a2a] text-black text-xs h-7 px-3"
                    onClick={() => product.buy_url && product.buy_url !== '#' && window.open(product.buy_url, '_blank')}
                  >
                    Купить
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  )
}
