import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/$id')({
  loader: async ({ params }) => {console.log(params)},
  component: () => <div>Hello /test/$id!</div>,
  notFoundComponent: () => {
    return <p>This setting page doesn't exist!</p>
  },
})