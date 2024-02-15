import { LayoutFileMap, Layouts } from '@/layouts'
import { type RouteLocationNormalized } from 'vue-router'

export async function layoutMiddleware(route: RouteLocationNormalized): Promise<void> {
  const layoutName = (route.meta?.layout as Layouts) ?? Layouts.default
  const fileName = LayoutFileMap[layoutName]
  const component = await import(`../layouts/${fileName}.vue`)
  route.meta.layoutComponent = component.default
}
