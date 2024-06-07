import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/floor-care')({
  component: () => <div>Hello /floor-care!</div>
})