import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cleaning-services')({
  component: () => <div>Hello /cleaning-services!</div>
})