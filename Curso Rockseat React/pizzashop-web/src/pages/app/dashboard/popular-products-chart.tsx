import { getPopularProducts } from '@/api/get-popular-products'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useQuery } from '@tanstack/react-query'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

// interface PopularProductsChart {}

const chartConfig = {
  produtos: {
    label: 'produto',
  },
  Pepperoni: {
    label: 'Pepperoni',
    color: 'hsl(var(--chart-1))',
  },
  Mussarela: {
    label: 'Mussarela',
    color: 'hsl(var(--chart-2))',
  },
  Marguerita: {
    label: 'Marguerita',
    color: 'hsl(var(--chart-3))',
  },
  '4 Queijos': {
    label: '4 Queijos',
    color: 'hsl(var(--chart-4))',
  },
  Calabresa: {
    label: 'Calabresa',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })

  return (
    <>
      <Card className="col-span-3">
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">
              Produtos populares
            </CardTitle>
            <CardDescription>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {popularProducts ? (
            <ResponsiveContainer width="100%" height={240}>
              <ChartContainer config={chartConfig}>
                <PieChart style={{ fontSize: '12px' }} accessibilityLayer>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />

                  <Pie
                    data={popularProducts}
                    dataKey="amount"
                    nameKey="product"
                    cx="50%"
                    cy="50%"
                    outerRadius={86}
                    innerRadius={64}
                    strokeWidth={8}
                    stroke=""
                    labelLine={false}
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      value,
                      index,
                    }) => {
                      const RADIAN = Math.PI / 180
                      const radius =
                        12 + innerRadius + (outerRadius - innerRadius)
                      const x = cx + radius * Math.cos(-midAngle * RADIAN)
                      const y = cy + radius * Math.sin(-midAngle * RADIAN)

                      return (
                        <text
                          x={x}
                          y={y}
                          className="fill-muted-foreground text-xs"
                          textAnchor={x > cx ? 'start' : 'end'}
                          dominantBaseline="central"
                        >
                          {popularProducts[index].product.length > 12
                            ? popularProducts[index].product
                                .substring(0, 12)
                                .concat('...')
                            : popularProducts[index].product}{' '}
                          ({value})
                        </text>
                      )
                    }}
                  >
                    {popularProducts.map((_, index) => {
                      return (
                        <Cell
                          className="stroke-background hover:opacity-80"
                          key={`cell-${index}`}
                          fill={COLORS[index]}
                        />
                      )
                    })}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-[240px] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
